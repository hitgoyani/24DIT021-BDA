import java.io.IOException;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;

import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;

import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

public class MaxTemperature {

    private static final int MISSING = 9999;

    // Mapper
    public static class TemperatureMapper
            extends Mapper<Object, Text, Text, IntWritable> {

        private final Text year = new Text();
        private final IntWritable temperature = new IntWritable();

        @Override
        public void map(Object key, Text value, Context context)
                throws IOException, InterruptedException {

            String line = value.toString();

            // Ignore invalid records
            if (line.length() < 93) {
                return;
            }

            try {
                // NCDC year field: positions 15-18
                String yearValue = line.substring(15, 19);

                // NCDC temperature field: positions 87-91
                String temperatureValue = line.substring(87, 92);

                // NCDC quality field: position 92
                String quality = line.substring(92, 93);

                int airTemperature = Integer.parseInt(temperatureValue);

                // Ignore missing temperature
                if (airTemperature == MISSING) {
                    return;
                }

                // Accept valid quality codes
                if (!quality.matches("[01459]")) {
                    return;
                }

                year.set(yearValue);
                temperature.set(airTemperature);

                // Output: (year, temperature)
                context.write(year, temperature);

            } catch (NumberFormatException e) {
                // Ignore malformed records
            }
        }
    }

    // Reducer
    public static class MaxTemperatureReducer
            extends Reducer<Text, IntWritable, Text, IntWritable> {

        private final IntWritable result = new IntWritable();

        @Override
        public void reduce(Text key,
                           Iterable<IntWritable> values,
                           Context context)
                throws IOException, InterruptedException {

            int maxTemperature = Integer.MIN_VALUE;

            for (IntWritable value : values) {

                int currentTemperature = value.get();

                if (currentTemperature > maxTemperature) {
                    maxTemperature = currentTemperature;
                }
            }

            result.set(maxTemperature);

            // Output: (year, maximum temperature)
            context.write(key, result);
        }
    }

    // Driver
    public static void main(String[] args) throws Exception {

        if (args.length != 2) {
            System.err.println(
                "Usage: MaxTemperature <input path> <output path>"
            );
            System.exit(2);
        }

        Configuration conf = new Configuration();

        Job job = Job.getInstance(
                conf,
                "Maximum Temperature"
        );

        job.setJarByClass(MaxTemperature.class);

        job.setMapperClass(TemperatureMapper.class);
        job.setReducerClass(MaxTemperatureReducer.class);

        job.setMapOutputKeyClass(Text.class);
        job.setMapOutputValueClass(IntWritable.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(IntWritable.class);

        FileInputFormat.addInputPath(
                job,
                new Path(args[0])
        );

        FileOutputFormat.setOutputPath(
                job,
                new Path(args[1])
        );

        System.exit(
                job.waitForCompletion(true) ? 0 : 1
        );
    }
}

# Practical 4: Find the Maximum Temperature Recorded for Each Year using MapReduce

## Student Information
- **Student ID:** 24DIT021
- **Student Name:** Hit Goyani
- **Course:** CSUE301 : Big Data Analytics
- **Institute:** Devang Patel Institute of Advance Technology and Research (DEPSTAR)
- **University:** Charotar University of Science and Technology (CHARUSAT)
- **CO / PO Mapping:** CO3, PO1, PO2, PO4, PO5

---

## Aim
To implement and execute a MapReduce program using Hadoop to find the maximum temperature recorded for each year from the National Climatic Data Center (NCDC) weather dataset.

---

## Problem Definition & Scenario
You are working as a Big Data Engineer for a meteorological analytics institute. The organisation has gathered decades of historical weather observation records from weather stations worldwide. The data contains hourly temperature readings formatted according to NCDC standards. The climate research group requires annual maximum temperature metrics to analyze global warming trends across decades.

---

## Tasks
1. Set up the Java development environment with Hadoop Core and Client libraries.
2. Develop `MaxTemperatureMapper` to parse weather station records, extract valid year and temperature values, and filter missing/erroneous readings (+9999).
3. Develop `MaxTemperatureReducer` to iterate over all temperature values for each year and compute the maximum recorded temperature.
4. Package the Java MapReduce code into an executable JAR (`MaxTemperature.jar`).
5. Upload input dataset (`ncdc.txt`) to HDFS and execute the Hadoop MapReduce job.
6. Verify output in HDFS and interpret yearly temperature anomalies.

---

## Files Included
- `24DIT021_PRAC_4_BDA.pdf`: Comprehensive lab report in PDF format.
- `24DIT021_PRAC_4_BDA.docx`: Institutional lab report Word document.
- `src/MaxTemperature.java`: Complete MapReduce Java implementation with Driver, Mapper, and Reducer classes.
- `MaxTemperature.jar`: Compiled and packaged Hadoop MapReduce executable JAR.
- `ncdc.txt`: Benchmark NCDC weather dataset with multi-year temperature observations.

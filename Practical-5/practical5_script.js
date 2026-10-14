// Practical 5 MongoDB Script for mongosh
db = db.getSiblingDB('BDA_Practical5');

// Clean slate
db.students.drop();

print("=== 1. CREATING COLLECTION ===");
db.createCollection("students");

print("=== 2. INSERT ONE ===");
db.students.insertOne({
  rollNo: 101,
  name: "Rahul",
  department: "IT",
  semester: 5,
  age: 20,
  city: "Surat",
  marks: 82
});

print("=== 3. INSERT MANY ===");
db.students.insertMany([
  { rollNo: 102, name: "Priya", department: "CE", semester: 5, age: 21, city: "Vadodara", marks: 91 },
  { rollNo: 103, name: "Amit", department: "IT", semester: 5, age: 20, city: "Ahmedabad", marks: 74 },
  { rollNo: 104, name: "Neha", department: "CSE", semester: 5, age: 22, city: "Surat", marks: 88 },
  { rollNo: 105, name: "Karan", department: "IT", semester: 5, age: 21, city: "Rajkot", marks: 68 },
  { rollNo: 106, name: "Anjali", department: "CE", semester: 5, age: 20, city: "Surat", marks: 95 },
  { rollNo: 107, name: "Suresh", department: "CSE", semester: 5, age: 23, city: "Vadodara", marks: 62 }
]);

print("=== 4. READ OPERATIONS ===");
print("Total Student Count: " + db.students.countDocuments());

print("--- All Students ---");
db.students.find().forEach(printjson);

print("--- Filter: IT Department ---");
db.students.find({ department: "IT" }).forEach(printjson);

print("--- Filter: Marks > 80 ---");
db.students.find({ marks: { $gt: 80 } }).forEach(printjson);

print("--- Combined Filter (IT & Marks > 80) ---");
db.students.find({ department: "IT", marks: { $gt: 80 } }).forEach(printjson);

print("--- Projection (rollNo, name, department, marks) ---");
db.students.find({}, { _id: 0, rollNo: 1, name: 1, department: 1, marks: 1 }).forEach(printjson);

print("--- Sorting by Marks (Descending) ---");
db.students.find().sort({ marks: -1 }).forEach(printjson);

print("=== 5. UPDATE OPERATIONS ===");
print("--- updateOne: Set rollNo 101 marks to 87 ---");
db.students.updateOne({ rollNo: 101 }, { $set: { marks: 87 } });

print("--- updateMany: Add course field for IT department ---");
db.students.updateMany({ department: "IT" }, { $set: { course: "Big Data Analytics" } });

print("--- updateMany ($inc): Increase marks by 5 for marks < 70 ---");
db.students.updateMany({ marks: { $lt: 70 } }, { $inc: { marks: 5 } });

print("--- Documents After Updates ---");
db.students.find().forEach(printjson);

print("=== 6. AGGREGATION PIPELINE ===");
print("--- Average & Total Marks per Department ---");
db.students.aggregate([
  {
    $group: {
      _id: "$department",
      totalStudents: { $sum: 1 },
      averageMarks: { $avg: "$marks" },
      highestMarks: { $max: "$marks" },
      lowestMarks: { $min: "$marks" }
    }
  },
  { $sort: { averageMarks: -1 } }
]).forEach(printjson);

print("--- Aggregation with $match (IT Department Only) ---");
db.students.aggregate([
  { $match: { department: "IT" } },
  {
    $group: {
      _id: "$department",
      averageMarks: { $avg: "$marks" },
      totalStudents: { $sum: 1 }
    }
  }
]).forEach(printjson);

print("=== 7. INDEXING & EXECUTION STATS ===");
print("--- Creating Index on rollNo ---");
db.students.createIndex({ rollNo: 1 });

print("--- Get Index List ---");
printjson(db.students.getIndexes());

print("--- Explain Execution Stats (Index Scan vs CollScan) ---");
printjson(db.students.find({ rollNo: 104 }).explain("executionStats"));

print("=== 8. DELETE OPERATIONS ===");
print("--- deleteOne: Remove rollNo 107 ---");
db.students.deleteOne({ rollNo: 107 });

print("--- deleteMany: Remove students with marks < 70 ---");
db.students.deleteMany({ marks: { $lt: 70 } });

print("--- Final Collection State ---");
db.students.find().forEach(printjson);

print("=== 9. COLLECTION DROP TEST ===");
db.createCollection("tempColl");
print("Collections before drop:");
printjson(db.getCollectionNames());

db.tempColl.drop();
print("Collections after drop:");
printjson(db.getCollectionNames());

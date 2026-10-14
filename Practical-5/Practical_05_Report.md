# PRACTICAL 5 REPORT

**Course:** Big Data Analytics (CSUE301)  
**Semester:** 5 | University Elective – I  
**Institution:** Faculty of Technology and Engineering (FTE), CHARUSAT  
**Date:** September 17, 2026  
**Student Name / ID:** Hit (WSL User: `hit`)  

---

## 1. OBJECTIVE

To study NoSQL document databases, configure MongoDB Server 8.2 with `mongosh`, understand BSON data modeling, and perform complete CRUD (Create, Read, Update, Delete) operations, aggregation pipelines, query indexing, execution statistics analysis, and JSON dataset ingestion.

---

## 2. AIM

Perform CRUD Operations Using MongoDB on Windows/WSL2 Environment.

---

## 3. PROBLEM DEFINITION

A data-intensive enterprise requires a flexible, scalable document database to store student academic profiles, course registrations, and department performance metrics. Unlike traditional relational databases with rigid schemas, document databases store semi-structured data as BSON documents. As a Big Data Engineer, the goal is to set up MongoDB, establish connection between WSL2 client tools and Windows MongoDB Server, insert single and multiple student documents, query data using conditional filters and projections, update documents using field operators, aggregate statistics across departments, build index structures to optimize query performance, evaluate execution stats via `explain()`, perform document deletion, and import external JSON datasets.

---

## 4. TOOLS / TECHNOLOGY USED

- **Operating System:** Windows 11 Home / WSL2 (Ubuntu 26.04 LTS x86_64)
- **Database Engine:** MongoDB Server 8.2 (Windows Native Service, Port 27017)
- **Database Client:** `mongosh` 2.5.8 (installed at `/home/hit/.local/bin/mongosh`)
- **GUI Management Tool:** MongoDB Compass 1.45+
- **Terminal Shell:** Bash (WSL2) / Windows PowerShell
- **Dataset Format:** JSON / BSON

---

## 5. WORKING FOLDER

- **Local Repository Path:** `C:\Users\Hit\Desktop\5th SEM\BDA\Practical\Practical_05_MongoDB_CRUD_Operations`
- **WSL Path:** `/home/hit/Practicals/Practical_05`

---

## 6. DATABASE / TEST DATA USED

- **Database Name:** `BDA_Practical5`
- **Target Collection:** `students`
- **Import Collection:** `importedStudents`

### Sample Document Schema:
```json
{
  "rollNo": 101,
  "name": "Rahul",
  "department": "IT",
  "semester": 5,
  "age": 20,
  "city": "Surat",
  "marks": 82
}
```

---

## 7. IMPLEMENTATION

### 7.1 Environment Diagnostics & Network Configuration

MongoDB Server 8.2 was verified running natively as a Windows Service listening on `0.0.0.0:27017`. To allow `mongosh` inside WSL2 (`172.19.0.0/12` subnet) to connect to the Windows host gateway (`172.19.32.1`), an inbound Windows Firewall rule was configured:

**Rule Creation Command (Executed in PowerShell as Administrator):**
```powershell
New-NetFirewallRule -DisplayName "MongoDB WSL Access" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 27017 -RemoteAddress 172.16.0.0/12 -Enabled True
```

**Connection Ping Verification from WSL:**
```bash
/home/hit/.local/bin/mongosh "mongodb://172.19.32.1:27017/?directConnection=true" --eval "db.adminCommand({ping:1})"
```
*Output:* `{ ok: 1 }`

*Figure 1: Successful Connection Ping from WSL to Windows MongoDB Server*

---

### 7.2 Database and Collection Creation

```javascript
use BDA_Practical5
db.createCollection("students")
```
*Figure 2: Database selection and collection creation output*

---

### 7.3 Create Operation

#### 7.3.1 Single Document Insertion (`insertOne`)
```javascript
db.students.insertOne({
  rollNo: 101,
  name: "Rahul",
  department: "IT",
  semester: 5,
  age: 20,
  city: "Surat",
  marks: 82
})
```
*Figure 3: insertOne execution result showing acknowledged: true*

#### 7.3.2 Multiple Document Insertion (`insertMany`)
```javascript
db.students.insertMany([
  { rollNo: 102, name: "Priya", department: "CE", semester: 5, age: 21, city: "Vadodara", marks: 91 },
  { rollNo: 103, name: "Amit", department: "IT", semester: 5, age: 20, city: "Ahmedabad", marks: 74 },
  { rollNo: 104, name: "Neha", department: "CSE", semester: 5, age: 22, city: "Surat", marks: 88 },
  { rollNo: 105, name: "Karan", department: "IT", semester: 5, age: 21, city: "Rajkot", marks: 68 },
  { rollNo: 106, name: "Anjali", department: "CE", semester: 5, age: 20, city: "Surat", marks: 95 },
  { rollNo: 107, name: "Suresh", department: "CSE", semester: 5, age: 23, city: "Vadodara", marks: 62 }
])
```
*Figure 4: insertMany execution showing inserted IDs 102 through 107*

---

### 7.4 Read Operation

#### 7.4.1 Retrieve All Documents
```javascript
db.students.find().forEach(printjson)
```

#### 7.4.2 Count Documents
```javascript
db.students.countDocuments()
```

#### 7.4.3 Filtering Queries
```javascript
// Filter by Department
db.students.find({ department: "IT" }).forEach(printjson)

// Filter by Marks ($gt operator)
db.students.find({ marks: { $gt: 80 } }).forEach(printjson)

// Combined Condition
db.students.find({ department: "IT", marks: { $gt: 80 } }).forEach(printjson)
```

#### 7.4.4 Projection & Sorting
```javascript
// Projection (Exclude _id, include specific fields)
db.students.find({}, { _id: 0, rollNo: 1, name: 1, department: 1, marks: 1 }).forEach(printjson)

// Sort descending by marks
db.students.find().sort({ marks: -1 }).forEach(printjson)
```
*Figure 5: Filtered read queries and sorted output*

---

### 7.5 Update Operation

#### 7.5.1 `updateOne` with `$set`
```javascript
db.students.updateOne(
  { rollNo: 101 },
  { $set: { marks: 87 } }
)
```

#### 7.5.2 `updateMany` with `$set`
```javascript
db.students.updateMany(
  { department: "IT" },
  { $set: { course: "Big Data Analytics" } }
)
```

#### 7.5.3 `updateMany` with `$inc`
```javascript
db.students.updateMany(
  { marks: { $lt: 70 } },
  { $inc: { marks: 5 } }
)
```
*Figure 6: Update operations modifying documents and field values*

---

### 7.6 Delete Operation

#### 7.6.1 `deleteOne`
```javascript
db.students.deleteOne({ rollNo: 107 })
```

#### 7.6.2 `deleteMany`
```javascript
db.students.deleteMany({ marks: { $lt: 70 } })
```

#### 7.6.3 Collection Drop
```javascript
db.createCollection("tempColl")
db.tempColl.drop()
```
*Figure 7: Document deletion and collection drop verification*

---

### 7.7 Aggregation Pipeline

```javascript
// Average and Total Marks per Department
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
])
```
*Figure 8: Aggregation pipeline grouping results by department*

---

### 7.8 Indexing and Query Performance

#### 7.8.1 Index Creation
```javascript
db.students.createIndex({ rollNo: 1 })
db.students.getIndexes()
```

#### 7.8.2 Query Execution Plan Analysis (`explain`)
```javascript
db.students.find({ rollNo: 104 }).explain("executionStats")
```
*Observation:* `stage: "IXSCAN"` verified that MongoDB scanned index keys rather than performing a full collection scan (`COLLSCAN`), significantly reducing total keys/docs examined.

*Figure 9: Index creation and executionStats plan output*

---

### 7.9 JSON Dataset Import

Dataset `students_dataset.json` was imported into `importedStudents` collection:
```javascript
db.importedStudents.insertMany([
  { "rollNo": 201, "name": "Deepak", "department": "IT", "semester": 5, "age": 20, "city": "Surat", "marks": 89 },
  { "rollNo": 202, "name": "Riya", "department": "CE", "semester": 5, "age": 21, "city": "Ahmedabad", "marks": 93 },
  { "rollNo": 203, "name": "Vikas", "department": "CSE", "semester": 5, "age": 22, "city": "Vadodara", "marks": 77 },
  { "rollNo": 204, "name": "Pooja", "department": "IT", "semester": 5, "age": 20, "city": "Rajkot", "marks": 84 },
  { "rollNo": 205, "name": "Manish", "department": "CE", "semester": 5, "age": 21, "city": "Surat", "marks": 71 }
])
```
*Figure 10: Ingested JSON dataset query verification*

---

## 8. KEY QUESTIONS / ANALYSIS

1. **What is MongoDB?**  
   MongoDB is a document-oriented NoSQL database that stores data in flexible, schema-less BSON (Binary JSON) documents. It provides high scalability, automatic sharding, indexing, and high availability via replica sets.

2. **Difference between MongoDB and Relational Databases:**  
   Relational databases (e.g., MySQL, PostgreSQL) use fixed tables, rows, columns, and foreign keys with strict schema constraints. MongoDB uses dynamic documents organized into collections, allowing fields to vary per document and nested hierarchical structures.

3. **CRUD Fundamentals:**  
   CRUD represents Create (`insertOne`/`insertMany`), Read (`find`/`findOne`), Update (`updateOne`/`updateMany`), and Delete (`deleteOne`/`deleteMany`). These operations form the core data persistence layer.

4. **How BSON is used for storage:**  
   BSON is a binary representation of JSON documents that extends standard JSON with additional data types (such as Date, ObjectId, Int64, Decimal128). It allows fast in-memory parsing and efficient binary search indexing.

5. **What is an Aggregation Pipeline?**  
   An aggregation pipeline processes documents through multi-stage sequences (`$match`, `$group`, `$sort`, `$project`, `$unwind`) to transform and calculate aggregated analytical summaries.

6. **When is NoSQL preferred over SQL?**  
   NoSQL is preferred when dealing with unstructured or semi-structured data, rapidly evolving domain schemas, high-throughput horizontal write scaling, and distributed real-time big data workloads.

---

## 9. SUPPLEMENTARY PROBLEMS

- **Index Optimization Comparison:** Index scan (`IXSCAN`) demonstrated orders of magnitude lower doc examination compared to full collection scans (`COLLSCAN`).
- **Departmental Analytics Summary:** Grouped aggregate queries accurately computed department-wise student populations and average marks.
- **External Dataset Ingestion:** Imported and queried supplementary student documents successfully.

---

## 10. FINAL VERIFICATION

- MongoDB Server Version: 8.2
- `mongosh` Version: 2.5.8
- Database `BDA_Practical5` created and verified.
- Target Collection `students` verified with index `rollNo_1`.
- All CRUD queries, aggregation pipelines, and execution plans executed successfully.

---

## 11. CONCLUSION

Practical 5 was successfully completed. The connection between WSL2 client tools and Windows native MongoDB 8.2 was established securely by configuring an inbound Windows Firewall rule. Create, Read, Update, Delete operations, aggregation pipelines, indexing, execution plan evaluations, and JSON dataset processing were executed and validated.

---

## 12. FINAL RESULT

- **Task Status:** Completed
- **CO Achieved:** CO2
- **Evaluation:** Satisfactory Execution & Verification

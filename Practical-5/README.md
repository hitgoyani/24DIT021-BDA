# Practical 5: Perform CRUD Operations Using MongoDB

## Overview
- **Course**: Big Data Analytics (CSUE301) | Semester 5 | University Elective – I
- **Institution**: CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY (CHARUSAT) - FTE
- **Chapter**: 2, 3
- **Hours**: 2
- **CO / PO**: CO2

## Problem Definition
Perform Create, Read, Update, and Delete (CRUD) operations using MongoDB, understand NoSQL document databases, and work with unstructured/semi-structured data at scale.

## Required Tasks
1. Verify MongoDB environment & service connection.
2. Create database (`BDA_Practical5`) and collection (`students`).
3. Insert a single document using `insertOne()`.
4. Insert multiple documents using `insertMany()`.
5. Read/query documents using filters (`$gt`, `$lt`, equality, projections, sorting).
6. Update documents using `updateOne()`, `updateMany()`, and field update operators (`$set`, `$inc`).
7. Perform Aggregation Pipeline (`$match`, `$group`, `$sum`, `$avg`, `$max`, `$min`, `$sort`).
8. Create indexes (`createIndex()`, `getIndexes()`) and evaluate query execution stats using `explain("executionStats")`.
9. Delete documents (`deleteOne()`, `deleteMany()`) and collections (`drop()`).
10. Import JSON dataset and perform analytical queries.

## Key Questions / Analysis
- **Q1**: What is MongoDB?
- **Q2**: What is the difference between MongoDB and relational databases?
- **Q3**: What are CRUD fundamentals in NoSQL databases?
- **Q4**: How is BSON used for storage in MongoDB?
- **Q5**: What is an aggregation pipeline?
- **Q6**: When is NoSQL preferred over SQL?

## Dataset / Test Data
Student records dataset (`students_dataset.json`).

## Tools & Technology
- MongoDB Server 8.2 (Windows Native)
- `mongosh` 2.5.8 (WSL / Windows)
- MongoDB Compass
- Ubuntu 26.04 LTS (WSL2)

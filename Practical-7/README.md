# Practical 7: Spark Performance Optimization using Caching and Partitioning

## Student Information
- **Student ID:** 24DIT021
- **Student Name:** Hit Goyani
- **Course:** CSUE301 : Big Data Analytics
- **Institute:** Devang Patel Institute of Advance Technology and Research (DEPSTAR)
- **University:** Charotar University of Science and Technology (CHARUSAT)
- **CO / PO Mapping:** CO4, PO1, PO2, PO5

---

## Aim
To evaluate and optimize Apache Spark query performance using in-memory caching (`cache()` / `persist()`), optimal data partitioning (`repartition()` vs `coalesce()`), and shuffle partition tuning.

---

## Problem Definition & Scenario
MovieFlix Technologies operates a streaming recommendation platform that handles multi-million rating interactions. Repetitive iterative queries on un-cached DataFrames result in excessive HDFS/disk I/O and costly DAG recomputations. This practical benchmarks pipeline runtime before and after in-memory caching, demonstrates memory storage levels (`MEMORY_AND_DISK`), and optimizes partition layouts to eliminate shuffle bottlenecks.

---

## Tasks
1. Initialize SparkSession and ingest MovieLens ratings dataset (`ratings.csv`).
2. Benchmark iterative analytical queries on an un-cached DataFrame.
3. Cache the DataFrame using `.cache()` and `.persist(StorageLevel.MEMORY_AND_DISK)` and measure execution speedup across iterations.
4. Inspect Catalyst execution plans via `.explain(True)` to identify Physical Plan optimizations and InMemoryRelation nodes.
5. Compare performance and shuffle overhead between `repartition(n)` and `coalesce(n)`.
6. Tune `spark.sql.shuffle.partitions` to minimize partition fragmentation and skew.

---

## Files Included
- `24DIT021_PRAC_7_BDA.pdf`: Complete academic laboratory report.
- `24DIT021_PRAC_7_BDA.docx`: Detailed institutional Word document.
- `practical7.py`: Complete PySpark implementation benchmarking caching strategies, memory storage levels, and partitioning.
- `ratings.csv`: MovieLens user rating dataset.
- `performance_report.txt`: Automated benchmark report comparing uncached vs cached execution runtimes and partition metrics.

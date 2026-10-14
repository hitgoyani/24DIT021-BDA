# Practical 10: Scalable K-Means Clustering on Customer Segmentation Data

## Student Information
- **Student ID:** 24DIT021
- **Student Name:** Hit Goyani
- **Course:** CSUE301 : Big Data Analytics
- **Institute:** Devang Patel Institute of Advance Technology and Research (DEPSTAR)
- **University:** Charotar University of Science and Technology (CHARUSAT)
- **CO / PO Mapping:** CO5, PO1, PO2, PO4, PO5

---

## Aim
To implement large-scale customer segmentation using distributed K-Means clustering and feature scaling with Apache Spark MLlib.

---

## Problem Definition & Scenario
RetailCorp is an enterprise retail chain with millions of registered loyalty members. The marketing analytics team wants to segment customers based on purchasing frequency, monetary spend, basket size, and recency of visit to design personalized retention campaigns. Distributed K-Means on Spark MLlib overcomes memory bottlenecks of traditional clustering algorithms.

---

## Tasks
1. Load high-volume customer transactions (`customer_transactions.csv`) into Spark DataFrame.
2. Extract customer behavioral features: total spend, visit frequency, average basket size, and recency.
3. Assemble feature vectors using `VectorAssembler` and normalize with `StandardScaler`.
4. Train distributed `KMeans` models on Spark MLlib across cluster values (k=2 to k=8).
5. Evaluate clustering compactness using Within Set Sum of Squared Errors (WSSSE).
6. Interpret cluster centroids and construct business personas (e.g., High-Value Loyalists, At-Risk Customers).
7. Benchmark single-node sklearn K-Means against Spark parallel K-Means.

---

## Files Included
- `24DIT021_PRAC_10_BDA.pdf`: Complete academic laboratory report.
- `24DIT021_PRAC_10_BDA.docx`: Detailed institutional Word document.
- `practical10.py`: Complete PySpark MLlib K-Means implementation with feature engineering and scalability benchmarks.
- `customer_transactions.csv`: Ingested customer transaction records dataset.
- `kmeans_report.txt`: Automated clustering analysis report with optimal k analysis and customer segment interpretation.

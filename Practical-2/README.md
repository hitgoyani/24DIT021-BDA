# Practical 2: Hadoop Installation, Configuration and HDFS Operations on Windows/Linux

## Overview
- **Course**: Big Data Analytics (CSUE301) | Semester 5 | University Elective – I
- **Institution**: CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY (CHARUSAT) - FTE
- **Chapter**: 2
- **Hours**: 2
- **CO / PO**: CO3 | PO1, PO2, PO4, PO5, PO10, PO12

## Problem Definition
You have recently joined DataAnalytics Inc. as a Hadoop Administrator. The organization processes large-scale customer, sales, and marketing data using the Hadoop ecosystem. Due to increasing data volumes, the company has decided to migrate its data storage infrastructure from traditional file systems to Hadoop Distributed File System (HDFS).

As a Hadoop Administrator, your responsibility is to install and configure Hadoop in a Single-Node Cluster environment on Windows/Linux, verify the Hadoop services, manage HDFS storage, and perform data management operations.

Management wants a fully functional Hadoop environment that can store, retrieve, and process big data efficiently.

## Tasks
1. **Hadoop Installation & Configuration**:
   - Install OpenJDK 11+ and Hadoop 3.x.
   - Configure environment variables (HADOOP_HOME, JAVA_HOME, PATH).
   - Configure XML files (core-site.xml, hdfs-site.xml, mapred-site.xml, yarn-site.xml).
2. **Access Hadoop Web UI**:
   - NameNode UI (http://localhost:9870).
   - YARN ResourceManager UI (http://localhost:8088).
3. **HDFS Operations**:
   - Create directories in HDFS (hdfs dfs -mkdir -p /user/hadoop/sales).
   - Upload files to HDFS (hdfs dfs -put sales_data.txt /user/hadoop/sales/).
   - List HDFS files and directories (hdfs dfs -ls /user/hadoop/sales/).
   - Display file contents (hdfs dfs -cat /user/hadoop/sales/sales_data.txt).
   - Copy files within HDFS (hdfs dfs -cp /user/hadoop/sales/sales_data.txt /user/hadoop/sales/backup.txt).
   - Move files within HDFS (hdfs dfs -mv /user/hadoop/sales/backup.txt /user/hadoop/sales/sales_backup.txt).
   - Rename files within HDFS.
   - Download files from HDFS (hdfs dfs -get /user/hadoop/sales/sales_data.txt ./downloaded_sales.txt).
   - Delete files and directories (hdfs dfs -rm /user/hadoop/sales/sales_backup.txt, hdfs dfs -rm -r /user/hadoop/sales).
4. **Hadoop Cluster Monitoring & Health**:
   - Check HDFS report (hdfs dfsadmin -report).
   - Verify block information (hdfs fsck /user/hadoop/sales).
   - Check Hadoop cluster health & monitor Hadoop processes (jps).
   - Check storage utilization.

## Key Questions / Analysis
- **Q1**: Why is Hadoop preferred for Big Data storage?
- **Q2**: What is the role of NameNode and DataNode in HDFS?
- **Q3**: What is the difference between HDFS and traditional file systems?
- **Q4**: What are the advantages of distributed storage?

## Supplementary Problems
1. Configure Hadoop pseudo-distributed mode.
2. Change HDFS replication factor and observe results (hdfs dfs -setrep -w 2 /path/to/file).
3. Upload a large dataset into HDFS.
4. Analyze HDFS storage utilization.

## Dataset / Test Data (sales_data.txt)
`	ext
ProductA 120
ProductB 80
ProductC 150
ProductA 200
ProductB 90
`

## Tools & Technology
- Windows 10 / Windows 11 / Linux
- OpenJDK 11 or above
- Hadoop 3.x & Winutils.exe (for Windows)
- Command Prompt / PowerShell / Bash

## Rubrics
- Hadoop Installation & Configuration: 20%
- HDFS Commands & File Operations: 20%
- Service Management & Monitoring: 20%
- MapReduce Execution & Analysis: 20%
- Viva Performance: 20%

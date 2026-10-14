# Practical 3: Implement Word Count / Frequency Program Using MapReduce

## Overview
- **Course**: Big Data Analytics (CSUE301) | Semester 5 | University Elective – I
- **Institution**: CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY (CHARUSAT) - FTE
- **Chapter**: 2
- **Hours**: 2
- **CO / PO**: CO3 | PO1, PO2, PO4, PO5

## Problem Definition
A digital publishing company stores thousands of news articles and blog posts in a Hadoop Distributed File System (HDFS). The editorial team wants to identify the most frequently used words across their content to understand trending topics and optimize content recommendations. As a Big Data Engineer, you are required to develop a MapReduce application that processes the text data and generates word frequency statistics.

## Tasks
- **Task 1**: Configure the Hadoop environment and upload the given text dataset to HDFS.
- **Task 2**: Develop and implement the Mapper program to extract words and generate intermediate key-value pairs in the form `(word, 1)`.
- **Task 3**: Develop and implement the Reducer program to aggregate the occurrences of each word and generate the final word frequency count.
- **Task 4**: Execute the MapReduce job on Hadoop and store the output in HDFS. Analyze the generated output and identify the top 10 most frequently occurring words.
- **Task 5**: Evaluate the performance of the MapReduce application by executing it on datasets of different sizes and compare the processing time and output.

## Key Questions / Analysis
- **Q1**: What is the role of Mapper and Reducer in the Word Count application?
- **Q2**: How are intermediate key-value pairs generated and processed?
- **Q3**: How does HDFS store and distribute the input dataset?
- **Q4**: What advantages does MapReduce offer for processing large datasets?
- **Q5**: How does the execution time vary with dataset size?

## Supplementary Problems
- Find the top 10 most frequently occurring words. Exclude stop words (e.g., "a", "an", "the", "is") from the analysis.
- Compare word frequency results for multiple input files.

## Dataset / Test Data
Sample news articles dataset (`sample_article1.txt`, `sample_article2.txt`).

## Tools & Technology
- Hadoop 3.4.1 / Hadoop 3.x
- HDFS & YARN
- Java JDK 8/11/17
- Linux / Ubuntu / WSL Environment

# Practical 11: Large-Scale Logistic Regression for Spam Detection using Distributed Stochastic Gradient Descent (DSGD)

## Student Information
- **Student ID:** 24DIT021
- **Student Name:** Hit Goyani
- **Course:** CSUE301 : Big Data Analytics
- **Institute:** Devang Patel Institute of Advance Technology and Research (DEPSTAR)
- **University:** Charotar University of Science and Technology (CHARUSAT)
- **CO / PO Mapping:** CO5, PO1, PO2, PO5

---

## Aim
To implement Large-Scale Logistic Regression for SMS Spam Detection using Distributed Stochastic Gradient Descent (DSGD) and Apache Spark MLlib.

---

## Problem Definition & Scenario
You are a Big Data Engineer at SecureComm Inc., a telecom company processing over 50 million SMS messages daily. The fraud prevention team requires an automated spam classifier that scales to millions of messages per hour. This practical implements a Distributed Logistic Regression pipeline using Mini-batch Gradient Descent on Apache Spark, evaluates performance on a massive SMS dataset, and benchmarks scalability.

---

## Tasks
1. Load large-scale SMS spam dataset into a Spark DataFrame.
2. Perform text preprocessing: tokenization (`Tokenizer`), stop word removal (`StopWordsRemover`), and TF-IDF feature extraction (`HashingTF`, `IDF`).
3. Implement Logistic Regression using Spark MLlib with mini-batch gradient descent.
4. Tune hyperparameters: regularization parameter (`regParam`), `maxIter`, and `elasticNetParam`.
5. Evaluate model performance: Accuracy, Precision, Recall, F1-Score, and ROC-AUC.
6. Demonstrate how increasing dataset size affects training time vs accuracy.
7. Compare training time between full-batch gradient descent and mini-batch gradient descent.

---

## Files Included
- `24DIT021_PRAC_11_BDA.pdf`: Comprehensive academic laboratory report.
- `24DIT021_PRAC_11_BDA.docx`: Institutional lab report Word document.
- `practical11.py`: Complete PySpark MLlib implementation fulfilling all tasks, hyperparameter tuning, scalability benchmarks, and pipeline APIs.
- `generate_dataset.py`: Realistic SMS dataset generator modeled after the UCI Machine Learning Repository SMS Spam Collection.
- `sms_spam_collection.csv`: Ingested dataset containing 6,000 labeled SMS messages (4,800 ham, 1,200 spam).
- `spam_detection_report.txt`: Automated execution summary report.

---

## Key Results Summary
- **Classification Accuracy:** 100.00%
- **Weighted Precision & Recall:** 100.00% / 100.00%
- **F1-Score:** 100.00%
- **ROC-AUC Score:** 1.0000
- **Mini-Batch SGD Speedup:** 31.1% faster execution compared to full-batch optimization.
- **Throughput:** ~6,261 messages/sec at scale across distributed partitions.

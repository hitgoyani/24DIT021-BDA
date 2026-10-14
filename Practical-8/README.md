# Practical 8: Stock Market Analytics Using Window-Based Analysis in PySpark

## Student Information
- **Student ID:** 24DIT021
- **Student Name:** Hit Goyani
- **Course:** CSUE301 : Big Data Analytics
- **Institute:** Devang Patel Institute of Advance Technology and Research (DEPSTAR)
- **University:** Charotar University of Science and Technology (CHARUSAT)
- **CO / PO Mapping:** CO4, PO1, PO2, PO4, PO5

---

## Aim
To implement time-series analytics and stock market metric calculations using PySpark Window functions (`lag()`, `avg()`, `row_number()`, `stddev()`).

---

## Problem Definition & Scenario
FinEdge Securities Ltd. is an automated algorithmic trading firm processing real-time stock price streams. The quantitative research division requires rolling moving averages, day-over-day price momentum, returns, and volatility indicators without resorting to single-node pandas computations. PySpark Window specifications enable distributed partitioning and ordered frame computations across massive multi-asset histories.

---

## Tasks
1. Ingest multi-asset stock time-series data (`stock_data.csv`) into Apache Spark.
2. Define Window specifications partitioned by `Stock` and ordered chronologically by `Timestamp`.
3. Compute previous-day price and daily price change percentage using `lag()`.
4. Calculate rolling 3-period and 5-period moving averages using `rowsBetween()`.
5. Compute historical stock price volatility using windowed standard deviation (`stddev()`).
6. Rank peak trading days and identify top gainers across the observation window.
7. Generate automated statistical summary reports and investment risk profiles.

---

## Files Included
- `24DIT021_PRAC_8_BDA.pdf`: Complete academic laboratory report.
- `24DIT021_PRAC_8_BDA.docx`: Detailed institutional Word document.
- `practical8.py`: Complete PySpark window-based analytics script.
- `stock_data.csv`: Multi-stock time-series dataset (AAPL, GOOGL, MSFT, AMZN, TSLA).
- `stock_summary_report.txt`: Automated analytics report detailing stock returns, moving averages, and volatility risk profiles.

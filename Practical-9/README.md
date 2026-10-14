# Practical 9: Social Media Trend Detection Using PySpark

## Student Information
- **Student ID:** 24DIT021
- **Student Name:** Hit Goyani
- **Course:** CSUE301 : Big Data Analytics
- **Institute:** Devang Patel Institute of Advance Technology and Research (DEPSTAR)
- **University:** Charotar University of Science and Technology (CHARUSAT)
- **CO / PO Mapping:** CO4, PO1, PO2, PO4, PO5

---

## Aim
To detect, rank, and track trending hashtags from social media feeds using PySpark text transformations and windowed time-series analysis.

---

## Problem Definition & Scenario
TrendPulse Analytics monitors microblogging and social media interactions globally. Brand managers require real-time alerts when topics or hashtags experience sudden surges in engagement. In this practical, PySpark processes social media posts, isolates hashtags, computes temporal occurrence velocity, ranks top trending hashtags by hour, and flags viral momentum.

---

## Tasks
1. Ingest social media hashtag feed (`social_media_hashtags.csv`) containing timestamps, hashtags, engagement counts, and sentiment.
2. Aggregate hashtag frequency and total interactions across hourly time windows.
3. Compute hour-over-hour momentum and growth rates using PySpark Windowing.
4. Rank top 5 trending hashtags per hourly window using `dense_rank()`.
5. Identify viral breakouts where engagement velocity exceeds established baselines.
6. Output comprehensive trend detection performance metrics.

---

## Files Included
- `24DIT021_PRAC_9_BDA.pdf`: Complete academic laboratory report.
- `24DIT021_PRAC_9_BDA.docx`: Detailed institutional Word document.
- `practical9.py`: Complete PySpark trend detection implementation.
- `social_media_hashtags.csv`: Ingested social media hashtag stream dataset.
- `trend_analysis_report.txt`: Automated executive summary report of detected trends and velocity scores.

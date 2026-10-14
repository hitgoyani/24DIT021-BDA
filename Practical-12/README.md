# Practical 12: Customer Sales Dashboard Using Interactive Analytics

## Student Information
- **Student ID:** 24DIT021
- **Student Name:** Hit Goyani
- **Course:** CSUE301 : Big Data Analytics
- **Institute:** Devang Patel Institute of Advance Technology and Research (DEPSTAR)
- **University:** Charotar University of Science and Technology (CHARUSAT)
- **CO / PO Mapping:** CO6, PO1, PO2, PO4, PO5, PO10, PO12

---

## Aim
To design, implement, and publish an interactive Customer Sales Dashboard using Business Intelligence tools and Interactive Analytics for executive decision-making.

---

## Problem Definition & Scenario
You are working as a Data Visualization Analyst at a retail analytics company. Management wants to monitor sales performance across products, regions, and customer segments through an interactive dashboard. Static reports are insufficient for decision-making. Your task is to design an interactive dashboard that allows management to explore sales data and identify key business trends.

---

## Tasks
1. Clean and validate the Superstore multi-category sales dataset.
2. Formulate executive KPIs for Total Gross Sales, Net Profit, Order Volume, and Average Margin.
3. Design interactive filters for Region, Product Category, Segment, and Date Range.
4. Construct visual analytic views: Category Donut, Monthly Trends, Regional Maps, and Segment breakdowns.
5. Implement interactive drill-down functionality into sub-category profitability.
6. Deploy a full-featured interactive Streamlit + Plotly web dashboard.
7. Interpret business insights and formulate executive recommendations.

---

## Files Included
- `24DIT021_PRAC_12_BDA.pdf`: Comprehensive academic laboratory report.
- `24DIT021_PRAC_12_BDA.docx`: Detailed institutional Word document.
- `practical12.py`: Complete Python script for dataset validation, temporal feature engineering, multi-dimensional KPI calculation, and report generation.
- `generate_sales_dataset.py`: Realistic multi-year Superstore Sales dataset generator.
- `superstore_sales.csv`: Ingested dataset containing 5,000 multi-category, multi-region sales orders.
- `dashboard_app.py`: Full interactive Streamlit + Plotly web dashboard with real-time cross-filtering, metric cards, and drill-through explorer.
  - Run locally: `streamlit run dashboard_app.py`
- `sales_dashboard_report.txt`: Automated executive KPI and business performance summary report.

---

## Key Business Insights & Findings
- **Total Gross Sales:** $8,885,748.66
- **Total Net Profit:** $683,907.28 (Overall Profit Margin: 7.70%)
- **Top Performing Category:** Technology accounts for 65.49% of revenue ($5.82M) and yields a 14.23% profit margin ($827.8k profit).
- **Critical Risk Area:** Furniture recorded a net loss (-$217,559.55, -8.86% margin) due to deep discounting (>= 24%) on bulky Tables (-$189.4k loss) and Bookcases (-$71.3k loss).
- **Segment Leadership:** Consumer segment represents ~52% of transaction volume, while the Home Office segment produces highest margin efficiency (9.35%).

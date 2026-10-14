# Practical 1: Linux System Administration and File Management for the Marketing Analytics Team

## Overview
- **Course**: Big Data Analytics (CSUE301) | Semester 5 | University Elective – I
- **Institution**: CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY (CHARUSAT) - FTE
- **Chapter**: 1
- **Hours**: 2
- **CO / PO**: CO1 / CO3 | PO1, PO2, PO4, PO5, PO10, PO12

## Problem Definition
Scenario: You have recently joined DataAnalytics Inc. as a Linux System Administrator. The company runs its analytics platform on Linux servers where project data, reports, scripts, and user accounts must be managed efficiently. Your manager has assigned you the responsibility of setting up the project environment, managing files and directories, monitoring system resources, securing data, and creating backups for the Marketing Analytics team.

## Tasks
1. Identify the current user (whoami).
2. Find the current working directory (pwd).
3. Display system information (uname -a, hostnamectl).
4. Check system uptime and date (uptime, date).
5. Create a directory named MarketingAnalytics.
6. Create subdirectories: RawData, ProcessedData, Reports.
7. Create data and report files.
8. Add sample content.
9. Display file contents (cat, head, 	ail).
10. List all files and directories (ls -la).
11. Search for report files (ind).
12. Search specific content inside files (grep).
13. Copy report files to Backup directory (cp).
14. Rename files (mv).
15. Move files between directories (mv).
16. Delete a file (
m).
17. Delete an empty directory (
mdir).

## Key Questions / Analysis
- **Q1**: What is the difference between absolute and relative paths?
- **Q2**: Why are Linux permissions important for file security?
- **Q3**: What is the purpose of the grep command?
- **Q4**: How does Linux support efficient file management?
- **Q5**: Why are backups important in enterprise environments?

## Supplementary Problems
1. Create a shell script to automate project directory creation.
2. Find the top 10 largest files in the system (du -ah | sort -rh | head -n 10).
3. Schedule a backup task using cron.
4. Monitor CPU utilization continuously using 	op/htop.
5. Generate a disk usage report for all project directories (df -h, du -sh).

## Dataset / Test Data (customer_data.txt)
`csv
CustomerID,Name,City
101,Raj,Ahmedabad
102,Priya,Vadodara
103,Amit,Surat
`

## Tools & Technology
- Ubuntu Linux / CentOS Linux
- Linux Terminal & Bash Shell

## Rubrics
- Linux Navigation & System Commands: 20%
- File & Directory Management: 20%
- Search & Text Processing Commands: 20%
- Backup & Permission Management: 20%
- Viva Performance: 20%

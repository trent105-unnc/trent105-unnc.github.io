---
_hidden: false
title: "Log‐based anomaly detection for distributed systems: State of the art, industry
experience, and open issues"
authors:
  - Wei, Xinjie
  - Wang, Jie
  - Sun, Chang‐ai
  - Towey, Dave
  - Shoufeng, Zhang
  - Zuo, Wanqing
  - Yu, Yiming
  - Ruan, Ruoyi
  - Song, Guyang
authors_orcid:
  - null
  - 0009-0005-9100-4449
  - 0000-0003-3696-6176
  - 0000-0003-0877-4353
  - null
  - null
  - 0009-0002-6682-7193
  - null
  - null
year: 2024
doi: https://doi.org/10.1002/smr.2650
openalex_id: W4391649511
venue: Journal of Software Evolution and Process
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Popularity
  - Anomaly detection
  - Computer science
  - Feature (linguistics)
  - Data mining
  - Anomaly (physics)
  - Quality assurance
  - Service (business)
  - Data science
---

Abstract Distributed systems have been widely used in many safety‐critical areas. Any abnormalities (e.g., service interruption or service quality degradation) could lead to application crashes or decrease user satisfaction. These things may cause serious economic losses. Among the various quality assurance approaches for distributed systems, log‐based anomaly detection (LAD) has become a popular research topic. Its popularity relates to system logs being able to record and reveal important run‐time information. This paper presents a general LAD framework for distributed systems. Log grouping and feature‐pattern mining are two crucial LAD components that impact on the anomaly‐detection effectiveness. We also present a systematic survey of techniques in these two directions; propose classification frameworks for log grouping and feature patterns; and summarize four log‐grouping techniques and five feature patterns (which refer to invariant relationships among logs that can be used for anomaly detection). To evaluate their applicability, we report on the findings when applying existing techniques to Ray, a popular industrial distributed system. Based on these findings, several open issues are identified, which provide potential guidance for future research and development.

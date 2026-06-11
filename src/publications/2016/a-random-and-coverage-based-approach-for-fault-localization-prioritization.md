---
_hidden: false
title: A random and coverage-based approach for fault localization prioritization
authors:
  - Zhang, Xiaoyi
  - Towey, Dave
  - Chen, Tsong Yueh
  - Zheng, Zheng
  - Cai, Kai‐Yuan
authors_orcid:
  - 0000-0002-3362-2813
  - 0000-0003-0877-4353
  - 0000-0003-3578-0994
  - 0000-0001-7922-9067
  - 0000-0001-5206-3933
year: 2016
doi: https://doi.org/10.1109/ccdc.2016.7531562
openalex_id: W2509565598
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Robustness (evolution)
  - Random testing
  - Test case
  - Fault coverage
  - Automation
  - Statement (logic)
  - Reliability engineering
  - Prioritization
  - Test suite
  - Data mining
  - Software quality
  - Code coverage
  - Fault (geology)
  - Software
  - Machine learning
  - Software development
  - Engineering
---

Fault Localization Prioritization (FLP) aims to order the execution sequence of test cases so that faulty statements in a faulty program can be localized faster. FLP is an important part of the automation of testing and fault localization in software engineering. The key issue is to identify which test cases can provide most useful information to help locate the faulty statement. Assuming the well-known technique of Spectra-Based Fault Localization (SBFL) is applied, this paper evaluates the quality of a test case based on the characteristics of its statement coverage information. We propose the COverage-based Random (COR) approach to address the FLP problem. Two statement coverage characteristics, the diversity characteristic and the failure-like characteristic, are analyzed and identified as having significant impacts on the effectiveness of fault localization. When using the COR approach, each test case is examined and the degree of each characteristic is measured, with test cases showing high degrees of the characteristics being assigned higher priority for execution. Because of the power of random strategies to improve the robustness of the approach, some random factors in the selection of test cases are included. Empirical studies show that, compared with existing approaches, the COR approach results in a faster localization of faulty statements, reducing the number of necessary test case executions.

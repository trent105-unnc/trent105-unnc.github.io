---
_hidden: false
title: New Metrics for Prioritized Interaction Test Suites
authors:
  - Huang, Rubing
  - Towey, Dave
  - Chen, Jinfu
  - Lu, Yansheng
authors_orcid:
  - 0000-0002-1769-6126
  - 0000-0003-0877-4353
  - 0000-0002-3124-5452
  - null
year: 2014
doi: https://doi.org/10.1587/transinf.e97.d.830
openalex_id: W2017030700
venue: IEICE Transactions on Information and Systems
pdf_url: https://www.jstage.jst.go.jp/article/transinf/E97.D/4/E97.D_830/_pdf
abstract_page: 1
abstract_screenshot: new-metrics-for-prioritized-interaction-test-suites.png
keywords:
  - Computer science
  - Test suite
  - Metric (unit)
  - Test case
  - Test (biology)
  - Suite
  - Machine learning
  - Data mining
  - Regression analysis
---

Combinatorial interaction testing has been well studied in recent years, and has been widely applied in practice. It generally aims at generating an effective test suite (an interaction test suite) in order to identify faults that are caused by parameter interactions. Due to some constraints in practical applications (e.g. limited testing resources), for example in combinatorial interaction regression testing, prioritized interaction test suites (called interaction test sequences) are often employed. Consequently, many strategies have been proposed to guide the interaction test suite prioritization. It is, therefore, important to be able to evaluate the different interaction test sequences that have been created by different strategies. A well-known metric is the Average Percentage of Combinatorial Coverage (shortly APCCλ), which assesses the rate of interaction coverage of a strength λ (level of interaction among parameters) covered by a given interaction test sequence S. However, APCCλ has two drawbacks: firstly, it has two requirements (that all test cases in S be executed, and that all possible λ-wise parameter value combinations be covered by S); and secondly, it can only use a single strength λ (rather than multiple strengths) to evaluate the interaction test sequence - which means that it is not a comprehensive evaluation. To overcome the first drawback, we propose an enhanced metric Normalized APCCλ (NAPCC) to replace the APCCλ Additionally, to overcome the second drawback, we propose three new metrics: the Average Percentage of Strengths Satisfied (APSS); the Average Percentage of Weighted Multiple Interaction Coverage (APWMIC); and the Normalized APWMIC (NAPWMIC). These metrics comprehensively assess a given interaction test sequence by considering different interaction coverage at different strengths. Empirical studies show that the proposed metrics can be used to distinguish different interaction test sequences, and hence can be used to compare different test prioritization strategies.

---
_hidden: true
title: Regression Test Case Prioritization by Code Combinations Coverage
authors:
  - Huang, Rubing
  - Zhang, Quanjun
  - Towey, Dave
  - Sun, Weifeng
  - Chen, Jinfu
authors_orcid:
  - 0000-0002-1769-6126
  - 0000-0002-2495-3805
  - 0000-0003-0877-4353
  - 0000-0001-6013-1369
  - 0000-0002-3124-5452
year: 2020
doi: https://doi.org/10.48550/arxiv.2007.00370
openalex_id: W3038562851
venue: arXiv (Cornell University)
abstract_screenshot: 
keywords:
  - Regression testing
  - Prioritization
  - RTP Control Protocol
  - Computer science
  - Leverage (statistics)
  - Code coverage
  - Code (set theory)
  - Data mining
  - Reliability engineering
  - Machine learning
  - Software
  - Engineering
  - Programming language
  - Computer security
  - Software system
---

Regression test case prioritization (RTCP) aims to improve the rate of fault detection by executing more important test cases as early as possible. Various RTCP techniques have been proposed based on different coverage criteria. Among them, a majority of techniques leverage code coverage information to guide the prioritization process, with code units being considered individually, and in isolation. In this paper, we propose a new coverage criterion, code combinations coverage, that combines the concepts of code coverage and combination coverage. We apply this coverage criterion to RTCP, as a new prioritization technique, code combinations coverage based prioritization (CCCP). We report on empirical studies conducted to compare the testing effectiveness and efficiency of CCCP with four popular RTCP techniques: total, additional, adaptive random, and search-based test prioritization. The experimental results show that even when the lowest combination strength is assigned, overall, the CCCP fault detection rates are greater than those of the other four prioritization techniques. The CCCP prioritization costs are also found to be comparable to the additional test prioritization technique. Moreover, our results also show that when the combination strength is increased, CCCP provides higher fault detection rates than the state-of-the-art, regardless of the levels of code coverage.

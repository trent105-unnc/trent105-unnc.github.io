---
_hidden: false
title: PRIORITIZATION OF COMBINATORIAL TEST CASES BY INCREMENTAL INTERACTION COVERAGE
authors:
  - Huang, Rubing
  - Xie, Xiaodong
  - Towey, Dave
  - Chen, Tsong Yueh
  - Lu, Yansheng
  - Chen, Jinfu
authors_orcid:
  - 0000-0002-1769-6126
  - null
  - 0000-0003-0877-4353
  - 0000-0003-3578-0994
  - null
  - 0000-0002-3124-5452
year: 2013
doi: https://doi.org/10.1142/s0218194013500459
openalex_id: W2037169161
venue: International Journal of Software Engineering and Knowledge Engineering
abstract_screenshot: 
keywords:
  - Prioritization
  - Computer science
  - Test suite
  - Test case
  - Test (biology)
  - Combinatorial design
  - Reliability engineering
  - Test strategy
  - Machine learning
  - Mathematics
  - Engineering
  - Software
---

Combinatorial interaction testing is a well-recognized testing method, and has been widely applied in practice, often with the assumption that all test cases in a combinatorial test suite have the same fault detection capability. However, when testing resources are limited, an alternative assumption may be that some test cases are more likely to reveal failure, thus making the order of executing the test cases critical. To improve testing cost-effectiveness, prioritization of combinatorial test cases is employed. The most popular approach is based on interaction coverage, which prioritizes combinatorial test cases by repeatedly choosing an unexecuted test case that covers the largest number of uncovered parameter value combinations of a given strength (level of interaction among parameters). However, this approach suffers from some drawbacks. Based on previous observations that the majority of faults in practical systems can usually be triggered with parameter interactions of small strengths, we propose a new strategy of prioritizing combinatorial test cases by incrementally adjusting the strength values. Experimental results show that our method performs better than the random prioritization technique and the technique of prioritizing combinatorial test suites according to test case generation order, and has better performance than the interaction-coverage-based test prioritization technique in most cases.

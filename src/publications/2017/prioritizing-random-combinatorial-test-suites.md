---
_hidden: false
title: Prioritizing random combinatorial test suites
authors:
  - Huang, Rubing
  - Zhou, Yunan
  - Chen, Tsong Yueh
  - Towey, Dave
  - Chen, Jinfu
  - Zong, Weiwen
authors_orcid:
  - 0000-0002-1769-6126
  - null
  - 0000-0003-3578-0994
  - 0000-0003-0877-4353
  - 0000-0002-3124-5452
  - null
year: 2017
doi: https://doi.org/10.1145/3019612.3019774
openalex_id: W2617992140
venue: 
abstract_screenshot: 
keywords:
  - Prioritization
  - Computer science
  - Test suite
  - Random testing
  - Test (biology)
  - Combinatorial design
  - Test case
  - Reliability engineering
  - Machine learning
  - Mathematics
  - Engineering
---

The behaviour of a system under test can be influenced by several factors, such as system configurations, user inputs, and so on. It has also been observed that many failures are caused by only a small number of factors. Combinatorial testing aims at generating a small-sized test suite that can identify such failures. Random testing, on the other hand, selects test cases in a random manner, but has sometimes achieved similar failure-finding performance to combinatorial testing. Due to limited testing resources, test case prioritization is often employed, to attempt to identify failures as early as possible. Many prioritization studies, however, have only focused on test suites constructed by combinatorial testing, ignoring randomly constructed test suites. In this paper, we report on an investigation of test case prioritization for random combinatorial test suites. We conducted a series of empirical studies involving three real-world programs, each of which used twelve random combinatorial test suites, and adopted the well-known test case prioritization technique fixed-strength interaction coverage based prioritization (FICBP). Results from the studies indicate that, FICBP with high prioritization strength achieves better interaction coverage rate than with low prioritization strength. Furthermore, when the size of the random test suite is small, it would be better to assign a prioritization strength of 2; but otherwise, a strength of 3 would be more appropriate.

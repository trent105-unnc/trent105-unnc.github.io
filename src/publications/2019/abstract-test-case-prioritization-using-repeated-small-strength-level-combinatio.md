---
_hidden: false
title: Abstract Test Case Prioritization Using Repeated Small-Strength
Level-Combination Coverage
authors:
  - Huang, Rubing
  - Sun, Weifeng
  - Chen, Tsong Yueh
  - Towey, Dave
  - Chen, Jinfu
  - Zong, Weiwen
  - Zhou, Yunan
authors_orcid:
  - 0000-0002-1769-6126
  - 0000-0001-6013-1369
  - 0000-0003-3578-0994
  - 0000-0003-0877-4353
  - 0000-0002-3124-5452
  - null
  - null
year: 2019
doi: https://doi.org/10.1109/tr.2019.2908068
openalex_id: W2943287237
venue: IEEE Transactions on Reliability
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Prioritization
  - Regression testing
  - Computer science
  - Reliability engineering
  - Non-regression testing
  - Software performance testing
  - White-box testing
  - Orthogonal array testing
  - Black-box testing
  - Test strategy
  - Set (abstract data type)
  - Software
  - Software development
  - Engineering
---

Abstract test cases (ATCs) have been widely used in practice, including in combinatorial testing and in software product line testing. When constructing a set of ATCs, due to limited testing resources in practice (e.g., in regression testing), test case prioritization (TCP) has been proposed to improve the testing quality, aiming at ordering test cases to increase the speed with which faults are detected. One intuitive and extensively studied TCP technique for ATCs is λ-wise Level-combination Coverage based Prioritization (λLCP), a static, black-box prioritization technique that only uses the ATC information to guide the prioritization process. A challenge facing λLCP, however, is the necessity for the selection of the fixed prioritization strength λ before testing-testers need to choose an appropriate λ value before testing begins. Choosing higher λ values may improve the testing effectiveness of λLCP (e.g., by finding faults faster), but may reduce the testing efficiency (by incurring additional prioritization costs). Conversely, choosing lower λ values may improve the efficiency, but may also reduce the effectiveness. In this paper, we propose a new family of λLCP techniques, Repeated Small-strength Level-combination Coverage-based Prioritization (RSLCP), that repeatedly achieves the full combination coverage at lower strengths. RSLCP maintains λLCP's advantages of being static and black box, but avoids the challenge of prioritization strength selection. We have performed an empirical study involving five different versions of each of five C programs. Compared with λLCP, and Incremental-strength LCP (ILCP), our results show that RSLCP could provide a good tradeoff between testing effectiveness and efficiency. Our results also show that RSLCP is more effective and efficient than two popular techniques of Similarity-based Prioritization (SP). In addition, the results of empirical studies also show that RSLCP can remain robust over multiple system releases.

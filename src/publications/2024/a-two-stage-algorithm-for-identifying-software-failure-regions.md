---
_hidden: false
title: A Two-Stage Algorithm for Identifying Software Failure Regions
authors:
  - Mao, Chengying
  - Zhu, Zheng
  - Chen, Tsong Yueh
  - Towey, Dave
  - Wen, Linlin
  - Chen, Jifu
authors_orcid:
  - 0000-0001-8178-1205
  - 0000-0001-7510-9949
  - 0000-0003-3578-0994
  - 0000-0003-0877-4353
  - null
  - 0000-0003-4529-5175
year: 2024
doi: https://doi.org/10.1109/tr.2024.3441319
openalex_id: W4401879356
venue: IEEE Transactions on Reliability
abstract_screenshot: 
keywords:
  - Computer science
  - Software quality
  - Algorithm
  - Software
  - Software bug
  - Reliability engineering
  - Software development
  - Engineering
  - Programming language
---

Software developers can only obtain a very small amount of information from the individual failure-causing inputs, which makes debugging difficult. Therefore, it is necessary to explore additional failure-causing inputs (failure regions) using the known failure-causing inputs. In order to accurately and efficiently identify the failure region, we propose a novel two-stage search algorithm, TS-FRI. In the initial exploration stage, a round-robin search identifies several boundary failure-causing points, and the failure region's centroid is estimated. During the main search stage, the boundary failure-causing points are identified through iterative division of the input domain with an equally sized partitioning strategy. This results in the boundary points being as dispersed as possible around the failure-region boundary, with the polytope formed by the points approximating the failure region (e.g., a polygon in two dimensions). The proposed algorithm is validated through simulation and empirical analysis: The experimental results show that the TS-FRI accuracy is at least comparable to the best accuracy of the compared three algorithms, and can be ten times better. In addition, TS-FRI only takes a quarter of the computation time and half the failure-validation cost of the other algorithms.

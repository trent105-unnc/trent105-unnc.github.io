---
_hidden: false
title: Quality Estimation and Optimization of Adaptive Stereo Matching Algorithms for
Smart Vehicles
authors:
  - Chen, Fupeng
  - Yu, Heng
  - Ha, Yajun
authors_orcid:
  - 0000-0002-1548-8243
  - 0000-0002-0305-2135
  - 0000-0003-4244-5916
year: 2020
doi: https://doi.org/10.1145/3372784
openalex_id: W2995463625
venue: ACM Transactions on Embedded Computing Systems
abstract_screenshot: 
keywords:
  - Computer science
  - Algorithm
  - Scheduling (production processes)
  - Feature (linguistics)
  - Matching (statistics)
  - Artificial intelligence
  - Mathematical optimization
---

Stereo matching is a promising approach for smart vehicles to find the depth of nearby objects. Transforming a traditional stereo matching algorithm to its adaptive version has potential advantages to achieve the maximum quality (depth accuracy) in a best-effort manner. However, it is very challenging to support this adaptive feature, since (1) the internal mechanism of adaptive stereo matching (ASM) has to be accurately modeled, and (2) scheduling ASM tasks on multiprocessors to generate the maximum quality is difficult under strict real-time constraints of smart vehicles. In this article, we propose a framework for constructing an ASM application and optimizing its output quality on smart vehicles. First, we empirically convert stereo matching into ASM by exploiting its inherent characteristics of disparity–cycle correspondence and introduce an exponential quality model that accurately represents the quality–cycle relationship. Second, with the explicit quality model, we propose an efficient quadratic programming-based dynamic voltage/frequency scaling (DVFS) algorithm to decide the optimal operating strategy, which maximizes the output quality under timing, energy, and temperature constraints. Third, we propose two novel methods to efficiently estimate the parameters of the quality model, namely location similarity-based feature point thresholding and street scenario-confined CNN prediction. Results show that our DVFS algorithm achieves at least 1.61 times quality improvement compared to the state-of-the-art techniques, and average parameter estimation for the quality model achieves 96.35% accuracy on the straight road.

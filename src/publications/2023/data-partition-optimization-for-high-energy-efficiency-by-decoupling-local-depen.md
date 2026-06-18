---
_hidden: false
title: Data Partition Optimization for High Energy Efficiency by Decoupling Local
Dependence in Holographic Video Decoder
authors:
  - Liu, Xinzhe
  - Luo, Jianwen
  - Blinder, David
  - Chen, Fupeng
  - Yu, Heng
  - Schelkens, Peter
  - Catthoor, Francky
  - Ha, Yajun
authors_orcid:
  - 0000-0002-7557-4960
  - 0000-0001-9215-5568
  - 0000-0001-7054-0203
  - 0000-0002-1548-8243
  - 0000-0002-0305-2135
  - 0000-0003-0908-1655
  - 0000-0002-3599-8515
  - 0000-0003-4244-5916
year: 2023
doi: https://doi.org/10.1109/icecs58634.2023.10382825
openalex_id: W4390693329
venue: 
abstract_screenshot: 
keywords:
  - Computer science
  - Energy consumption
  - Inter frame
  - Motion compensation
  - Codec
  - Efficient energy use
  - Pipeline (software)
  - Real-time computing
  - Data compression
  - Holography
  - Frame rate
  - Computer engineering
  - Computer hardware
  - Frame (networking)
  - Algorithm
  - Computer vision
  - Reference frame
---

Holography has attracted considerable attention from researchers due to its ability to store and recreate the wavefront emanating from a three-dimensional object. However, holographic video requires enormous resolution $(128 k \times 128 k)$ at the same frame rates(60fps) as normal video to achieve acceptable visual effects. Data compression is thus essential for its storage/transmission. When implementing its decompression pipeline on hardware for mobile scenarios, data dependency and energy consumption must be handled carefully. In this work, we present a novel design framework and a data partition optimization approach to optimize the overall energy consumption by tackling local dependence in the motion compensation module for holographic video codec, and exploring the design space of data partition layout. First, we propose a local data dependency propagation (LDDP) method that transforms one holographic frame with strong local dependence into multiple mutually independent virtual blocks without local dependence at all. Second, we formulate a model for the data partitioning problem, allowing us to analyze and optimize energy consumption by adjusting the layout of data partitions. Third, we provide a heuristic and efficient solution to the formulated model taking advantage of the target application scenarios. Experiment results in various scenarios show that our proposed optimization method achieves 2.94 ~ 3.91 $\times$ energy efficiency and 46.37% ~ 63.63% area efficiency compared to baseline approaches.

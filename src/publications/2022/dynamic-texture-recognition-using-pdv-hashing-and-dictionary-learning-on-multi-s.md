---
_hidden: false
title: Dynamic Texture Recognition Using PDV Hashing and Dictionary Learning on
Multi-Scale Volume Local Binary Pattern
authors:
  - Ding, Ruxin
  - Ren, Jianfeng
  - Yu, Heng
  - Li, Jiawei
authors_orcid:
  - 0000-0002-1174-5193
  - 0000-0003-4619-6590
  - 0000-0002-0305-2135
  - 0000-0002-8171-478X
year: 2022
doi: https://doi.org/10.1109/icassp43922.2022.9747106
openalex_id: W3216518016
venue: ICASSP 2022 - 2022 IEEE International Conference on Acoustics, Speech and Signal
Processing (ICASSP)
abstract_screenshot: 
keywords:
  - Pattern recognition (psychology)
  - Artificial intelligence
  - Local binary patterns
  - Histogram
  - Feature hashing
  - Computer science
  - Hash function
  - Binary number
  - Dimension (graph theory)
  - Pixel
  - Hash table
  - Feature vector
  - Mathematics
  - Image (mathematics)
  - Double hashing
---

Spatial-temporal local binary pattern (STLBP) has been widely used in dynamic texture recognition. STLBP often encounters the high-dimension problem as its dimension increases exponentially, so that STLBP could only utilize a small neighborhood. To tackle this problem, we propose a method for dynamic texture recognition using PDV hashing and dictionary learning on multi-scale volume local binary pattern (PHD-MVLBP). Instead of forming very high-dimensional LBP-histogram features, it first uses hash functions to map the pixel difference vectors (PDVs) to binary vectors, then forms a dictionary using the derived binary vector, and encodes them using the derived dictionary. In such a way, the PDVs are mapped to feature vectors of the size of the dictionary, instead of LBP histograms of very high dimension. Such an encoding scheme could extract the discriminant information from videos in a much larger neighborhood effectively. The experimental results on two widely-used dynamic textures datasets, DynTex++ and UCLA, show the superior performance of the proposed approach over the state-of-the-art methods.

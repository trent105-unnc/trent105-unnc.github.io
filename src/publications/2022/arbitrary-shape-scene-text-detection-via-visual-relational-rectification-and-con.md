---
_hidden: false
title: Arbitrary-Shape Scene Text Detection via Visual-Relational Rectification and
Contour Approximation
authors:
  - Xu, Chengpei
  - Jia, Wenjing
  - Cui, Tingcheng
  - Wang, Ruomei
  - Zhang, Yuanfang
  - He, Xiangjian
authors_orcid:
  - 0000-0001-8860-7701
  - 0000-0002-0940-3338
  - null
  - 0000-0002-2712-4412
  - 0000-0002-1021-2969
  - 0000-0001-8962-540X
year: 2022
doi: https://doi.org/10.1109/tmm.2022.3171085
openalex_id: W4293203016
venue: IEEE Transactions on Multimedia
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Artificial intelligence
  - Noisy text analytics
  - Visualization
  - Pattern recognition (psychology)
  - Benchmark (surveying)
  - Graph
  - Text graph
  - Theoretical computer science
---

One trend in the latest bottom-up approaches for arbitrary-shape scene text detection is to determine the links between text segments using Graph Convolutional Networks (GCNs). However, the performance of these bottom-up methods is still inferior to that of state-of-the-art top-down methods even with the help of GCNs. We argue that a cause of this is that bottom-up methods fail to make proper use of visual-relational features, which results in accumulated false detection, as well as the error-prone route-finding used for grouping text segments. In this paper, we improve classic bottom-up text detection frameworks by fusing the visual-relational features of text with two effective false positive/negative suppression (FPNS) mechanisms and developing a new shape-approximation strategy. First, dense overlapping text segments depicting the “characterness” and “streamline” properties of text are constructed and used in weakly supervised node classification to filter the falsely detected text segments. Then, relational features and visual features of text segments are fused with a novel Location-Aware Transfer (LAT) module and Fuse Decoding (FD) module to jointly rectify the detected text segments. Finally, a novel multiple-text-map-aware contour-approximation strategy is developed based on the rectified text segments, instead of the error-prone route-finding process, to generate the final contour of the detected text. Experiments conducted on five benchmark datasets demonstrate that our method outperforms the state-of-the-art performance when embedded in a classic text detection framework, which revitalizes the strengths of bottom-up methods.

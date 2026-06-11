---
_hidden: false
title: "ScatterHough: Automatic Lane Detection from Noisy LiDAR Data"
authors:
  - Zeng, Honghao
  - Shihong, Jiang
  - Cui, Tianxiang
  - Lu, Zheng
  - Li, Jiawei
  - Lee, Boon Giin
  - Zhu, Junsong
  - Yang, Xiaoying
authors_orcid:
  - 0000-0002-4670-7066
  - null
  - 0000-0002-0102-2581
  - 0000-0003-4098-2486
  - 0000-0002-6005-8373
  - 0000-0001-5743-1010
  - 0000-0003-0210-608X
  - 0000-0002-4062-6724
year: 2022
doi: https://doi.org/10.3390/s22145424
openalex_id: W4286208817
venue: Sensors
pdf_url: https://www.mdpi.com/1424-8220/22/14/5424/pdf?version=1658372622
abstract_page: 
abstract_screenshot: 
keywords:
  - Hough transform
  - Computer science
  - Benchmark (surveying)
  - Lidar
  - Artificial intelligence
  - Line (geometry)
  - Computer vision
  - Pattern recognition (psychology)
  - Image (mathematics)
  - Remote sensing
  - Mathematics
  - Geography
  - Geodesy
---

Lane detection plays an essential role in autonomous driving. Using LiDAR data instead of RGB images makes lane detection a simple straight line, and curve fitting problem works for realtime applications even under poor weather or lighting conditions. Handling scatter distributed noisy data is a crucial step to reduce lane detection error from LiDAR data. Classic Hough Transform (HT) only allows points in a straight line to vote on the corresponding parameters, which is not suitable for data in scatter form. In this paper, a Scatter Hough algorithm is proposed for better lane detection on scatter data. Two additional operations, ρ neighbor voting and ρ neighbor vote-reduction, are introduced to HT to make points in the same curve vote and consider their neighbors' voting result as well. The evaluation of the proposed method shows that this method can adaptively fit both straight lines and curves with high accuracy, compared with benchmark and state-of-the-art methods.

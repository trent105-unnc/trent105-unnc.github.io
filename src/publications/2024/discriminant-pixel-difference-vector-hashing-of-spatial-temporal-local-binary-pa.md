---
_hidden: false
title: Discriminant Pixel-Difference Vector Hashing of Spatial-Temporal Local Binary
Patterns for Dynamic Texture Recognition
authors:
  - Ding, Ruxin
  - Ren, Jianfeng
  - Yu, Heng
  - Li, Jiawei
  - Jiang, Xudong
authors_orcid:
  - 0000-0002-1174-5193
  - 0000-0003-4619-6590
  - 0000-0002-0305-2135
  - 0000-0002-8171-478X
  - 0000-0002-9104-2315
year: 2024
doi: https://doi.org/10.1109/icassp48485.2024.10447766
openalex_id: W4392904641
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Bhattacharyya distance
  - Pattern recognition (psychology)
  - Histogram
  - Local binary patterns
  - Artificial intelligence
  - Discriminative model
  - Hash function
  - Computer science
  - Pixel
  - Feature hashing
  - Binary code
  - Linear discriminant analysis
  - Binary number
  - Mathematics
  - Hash table
  - Image (mathematics)
  - Double hashing
---

Spatial-Temporal Local Binary Pattern (STLBP) has been widely used for dynamic texture (DT) recognition. Hashing Pixel-Difference Vectors (PDVs) into binary codes before forming histogram features has proven its effectiveness in improving the discriminative power of LBP features. However, hashing PDVs and forming histograms are often separated into two steps, resulting in sub-optimal LBP features. To bridge this gap, we propose to integrate the criterion of maximizing the discriminant power of LBP histogram features backwards into PDV hashing. Specifically, during PDV hashing, we propose to add the criteria of maximizing the Bhattacharyya distance between LBP histograms of different classes and minimizing the distance between LBP histograms of the same class. The histograms of hash codes are clustered to form a dictionary, and the generated codewords are used for final classification. The proposed method is evaluated on the DynTex++ dataset and a large fire-detection dataset. It significantly outperforms state-of-the-art STLBP descriptors.

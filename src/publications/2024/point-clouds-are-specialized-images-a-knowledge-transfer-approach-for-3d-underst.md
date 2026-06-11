---
_hidden: false
title: "Point Clouds are Specialized Images: A Knowledge Transfer Approach for 3D
Understanding"
authors:
  - Kang, Jiachen
  - Jia, Wenjing
  - He, Xiangjian
  - Lam, Kin‐Man
authors_orcid:
  - 0000-0003-2522-2462
  - 0000-0002-0940-3338
  - 0000-0001-8962-540X
  - 0000-0002-0422-8454
year: 2024
doi: https://doi.org/10.1109/tmm.2024.3412330
openalex_id: W4399526831
venue: IEEE Transactions on Multimedia
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Point cloud
  - Knowledge transfer
  - Point (geometry)
  - Artificial intelligence
  - Knowledge management
---

Self-supervised representation learning (SSRL) has gained increasing attention in point cloud understanding, in addressing the challenges posed by 3D data scarcity and high annotation costs. This paper presents PCExpert, a novel SSRL approach that reinterprets point clouds as “specialized images”. This conceptual shift allows PCExpert to leverage knowledge derived from large-scale image modality in a more direct and deeper manner, via extensively sharing the parameters with a pre-trained image encoder in a multi-way Transformer architecture. The parameter sharing strategy, combined with an additional pretext task for pre-training, i.e., transformation estimation, empowers PCExpert to outperform the state of the arts in a variety of tasks, with a remarkable reduction in the number of trainable parameters. Notably, PCExpert's performance under <monospace xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">LINEAR</monospace> fine-tuning (e.g., yielding a 90.02% overall accuracy on ScanObjectNN) has already closely approximated the results obtained with <monospace xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">FULL</monospace> model fine-tuning (92.66%), demonstrating its effective representation capability.

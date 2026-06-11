---
_hidden: false
title: "CaDGS: Modeling Inter-Gaussian Mutual Information for Dynamic Novel View
Synthesis"
authors:
  - Zhao, Yunlong
  - Deng, Xiaoheng
  - Qiu, Zhuohua
  - Yang, Feng
  - Xu, Chang
  - He, Xiangjian
  - You, Shan
  - Su, Xiu
authors_orcid:
  - 0000-0002-2038-6540
  - 0000-0003-2740-8025
  - null
  - 0000-0002-3495-5257
  - 0000-0002-4756-0609
  - 0000-0001-8962-540X
  - 0000-0003-1964-0430
  - 0000-0002-9863-5404
year: 2025
doi: https://doi.org/10.1145/3746027.3755121
openalex_id: W4415540270
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Rendering (computer graphics)
  - Gaussian
  - Mutual information
  - View synthesis
  - Coherence (philosophical gambling strategy)
  - Tensor (intrinsic definition)
  - Gaussian network model
  - Gaussian process
---

Dynamic novel view synthesis (NVS) aims to render time-varying scenes from arbitrary viewpoints, balancing rendering quality and computational efficiency. While recent 4D Gaussian Splatting approaches offer promising real-time performance, they fundamentally overlook critical interdependence between Gaussians by modeling deformations independently. Our information-theoretic analysis reveals substantial mutual information across the Gaussian field, manifesting as appearance-preserving radiance coherence and motion-consistent deformation propagation. This finding establishes that rendering quality emerges from coordinated transformation rather than independent processing. We propose Correlation-aware Dynamic Gaussian Splatting (CaDGS) with our novel Gaussian Correlation Tensor Projection (GCTP) method, which efficiently transforms the complex O(n3) mutual information tensor into a dual-channel O(n2) spatial matrix, preserving the critical topological structure of Gaussian interactions. Combined with our Spatio-Temporal Deformation Consistency (STDC) learning, which enforces volumetric coherence through tensor-guided regularization across multiple scales, CaDGS prevents geometric distortions and texture inconsistencies common in previous approaches. Experimental results demonstrate state-of-the-art performance, achieving 32.4 PSNR on the Neu3D dataset with fewer Gaussians while maintaining rendering speeds of 323 FPS at 1353 × 1014 resolution.

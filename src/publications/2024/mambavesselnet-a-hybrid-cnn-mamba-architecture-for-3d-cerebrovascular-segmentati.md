---
_hidden: false
title: "MambaVesselNet: A Hybrid CNN-Mamba Architecture for 3D Cerebrovascular
Segmentation"
authors:
  - Chen, Yanming
  - Liu, Ziyu
  - He, Xiangjian
authors_orcid:
  - null
  - 0000-0002-3542-6832
  - 0000-0001-8962-540X
year: 2024
doi: https://doi.org/10.1145/3696409.3700231
openalex_id: W4405869298
venue: 
pdf_url: https://dl.acm.org/doi/pdf/10.1145/3696409.3700231?download=true
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Architecture
  - Segmentation
  - Artificial intelligence
  - Geography
  - Archaeology
---

Segmenting vessels in magnetic resonance imaging (MRI) stands as a mainstream approach for evaluating cerebrovascular conditions.Due to the complex semantics and topology of cerebrovascular structures, existing CNN-based segmentation methods often fail to correlate the topological structure and branch vessels, resulting in incomplete segmentation.To address the challenge of global dependencies modelling, transformer architectures have been employed due to their capability of capturing long-range dependencies, and they have shown promise in 3D medical image segmentation.However, the transformer architecture greatly increases the computational burden when processing high-dimensional 3D MRI images.In light of this, a selective state space model (SSM) Mamba has gained recognition for its adeptness in handling long-range dependencies in sequential data, particularly noted for its efficiency and speed in natural language processing applications.Mamba is now widely applied in various computer vision tasks.Based on these findings, in this study, we propose MambaVesselNet, a Hybrid CNN-Mamba network for 3D cerebrovascular segmentation.MambaVesselNet leverages CNNs to capture local features and incorporates the Mamba block at the bottleneck to model long-range dependencies within the whole-volume features.The effectiveness of MambaVesselNet is validated on a public cerebrovascular dataset, and our benchmark demonstrates new state-of-the-art performance.

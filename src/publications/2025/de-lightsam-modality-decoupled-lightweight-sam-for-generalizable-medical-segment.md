---
_hidden: false
title: "De-LightSAM: Modality-Decoupled Lightweight SAM for Generalizable Medical
Segmentation"
authors:
  - Xu, Qing
  - Li, Jiaxuan
  - He, Xiangjian
  - Li, Chenxin
  - Tesema, Fiseha B.
  - Duan, Wenting
  - Chen, Zhen
  - Qu, Rong
  - Garibaldi, Jonathan M.
  - Chen, Chang Wen
authors_orcid:
  - 0000-0001-6898-0269
  - 0000-0002-3766-0876
  - 0000-0001-8962-540X
  - 0000-0001-7146-2200
  - 0000-0002-7472-4007
  - 0000-0001-9665-4890
  - 0000-0003-0255-6435
  - 0000-0001-8318-7509
  - 0000-0002-9690-7074
  - null
year: 2025
doi: https://doi.org/10.1109/tcsvt.2025.3621309
openalex_id: W4415178648
venue: IEEE Transactions on Circuits and Systems for Video Technology
pdf_url: https://nottingham-repository.worktribe.com/preview/55410012/TCSVT25.pdf
abstract_page: 
abstract_screenshot: 
keywords:
  - Segmentation
  - Decoding methods
  - Discriminative model
  - Encoder
  - Image segmentation
  - Generalization
  - Pattern recognition (psychology)
  - Leverage (statistics)
  - Feature extraction
---

The universality of deep neural networks across different modalities and their generalization capabilities to unseen domains play an essential role in medical image segmentation. The recent segment anything model (SAM) has demonstrated strong adaptability across diverse natural scenarios. However, the huge computational costs, demand for manual annotations as prompts and conflict-prone decoding process of SAM degrade its generalization capabilities in medical scenarios. To address these limitations, we propose a modality-decoupled lightweight SAM for domain-generalized medical image segmentation, named De-LightSAM. Specifically, we first devise a lightweight domain-controllable image encoder (DC-Encoder) that produces discriminative visual features for diverse modalities. Further, we introduce the self-patch prompt generator (SP-Generator) to automatically generate high-quality dense prompt embeddings for guiding segmentation decoding. Finally, we design the query-decoupled modality decoder (QM-Decoder) that leverages a one-to-one strategy to provide an independent decoding channel for every modality, preventing mutual knowledge interference of different modalities. Moreover, we design a multi-modal decoupled knowledge distillation (MDKD) strategy to leverage robust common knowledge to complement domain-specific medical feature representations. Extensive experiments indicate that De-LightSAM outperforms state-of-the-arts in diverse medical imaging segmentation tasks, displaying superior modality universality and generalization capabilities. Especially, De-LightSAM uses only 2.0% parameters compared to SAM-H. The source code is available at https://github.com/xq141839/De-LightSAM.

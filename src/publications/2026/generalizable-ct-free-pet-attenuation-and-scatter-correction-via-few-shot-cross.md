---
_hidden: false
title: Generalizable CT-free PET attenuation and scatter correction via few-shot cross
domain adaptation
authors:
  - Wang, Hanzhong
  - Wen, Meiyuan
  - Qiao, Xiaoya
  - Chen, Qianhao
  - An, Yi
  - Chen, X
  - Guo, Rui
  - Huang, Qiu
  - Zhu, Xi
  - Cheng, Zhaoping
  - Xu, Jiehua
  - Zheng, Hairong
  - Liang, Dong
  - He, Xiangjian
  - Hu, Zhanli
  - Li, B R
authors_orcid:
  - null
  - 0009-0001-8726-6017
  - 0000-0001-7226-4054
  - 0000-0003-2782-9217
  - 0009-0003-7661-2767
  - null
  - null
  - null
  - 0000-0003-1342-2221
  - 0000-0001-7217-7284
  - null
  - null
  - null
  - 0000-0001-8962-540X
  - 0000-0003-0618-6240
  - 0000-0002-9189-9300
year: 2026
doi: https://doi.org/10.1038/s41746-026-02760-w
openalex_id: W7161136952
venue: npj Digital Medicine
pdf_url: https://www.nature.com/articles/s41746-026-02760-w.pdf
abstract_page: 1
abstract_screenshot: src/publications/2026/generalizable-ct-free-pet-attenuation-and-scatter-correction-via-few-shot-cross.png
keywords:
  - Domain adaptation
  - Joint (building)
  - Adaptation (eye)
  - Attenuation
  - Correction for attenuation
  - Domain (mathematical analysis)
  - Pattern recognition (psychology)
  - Joint probability distribution
---

The rapid advancements in PET technology, coupled with the need for accurate and efficient imaging, necessitate the development of robust and generalizable methods for CT-free attenuation and scatter correction (ASC). Deep learning offers a promising solution, but exhibits limited performance when tested in diverse clinical settings and varying imaging conditions. We propose a few-shot fine-tuning paradigm that enables efficient adaptation of models from a source domain to a new target domain. Our backbone network incorporates statistical modulation to extract domain-specific distribution information and employs pixel-wise factor scaling modeling to disentangle ASC factor maps from input images. On a large and diverse dataset of 1539 subjects across multiple tracers, scanners, and centers, we evaluate model performance under single-tracer training, multi-tracer joint training, and few-shot adaptation strategies. Although joint training demonstrates strong performance on known tracers, the proposed few-shot adaptation approach, CrossPET-Adapt, excels at adapting to unseen domains with minimal data, outperforming joint training. This method significantly reduces radiation exposure and data requirements, offering a rapid and robust solution for CT-free PET ASC in varied clinical environments.

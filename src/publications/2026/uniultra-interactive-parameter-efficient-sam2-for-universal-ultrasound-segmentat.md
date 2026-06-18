---
_hidden: false
title: "UniUltra: Interactive Parameter-Efficient SAM2 for Universal Ultrasound
Segmentation"
authors:
  - Li, Yue
  - Xu, Qingsong
  - Zhang, Yixuan
  - He, Xueqiu
  - Zhang, Qian
  - Yao, Yuan
  - Tesem, Fiseha B.
  - Chen, Xin
  - Wang, Ruili
  - Chen, Zhen
  - Chen, Chang Wen
authors_orcid:
  - 0009-0006-5923-6044
  - 0000-0002-1700-322X
  - 0000-0002-1924-9848
  - 0000-0003-2760-582X
  - 0000-0001-6074-2354
  - 0000-0002-2705-6245
  - null
  - 0000-0002-3685-0854
  - 0000-0001-7117-2772
  - 0000-0002-3263-3043
  - null
year: 2026
doi: https://doi.org/10.1109/tmm.2026.3687007
openalex_id: W4416551711
venue: IEEE Transactions on Multimedia
abstract_screenshot: uniultra-interactive-parameter-efficient-sam2-for-universal-ultrasound-segmentat.png
keywords:
  - Segmentation
  - Encoder
  - Ultrasound
  - Generalization
  - Pattern recognition (psychology)
  - Ultrasound imaging
  - Domain (mathematical analysis)
---

The Segment Anything Model 2 (SAM2) demonstrates remarkable universal segmentation capabilities on natural images. However, its performance on ultrasound images is significantly degraded due to domain disparities. This limitation raises two critical challenges: how to efficiently adapt SAM2 to ultrasound imaging while maintaining parameter efficiency, and how to deploy the adapted model effectively in resource-constrained clinical environments. To address these issues, we propose UniUltra for universal ultrasound segmentation. Specifically, we first introduce a novel context-edge hybrid adapter (CH-Adapter) that enhances fine-grained perception across diverse ultrasound imaging modalities while achieving parameter-efficient fine-tuning. To further improve clinical applicability, we develop a deep-supervised knowledge distillation (DSKD) technique that transfers knowledge from the large image encoder of the fine-tuned SAM2 to a super lightweight encoder, substantially reducing computational requirements without compromising performance. Extensive experiments demonstrate that UniUltra outperforms state-of-the-arts with superior generalization capabilities. Notably, our framework achieves competitive performance using only 8.91% of SAM2's parameters during fine-tuning, and the final compressed model reduces the parameter count by 94.08% compared to the original SAM2, making it highly suitable for practical clinical deployment. The source code is available at <uri xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">https://github.com/xq141839/UniUltra</uri>.

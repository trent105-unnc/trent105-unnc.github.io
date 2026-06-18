---
_hidden: false
title: Predictive Reasoning with Augmented Anomaly Contrastive Learning for
Compositional Visual Relations
authors:
  - Li, Chengtai
  - He, Yuting
  - Ren, Jianfeng
  - Bai, Ruibin
  - Zhao, Yitian
  - Yu, Heng
  - Jiang, Xudong
authors_orcid:
  - null
  - 0009-0005-5949-4783
  - null
  - 0000-0003-1722-568X
  - null
  - null
  - null
year: 2026
doi: https://doi.org/10.1109/tmm.2026.3668614
openalex_id: W7131827550
venue: IEEE Transactions on Multimedia
abstract_screenshot: 
keywords:
  - Visual reasoning
  - Discriminative model
  - Leverage (statistics)
  - Outlier
  - Anomaly detection
  - Similarity (geometry)
---

While visual reasoning for simple analogies has received significant attention, compositional visual relations (CVR) remain relatively unexplored due to their greater complexity. To solve CVR tasks, we propose Predictive Reasoning with Augmented Anomaly Contrastive Learning (PR-A <inline-formula xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink"><tex-math notation="LaTeX">$^{2}$</tex-math></inline-formula> CL), i.e., to identify an outlier image given three other images that follow the same compositional rules. To address the challenge of modelling abundant compositional rules, an Augmented Anomaly Contrastive Learning is designed to distil discriminative and generalizable features by maximizing similarity among normal instances while minimizing similarity between normal and anomalous outliers. More importantly, a predict-and-verify paradigm is introduced for rule-based reasoning, in which a series of Predictive Anomaly Reasoning Blocks (PARBs) iteratively leverage features from three out of the four images to predict those of the remaining one. Throughout the subsequent verification stage, the PARBs progressively pinpoint the specific discrepancies attributable to the underlying rules. Experimental results on SVRT, CVR and MC <inline-formula xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink"><tex-math notation="LaTeX">$^{2}$</tex-math></inline-formula> R datasets show that PR-A <inline-formula xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink"><tex-math notation="LaTeX">$^{2}$</tex-math></inline-formula> CL significantly outperforms state-of-the-art reasoning models.

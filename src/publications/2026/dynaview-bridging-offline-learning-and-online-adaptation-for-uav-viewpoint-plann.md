---
_hidden: false
title: "DynaView: Bridging Offline Learning and Online Adaptation for UAV Viewpoint
Planning"
authors:
  - Huang, Jing
  - Qin, Jiale
  - Xue, Ning
authors_orcid:
  - null
  - null
  - 0000-0003-1449-9933
year: 2026
doi: https://doi.org/10.1109/cai68641.2026.11536261
openalex_id: W7163050079
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Bridging (networking)
  - Key (lock)
  - Adaptation (eye)
  - Mode (computer interface)
  - Context (archaeology)
---

This work investigates UAV viewpoint planning for high-quality 3D reconstruction and introduces DynaView, a framework that synergizes a learned reconstructability predictor with continuous optimization. The method operates in two phases: an offline phase where a Transformer model predicts point-wise reconstructability, and an online phase where a Viewpoint Utility Learner (VUL) and Marginal Utility Maximizer (MUM) dynamically update the viewpoint set. This hybrid paradigm enables the planner to generate candidates in low-quality regions, admit or remove viewpoints based on marginal gain, and refine orientations, thereby adapting to real-time reconstruction progress while leveraging lightweight geometric descriptors and compact prediction models to keep the online optimization cost modest. Experiments on ten Urban-Scene3D buildings demonstrate that DynaView improves global reconstructability by 19.5% on average over a static baseline. These results indicate that our approach not only raises global reconstruction quality but also utilizes viewpoint resources more effectively.

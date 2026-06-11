---
_hidden: false
title: "SiamNAS: Siamese Surrogate Model for Dominance Relation Prediction in
Multi-objective Neural Architecture Search"
authors:
  - Zhou, Yuyang
  - Neri, Ferrante
  - Ong, Yew-Soon
  - Bai, Ruibin
authors_orcid:
  - 0009-0003-6726-0843
  - 0000-0002-6100-6532
  - 0000-0002-4480-169X
  - 0000-0003-1722-568X
year: 2025
doi: https://doi.org/10.1145/3712256.3726359
openalex_id: W4412106342
venue: Proceedings of the Genetic and Evolutionary Computation Conference
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Dominance (genetics)
  - Relation (database)
  - Computer science
  - Artificial intelligence
  - Architecture
  - Artificial neural network
  - Machine learning
  - Pattern recognition (psychology)
  - Data mining
  - Biology
  - Geography
---

Modern neural architecture search (NAS) is inherently multi-objective balancing trade-offs such as accuracy, parameter count, and computational cost. This complexity makes NAS computationally expensive and nearly impossible to solve without efficient approximations. To address this, we propose a novel surrogate modelling approach that leverages an ensemble of Siamese network blocks to predict dominance relationships between candidate architectures. Lightweight and easy to train, the surrogate achieves 92% accuracy and replaces the crowding distance calculation in the survivor selection strategy with a heuristic rule based on model size. Integrated into a framework termed SiamNAS, this design eliminates costly evaluations during the search process. Experiments on NAS-Bench-201 demonstrate the framework's ability to identify Pareto-optimal solutions with significantly reduced computational costs. The proposed SiamNAS identified a final non-dominated set containing the best architecture in NAS-Bench-201 for CIFAR-10 and the second-best for ImageNet, in terms of test error rate, within 0.01 GPU days. This proof-of-concept study highlights the potential of the proposed Siamese network surrogate model to generalise to multi-tasking optimisation, enabling simultaneous optimisation across tasks. Additionally, it offers opportunities to extend the approach for generating Sets of Pareto Sets (SOS), providing diverse Pareto-optimal solutions for heterogeneous task settings.

---
_hidden: false
title: Three-Branch Molecular Representation Learning Framework for Predicting
Molecular Properties in Drug Discovery
authors:
  - Liu, Yu
  - Duo, Lihui
  - Hirst, Jonathan D.
  - Rent, Jianfeng
  - Tang, Bencan
  - Towey, Dave
authors_orcid:
  - 0009-0002-5231-7360
  - 0000-0001-7453-9330
  - 0000-0002-2726-0983
  - null
  - 0000-0002-4301-2496
  - 0000-0003-0877-4353
year: 2024
doi: https://doi.org/10.1109/compsac61105.2024.00317
openalex_id: W4401879069
venue: 
abstract_screenshot: 
keywords:
  - Drug discovery
  - Computer science
  - Representation (politics)
  - Drug
  - Artificial intelligence
  - Machine learning
  - Data science
  - Bioinformatics
  - Medicine
  - Pharmacology
  - Biology
---

Graph Neural Networks (GNNs) have been widely used to model molecules with a graph representation. However, GNNs face inherent challenges in accurately modeling long-range atomic interactions and identifying complex molecular substructures. This research proposes a novel Three-branch Molecular Representation Learning Framework (TMRLF) for predicting molecular properties: it integrates one branch of a GNN that extracts local molecular structural information with two branches of fully connected networks that capture the chemical substructure based on two fingerprints. Specifically, to better capture the long-range interactions, the GNN is designed with an attention mechanism to enhance the atomic interactions. As the Morgan fingerprint effectively captures functional groups of molecules and another well-used molecular fingerprint in the field of drug discovery, the Extended Reduced Graph (ErG) Fingerprint specifically targets molecular features with pharmacological relevance. These two fingerprints are both utilized to complement the chemical information and long-range information processing at the level of key structural features that GNNs lack. The proposed TMRLF extracts a robust feature representation of molecules, crucial for accurately predicting molecular properties and identifying potential drug candidates. Our proposed TMRLF is compared against six state-of-the-art models on eight benchmark datasets. It demonstrates superior capability in predicting molecular properties. Its effectiveness is further highlighted through proof-of-concept validation in identifying potential inhibitors for the Son of Sevenless Homolog 1 (SOSI) protein in real-world drug discovery scenarios.

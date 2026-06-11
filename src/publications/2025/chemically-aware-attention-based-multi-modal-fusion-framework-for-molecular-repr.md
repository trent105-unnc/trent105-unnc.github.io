---
_hidden: false
title: Chemically-aware Attention-based Multi-modal Fusion Framework for Molecular
Representation Learning
authors:
  - Liu, Yu
  - Hirst, Jonathan D.
  - Ren, Jianfeng
  - Tang, Bencan
  - Towey, Dave
authors_orcid:
  - 0009-0002-5231-7360
  - 0000-0002-2726-0983
  - null
  - 0000-0002-4301-2496
  - 0000-0003-0877-4353
year: 2025
doi: https://doi.org/10.1109/compsac65507.2025.00250
openalex_id: W4413679442
venue: 
pdf_url: https://doi.org/10.1109/COMPSAC65507.2025.00250
abstract_page: 
abstract_screenshot: 
keywords:
  - Modal
  - Computer science
  - Representation (politics)
  - Fusion
  - Artificial intelligence
  - Human–computer interaction
  - Materials science
  - Linguistics
---

Learning effective molecular representations is crucial for accurate property prediction in artificial intelligence (AI)-aided drug discovery. Graph and fingerprint representations have been widely used to encode molecular topological structures and chemical substructures. To enhance the feature embedding of each modality and leverage their complementary strengths, we propose a novel Chemically-aware Attention-based Multi-modal Fusion Framework (CAMFF) for molecular representation learning, which integrates molecular graphs and extended-connectivity fingerprints by exploiting various attention mechanisms. Specifically, the proposed CAMFF consists of three modules: 1) a graph embedding module incorporating multi-head attention to capture local heterogeneous interactions and all-pair self-attention to capture long-range atomic dependencies from molecular graph representations; 2) a fingerprint embedding module using a pre-trained Mol2Vec model to generate dense chemical substructure representations; and 3) a chemically-aware feature interaction and fusion module incorporating self-attention to enable interactions between various chemical substructures and cross-attention to ensure effective multi-modal alignment and fusion. To evaluate the effectiveness of CAMFF, we compare it with 14 state-of-the-art methods across 9 molecular property prediction benchmarks. CAMFF demonstrates competitive predictive performance and improves interpretability through attention-based visualization, showing its potential for real-world drug discovery.

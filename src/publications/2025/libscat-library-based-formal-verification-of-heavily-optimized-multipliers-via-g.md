---
_hidden: false
title: "LibSCAT: Library-Based Formal Verification of Heavily Optimized Multipliers via
GNN-Guided Reference Selection"
authors:
  - Li, Rui
  - Fujita, Masahiro
  - Yu, Heng
  - Yan, Guangyao
  - Li, Lin
  - Ha, Yajun
authors_orcid:
  - 0000-0002-2953-9742
  - 0000-0002-6516-4175
  - 0000-0002-0305-2135
  - 0000-0002-8256-7435
  - 0000-0002-6804-702X
  - 0000-0003-4244-5916
year: 2025
doi: https://doi.org/10.1109/tcad.2025.3645205
openalex_id: W4417438998
venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems
abstract_screenshot: 
keywords:
  - Scalability
  - Satisfiability
  - Selection (genetic algorithm)
  - Formal verification
  - Multiplier (economics)
  - Model checking
  - Dot product
  - Functional verification
  - Formal methods
---

Formal verification of heavily optimized multipliers is a critical yet challenging problem in both industry and academia. Current approaches suffer from fundamental limitations: Symbolic Computer Algebra (SCA) techniques struggle with heavily optimized multipliers, Satisfiability (SAT)-based approaches require structurally similar reference designs, and hybrid methods fail to handle Booth multipliers. On the other hand, industrial design flows possess extensive libraries of verified multipliers for optimization workflows, creating an underutilized opportunity for library-based verification. Yet optimal reference selection becomes challenging due to large-scale libraries and optimization-obscured architectural relationships. To address these challenges, we propose LibSCAT, a verification framework that leverages large-scale reference libraries in a scalable manner. First, we propose a reference library-based methodology that adaptively combines SCA and SAT techniques through intelligent reference selection and predictive method choice. Second, we propose a Siamese Graph Neural Network model that captures multiplier structural relationships in latent space from reverse-engineered graphs, generating robust embeddings for efficient reference selection. Third, we propose a Random Forest-based predictor that leverages learned embeddings for accurate selection of verification strategies. Experimental results show our method achieves 88.2% success on heavily optimized simple partial product multipliers and 94.0% success on heavily optimized Booth multipliers, significantly outperforming state-of-the-art methods.

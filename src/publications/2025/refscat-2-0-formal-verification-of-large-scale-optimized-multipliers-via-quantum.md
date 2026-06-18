---
_hidden: false
title: "RefSCAT-2.0: Formal Verification of Large-Scale Optimized Multipliers via
Quantum-Inspired Ant Colony Optimization-Based Reference Generation"
authors:
  - Li, Rui
  - Li, Lin
  - Yu, Heng
  - Fujita, Masahiro
  - Jiang, Weixiong
  - Ha, Yajun
authors_orcid:
  - 0000-0002-2953-9742
  - 0000-0002-6804-702X
  - 0000-0002-0305-2135
  - 0000-0002-6516-4175
  - 0000-0002-6014-6453
  - 0000-0003-4244-5916
year: 2025
doi: https://doi.org/10.1109/tcad.2025.3567883
openalex_id: W4410153258
venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems
abstract_screenshot: 
keywords:
  - Ant colony optimization algorithms
  - Computer science
  - Scale (ratio)
  - Quantum
  - ANT
  - Formal verification
  - Mathematical optimization
  - Algorithm
  - Mathematics
  - Physics
---

Formal verification of large-scale optimized integer multipliers remains a critical yet insufficiently addressed challenge in industry and academia. Current methods employ reference multiplier generators to automatically construct structurally similar reference multipliers, which are then used by Satisfiability (SAT)-based techniques to verify equivalence with optimized multipliers. However, these approaches face limitations when generating references for large-scale optimized multipliers within acceptable timeframes. To address these limitations, we introduce the RefSCAT-2.0 framework, designed to rapidly produce high-quality large-scale reference multipliers. Firstly, we generate the macro-architecture to determine the number of adders required for constructing the reference multiplier. We propose a novel Integer Linear Programming (ILP)-based macro-architecture generation algorithm that minimizes the number of allocated adders, thereby reducing the overall problem complexity. Secondly, we organize the allocated adders into groups to simplify the subsequent generation process. We present a multi-level scheduler that automatically decomposes adders into groups with minimized interdependencies, ensuring both the quality of generation and a reduction in overall generation complexity. Thirdly, we generate the micro-architecture for each scheduled group, wherein we finalize the connections between adders. We present a graph-based design space representation coupled with a quantum-inspired ant colony optimization (QACO)-based generation algorithm that can efficiently explores the micro-architectures of each scheduled group. Experimental results show that RefSCAT-2.0 successfully verifies all 124 cases in a 256-bit optimized multiplier benchmark suite, outperforming SCA-based tcad22revsca and hybrid RefSCATTCAD24 methods which solve only 24 cases each.

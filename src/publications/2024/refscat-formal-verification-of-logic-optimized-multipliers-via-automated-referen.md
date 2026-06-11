---
_hidden: false
title: "RefSCAT: Formal Verification of Logic-Optimized Multipliers via Automated
Reference Multiplier Generation and SCA-SAT Synergy"
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
year: 2024
doi: https://doi.org/10.1109/tcad.2024.3442987
openalex_id: W4401537203
venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Multiplier (economics)
  - Computer science
  - Arithmetic
  - Programming language
  - Algorithm
  - Mathematics
---

Formally verifying logic-optimized integer multipliers remains a crucial yet insufficiently addressed problem in both industry and academia, presenting significant verification challenges, particularly when verifying the large-scale logic-optimized multipliers with diverse architectures. Satisfiability (SAT)-based methods require structurally similar and known correct reference multipliers, which may not always be readily accessible. Symbolic computer algebra (SCA) techniques can verify multipliers without references but encounter difficulties with optimized multipliers due to unclear adder boundaries. To enable effective formal verification of the optimized multipliers, we propose the RefSCAT framework, which contains a reference multiplier generator that produces references structurally similar to the optimized multiplier with clear adder boundaries, enabling a synergistic SCA-SAT verification flow. First, we propose a reverse engineering algorithm that extracts the essential adder tree from the optimized multiplier, ensuring similarity. Second, since only a partial netlist is extractable after optimization, we propose a constraint satisfaction algorithm to complete the generation using only adders while following the extracted netlist, ensuring both similarity and clear adder boundaries. Third, leveraging the generated reference, we propose a synergized SCA-SAT verification flow that verifies the generated reference using SCA and then uses it as a correct reference for the SAT-based verification. The experiments demonstrate that RefSCAT can successfully verify logic-optimized multipliers with diverse partial-product-based architectures up to 128 bits, outperforming the state-of-the-art methods by verifying at least 29% more benchmarks.

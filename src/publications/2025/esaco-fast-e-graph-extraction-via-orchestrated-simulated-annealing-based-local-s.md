---
_hidden: false
title: "ESACO: Fast E-Graph Extraction via Orchestrated Simulated Annealing-Based Local
Search and Ant Colony Optimization-Based Global Search"
authors:
  - Li, Rui
  - Li, Lin
  - Yu, Heng
  - Ha, Yajun
authors_orcid:
  - 0000-0002-2953-9742
  - 0000-0002-6804-702X
  - 0000-0002-0305-2135
  - 0000-0003-4244-5916
year: 2025
doi: https://doi.org/10.1109/tcad.2025.3611101
openalex_id: W4414310244
venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems
abstract_screenshot: 
keywords:
  - Simulated annealing
  - Local search (optimization)
  - Speedup
  - Representation (politics)
  - Global optimization
  - Ant colony optimization algorithms
  - Function (biology)
---

Equality graphs (E-graphs) offer a compact representation for vast sets of equivalent implementations, proving invaluable in hardware synthesis and program optimization. Nevertheless, extracting the optimal implementation from an e-graph constitutes an NP-hard challenge. Current extraction methods face critical limitations: heuristic-based approaches fail to produce high-quality solutions, GPU-accelerated techniques lack determinism and demand excessive memory, exact ILP methods struggle with scalability, and specialized solvers only function for particular e-graph types. To address this, we present ESACO, a novel deterministic framework that rapidly and consistently converges to high-quality solutions across diverse benchmarks by effectively combining Simulated Annealing (SA) for local refinement with Ant Colony Optimization (ACO) for global search. First, we develop a synergistic hybrid-heuristic framework that orchestrates complementary search paradigms, harmonizing ACO’s global exploration capabilities with SA’s targeted local exploitation mechanisms. Second, we introduce an SA-based local search method that employs novel rip-up and repair moves for efficiently refining promising solutions. Third, we propose an ACO-based global search algorithm incorporating strategic restart mechanisms to effectively explore the complex solution space while escaping local optima. Experimental results demonstrate that ESACO achieves up to 42× speedup using a single thread compared to state-of-the-art GPU-accelerated methods while maintaining or improving solution quality.

---
_hidden: false
title: A scheme for determining vehicle routes based on Arc-based service network design
authors:
  - Jiang, Xiaoping
  - Bai, Ruibin
  - Atkin, Jason
  - Kendall, Graham
authors_orcid:
  - 0000-0002-3588-1675
  - 0000-0003-1722-568X
  - 0000-0002-7187-4982
  - 0000-0003-2006-5103
year: 2016
doi: https://doi.org/10.1080/03155986.2016.1262580
openalex_id: W2543502461
venue: INFOR Information Systems and Operational Research
pdf_url: https://nottingham-repository.worktribe.com/output/838344
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Solver
  - Node (physics)
  - Benchmark (surveying)
  - Network planning and design
  - Set (abstract data type)
  - Service (business)
  - Scheme (mathematics)
  - Constraint (computer-aided design)
  - Mathematical optimization
  - Pruning
  - Integer (computer science)
  - Computer network
  - Engineering
  - Mathematics
---

In freight transportation, less-than-truckload carriers often need to assign each vehicle a cyclic route so that drivers can come back home after a certain period of time. However, the Node-Arc model for service network design addresses decisions on each arc and does not determine routes directly, although the vehicle balancing constraint ensures that the number of outgoing vehicles equals the number of incoming vehicles at each node. How to transform the optimized service network into a set of vehicle routes remains an important problem that has not yet been studied. In this paper, we propose a three-phase scheme to address this problem. In the first stage, we present an algorithm based on the depth-first search to find all of the different cyclic routes in a service network design solution. In the second stage, we propose to prune poor cyclic routes using real-life constraints so that a collection of acceptable vehicle routes can be obtained before route assignment. Some of the pruning can also be done in the first stage to speed up the proposed algorithm. In the third stage, we formulate the problem of selecting a set of cyclic routes to cover the entire network as a weighted set covering problem. The resulting model is formulated as an integer program and solved with IBM ILOG CPLEX solver. Experimental results on benchmark instances for service network design indicate the effectiveness of the proposed scheme which gives high-quality solutions in an efficient way.

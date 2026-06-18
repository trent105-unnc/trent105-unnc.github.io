---
_hidden: true
title: Fuzzy C-means-based scenario bundling for stochastic service network design
authors:
  - Jiang, Xiaoping
  - Bai, Ruibin
  - Aickelin, Uwe
  - Landa-Silva, Dario
authors_orcid:
  - 0000-0002-3588-1675
  - 0000-0003-1722-568X
  - 0000-0002-2679-2275
  - 0000-0002-9499-6827
year: 2017
doi: https://doi.org/10.1109/ssci.2017.8280905
openalex_id: W3100869757
venue: 
abstract_screenshot: 
keywords:
  - Bundle
  - Fuzzy logic
  - Mathematical optimization
  - Computer science
  - Convergence (economics)
  - Set (abstract data type)
  - Network planning and design
  - Computation
  - Decomposition
  - Fuzzy set
  - Mathematics
  - Algorithm
  - Artificial intelligence
  - Computer network
---

Stochastic service network designs with uncertain demand represented by a set of scenarios can be modelled as a large-scale two-stage stochastic mixed-integer program (SMIP). The progressive hedging algorithm (PHA) is a decomposition method for solving the resulting SMIP. The computational performance of the PHA can be greatly enhanced by decomposing according to scenario bundles instead of individual scenarios. At the heart of bundle-based decomposition is the method for grouping the scenarios into bundles. In this paper, we present a fuzzy c-means-based scenario bundling method to address this problem. Rather than full membership of a bundle, which is typically the case in existing scenario bundling strategies such as k-means, a scenario has partial membership in each of the bundles and can be assigned to more than one bundle in our method. Since the multiple bundle membership of a scenario induces overlap between the bundles, we empirically investigate whether and how the amount of overlap controlled by a fuzzy exponent would affect the performance of the PHA. Experimental results for a less-than-truckload transportation network optimization problem show that the number of iterations required by the PHA to achieve convergence reduces dramatically with large fuzzy exponents, whereas the computation time increases significantly. Experimental studies were conducted to find out a good fuzzy exponent to strike a trade-off between the solution quality and the computational time.

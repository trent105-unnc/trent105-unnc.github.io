---
_hidden: false
title: "One-Domain-One-Input: Adaptive Random Testing by Orthogonal Recursive Bisection
With Restriction"
authors:
  - Ackah-Arthur, Hilary
  - Chen, Jinfu
  - Towey, Dave
  - Omari, Michael
  - Xi, Jiaxiang
  - Huang, Rubing
authors_orcid:
  - 0000-0001-8790-814X
  - 0000-0002-3124-5452
  - 0000-0003-0877-4353
  - 0000-0002-1659-8313
  - null
  - 0000-0002-1769-6126
year: 2019
doi: https://doi.org/10.1109/tr.2019.2907577
openalex_id: W2943540685
venue: IEEE Transactions on Reliability
abstract_screenshot: 
keywords:
  - Computer science
  - Randomness
  - Random testing
  - Domain (mathematical analysis)
  - Orthogonal array testing
  - Heuristic
  - Test case
  - Algorithm
  - Selection (genetic algorithm)
  - Bisection method
  - Orb (optics)
  - Software
  - Machine learning
  - Mathematics
  - Artificial intelligence
  - Software system
  - Statistics
---

One goal of software testing may be the identification or generation of a series of test cases that can detect a fault with as few test executions as possible. Motivated by insights from research into failure-causing regions of input domains, the even-spreading (even distribution) of tests across the input domain has been identified as a useful heuristic to more quickly find failures. This finding has encouraged a shift in focus from traditional random testing (RT) to its enhancement, adaptive random testing (ART), which retains the randomness of test input selection, but also attempts to maintain a more evenly distributed spread of test inputs across the input domain. Given that there are different ways to achieve the even distribution, several different ART methods and approaches have been proposed. This paper presents a new ART method, called ART by orthogonal recursive bisection (ART-ORB), which explores the advantages of repeated geometric bisection of the input domain, combined with restriction regions, to evenly spread test inputs. Experimental results show a better performance in terms of fewer test executions than RT to find failures. Compared with other ART methods, ART-ORB has comparable performance (in terms of required test executions), but incurs lower test input selection overheads, especially in higher dimensional input space. It is recommended that ART-ORB can be used in testing situations involving expensive test input execution.

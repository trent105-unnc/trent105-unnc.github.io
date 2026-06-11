---
_hidden: false
title: "Toward Cost-Effective Adaptive Random Testing: An Approximate Nearest Neighbor
Approach"
authors:
  - Huang, Rubing
  - Cui, Chenhui
  - Lian, Junlong
  - Towey, Dave
  - Sun, Weifeng
  - Chen, Haibo
authors_orcid:
  - 0000-0002-1769-6126
  - 0009-0004-8746-316X
  - 0009-0007-3167-1236
  - 0000-0003-0877-4353
  - 0000-0001-6013-1369
  - 0000-0002-3284-9143
year: 2024
doi: https://doi.org/10.1109/tse.2024.3379592
openalex_id: W4393058040
venue: IEEE Transactions on Software Engineering
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - k-nearest neighbors algorithm
  - Algorithm
  - Data mining
  - Theoretical computer science
  - Artificial intelligence
---

<italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">Adaptive Random Testing</i> (ART) enhances the testing effectiveness (including fault-detection capability) of <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">Random Testing</i> (RT) by increasing the diversity of the random test cases throughout the input domain. Many ART algorithms have been investigated such as <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">Fixed-Size-Candidate-Set ART</i> (FSCS) and <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">Restricted Random Testing</i> (RRT), and have been widely used in many practical applications. Despite its popularity, ART suffers from the problem of high computational costs during test-case generation, especially as the number of test cases increases. Although several strategies have been proposed to enhance the ART testing efficiency, such as the <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">forgetting strategy</i> and the <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">k-dimensional tree strategy</i> , these algorithms still face some challenges, including: (1) Although these algorithms can reduce the computation time, their execution costs are still very high, especially when the number of test cases is large; and (2) To achieve low computational costs, they may sacrifice some fault-detection capability. In this paper, we propose an approach based on <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">Approximate Nearest Neighbors</i> (ANNs), called <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">Locality-Sensitive Hashing ART</i> (LSH-ART). When calculating distances among different test inputs, LSH-ART identifies the approximate (not necessarily exact) nearest neighbors for candidates in an efficient way. LSH-ART attempts to balance ART testing effectiveness and efficiency.

---
_hidden: false
title: "VPP-ART: An Efficient Implementation of Fixed-Size-Candidate-Set Adaptive
Random Testing Using Vantage Point Partitioning"
authors:
  - Huang, Rubing
  - Cui, Chenhui
  - Towey, Dave
  - Sun, Weifeng
  - Lian, Junlong
authors_orcid:
  - 0000-0002-1769-6126
  - 0009-0004-8746-316X
  - 0000-0003-0877-4353
  - 0000-0001-6013-1369
  - 0009-0007-3167-1236
year: 2022
doi: https://doi.org/10.1109/tr.2022.3218602
openalex_id: W4206882053
venue: IEEE Transactions on Reliability
abstract_screenshot: 
keywords:
  - Computer science
  - Random testing
  - Set (abstract data type)
  - Tree (set theory)
  - Artificial intelligence
  - Overhead (engineering)
  - Point (geometry)
  - Algorithm
  - Machine learning
  - Mathematics
  - Test case
  - Programming language
  - Combinatorics
---

<italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">Adaptive random testing</i> (ART) is an enhancement of <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">random testing</i> (RT), and aims to improve the RT failure-detection effectiveness by distributing test cases more evenly in the input domain. Many ART algorithms have been proposed, with <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">fixed-size-candidate-set</i> ART (FSCS-ART) being one of the most effective and popular. FSCS-ART ensures high failure-detection effectiveness by selecting as the next test case the candidate farthest from previously executed test cases. Although FSCS-ART has good failure-detection effectiveness, it also faces some challenges, including heavy computational overheads. In this article, we propose an enhanced version of FSCS-ART, <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">vantage point partitioning ART</i> (VPP-ART). VPP-ART addresses the FSCS-ART computational overhead problem using VPP, while maintaining the failure-detection effectiveness. VPP-ART partitions the input domain space using a <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">modified vantage point tree</i> (VP-tree) and finds the approximate nearest executed test cases of a candidate test case in the partitioned subdomains—thereby significantly reducing the time overheads compared with the searches required for FSCS-ART. To enable the FSCS-ART dynamic insertion process, we modify the traditional VP-tree to support dynamic data. The simulation results show that VPP-ART has a much lower time overhead compared to FSCS-ART, but also delivers similar (or better) failure-detection effectiveness, especially in the higher dimensional input domains. According to statistical analyses, VPP-ART can improve on the FSCS-ART failure-detection effectiveness by approximately 50–58%. VPP-ART also compares favorably with the <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">KD-tree-enhanced fixed-size-candidate-set ART</i> (KDFC-ART) algorithms (a series of enhanced ART algorithms based on the KD-tree). Our experiments also show that VPP-ART is more cost-effective than FSCS-ART and KDFC-ART.

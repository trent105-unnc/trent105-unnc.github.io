---
_hidden: false
title: "Proximity‐Based Filtering: An Improved Adaptive Random Testing Approach Based
on Orthogonal Bisections and Imaginary Offsets"
authors:
  - Ackah-Arthur, Hilary
  - Chen, Jinfu
  - Towey, Dave
  - Xi, Jiaxiang
  - Omari, Michael
  - Chen, Haibo
authors_orcid:
  - 0000-0001-8790-814X
  - null
  - 0000-0003-0877-4353
  - null
  - null
  - null
year: 2026
doi: https://doi.org/10.1049/sfw2/4814836
openalex_id: W7134212875
venue: IET Software
pdf_url: https://doi.org/10.1049/sfw2/4814836
abstract_page: 
abstract_screenshot: 
keywords:
  - Random testing
  - Set (abstract data type)
  - Bisection method
  - Test case
  - Orb (optics)
  - Bisection
  - Software
---

Random testing (RT) is an essential software testing strategy that selects test cases based on a random distribution. Adaptive RT (ART) encompasses a group of test‐case selection/generation methods that, based on the insight that test cases that are widely spread are more prone to find nonpoint failure‐causing regions, attempts to improve on the failure‐finding ability of traditional RT. Two common approaches to implementing ART are distance‐based ART and partition‐based ART. A well‐studied distance‐based ART method is fixed size candidate set ART (FSCS‐ART), which has been found to have superior effectiveness to RT in terms of failure‐finding ability, but can incur high computational overheads. ART by bisection (ART‐B) is a partition‐based ART method that improves on the time efficiency of FSCS‐ART. A limitation of ART‐B, however, is its potential for selecting very close test cases, which reduces its failure‐finding effectiveness. Adoption of an orthogonal recursive bisection (ORB) strategy in a partition‐based ART method, ART by ORB (ART‐ORB) has shown improvements in both failure‐finding effectiveness and computational overheads; however, it also has the potential for selecting very close test cases. The present paper proposes ART‐ORB with imaginary offsets (ART‐ORBIO), an innovative ART method that combines the advantages of FSCS‐ART, ART‐B, and ART‐ORB. ART‐ORBIO applies a repeating input domain geometric bisection, integrated with a novel concept of imaginary offsets, to enhance the spread of test cases, and minimize the overheads of computation. Our empirical results show that ART‐ORBIO provides better failure‐finding effectiveness than RT and comparable effectiveness to FSCS‐ART. ART‐ORBIO also has significantly improved efficiency, although not comparable to ART‐ORB and is more useful particularly in input domains with larger dimensions.

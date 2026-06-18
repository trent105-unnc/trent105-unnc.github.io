---
_hidden: false
title: An Empirical Comparison of Fixed-Strength and Mixed-Strength for Interaction
Coverage Based Prioritization
authors:
  - Huang, Rubing
  - Zhang, Quanjun
  - Chen, Tsong Yueh
  - Hamlyn-Harris, James
  - Towey, Dave
  - Chen, Jinfu
authors_orcid:
  - 0000-0002-1769-6126
  - 0000-0002-2495-3805
  - 0000-0003-3578-0994
  - null
  - 0000-0003-0877-4353
  - 0000-0002-3124-5452
year: 2018
doi: https://doi.org/10.1109/access.2018.2879638
openalex_id: W2899739878
venue: IEEE Access
abstract_screenshot: 
keywords:
  - Prioritization
  - Computer science
  - Business
---

Test case prioritization (TCP) plays an important role in identifying, characterizing, diagnosing, and correcting faults quickly. The TCP has been widely used to order test cases of different types, including model inputs (also called abstract test cases). Model inputs are constructed by modeling the program according to its input parameters, values, and constraints, and has been used in different testing methods, such as combinatorial interaction testing and software product line testing. The Interaction coverage-based TCP (ICTCP) uses interaction coverage information derived from the model input to order inputs. Previous studies have focused generally on the fixed-strength ICTCP, which adopts a fixed strength (i.e., the level of parameter interactions) to support the ICTCP process. It is generally accepted that using more strengths for ICTCP, i.e., mixed-strength ICTCP, may give better ordering than fixed-strength. To confirm whether mixed-strength is better than fixed-strength, in this paper, we report on an extensive empirical study using five real-world programs (written in C), each of which has six versions. The results of the empirical studies show that mixed-strength has better rates of interaction coverage overall than fixed-strength, but they have very similar rates of fault detection. Our results also show that fixed-strength should be used instead of the mixed-strength at the later stage of software testing. Finally, we offer some practical guidelines for testers when using interaction coverage information to prioritize model inputs, under different testing scenarios and resources.

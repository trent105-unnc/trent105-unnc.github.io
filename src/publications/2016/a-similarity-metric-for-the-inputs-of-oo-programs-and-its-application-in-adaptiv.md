---
_hidden: false
title: A Similarity Metric for the Inputs of OO Programs and Its Application in
Adaptive Random Testing
authors:
  - Chen, Jinfu
  - Kuo, Fei‐Ching
  - Chen, Tsong Yueh
  - Towey, Dave
  - Su, Chenfei
  - Huang, Rubing
authors_orcid:
  - 0000-0002-3124-5452
  - null
  - 0000-0003-3578-0994
  - 0000-0003-0877-4353
  - null
  - 0000-0002-1769-6126
year: 2016
doi: https://doi.org/10.1109/tr.2016.2628759
openalex_id: W2561884496
venue: IEEE Transactions on Reliability
abstract_screenshot: 
keywords:
  - Random testing
  - Metric (unit)
  - Computer science
  - Similarity (geometry)
  - Set (abstract data type)
  - Data mining
  - Software
  - Sequence (biology)
  - Test case
  - Algorithm
  - Artificial intelligence
  - Machine learning
  - Programming language
  - Engineering
---

Random testing (RT) has been identified as one of the most popular testing techniques, due to its simplicity and ease of automation. Adaptive random testing (ART) has been proposed as an enhancement to RT, improving its fault-detection effectiveness by evenly spreading random test inputs across the input domain. To achieve the even spreading, ART makes use of distance measurements between consecutive inputs. However, due to the nature of object-oriented software (OOS), its distance measurement can be particularly challenging: Each input may involve multiple classes, and interaction of objects through method invocations. Two previous studies have reported on how to test OOS at a single-class level using ART. In this study, we propose a new similarity metric to enable multiclass level testing using ART. When generating test inputs (for multiple classes, a series of objects, and a sequence of method invocations), we use the similarity metric to calculate the distance between two series of objects, and between two sequences of method invocations. We integrate this metric with ART and apply it to a set of open-source OO programs, with the empirical results showing that our approach outperforms other RT and ART approaches in OOS testing.

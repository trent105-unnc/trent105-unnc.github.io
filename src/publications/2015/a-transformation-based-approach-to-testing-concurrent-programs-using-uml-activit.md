---
_hidden: false
title: A transformation-based approach to testing concurrent programs using UML
activity diagrams
authors:
  - Sun, Chang‐ai
  - Zhao, Yan
  - Pan, Lin
  - He, Xiao
  - Towey, Dave
authors_orcid:
  - 0000-0003-3696-6176
  - 0000-0002-6453-1682
  - null
  - 0000-0002-3000-0795
  - 0000-0003-0877-4353
year: 2015
doi: https://doi.org/10.1002/spe.2324
openalex_id: W2135842852
venue: Software Practice and Experience
pdf_url: https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/spe.2324
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Activity diagram
  - Concurrency
  - Unified Modeling Language
  - Programming language
  - Test case
  - Set (abstract data type)
  - UML tool
  - Model-based testing
  - Code coverage
  - Schedule
  - Software
---

Unified Modeling Language (UML) activity diagrams are widely used to model concurrent interaction among multiple objects. In this paper, we propose a transformation-based approach to generating scenario-oriented test cases for applications modeled by UML activity diagrams. Using a set of transformation rules, the proposed approach first transforms a UML activity diagram specification into an intermediate representation, from which it then constructs test scenarios with respect to the given concurrency coverage criteria. The approach then finally derives a set of test cases for the constructed test scenarios. The approach resolves the difficulties associated with fork and join concurrency in the UML activity diagram and enables control over the number of the resulting test cases. We further implemented a tool to automate the proposed approach and studied its feasibility and effectiveness using a case study. Experimental results show that the approach can generate test cases on demand to satisfy a given concurrency coverage criterion and can detect up to 76.5% of seeded faults when a weak coverage criterion is used. With the approach, testers can not only schedule the software test process earlier, but can also better allocate the testing resources for testing concurrent applications. Copyright © 2015 John Wiley & Sons, Ltd.

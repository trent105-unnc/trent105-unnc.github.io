---
_hidden: false
title: A Max-Relevance-Min-Divergence criterion for data discretization with
applications on naive Bayes
authors:
  - Wang, Shihe
  - Ren, Jianfeng
  - Bai, Ruibin
  - Yao, Yuan
  - Jiang, Xudong
authors_orcid:
  - 0000-0002-8371-6893
  - 0000-0003-4619-6590
  - 0000-0003-1722-568X
  - 0000-0002-2705-6245
  - 0000-0002-9104-2315
year: 2023
doi: https://doi.org/10.1016/j.patcog.2023.110236
openalex_id: W4390322455
venue: Pattern Recognition
pdf_url: https://www.sciencedirect.com/science/article/pii/S0031320323009330
abstract_page: 
abstract_screenshot: 
keywords:
  - Discretization
  - Divergence (linguistics)
  - Discretization of continuous features
  - Generalization
  - Dependency (UML)
  - Linear discriminant analysis
  - Mathematics
  - Naive Bayes classifier
  - Computer science
  - Pattern recognition (psychology)
  - Artificial intelligence
  - Algorithm
  - Data mining
  - Support vector machine
  - Discretization error
---

In many classification models, data is discretized to better estimate its distribution. Existing discretization methods often target at maximizing the discriminant power of discretized data, while overlooking the fact that the primary target of data discretization in classification is to improve the generalization performance. As a result, the data tend to be over-split into many small bins since the data without discretization retain the maximal discriminant information. Thus, we propose a Max-Dependency-Min-Divergence (MDmD) criterion that maximizes both the discriminant information and generalization ability of the discretized data. More specifically, the Max-Dependency criterion maximizes the statistical dependency between the discretized data and the classification variable while the Min-Divergence criterion explicitly minimizes the JS-divergence between the training data and the validation data for a given discretization scheme. The proposed MDmD criterion is technically appealing, but it is difficult to reliably estimate the high-order joint distributions of attributes and the classification variable. We hence further propose a more practical solution, Max-Relevance-Min-Divergence (MRmD) discretization scheme, where each attribute is discretized separately, by simultaneously maximizing the discriminant information and the generalization ability of the discretized data. The proposed MRmD is compared with the state-of-the-art discretization algorithms under the naive Bayes classification framework on 45 benchmark datasets. It significantly outperforms all the compared methods on most of the datasets.

---
_hidden: false
title: Boosting the Discriminant Power of Naive Bayes
authors:
  - Wang, Shihe
  - Ren, Jianfeng
  - Lian, Xiaoyu
  - Bai, Ruibin
  - Jiang, Xudong
authors_orcid:
  - 0000-0002-8371-6893
  - 0000-0003-4619-6590
  - 0000-0003-0966-1166
  - 0000-0003-1722-568X
  - 0000-0002-9104-2315
year: 2022
doi: https://doi.org/10.1109/icpr56361.2022.9956358
openalex_id: W4312854161
venue: 2022 26th International Conference on Pattern Recognition (ICPR)
abstract_screenshot: 
keywords:
  - Naive Bayes classifier
  - Computer science
  - Pattern recognition (psychology)
  - Artificial intelligence
  - Linear discriminant analysis
  - Boosting (machine learning)
  - Categorical variable
  - Bayes' theorem
  - Machine learning
  - Encoder
  - Noise (video)
  - Outlier
  - Feature (linguistics)
  - Discriminant
  - Feature extraction
  - Feature vector
  - Data mining
  - Support vector machine
  - Bayesian probability
---

Naive Bayes has been widely used in many applications because of its simplicity and ability in handling both numerical data and categorical data. However, lack of modeling of correlations between features limits its performance. In addition, noise and outliers in the real-world dataset also greatly degrade the classification performance. In this paper, we propose a feature augmentation method employing a stack auto-encoder to reduce the noise in the data and boost the discriminant power of naive Bayes. The proposed stack auto-encoder consists of two auto-encoders for different purposes. The first encoder shrinks the initial features to derive a compact feature representation in order to remove the noise and redundant information. The second encoder boosts the discriminant power of the features by expanding them into a higher-dimensional space so that different classes of samples could be better separated in the higher-dimensional space. By integrating the proposed feature augmentation method with the regularized naive Bayes, the discrimination power of the model is greatly enhanced. The proposed method is evaluated on a set of machine-learning benchmark datasets. The experimental results show that the proposed method significantly and consistently outperforms the state-of-the-art naive Bayes classifiers.

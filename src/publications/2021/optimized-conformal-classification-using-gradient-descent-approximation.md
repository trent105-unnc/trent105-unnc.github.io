---
_hidden: false
title: Optimized conformal classification using gradient descent approximation
authors:
  - Bellotti, Anthony
authors_orcid:
  - 0000-0001-6317-5877
year: 2021
doi: https://doi.org/10.48550/arxiv.2105.11255
openalex_id: W3165860726
venue: arXiv (Cornell University)
pdf_url: https://arxiv.org/pdf/2105.11255
abstract_page: 1
abstract_screenshot: optimized-conformal-classification-using-gradient-descent-approximation.png
keywords:
  - Conformal map
  - Gradient descent
  - Descent (aeronautics)
  - Mathematics
  - Computer science
  - Artificial intelligence
  - Physics
  - Mathematical analysis
  - Artificial neural network
---

Conformal predictors are an important class of algorithms that allow predictions to be made with a user-defined confidence level. They are able to do this by outputting prediction sets, rather than simple point predictions. The conformal predictor is valid in the sense that the accuracy of its predictions is guaranteed to meet the confidence level, only assuming exchangeability in the data. Since accuracy is guaranteed, the performance of a conformal predictor is measured through the efficiency of the prediction sets. Typically, a conformal predictor is built on an underlying machine learning algorithm and hence its predictive power is inherited from this algorithm. However, since the underlying machine learning algorithm is not trained with the objective of minimizing predictive efficiency it means that the resulting conformal predictor may be sub-optimal and not aligned sufficiently to this objective. Hence, in this study we consider an approach to train the conformal predictor directly with maximum predictive efficiency as the optimization objective, and we focus specifically on the inductive conformal predictor for classification. To do this, the conformal predictor is approximated by a differentiable objective function and gradient descent used to optimize it. The resulting parameter estimates are then passed to a proper inductive conformal predictor to give valid prediction sets. We test the method on several real world data sets and find that the method is promising and in most cases gives improved predictive efficiency against a baseline conformal predictor.

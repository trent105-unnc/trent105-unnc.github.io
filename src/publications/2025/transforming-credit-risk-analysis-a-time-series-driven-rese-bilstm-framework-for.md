---
_hidden: false
title: "Transforming Credit Risk Analysis: A Time-Series-Driven ResE-BiLSTM Framework
for Post-Loan Default Detection"
authors:
  - Yang, Yue
  - Lin, Yuxiang
  - Zhang, Ying
  - Su, Zihan
  - Goh, Chang Chuan
  - Fang, Tangtangfang
  - Bellotti, Anthony
  - Lee, B. C.
authors_orcid:
  - null
  - null
  - 0009-0000-2900-9197
  - null
  - null
  - 0009-0007-5882-1265
  - 0000-0001-6317-5877
  - null
year: 2025
doi: https://doi.org/10.3390/info17010005
openalex_id: W7116984300
venue: Information
pdf_url: https://doi.org/10.3390/info17010005
abstract_page: 
abstract_screenshot: 
keywords:
  - Interpretability
  - Resampling
  - Credit risk
  - Risk management
  - Autoencoder
  - Residual
  - Anomaly detection
  - Key (lock)
  - Loan
  - Baseline (sea)
---

Credit risk refers to the possibility that a borrower fails to meet contractual repayment obligations, posing potential losses to lenders. This study aims to enhance post-loan default prediction in credit risk management by constructing a time-series modeling framework based on repayment behavior data, enabling the capture of repayment risks that emerge after loan issuance. To achieve this objective, a Residual Enhanced Encoder Bidirectional Long Short-Term Memory (ResE-BiLSTM) model is proposed, in which the attention mechanism is responsible for discovering long-range correlations, while the residual connections ensure the preservation of distant information. This design mitigates the tendency of conventional recurrent architectures to overemphasize recent inputs while underrepresenting distant temporal information in long-term dependency modeling. Using the real-world large-scale Freddie Mac Single-Family Loan-Level Dataset, the model is evaluated on 44 independent cohorts and compared with five baseline models, including Long Short-Term Memory (LSTM), Bidirectional LSTM (BiLSTM), Gated Recurrent Unit (GRU), Convolutional Neural Network (CNN), and Recurrent Neural Network (RNN) across multiple evaluation metrics. The experimental results demonstrate that ResE-BiLSTM achieves superior performance on key indicators such as F1 and AUC, with average values of 0.92 and 0.97, respectively, and demonstrates robust performance across different feature window lengths and resampling settings. Ablation experiments and SHapley Additive exPlanations (SHAP)-based interpretability analyses further reveal that the model captures non-monotonic temporal importance patterns across key financial features. This study advances time-series–based anomaly detection for credit risk prediction by integrating global and local temporal learning. The findings offer practical value for financial institutions and risk management practitioners, while also providing methodological insights and a transferable modeling paradigm for future research on credit risk assessment.

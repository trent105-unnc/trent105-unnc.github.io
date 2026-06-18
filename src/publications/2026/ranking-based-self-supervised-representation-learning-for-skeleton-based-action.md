---
_hidden: false
title: Ranking-Based Self-Supervised Representation Learning for Skeleton-Based Action
Recognition
authors:
  - Wu, Bizhu
  - Chen, Junliang
  - Xie, Jinheng
  - Li, Qiufu
  - Ren, Jianfeng
  - Bai, Ruibin
  - Qu, Rong
  - Shen, Linlin
authors_orcid:
  - 0000-0002-6783-6561
  - null
  - 0000-0001-5678-4500
  - null
  - null
  - 0000-0003-1722-568X
  - 0000-0001-8318-7509
  - null
year: 2026
doi: https://doi.org/10.1109/tmm.2026.3654466
openalex_id: W7124454052
venue: IEEE Transactions on Multimedia
abstract_screenshot: 
keywords:
  - Discriminative model
  - Feature learning
  - Ranking (information retrieval)
  - Learning to rank
  - Feature (linguistics)
  - Representation (politics)
  - Autoencoder
  - Cluster analysis
  - Pattern recognition (psychology)
---

Recently, researchers have achieved significant results in the skeleton-based action recognition. To better model the skeleton sequences, we drive the encoder to learn more discriminative representations in the self-supervised setting. We find that instead of clustering feature vectors to assign pseudo labels for samples as in DeepCluster, ranking them is a more reasonable, reliable, and efficient way to learn more effective feature representations. With this intuition, we propose a novel self-supervised learning framework, <bold xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">DeepRank</b>. Specifically, we rank triplets of skeleton sequences with the ranking labels, obtained from the relative distances among them. Besides, to deeply mine complementary discriminative information that exists in different modalities of skeleton sequences, we further propose <bold xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">M</b>ulti-<bold xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">V</b>iew <bold xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">DeepRank</b> (<bold xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">MV-DeepRank</b>) to enable encoders to comprehensively learn complementary features from multiple modalities. Extensive experimental results on the NTU RGB+D, NTU RGB+D 120, PKU-MMD I, and PKU-MMD II datasets under various evaluation settings demonstrate the generality, transferability, and superiority of our proposed self-supervised learning frameworks. Notably, our frameworks surpass the previous methods that employ the same backbone networks as ours by at least 1.8% (ST-GCN) and 2.1% (STTFormer) under the finetuning setting. Additionally, DeepRank gains a significant advantage on computational complexities, <inline-formula xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink"><tex-math notation="LaTeX">$O(1)$</tex-math></inline-formula>, over the contrastive learning-based methods, <inline-formula xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink"><tex-math notation="LaTeX">$O(\rm{batch size})$</tex-math></inline-formula>, and the clustering-based methods, <inline-formula xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink"><tex-math notation="LaTeX">$O(\rm{number of clusters})$</tex-math></inline-formula>.

---
_hidden: false
title: "TFDet: Target-Aware Fusion for RGB-T Pedestrian Detection"
authors:
  - Zhang, Xue
  - Zhang, Xiaohan
  - Wang, Jiangtao
  - Ying, Jiacheng
  - Sheng, Zehua
  - Yu, Heng
  - Li, Chunguang
  - Shen, Hui‐Liang
authors_orcid:
  - 0000-0002-7247-3670
  - 0000-0002-1420-1909
  - 0009-0009-5062-6793
  - 0000-0002-8721-003X
  - 0000-0002-1721-9143
  - 0000-0002-0305-2135
  - 0000-0003-3147-1553
  - 0000-0001-8469-019X
year: 2024
doi: https://doi.org/10.1109/tnnls.2024.3443455
openalex_id: W4401806723
venue: IEEE Transactions on Neural Networks and Learning Systems
abstract_screenshot: 
keywords:
  - Pedestrian detection
  - Pedestrian
  - Artificial intelligence
  - Computer vision
  - Computer science
  - Fusion
  - RGB color model
  - Pattern recognition (psychology)
  - Engineering
  - Transport engineering
---

Pedestrian detection plays a critical role in computer vision as it contributes to ensuring traffic safety. Existing methods that rely solely on RGB images suffer from performance degradation under low-light conditions due to the lack of useful information. To address this issue, recent multispectral detection approaches have combined thermal images to provide complementary information and have obtained enhanced performances. Nevertheless, few approaches focus on the negative effects of false positives (FPs) caused by noisy fused feature maps. Different from them, we comprehensively analyze the impacts of FPs on detection performance and find that enhancing feature contrast can significantly reduce these FPs. In this article, we propose a novel target-aware fusion strategy for multispectral pedestrian detection, named TFDet. The target-aware fusion strategy employs a fusion-refinement paradigm. In the fusion phase, we reveal the parallel- and cross-channel similarities in RGB and thermal features and learn an adaptive receptive field to collect useful information from both features. In the refinement phase, we use a segmentation branch to discriminate the pedestrian features from the background features. We propose a correlation-maximum loss function to enhance the contrast between the pedestrian features and background features. As a result, our fusion strategy highlights pedestrian-related features and suppresses unrelated ones, generating more discriminative fused features. TFDet achieves state-of-the-art performance on two multispectral pedestrian benchmarks, KAIST and LLVIP, with absolute gains of 0.65% and 4.1% over the previous best approaches, respectively. TFDet can easily extend to multiclass object detection scenarios. It outperforms the previous best approaches on two multispectral object detection benchmarks, FLIR and M3FD, with absolute gains of 2.2% and 1.9%, respectively. Importantly, TFDet has comparable inference efficiency to the previous approaches and has remarkably good detection performance even under low-light conditions, which is a significant advancement for ensuring road safety. The code will be made publicly available at https://github.com/XueZ-phd/TFDet.git.

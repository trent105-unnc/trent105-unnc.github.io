---
_hidden: false
title: Scale Optimization Using Evolutionary Reinforcement Learning for Object
Detection on Drone Imagery
authors:
  - Zhang, Jialu
  - Yang, Xiaoying
  - He, Wentao
  - Ren, Jianfeng
  - Zhang, Qian
  - Zhao, Yitian
  - Bai, Ruibin
  - He, Xiangjian
  - Liu, Jiang
authors_orcid:
  - 0000-0001-9539-6789
  - 0000-0002-4062-6724
  - 0000-0002-6319-1639
  - null
  - 0000-0001-9205-1881
  - 0000-0003-4357-4592
  - 0000-0003-1722-568X
  - 0000-0001-8962-540X
  - 0000-0001-6281-6505
year: 2024
doi: https://doi.org/10.1609/aaai.v38i1.27795
openalex_id: W4393158955
venue: Proceedings of the AAAI Conference on Artificial Intelligence
pdf_url: https://ojs.aaai.org/index.php/AAAI/article/download/27795/27623
abstract_page: 1
abstract_screenshot: scale-optimization-using-evolutionary-reinforcement-learning-for-object-detectio.png
keywords:
  - Drone
  - Reinforcement learning
  - Artificial intelligence
  - Scale (ratio)
  - Computer science
  - Computer vision
  - Object (grammar)
  - Machine learning
  - Geography
  - Cartography
  - Biology
---

Object detection in aerial imagery presents a significant challenge due to large scale variations among objects. This paper proposes an evolutionary reinforcement learning agent, integrated within a coarse-to-fine object detection framework, to optimize the scale for more effective detection of objects in such images. Specifically, a set of patches potentially containing objects are first generated. A set of rewards measuring the localization accuracy, the accuracy of predicted labels, and the scale consistency among nearby patches are designed in the agent to guide the scale optimization. The proposed scale-consistency reward ensures similar scales for neighboring objects of the same category. Furthermore, a spatial-semantic attention mechanism is designed to exploit the spatial semantic relations between patches. The agent employs the proximal policy optimization strategy in conjunction with the evolutionary strategy, effectively utilizing both the current patch status and historical experience embedded in the agent. The proposed model is compared with state-of-the-art methods on two benchmark datasets for object detection on drone imagery. It significantly outperforms all the compared methods. Code is available at <https://github.com/UNNC-CV/EvOD/>.

---
_hidden: false
title: Progressively-orthogonally-mapped EfficientNet for action recognition on
time-range-Doppler signature
authors:
  - Yao, Chenglin
  - Ren, Jianfeng
  - Bai, Ruibin
  - Du, Heshan
  - Liu, Jiang
  - Jiang, Xudong
authors_orcid:
  - null
  - 0000-0003-4619-6590
  - 0000-0003-1722-568X
  - 0000-0002-6300-3503
  - 0000-0001-6281-6505
  - 0000-0002-9104-2315
year: 2024
doi: https://doi.org/10.1016/j.eswa.2024.124824
openalex_id: W4400720222
venue: Expert Systems with Applications
abstract_screenshot: 
keywords:
  - Signature (topology)
  - Computer science
  - Range (aeronautics)
  - Action (physics)
  - Doppler effect
  - Action recognition
  - Pattern recognition (psychology)
  - Artificial intelligence
  - Physics
  - Mathematics
  - Materials science
  - Geometry
  - Class (philosophy)
---

Although 2D radar signal representations, such as spectrograms and range-Doppler maps have been widely used for target recognition, 3D time-range-Doppler (TRD) has been less studied, partially because of the difficulties in extracting features from the TRD representation, i.e., shallow 3D neural networks have limited discriminant power, but repeatedly applying 3D convolutions will lead to an oversized 3D network. A hybrid 3D–2D network architecture, Progressively-Orthogonally-Mapped EfficientNet (POMEN), is proposed to address these challenges. More specifically, the proposed POMEN utilizes 3D convolutions in the earlier stages to capture the information embedded in the sparse 3D TRD representation, and to avoid the oversized feature map caused by excessively applying 3D convolutions, we propose to progressively map the 3D features into three sets of 2D features corresponding to the range-time signature, range-Doppler map and time-Doppler signature (spectrogram), respectively. Subsequently, 2D EfficientNet blocks were designed to extract discriminant information from the three sets of 2D feature maps. This hybrid 3D–2D network design effectively extracts features from the 3D TRD representation, thereby avoiding oversized features from full-sized 3D networks and the information loss of 2D networks on 2D representations. Finally, a homogeneous gated fusion network was designed to fuse the three sets of 2D features. The proposed method was evaluated on the UGRS, MIMOGR, and mmWRWD datasets. The experimental results for all datasets demonstrate that the proposed POMEN significantly and consistently outperforms the state-of-the-art models in both 2D and 3D representations.

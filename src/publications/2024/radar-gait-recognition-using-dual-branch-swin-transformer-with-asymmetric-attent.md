---
_hidden: false
title: Radar gait recognition using Dual-branch Swin Transformer with Asymmetric
Attention Fusion
authors:
  - He, Wentao
  - Ren, Jianfeng
  - Bai, Ruibin
  - Jiang, Xudong
authors_orcid:
  - 0000-0002-6319-1639
  - 0000-0003-4619-6590
  - 0000-0003-1722-568X
  - 0000-0002-9104-2315
year: 2024
doi: https://doi.org/10.1016/j.patcog.2024.111101
openalex_id: W4403984679
venue: Pattern Recognition
abstract_screenshot: 
keywords:
  - Artificial intelligence
  - Computer science
  - Gait
  - Computer vision
  - Dual (grammatical number)
  - Fusion
  - Transformer
  - Radar
  - Pattern recognition (psychology)
  - Speech recognition
  - Physical medicine and rehabilitation
  - Engineering
  - Telecommunications
  - Medicine
  - Electrical engineering
  - Art
---

Video-based gait recognition suffers from potential privacy issues and performance degradation due to dim environments, partial occlusions, or camera view changes. Radar has recently become increasingly popular and overcome various challenges presented by vision sensors. To capture tiny differences in radar gait signatures of different people, a dual-branch Swin Transformer is proposed, where one branch captures the time variations of the radar micro-Doppler signature and the other captures the repetitive frequency patterns in the spectrogram. Unlike natural images where objects can be translated, rotated, or scaled, the spatial coordinates of spectrograms and CVDs have unique physical meanings, and there is no affine transformation for radar targets in these synthetic images. The patch splitting mechanism in Vision Transformer makes it ideal to extract discriminant information from patches, and learn the attentive information across patches, as each patch carries some unique physical properties of radar targets. Swin Transformer consists of a set of cascaded Swin blocks to extract semantic features from shallow to deep representations, further improving the classification performance. Lastly, to highlight the branch with larger discriminant power, an Asymmetric Attention Fusion is proposed to optimally fuse the discriminant features from the two branches. To enrich the research on radar gait recognition, a large-scale NTU-RGR dataset is constructed, containing 45,768 radar frames of 98 subjects. The proposed method is evaluated on the NTU-RGR dataset and the MMRGait-1.0 database. It consistently and significantly outperforms all the compared methods on both datasets. The codes are available at: https://github.com/wentaoheunnc/NTU-RGR . • The proposed method could well extract complementary information from both spectrograms and CVDs. • The proposed Swin-T could extract discriminant features with physical meanings. • The proposed asymmetric attention fusion could effectively combine features with known importance. • A large-scale benchmark dataset, NTU-RGR dataset, is developed to advance the radar gait recognition.

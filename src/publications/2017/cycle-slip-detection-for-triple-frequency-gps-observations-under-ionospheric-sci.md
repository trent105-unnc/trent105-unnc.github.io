---
_hidden: false
title: Cycle-slip Detection for Triple-frequency GPS Observations Under Ionospheric
Scintillation
authors:
  - Zhao, Dongsheng
  - Roberts, Gethin Wyn
  - Hancock, Craig
  - Lau, Lawrence
  - Bai, Ruibin
authors_orcid:
  - 0000-0001-7297-8639
  - 0000-0002-3703-981X
  - 0000-0002-9692-0439
  - 0000-0001-8783-9666
  - 0000-0003-1722-568X
year: 2017
doi: https://doi.org/10.33012/2017.15326
openalex_id: W2774670889
venue: Proceedings of the Satellite Division's International Technical Meeting
(Online)/Proceedings of the Satellite Division's International Technical Meeting
(CD-ROM)
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Scintillation
  - Global Positioning System
  - Ionosphere
  - Noise (video)
  - Computer science
  - Algorithm
  - Mathematics
  - Physics
  - Telecommunications
  - Detector
  - Geophysics
---

Correctly detecting cycle slips is essential for the application of the GPS carrier phase observations in precise positioning. However it is still a challenge to detect small cycle slips caused by ionospheric scintillation. Severe ionospheric scintillation can directly affect the noise level in code and phase measurements, reducing the accuracy in detecting cycle slips. Thus, this research propose a novel detection method on the basis of triple-frequency observations and a Hatch-Melbourne-Wübbena (HMW) combination to detect the cycle slips as a result of ionospheric scintillation. By setting the coefficients of the code measurements in HMW combination to float numbers and introducing the extra-wide-lane signal (0,1,-1), the proposed method can minimize the effect of the measurement noise, especially the noise of the code measurement, and eliminate the ionospheric delay. The time-differenced ambiguity is used as the detection value. In order to determine a suitable threshold for both normal cases and ionospheric scintillation cases, two methods are reviewed. These are the sample variation method and the Generalized AutoRegressive Conditional Heteroscedasticity (GARCH) method. During ionospheric scintillation, the former method may have a great number of false alarms, while the latter method may ignore small cycle slips. This paper proposes a GARCH with partly fixed threshold method. In this method, the threshold is estimated by the GARCH method, while the threshold will be fixed to 1 cycle when the value provided by GARCH is larger than 1 cycle. Thus this threshold can take into account all sizes of cycle slips in both observation conditions. The proposed method is tested with triple-frequency data observed from a satellite whose data is affected by scintillation during a period with high elevation angle. Compared to the sample variation method and the GARCH method, the threshold estimated by the GARCH with partly fixed threshold method can detect all the possible cycle slips, including both artificially added and real original ones. All the slips are removed in the results of GARCH with partly fixed method, while some small slips are still left when using the other two methods.

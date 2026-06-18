---
_hidden: false
title: Exploring Operators’ Natural Behaviors to Predict Catheterization Trial Outcomes
in Robot-Assisted Intravascular Interventions
authors:
  - Du, Wenjing
  - Omisore, Olatunji Mumini
  - Duan, Wenke
  - Gan, Lu
  - Akinyemi, Toluwanimi Oluwadara
  - Lee, Boon Giin
  - Liu, Jiang
  - Wang, Lei
authors_orcid:
  - 0000-0002-0571-3398
  - 0000-0002-9740-5471
  - 0000-0001-7509-7538
  - 0000-0002-9641-873X
  - 0000-0002-5598-8971
  - 0000-0001-5743-1010
  - 0000-0001-6281-6505
  - 0000-0002-7033-9806
year: 2022
doi: https://doi.org/10.1109/tmrb.2022.3190211
openalex_id: W4285131102
venue: IEEE Transactions on Medical Robotics and Bionics
abstract_screenshot: 
keywords:
  - Psychological intervention
  - Cardiac catheterization
  - Medicine
  - Intravascular ultrasound
  - Randomized controlled trial
  - Intensive care medicine
  - Computer science
  - Radiology
  - Cardiology
  - Internal medicine
  - Nursing
---

Recently, robotic catheterization has enhanced the outcomes of cardiovascular interventions. Meanwhile, the roles of operator’s natural behavior in the robot-assisted intravascular procedures need more attention. In this paper, operators’ hand activities related to endovascular tool manipulation are studied to explore how operators’ hand motions aid robotic catheterization. Controlled in-vivo studies were set up to acquire four types of operators’ natural behaviors during 60 robotic catheterization trials, and activity signals were recorded to proxy operators’ skills. A multi-layer recognition model is developed for recognizing the hand motions made during the procedures. The model operates convolution and dense layers to multiplex features extracted in single to multiple data modalities. Starting with initial-decision layer, the model is built to train and classify catheterization trials recorded from nine interventionists as successful and unsuccessful. Next, a motion-decision layer is built to recognize interventionists’ hand motions using features from different data modalities. Lastly, a mixed-decision layer is integrated to recognize the motion patterns of the successful and unsuccessful trials. Results show that the initial-decision layer has an accuracy of 99.44% in predicting the catheterization trials as successful and unsuccessful, while the motion-decision layer shows accuracies of 98.55% and 98.44% in classifying the seven types of hand motions that operators engage during successful and unsuccessful trials, respectively. Also, the mixed-decision layer has an accuracy of 93.96% in recognizing 14 mixed patterns from both trial classes. This study provides an objective template for skill training and evaluation in robot-assisted catheterization.

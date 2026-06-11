---
_hidden: false
title: Incorporating Online Learning Into MCTS-Based Intention Progression
authors:
  - Song, Chengcheng
  - Yao, Yuan
  - Chan, Sixian
authors_orcid:
  - 0009-0009-7444-7597
  - 0000-0002-2705-6245
  - 0000-0001-8916-1174
year: 2024
doi: https://doi.org/10.1109/access.2024.3390796
openalex_id: W4394938979
venue: IEEE Access
pdf_url: https://ieeexplore.ieee.org/ielx7/6287639/6514899/10504897.pdf
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Variety (cybernetics)
  - Adaptability
  - Deliberation
  - Limiting
  - Artificial intelligence
  - Machine learning
---

Agents have been applied to a wide variety of fields, including power systems and spacecraft. Belief-Desire-Intention (BDI) agents, as one of the most widely used and researched architectures, have the advantage of being able to pursue multiple goals in parallel. The problem of deciding “what to do” next at each of the agent's deliberation cycle is therefore critical for BDI agents, which is defined as the intention progression problem (IPP). Among all existing approaches to IPP, the majority of approaches have overlooked the significance of runtime historical data, thereby limiting the adaptability and decision-making capabilities of agents to some extent. In this paper, we propose to incorporate online learning into the current state-of-the- art intention progression approach <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">S<sub>A</sub></i> to overcome the limitation that <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">S<sub>A</sub></i> cannot utilize historical data to guide the decision-making of agents. This approach not only prevents <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">S<sub>A</sub></i> from consuming computational resources on ineffective and inefficient simulations, but also significantly improves the execution efficiency of the agent. Especially when dealing with large-scale problem domains, this improvement significantly enhances the planning capability of the agents. In particular, we have proposed the <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">SA<sub>Q</sub></i> and <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">SA<sub>L</sub></i> schedulers, both of which can learn how to generate “reasonable” rollouts during the simulation phase of MCTS based on historical simulation data at run time.We compare the performance of our approach with the state-of-the-art <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">S<sub>A</sub></i> in a range of scenarios of increasing difficulty. The results demonstrate that our approaches outperform <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">S<sub>A</sub></i> , both in terms of the number of goals achieved and the computational overhead required.

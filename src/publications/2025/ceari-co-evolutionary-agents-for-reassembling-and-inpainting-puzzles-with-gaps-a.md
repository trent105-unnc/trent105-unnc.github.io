---
_hidden: false
title: "CEARI: Co-Evolutionary Agents for Reassembling and Inpainting Puzzles with Gaps
and Missing Pieces"
authors:
  - Song, Xingke
  - Shangguan, Jianxu
  - Li, Yiran
  - Zhang, Jialu
  - Ren, Jianfeng
  - Bai, Ruibin
  - Chen, Xin
  - Jiang, Xudong
authors_orcid:
  - 0000-0003-1022-6823
  - 0009-0008-5280-9182
  - 0000-0002-1632-4531
  - 0000-0001-9539-6789
  - 0000-0003-4619-6590
  - 0000-0003-1722-568X
  - 0000-0002-3685-0854
  - 0000-0002-9104-2315
year: 2025
doi: https://doi.org/10.1145/3746027.3754695
openalex_id: W4415535492
venue: 
abstract_screenshot: 
keywords:
  - Inpainting
  - Sequence (biology)
  - Quality (philosophy)
  - Missing data
  - Perception
  - Image (mathematics)
---

Puzzle solving has recently become a popular research topic. Existing solvers often overlook puzzles with missing pieces. The missing pieces, together with gaps between pieces, pose significant challenges, amplified by a large solution space. To tackle the challenges, we propose Co-Evolutionary Agents for Reassembling and Inpainting (CEARI), one agent to inpaint missing contents and the other to reassemble the puzzle, with a shared perception network to perceive the puzzle status. The reassembly agent utilizes an evolutionary algorithm to explore the large solution space, to discover a sequence of fragment-swapping actions to efficiently reassemble the puzzle, while the inpainting agent evolves from using a local outpainting network at the early stage to using a global inpainting network at the latter stage. Furthermore, a co-evolutionary training paradigm is designed to iteratively evolve the two agents in a coherent and collaborative manner, improving reassembly accuracy and inpainting quality simultaneously. Experimental results on three datasets show that CEARI largely outperforms state-of-the-art methods in terms of both reassembly accuracy and inpainting quality.

# 计划：将 raw/ 宣传册内容填充到 markuxt 网站

## 概览

将 `raw/` 目录下 28 个 Markdown 文件（数字港口技术实验室宣传册）的内容，按照 markuxt 模板的结构映射填充到 `src/` 目录。

## 用户确认的决策

- **Publications**：暂留空占位（raw 没有具体论文数据）
- **无法映射的章节**（简介、UNNC、场地、设备等）：全部作为 News 文章

## 内容映射方案

### 1. Members ← raw/02-team/members.md

把 20 位核心成员拆分为独立的成员 Markdown 文件，全部归入 `staff` 类别。

- 目标目录：`src/members/staff/`
- 每位成员一个 `.md` 文件 + 头像图片到 `assets/`
- frontmatter 字段：name, role, title, email（如有）, image, category: staff, order, interests
- 删除现有的 `demo-member.md`
- 20 位成员列表：
  1. 白瑞斌 Ruibin Bai（主任，order:1）
  2. Alain Chong（副主任，order:2）
  3. 任剑锋 Jianfeng Ren（方向带头人）
  4. 翁莹 Ying Weng
  5. 何祥健 Sean He
  6. 卢正 Zheng Lu
  7. 曹聪 Cong Cao
  8. Dave Towey
  9. Anthony Belloti
  10. 华秀萍 Xiuping Hua
  11. Boon Giin Lee
  12. Fazl Ullah Khan
  13. 薛宁 Ning Xue
  14. 张茜 Qian Zhang
  15. 李家炜 Jiawei Li
  16. Matthew Pike
  17. 于恒 Heng Yu
  18. 姚远 Yuan Yao
  19. 崔天翔 Tianxiang Cui
  20. 杜何珊 Heshan Du
  21. 靳欢 Huan Jin

### 2. Projects ← raw/10-application-cases/

把 8 个应用案例作为独立项目。

- 目标目录：`src/projects/<project-slug>/index.md` + `assets/`
- frontmatter：title, description, status: maintained, year, image, funded: true
- 8 个项目：
  1. `ningbo-port-scheduling` — 宁波港港口作业调度优化
  2. `daxie-smart-screen` — 宁波大榭招商国际码头智慧大屏仿真方案
  3. `simplex-ai` — Simplex AI 简优数字孪生优化系统
  4. `safe-production-digital-twin` — 安全生产数字孪生系统
  5. `building-emergency` — 楼宇智能应急仿真系统
  6. `csd-segmentation` — 剖宫产切口憩室超声图像分割
  7. `agv-scheduling` — 数字孪生 AGV 调度优化仿真
  8. `energy-harvesting` — 基于能量收集的 AI 边缘计算

### 3. Positions ← raw/11-academic-programs/

把博士和硕士招生作为两个 position 文件。

- 目标目录：`src/positions/`
- 更新现有的 `readme.md`（去掉 `_hidden`）或创建新文件
- 两个 position：
  1. `doctoral.md` — 博士招生
  2. `masters.md` — 硕士招生
- frontmatter：title, description, type, year, requirements, email

### 4. Publications — 暂留空占位

- 保留 `src/publications/readme.md`（_hidden: true）不动
- 删除时如果 `demo-member.md` 是模板残留也清理
- 栏目显示"暂无论文"

### 5. News — 放入所有无法映射的章节

把以下 raw 章节转为 News 文章（带日期），这些是 markuxt 中唯一适合长篇介绍性内容的栏目。

| News 文件名 | 来源 | 标题 | 日期 |
|---|---|---|---|
| `2025-01-lab-introduction.md` | 01-introduction | 数字港口技术实验室简介 | 2025-01-15 |
| `2025-02-team-overview.md` | 02-team/overview | 团队介绍与组织结构 | 2025-02-01 |
| `2025-03-achievements.md` | 03-achievements/patents+publications | 成果概览：专利、软著与奖项 | 2025-03-01 |
| `2025-04-unnc.md` | 04-unnc | 宁波诺丁汉大学介绍 | 2025-04-01 |
| `2025-05-cooperation-partners.md` | 05-cooperation-partners | 联合单位与合作机构 | 2025-05-01 |
| `2025-06-research-space.md` | 06-research-space | 科研场地 | 2025-06-01 |
| `2025-07-research-equipment.md` | 07-research-equipment | 科研仪器与设备 | 2025-07-01 |
| `2025-08-international-cooperation.md` | 08-international-cooperation（合并5个子文件） | 国际交流与合作 | 2025-08-01 |
| `2025-09-core-technologies.md` | 09-core-technologies | 核心技术与研究方向 | 2025-09-01 |

- frontmatter：title, date, tags, description, image
- 每个 news 文件复制对应的 assets 图片
- 删除现有的 `welcome.md` 占位文件

### 6. 配置更新

#### 6a. `nuxt.config.ts` — appConfig 更新

- **logo**：保持 `/images/default.jpg`（没有专门 logo 文件）或用实验室图片
- **contact**：
  - email: `DigitalPort.Lab@nottingham.edu.cn`
  - externalUrl: `https://www.nottingham.edu.cn`
  - externalLabelKey: `footer.universityLink`
- **carousel**：
  - 使用 `raw/01-introduction/assets/` 中的实验室场景图片
  - 复制 3-5 张到 `src/public/images/` 并更新配置
- **researchAreas**：改为实验室 4 大方向
  - `{ icon: 'IconSearch', titleKey: 'research.scheduling', descKey: 'research.schedulingDesc' }`
  - `{ icon: 'IconRobot', titleKey: 'research.supplyChain', descKey: 'research.supplyChainDesc' }`
  - `{ icon: 'IconNeural', titleKey: 'research.vision', descKey: 'research.visionDesc' }`
  - `{ icon: 'IconAssemblyLine', titleKey: 'research.intelligentProcess', descKey: 'research.intelligentProcessDesc' }`

#### 6b. `src/i18n/en.json` — 英文翻译更新

- 所有 `"您的实验室名称"` → `"Digital Port Technologies Lab"`
- 所有 `"您的大学"` → `"University of Nottingham Ningbo China"`
- `"您的实验室主任"` → `"Prof. Ruibin Bai"`
- research areas 改为 4 大方向的真实描述
- 新增 `home.viewAllNews` 和 `members.orcid` key

#### 6c. `src/i18n/zh-CN.json` — 中文翻译更新

- 同步更新所有占位符为真实内容
- 研究方向改为实验室的 4 大方向

### 7. 图片资源处理

- 复制成员头像到 `src/members/staff/assets/`
- 复制项目图片到各 `src/projects/<slug>/assets/`
- 复制 news 图片到各 news 对应目录（或 `src/public/images/news/`）
- 复制实验室场景图片到 `src/public/images/` 用于 carousel
- 使用 `cp -r` 批量复制

## 执行顺序

1. **图片资源复制** — 先把所有 raw/assets 复制到 src 对应位置
2. **创建 Members 文件** — 20+ 个成员 .md
3. **创建 Projects 文件** — 8 个项目目录
4. **创建 Positions 文件** — 2 个招生信息
5. **创建 News 文件** — 9 篇新闻文章
6. **更新 i18n** — en.json + zh-CN.json
7. **更新 nuxt.config.ts** — appConfig 配置
8. **清理** — 删除 demo-member.md、welcome.md
9. **验证** — 运行 dev server 检查

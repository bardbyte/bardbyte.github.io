# AI Ad Agency — Design & Architecture Plan

## Overview

A new page (`ai-ad-agency.html`) for the portfolio site that showcases an **AI-powered Ad Agency** — a multi-agent system where specialized AI agents collaborate to produce end-to-end advertising campaigns. The page visually maps out the agency's organizational structure, agent roles, data flows, and sub-agent hierarchies using the existing site's design language (tiles, accent colors, light/dark mode).

---

## 1. Agency Structure — Agent Hierarchy

```
                    ┌─────────────────────────┐
                    │   AGENCY ORCHESTRATOR    │
                    │   (Chief AI Officer)     │
                    │   Routes briefs, manages │
                    │   workflow & deadlines   │
                    └────────────┬────────────┘
                                 │
        ┌────────────┬───────────┼───────────┬────────────┐
        ▼            ▼           ▼           ▼            ▼
   ┌─────────┐ ┌──────────┐ ┌─────────┐ ┌─────────┐ ┌──────────┐
   │STRATEGY │ │CREATIVE  │ │ MEDIA   │ │ANALYTICS│ │  CLIENT  │
   │ DIRECTOR│ │ DIRECTOR │ │ PLANNER │ │  ENGINE │ │ LIAISON  │
   └────┬────┘ └────┬─────┘ └────┬────┘ └────┬────┘ └────┬─────┘
        │           │            │            │           │
   Sub-agents  Sub-agents   Sub-agents   Sub-agents  Sub-agents
   (below)     (below)      (below)      (below)     (below)
```

---

## 2. Core Agents & Their Sub-Agents

### Agent 1: Strategy Director (Yellow)
**Role:** Market research, audience segmentation, competitive analysis, campaign positioning.

| Sub-Agent | Function |
|-----------|----------|
| Market Researcher | Scrapes & synthesizes market trends, industry reports |
| Audience Profiler | Builds psychographic & demographic audience segments |
| Competitor Analyst | Monitors competitor campaigns, pricing, positioning |
| Trend Forecaster | Predicts emerging trends using time-series analysis |

### Agent 2: Creative Director (Orange)
**Role:** Generates all creative assets — copy, visuals, video scripts, brand voice.

| Sub-Agent | Function |
|-----------|----------|
| Copywriter | Headlines, body copy, taglines, CTAs |
| Visual Designer | Image generation prompts, layout concepts, mood boards |
| Video Scripter | Storyboards, scripts, shot lists for video ads |
| Brand Voice Guardian | Ensures tone consistency across all outputs |
| A/B Variant Generator | Creates multiple creative variations for testing |

### Agent 3: Media Planner (Blue)
**Role:** Channel selection, budget allocation, scheduling, bid strategy.

| Sub-Agent | Function |
|-----------|----------|
| Channel Selector | Recommends optimal platforms (Google, Meta, TikTok, etc.) |
| Budget Optimizer | Allocates spend across channels using optimization models |
| Schedule Planner | Dayparting, flight dates, frequency capping |
| Bid Strategist | Sets bidding rules (CPA, ROAS, max CPC targets) |

### Agent 4: Analytics Engine (Green)
**Role:** Real-time performance tracking, attribution, optimization recommendations.

| Sub-Agent | Function |
|-----------|----------|
| Performance Tracker | Monitors KPIs (CTR, CPA, ROAS, impressions) in real-time |
| Attribution Modeler | Multi-touch attribution across channels |
| Anomaly Detector | Alerts on spend spikes, CTR drops, bot traffic |
| Report Generator | Produces automated dashboards and client reports |
| Optimization Recommender | Suggests bid/budget/creative changes based on data |

### Agent 5: Client Liaison (Pink)
**Role:** Translates client briefs into agent-readable tasks, manages feedback loops.

| Sub-Agent | Function |
|-----------|----------|
| Brief Parser | Converts natural language briefs into structured campaign specs |
| Feedback Router | Routes client revisions to the correct agent |
| Approval Manager | Manages review/approval workflows before launch |
| Status Reporter | Sends progress updates and timeline projections |

---

## 3. Workflow / Data Flow

```
Client Brief
    │
    ▼
[Client Liaison] ──parses──▶ Structured Brief
    │
    ▼
[Agency Orchestrator] ──distributes tasks──▶
    │
    ├──▶ [Strategy Director] ──▶ Audience + Market Insights
    │         │
    │         ▼
    ├──▶ [Creative Director] ──▶ Ad Copy + Visuals + Variants
    │         │
    │         ▼
    ├──▶ [Media Planner] ──▶ Channel Plan + Budget + Schedule
    │
    ▼
[Agency Orchestrator] ──assembles──▶ Complete Campaign Plan
    │
    ▼
[Client Liaison] ──presents for approval──▶ Client
    │
    ▼ (on approval)
[Media Planner] ──launches──▶ Live Campaign
    │
    ▼
[Analytics Engine] ──monitors──▶ Real-time Performance
    │
    ├──▶ [Optimization Recommender] ──▶ Adjustments
    ├──▶ [Report Generator] ──▶ Client Dashboards
    └──▶ [Anomaly Detector] ──▶ Alerts
```

---

## 4. Page Design — Visual Implementation

### Layout Approach
- New standalone page: `ai-ad-agency.html`
- Reuses `stylesheet.css` + new section-specific styles in `agency.css`
- Same header/footer, theme toggle, and design tokens as main site

### Visual Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Title "AI Ad Agency" with tagline. Animated gradient background tile |
| 2 | **How It Works** | 4-step horizontal flow (Brief → Strategy → Create → Launch & Optimize) |
| 3 | **The Agents** | 5 agent cards in a grid. Each card: icon, name, role, color-coded accent. Click/hover expands to show sub-agents |
| 4 | **Workflow Diagram** | Visual flowchart showing data flow between agents (CSS-drawn connections) |
| 5 | **Agent Detail Panels** | Expandable sections for each agent showing sub-agent table with functions |
| 6 | **Tech Stack** | Tags showing underlying tech (LLMs, APIs, tools) |
| 7 | **CTA** | "Build Your AI Agency" call-to-action linking back to portfolio contact |

### Color Mapping (using existing CSS variables)
- **Orchestrator:** `--accent-yellow` (#f6be0c)
- **Strategy Director:** `--accent-yellow` (lighter variant)
- **Creative Director:** `--accent-orange` (#ff542f)
- **Media Planner:** `--accent-blue` (#3338dd)
- **Analytics Engine:** `--accent-green` (#42a853)
- **Client Liaison:** `--accent-pink` (#f3a3d5)

### Interactions
- Agent cards have hover states revealing sub-agents
- Clickable cards expand to full detail panels
- Workflow diagram uses CSS animations for data flow arrows
- Fully responsive: grid → stacked on mobile
- Dark mode fully supported via existing CSS variable system

---

## 5. File Changes

| File | Action | Description |
|------|--------|-------------|
| `ai-ad-agency.html` | **Create** | New page with all sections |
| `agency.css` | **Create** | Agency-specific styles (grid, cards, flow diagram, animations) |
| `agency.js` | **Create** | Card expand/collapse interactions, flow animations |
| `index.html` | **Edit** | Add navigation link to the AI Ad Agency page |
| `assets/` | **Create** | SVG icons for each agent role (if needed, or use inline SVGs) |

---

## 6. Optimization Principles Baked Into the Design

1. **Parallel Execution** — Strategy, Creative, and Media agents work concurrently after brief parsing
2. **Feedback Loops** — Analytics feeds back into Creative (variant testing) and Media (bid optimization)
3. **Specialization** — Each sub-agent has a single responsibility, reducing error surface
4. **Hierarchical Delegation** — Orchestrator only talks to Directors, Directors manage sub-agents
5. **Human-in-the-Loop** — Client Liaison ensures human approval gates before launch
6. **Continuous Optimization** — Analytics Engine runs post-launch for ongoing improvement

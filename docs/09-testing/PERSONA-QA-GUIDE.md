# Persona Q&A Guide

**Version**: V20-OP3
**Last Updated**: January 13, 2026
**Purpose**: Reference guide for demo questions and expected widget responses per mode and persona

---

## Overview

This document contains tested Q&A scenarios for all 10 personas across 3 modes. Use these as reference for demos, testing, and refinement.

---

## Government Mode

### COR (Contracting Officer's Representative)

**Persona**: Alexa Johnson
**Role**: Contracting Officer's Representative
**Badge**: COR

| # | Sample Query | Expected Widget | Key Data Points |
|---|--------------|-----------------|-----------------|
| 1 | "Show contract status and vendor performance" | Contract Dashboard | Contract status, vendor metrics |
| 2 | "Check compliance dashboard" | Compliance Dashboard | Compliance status, checkmarks |
| 3 | "Review budget tracking" | Budget Tracker | $2.4M budget tracking |
| 4 | "Show deliverables review" | Deliverables Review | 8 pending deliverables |

**Quick Actions Available**:
- Contract Status (Active)
- Vendor Performance (92%)
- Compliance Dashboard (✓)
- Budget Tracking ($2.4M)
- Deliverables Review (8)

---

### Program Manager

**Persona**: Marcus Thompson
**Role**: Program Manager
**Badge**: PM

| # | Sample Query | Expected Widget | Key Data Points |
|---|--------------|-----------------|-----------------|
| 1 | "Show project milestone status and deliverables" | Milestone Tracker | Milestone progress, dates |
| 2 | "Review program budget" | Budget Dashboard | Budget allocation, spend |
| 3 | "Check resource allocation" | Resource Allocation | Team assignments |
| 4 | "Show risk assessment" | Risk Dashboard | Risk items, mitigation |

**Quick Actions Available**:
- Program Milestones
- Budget Overview
- Resource Allocation
- Risk Assessment
- Stakeholder Updates

---

### Stakeholder Lead

**Persona**: Patricia Chen
**Role**: Stakeholder Lead
**Badge**: LEAD

| # | Sample Query | Expected Widget | Key Data Points |
|---|--------------|-----------------|-----------------|
| 1 | "Show stakeholder engagement metrics and communication status" | Engagement Dashboard | Engagement scores, communication logs |
| 2 | "Review meeting schedule" | Meeting Calendar | Upcoming stakeholder meetings |
| 3 | "Check action items" | Action Items List | Pending actions by stakeholder |
| 4 | "Show feedback summary" | Feedback Summary | Stakeholder feedback analysis |

**Quick Actions Available**:
- Stakeholder Engagement
- Meeting Schedule
- Action Items
- Feedback Summary
- Communication Log

---

## Project Mode

### Project Manager

**Persona**: Michael Roberts
**Role**: Project Manager
**Badge**: PM

| # | Sample Query | Expected Widget | Key Data Points |
|---|--------------|-----------------|-----------------|
| 1 | "Show sprint status and resource allocation" | Sprint Dashboard | Sprint progress, team capacity |
| 2 | "Review project timeline" | Timeline View | Gantt-style project timeline |
| 3 | "Check blockers and risks" | Blockers Dashboard | Active blockers, risk items |
| 4 | "Show team velocity" | Velocity Chart | Sprint velocity trends |

**Quick Actions Available**:
- Sprint Status
- Resource Allocation
- Timeline View
- Blockers & Risks
- Team Velocity

---

### Service Team Lead

**Persona**: Sarah Martinez
**Role**: Service Team Lead
**Badge**: LEAD

| # | Sample Query | Expected Widget | Key Data Points |
|---|--------------|-----------------|-----------------|
| 1 | "Show team workload distribution and capacity" | Team Workload Dashboard | Team member assignments, capacity % |
| 2 | "Review SLA compliance" | SLA Dashboard | SLA metrics, breaches |
| 3 | "Check escalations" | Escalation Queue | Pending escalations |
| 4 | "Show team performance" | Team Performance | Individual metrics |

**Quick Actions Available**:
- Team Workload
- SLA Compliance
- Escalation Queue
- Team Performance
- Capacity Planning

---

### Service Team Member

**Persona**: James Wilson
**Role**: Service Team Member
**Badge**: MEMBER

| # | Sample Query | Expected Widget | Key Data Points |
|---|--------------|-----------------|-----------------|
| 1 | "Show my assigned tasks and priorities" | My Tasks List | Personal task queue, priorities |
| 2 | "Check my schedule" | Personal Schedule | Today's meetings, deadlines |
| 3 | "Review my metrics" | Personal Metrics | Individual performance stats |
| 4 | "Show knowledge base" | Knowledge Search | Relevant KB articles |

**Quick Actions Available**:
- My Tasks
- Today's Schedule
- My Metrics
- Knowledge Base
- Time Tracking

---

## ATC Mode

### Executive (C-Level)

**Persona**: Jennifer Anderson
**Role**: Chief Executive Officer
**Badge**: C-LEVEL

| # | Sample Query | Expected Widget | Key Data Points |
|---|--------------|-----------------|-----------------|
| 1 | "Show me executive summary and customer health metrics" | ATC Executive Summary | Client Satisfaction (92%, +5%), Revenue Growth ($2.4M, +18%), SLA Performance (89%, -2%), Team Efficiency (3.8h, -0.7h) |
| 2 | "Show board metrics" | Board Metrics Dashboard | Ready status, key KPIs |
| 3 | "Review high-value accounts" | High-Value Accounts | 18 accounts, ARR breakdown |
| 4 | "Check strategic initiatives" | Strategic Initiatives | 8 active initiatives |
| 5 | "Show churn risk" | Churn Risk List | 5 at-risk accounts |

**Quick Actions Available**:
- Live Tickets Dashboard (New)
- SLA Performance (92%)
- Churn Risk (5)
- Executive Summary (Q4)
- Board Metrics (Ready)
- High-Value Accounts (18)
- Strategic Initiatives (8)

**Key Insights Shown**:
- Enterprise clients driving 67% of revenue growth
- AI automation reduced support costs by $180K (22% efficiency gain)
- Two Fortune 500 prospects in final negotiation ($800K ARR potential)

**Recommended Actions**:
- HIGH: Address enterprise SLA compliance gap
- MEDIUM: Review expansion sales pipeline with CSM team

---

### Manager (CS Manager)

**Persona**: David Miller
**Role**: Customer Support Operations Manager
**Badge**: CS MANAGER

| # | Sample Query | Expected Widget | Key Data Points |
|---|--------------|-----------------|-----------------|
| 1 | "Show team workload dashboard and agent performance comparison" | Agent Performance Comparison | Team Average: 47 tickets, 4.2h resolution, 87% compliance, 4.3 CSAT |
| 2 | "Show most slacking agent" | Agent Detail (Needs Attention) | Performance improvement candidates |
| 3 | "Show top performing agent" | Agent Detail (Top Performer) | Star performer metrics |
| 4 | "Check SLA breach alerts" | SLA Breach List | 3 active breaches |
| 5 | "Review escalation queue" | Escalation Queue | 7 pending escalations |

**Quick Actions Available**:
- Live Tickets Dashboard (New)
- Priority Customers (12)
- Agent Performance (This Week)
- Most Slacking Agent (!)
- Top Performing Agent (⭐)
- Workload Balance (View)
- SLA Breach Alerts (3)
- Team Capacity (78%)
- Escalation Queue (7)
- Team Budget ($450K)

**Top Performers Shown**:
1. Sarah Chen - 68 resolved, 3.1h resolution, 93% compliance, 4.6 CSAT
2. Mike Johnson - 61 resolved, 3.5h resolution, 89% compliance, 4.4 CSAT
3. Lisa Wong - 58 resolved, 3.8h resolution, 86% compliance, 4.3 CSAT

**Needs Attention**:
- Tom Anderson - 28 resolved (-40% vs avg), 6.8h resolution, 68% compliance
- Coaching: Pair with Sarah Chen, time management training

---

### Support Agent

**Persona**: Christopher Hayes
**Role**: Senior Support Engineer
**Badge**: SUPPORT AGENT

| # | Sample Query | Expected Widget | Key Data Points |
|---|--------------|-----------------|-----------------|
| 1 | "Show ticket TICK-001 details and find similar tickets" | Resolution Patterns | 47 tickets analyzed, 22 min avg resolution, 96% success rate |
| 2 | "Search knowledge base for password reset" | Knowledge Base Search | Relevant KB articles |
| 3 | "Draft response for angry customer" | Response Composer | AI-generated response draft |
| 4 | "Show my open tickets" | My Tickets List | 18 open tickets |
| 5 | "Check escalated tickets" | Escalation Queue | 5 escalated to me |

**Quick Actions Available**:
- Live Tickets Dashboard (New)
- My Open Tickets (18)
- AI-Resolved Today (23)
- Escalated to Me (5)
- Today's Meetings (3)
- Jira Sync Status (✓)
- High-Priority Alerts (7)

**Resolution Pattern Breakdown**:
- Authentication/Token Issues: 68% (32 tickets, 12 min avg)
- Permissions/Scope Issues: 17% (8 tickets, 35 min avg)
- API Rate Limiting: 11% (5 tickets, 45 min avg)
- Configuration Errors: 4% (2 tickets, 28 min avg)

**Agent Strengths**:
- Fastest at diagnosing token expiration (avg 3 min)
- Clear step-by-step instructions reduce back-and-forth
- Proactive KB article sharing increases FCR

---

### CSM (Customer Success Manager)

**Persona**: Jordan Taylor
**Role**: Customer Success Manager
**Badge**: CSM

| # | Sample Query | Expected Widget | Key Data Points |
|---|--------------|-----------------|-----------------|
| 1 | "Show customer health scores and renewal pipeline status" | Client Health Dashboard | 24 customers: 1 Excellent, 2 Good, 1 At Risk, 1 Critical |
| 2 | "Check product adoption metrics" | Product Adoption Dashboard | Adoption rates by customer |
| 3 | "Review upsell opportunities" | Upsell Opportunities | $2.4M pipeline |
| 4 | "Show customer feedback" | Customer Feedback/NPS | NPS scores, feedback summary |
| 5 | "Check renewal pipeline" | Renewal Pipeline | 12 upcoming renewals |

**Quick Actions Available**:
- Customer Health Scores (Live)
- Product Adoption (Metrics)
- Renewal Pipeline (12)
- Customer Feedback (NPS)
- Upsell Opportunities ($2.4M)
- Product Roadmap (Q1)
- Customer Meetings (8)

**Customer Health Breakdown**:

| Customer | Status | Score | ARR | Key Risk Factors |
|----------|--------|-------|-----|------------------|
| Acme Corporation | Excellent | 92 | $450K | None |
| TechFlow Industries | Good | 78 | $320K | Support ticket volume +15% |
| Global Solutions Ltd | At Risk | 54 | $580K | Adoption -20%, 5 critical tickets, stakeholder left |
| DataDrive Systems | Critical | 35 | $890K | Payment 45 days overdue, usage -65%, competitor eval |
| Innovate Inc | Good | 85 | $275K | None |

**Health Metrics per Customer**:
- Product Adoption %
- Support Health %
- Payment Health %
- Renewal Likelihood %

---

## Refinement Notes

### Queries to Add/Refine

_Use this section to track queries that need refinement or new scenarios to add._

| Mode | Persona | Query | Issue/Enhancement |
|------|---------|-------|-------------------|
| | | | |
| | | | |
| | | | |

### Widget Improvements

_Track widget enhancements based on testing feedback._

| Widget | Current Behavior | Desired Behavior |
|--------|-----------------|------------------|
| | | |
| | | |

---

## Testing Checklist

- [x] Government Mode - COR
- [x] Government Mode - Program Manager
- [x] Government Mode - Stakeholder Lead
- [x] Project Mode - Project Manager
- [x] Project Mode - Service Team Lead
- [x] Project Mode - Service Team Member
- [x] ATC Mode - Executive
- [x] ATC Mode - Manager
- [x] ATC Mode - Support
- [x] ATC Mode - CSM

---

---

## Cross-Compatibility Analysis

### Query Compatibility Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Full Access - Query works with full data |
| ⚠️ | Limited - Generic/partial data shown |
| ❌ | No Access - Query fails or shows error |
| 🚫 RBAC | Explicitly Blocked - Returns error message |

---

### Universal Queries (Safe for ALL Personas)

These queries work reliably across **any mode and any persona**:

| Query Pattern | Widget Type | Notes |
|---------------|-------------|-------|
| "Show my tickets" / "my open tickets" | ticket-list | All personas |
| "Show ticket #XXX" / "TICK-001" | live-ticket-detail | Extracts ticket number |
| "Search knowledge base for [topic]" | knowledge-base-search | All personas |
| "Open KB-XXX" | knowledge-article | Extracts KB ID |
| "Schedule a meeting" | meeting-scheduler | All personas |

---

### Mode-Universal Queries (Work Within Same Mode)

#### Government Mode - All 3 Personas

| Query | COR | Program Manager | Stakeholder Lead |
|-------|:---:|:---------------:|:----------------:|
| "Show my tickets" | ✅ | ✅ | ✅ |
| "Schedule a meeting" | ✅ | ✅ | ✅ |
| "Search knowledge base" | ✅ | ✅ | ✅ |

#### Project Mode - All 3 Personas

| Query | Project Manager | Service Team Lead | Service Team Member |
|-------|:---------------:|:-----------------:|:-------------------:|
| "Show my tasks" | ✅ | ✅ | ✅ |
| "Show blockers" | ✅ | ✅ | ✅ |
| "Search knowledge base" | ✅ | ✅ | ✅ |

#### ATC Mode - All 4 Personas

| Query | Executive | Manager | Support | CSM |
|-------|:---------:|:-------:|:-------:|:---:|
| "Show my tickets" | ⚠️ | ✅ | ✅ | ⚠️ |
| "Show SLA performance" | ✅ | ✅ | ⚠️ | ⚠️ |

---

### Persona-Specific Queries (ONLY Work for Designated Persona)

#### Government Mode Restrictions

| Query | COR | Program Manager | Stakeholder Lead | Reason |
|-------|:---:|:---------------:|:----------------:|--------|
| Contract status | ✅ | ⚠️ | ❌ | COR-only data |
| Vendor performance | ✅ | ✅ | ❌ | Requires vendor access |
| Program health | ❌ | ✅ | ⚠️ | PM-only widget |
| Stakeholder engagement | ❌ | ⚠️ | ✅ | SL-only widget |
| Requirements tracking | ❌ | ❌ | ✅ | SL-only data |

#### Project Mode Restrictions

| Query | Project Manager | Service Team Lead | Service Team Member | Reason |
|-------|:---------------:|:-----------------:|:-------------------:|--------|
| Sprint burndown | ✅ | ❌ | ❌ | PM-only widget |
| Team velocity | ✅ | ⚠️ | ❌ | PM-only data |
| Code quality | ⚠️ | ✅ | ✅ | STL primary |
| Deployment pipeline | ❌ | ✅ | ❌ | STL-only widget |

#### ATC Mode Restrictions

| Query | Executive | Manager | Support | CSM | Reason |
|-------|:---------:|:-------:|:-------:|:---:|--------|
| Executive summary | ✅ | ❌ | 🚫 RBAC | ❌ | C-Level only |
| Board metrics | ✅ | ❌ | 🚫 RBAC | ❌ | C-Level only |
| Team workload | ⚠️ | ✅ | ❌ | ❌ | Manager-only |
| Agent performance | ✅ | ✅ | ❌ | ❌ | Manager+ only |
| Customer health | ✅ | ⚠️ | ❌ | ✅ | CSM primary |
| Churn risk | ✅ | ❌ | 🚫 RBAC | ✅ | CSM/Exec only |
| Renewal pipeline | ❌ | ❌ | ❌ | ✅ | CSM-only |
| Upsell opportunities | ❌ | ❌ | ❌ | ✅ | CSM-only |
| Knowledge base | ❌ | ⚠️ | ✅ | ❌ | Support primary |
| Response composer | ❌ | ⚠️ | ✅ | ❌ | Support primary |

---

### RBAC-Blocked Queries

These queries are **explicitly blocked** for Support Agent personas with error messages:

| Query Pattern | Blocked For | Error Message |
|---------------|-------------|---------------|
| "executive summary" | atc-support | "Only available to C-Level executives" |
| "board metrics" | atc-support | "Only available to C-Level executives" |
| "churn risk" | atc-support | "Only available to C-Level executives" |
| "at-risk customers" | atc-support | "Only available to C-Level executives" |
| "customer retention" | atc-support | RBAC blocked |

**Note**: These restrictions only apply to ATC Support. Government COR can access executive summary.

---

### Cross-Mode Query Conflicts

**DO NOT** use these queries in the wrong mode:

| Query | Works In | Fails In | Failure Mode |
|-------|----------|----------|--------------|
| "Contract performance" | Government | Project, ATC | No data error |
| "Sprint burndown" | Project | Government, ATC | No data error |
| "Client health dashboard" | ATC | Government, Project | No data error |
| "Vendor compliance" | Government | Project, ATC | No data error |
| "Code quality" | Project | Government, ATC | No data error |

---

## Related Documentation

- [Demo Guides](/docs/09-testing/demo-guides/)
- [Widget Reference](/docs/07-components/WIDGET-REFERENCE.md)
- [Persona Configuration](/docs/06-features/MULTI-PERSONA-SYSTEM.md)

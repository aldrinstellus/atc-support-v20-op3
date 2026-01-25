# Context.md - V20-OP3 Current State

**Last Updated**: 2025-01-25
**Version**: 20.0.3
**Status**: Demo Ready - All Queries Passing

---

## Current State

### Demo Guide Query Detection
- **Status**: ✅ 100% Working (14/14 queries)
- **Last Verified**: 2025-01-25
- **Test Method**: Chrome DevTools MCP automation

### All 10 Personas Verified
1. **COR** (Alexa Johnson) - Contract Officer Representative
2. **Program Manager** (Michael Chen) - Government Program Manager
3. **Stakeholder Lead** (Jennifer Park) - Stakeholder Management
4. **Service Team Lead** (Marcus Johnson) - Team Leadership
5. **Service Team Member** (Devon Williams) - Individual Contributor
6. **Project Manager** (Alex Rivera) - Project Management
7. **ATC Executive** (Robert Sterling) - C-Level Executive
8. **ATC Manager** (David Chen) - CS Manager
9. **ATC Support** (James Wilson) - Support Agent
10. **ATC CSM** (Jordan Taylor) - Customer Success Manager

---

## Recent Changes (2025-01-25)

### Query Detection Fixes
1. **Program Manager**: Added "sprint burndown" detection at Priority 0
2. **Service Team Member**: Added "my dashboard" detection at Priority 0
3. **ATC CSM**: Added "at-risk customers" trigger for churn risk

### Files Modified
- `src/lib/query-detection.ts` - Sprint burndown & dashboard detection
- `src/lib/atc-csm-conversation.ts` - Customer risk triggers

---

## Deployment URLs

| Environment | URL |
|-------------|-----|
| Local Dev | http://localhost:3030 |
| GitHub | https://github.com/aldrinstellus/atc-support-v20-op3 |
| Vercel | TBD - v20-op3 deployment |

---

## Demo Guide Reference

### Government Mode
- COR: "Show me the contract status", "Show me vendor compliance"
- Program Manager: "Show sprint burndown"
- Stakeholder Lead: "Show stakeholder engagement"
- Service Team Lead: "Show me team status", "Show code quality metrics"
- Service Team Member: "Show my dashboard"

### Project Mode
- Project Manager: "Show sprint burndown"

### ATC Mode
- Executive: "Show executive summary"
- Manager: "Compare agent performance", "Show team workload"
- Support: "Show my open tickets", "Show ticket TICK-001"
- CSM: "Show customer health", "Show at-risk customers"

### Universal Queries (All Personas)
- "Who are my top performers?" → Agent Performance Comparison
- "Draft response about the outage" → Response Composer
- "Open the most urgent access issue" → Ticket Detail
- "Show me the latest end user request" → Live Zoho Desk Tickets

---

## Tech Stack

- **Framework**: Next.js 16 with Turbopack
- **Port**: 3030
- **AI**: Claude 3.5 Sonnet via Anthropic SDK
- **Styling**: Tailwind CSS 4 + Solar Dusk theme
- **Database**: Prisma + PostgreSQL (optional)

---

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/query-detection.ts` | Main query detection logic |
| `src/lib/atc-*-conversation.ts` | ATC persona conversation patterns |
| `docs/DEMO-GUIDE-EXTERNAL.md` | Demo guide with expected queries |
| `CLAUDE.md` | Project guidance for Claude Code |
| `CHANGELOG.md` | Version history and changes |

---

## Session Notes

- All demo guide queries verified working
- No TypeScript errors
- Build passes successfully
- Ready for Vercel deployment

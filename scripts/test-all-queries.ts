/**
 * Full Spectrum Query Detection Test
 * Tests ALL demo guide questions against the query detection system
 *
 * Run with: npx tsx scripts/test-all-queries.ts
 */

import { detectWidgetQuery, PersonaId } from '../src/lib/query-detection';

interface TestCase {
  persona: PersonaId;
  personaName: string;
  query: string;
  expectedWidget: string;
}

// All demo guide queries from DEMO-GUIDE-EXTERNAL.md
const testCases: TestCase[] = [
  // ==========================================================================
  // MODE 1: GOVERNMENT CONTRACT MANAGEMENT
  // ==========================================================================

  // COR (Alexa Johnson)
  { persona: 'cor', personaName: 'COR', query: 'Show me the contract status', expectedWidget: 'contract-performance-dashboard' },
  { persona: 'cor', personaName: 'COR', query: 'Who are my top performers?', expectedWidget: 'agent-performance-comparison' },
  { persona: 'cor', personaName: 'COR', query: 'Draft response about the outage', expectedWidget: 'response-composer' },
  { persona: 'cor', personaName: 'COR', query: 'Open the most urgent access issue', expectedWidget: 'ticket-detail' },
  { persona: 'cor', personaName: 'COR', query: 'Show me the latest end user request', expectedWidget: 'live-zoho-tickets' },

  // Program Manager (Jennifer Chen)
  { persona: 'program-manager', personaName: 'Program Manager', query: 'Show me the sprint burndown', expectedWidget: 'contract-performance-dashboard' },
  { persona: 'program-manager', personaName: 'Program Manager', query: 'Who are my top performers?', expectedWidget: 'agent-performance-comparison' },
  { persona: 'program-manager', personaName: 'Program Manager', query: 'Draft response about the outage', expectedWidget: 'response-composer' },
  { persona: 'program-manager', personaName: 'Program Manager', query: 'Open the most urgent access issue', expectedWidget: 'ticket-detail' },
  { persona: 'program-manager', personaName: 'Program Manager', query: 'Show me the latest end user request', expectedWidget: 'live-zoho-tickets' },

  // Stakeholder Lead (Jessica Martinez)
  { persona: 'stakeholder-lead', personaName: 'Stakeholder Lead', query: 'Show stakeholder engagement', expectedWidget: 'stakeholder-engagement-dashboard' },
  { persona: 'stakeholder-lead', personaName: 'Stakeholder Lead', query: 'Who are my top performers?', expectedWidget: 'agent-performance-comparison' },
  { persona: 'stakeholder-lead', personaName: 'Stakeholder Lead', query: 'Draft response about the outage', expectedWidget: 'response-composer' },
  { persona: 'stakeholder-lead', personaName: 'Stakeholder Lead', query: 'Open the most urgent access issue', expectedWidget: 'ticket-detail' },
  { persona: 'stakeholder-lead', personaName: 'Stakeholder Lead', query: 'Show me the latest end user request', expectedWidget: 'live-zoho-tickets' },

  // ==========================================================================
  // MODE 2: PROJECT MANAGEMENT
  // ==========================================================================

  // Project Manager (Dale Thompson)
  { persona: 'project-manager', personaName: 'Project Manager', query: 'Show sprint burndown', expectedWidget: 'sprint-burndown-chart' },
  { persona: 'project-manager', personaName: 'Project Manager', query: 'Who are my top performers?', expectedWidget: 'agent-performance-comparison' },
  { persona: 'project-manager', personaName: 'Project Manager', query: 'Draft response about the outage', expectedWidget: 'response-composer' },
  { persona: 'project-manager', personaName: 'Project Manager', query: 'Open the most urgent access issue', expectedWidget: 'ticket-detail' },
  { persona: 'project-manager', personaName: 'Project Manager', query: 'Show me the latest end user request', expectedWidget: 'live-zoho-tickets' },

  // Service Team Lead (Herbert Roberts)
  { persona: 'service-team-lead', personaName: 'Service Team Lead', query: 'Show me team status', expectedWidget: 'team-workload-dashboard' },
  { persona: 'service-team-lead', personaName: 'Service Team Lead', query: 'Show code quality metrics', expectedWidget: 'code-quality-dashboard' },
  { persona: 'service-team-lead', personaName: 'Service Team Lead', query: 'Who are my top performers?', expectedWidget: 'agent-performance-comparison' },
  { persona: 'service-team-lead', personaName: 'Service Team Lead', query: 'Draft response about the outage', expectedWidget: 'response-composer' },
  { persona: 'service-team-lead', personaName: 'Service Team Lead', query: 'Open the most urgent access issue', expectedWidget: 'ticket-detail' },
  { persona: 'service-team-lead', personaName: 'Service Team Lead', query: 'Show me the latest end user request', expectedWidget: 'live-zoho-tickets' },

  // Service Team Member (Molly Rivera)
  { persona: 'service-team-member', personaName: 'Service Team Member', query: 'Show my dashboard', expectedWidget: 'agent-performance-stats' },
  { persona: 'service-team-member', personaName: 'Service Team Member', query: 'Who are my top performers?', expectedWidget: 'agent-performance-comparison' },
  { persona: 'service-team-member', personaName: 'Service Team Member', query: 'Draft response about the outage', expectedWidget: 'response-composer' },
  { persona: 'service-team-member', personaName: 'Service Team Member', query: 'Open the most urgent access issue', expectedWidget: 'ticket-detail' },
  { persona: 'service-team-member', personaName: 'Service Team Member', query: 'Show me the latest end user request', expectedWidget: 'live-zoho-tickets' },

  // ==========================================================================
  // MODE 3: ATC CUSTOMER SUPPORT
  // ==========================================================================

  // Executive (Jennifer Anderson)
  { persona: 'atc-executive', personaName: 'ATC Executive', query: 'Show executive summary', expectedWidget: 'executive-summary' },
  { persona: 'atc-executive', personaName: 'ATC Executive', query: 'Who are my top performers?', expectedWidget: 'agent-performance-comparison' },
  { persona: 'atc-executive', personaName: 'ATC Executive', query: 'Draft response about the outage', expectedWidget: 'response-composer' },
  { persona: 'atc-executive', personaName: 'ATC Executive', query: 'Open the most urgent access issue', expectedWidget: 'ticket-detail' },
  { persona: 'atc-executive', personaName: 'ATC Executive', query: 'Show me the latest end user request', expectedWidget: 'live-zoho-tickets' },

  // Manager (David Miller)
  { persona: 'atc-manager', personaName: 'ATC Manager', query: 'Compare agent performance', expectedWidget: 'agent-performance-comparison' },
  { persona: 'atc-manager', personaName: 'ATC Manager', query: 'Show team workload', expectedWidget: 'team-workload-dashboard' },
  { persona: 'atc-manager', personaName: 'ATC Manager', query: 'Who are my top performers?', expectedWidget: 'agent-performance-comparison' },
  { persona: 'atc-manager', personaName: 'ATC Manager', query: 'Draft response about the outage', expectedWidget: 'response-composer' },
  { persona: 'atc-manager', personaName: 'ATC Manager', query: 'Open the most urgent access issue', expectedWidget: 'ticket-detail' },
  { persona: 'atc-manager', personaName: 'ATC Manager', query: 'Show me the latest end user request', expectedWidget: 'live-zoho-tickets' },

  // Support Agent (Christopher Hayes)
  { persona: 'atc-support', personaName: 'ATC Support', query: 'Show my open tickets', expectedWidget: 'live-zoho-tickets' },
  { persona: 'atc-support', personaName: 'ATC Support', query: 'Show ticket TICK-001', expectedWidget: 'ticket-detail' },
  { persona: 'atc-support', personaName: 'ATC Support', query: 'Who are my top performers?', expectedWidget: 'agent-performance-comparison' },
  { persona: 'atc-support', personaName: 'ATC Support', query: 'Draft response about the outage', expectedWidget: 'response-composer' },
  { persona: 'atc-support', personaName: 'ATC Support', query: 'Open the most urgent access issue', expectedWidget: 'ticket-detail' },
  { persona: 'atc-support', personaName: 'ATC Support', query: 'Show me the latest end user request', expectedWidget: 'live-zoho-tickets' },

  // CSM (Jordan Taylor)
  { persona: 'atc-csm', personaName: 'ATC CSM', query: 'Show customer health', expectedWidget: 'client-health-dashboard' },
  { persona: 'atc-csm', personaName: 'ATC CSM', query: 'Show at-risk customers', expectedWidget: 'customer-risk-list' },
  { persona: 'atc-csm', personaName: 'ATC CSM', query: 'Who are my top performers?', expectedWidget: 'agent-performance-comparison' },
  { persona: 'atc-csm', personaName: 'ATC CSM', query: 'Draft response about the outage', expectedWidget: 'response-composer' },
  { persona: 'atc-csm', personaName: 'ATC CSM', query: 'Open the most urgent access issue', expectedWidget: 'ticket-detail' },
  { persona: 'atc-csm', personaName: 'ATC CSM', query: 'Show me the latest end user request', expectedWidget: 'live-zoho-tickets' },
];

// Widget name normalization (some have slight variations)
function normalizeWidget(widget: string | null): string {
  if (!widget) return 'null';

  // Normalize common variations
  const normalizations: Record<string, string> = {
    'live-ticket-detail': 'ticket-detail',
    'ticket-list': 'live-zoho-tickets',
    'agent-performance-stats': 'agent-performance-stats',
  };

  return normalizations[widget] || widget;
}

// Check if widgets match (with some flexibility for variations)
function widgetsMatch(actual: string | null, expected: string): boolean {
  const normalizedActual = normalizeWidget(actual);
  const normalizedExpected = normalizeWidget(expected);

  // Exact match
  if (normalizedActual === normalizedExpected) return true;

  // Flexible matches for similar widgets
  const flexibleMatches: Record<string, string[]> = {
    'ticket-detail': ['ticket-detail', 'live-ticket-detail'],
    'live-zoho-tickets': ['live-zoho-tickets', 'ticket-list'],
    'personal-performance-dashboard': ['agent-performance-stats', 'personal-performance-dashboard'],
  };

  if (flexibleMatches[normalizedExpected]?.includes(normalizedActual)) return true;
  if (flexibleMatches[normalizedActual]?.includes(normalizedExpected)) return true;

  return false;
}

// Run all tests
function runTests() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('  FULL SPECTRUM QUERY DETECTION TEST');
  console.log('  Testing ALL Demo Guide Questions');
  console.log('═══════════════════════════════════════════════════════════════\n');

  let passed = 0;
  let failed = 0;
  const failures: { persona: string; query: string; expected: string; actual: string }[] = [];

  // Group by persona for cleaner output
  const personaGroups = new Map<string, TestCase[]>();
  testCases.forEach(tc => {
    const existing = personaGroups.get(tc.personaName) || [];
    existing.push(tc);
    personaGroups.set(tc.personaName, existing);
  });

  personaGroups.forEach((cases, personaName) => {
    console.log(`\n▶ ${personaName}`);
    console.log('─'.repeat(60));

    cases.forEach(tc => {
      const result = detectWidgetQuery(tc.query, tc.persona);
      const actualWidget = result?.widgetType || null;
      const isPass = widgetsMatch(actualWidget, tc.expectedWidget);

      if (isPass) {
        passed++;
        console.log(`  ✅ "${tc.query}"`);
        console.log(`     → ${actualWidget}`);
      } else {
        failed++;
        console.log(`  ❌ "${tc.query}"`);
        console.log(`     Expected: ${tc.expectedWidget}`);
        console.log(`     Actual:   ${actualWidget}`);
        failures.push({
          persona: tc.personaName,
          query: tc.query,
          expected: tc.expectedWidget,
          actual: actualWidget || 'null',
        });
      }
    });
  });

  // Summary
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('  TEST SUMMARY');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`  Total Tests: ${testCases.length}`);
  console.log(`  ✅ Passed: ${passed}`);
  console.log(`  ❌ Failed: ${failed}`);
  console.log(`  Success Rate: ${((passed / testCases.length) * 100).toFixed(1)}%`);

  if (failures.length > 0) {
    console.log('\n═══════════════════════════════════════════════════════════════');
    console.log('  FAILURES DETAIL');
    console.log('═══════════════════════════════════════════════════════════════');
    failures.forEach((f, i) => {
      console.log(`\n  ${i + 1}. ${f.persona}: "${f.query}"`);
      console.log(`     Expected: ${f.expected}`);
      console.log(`     Actual:   ${f.actual}`);
    });
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  if (failed === 0) {
    console.log('  🎉 ALL TESTS PASSED - 100% DEPLOYABLE');
  } else {
    console.log('  ⚠️  SOME TESTS FAILED - NEEDS FIXING');
  }
  console.log('═══════════════════════════════════════════════════════════════\n');

  // Exit with error code if any failed
  process.exit(failed > 0 ? 1 : 0);
}

runTests();

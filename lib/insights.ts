export type InsightSection = { title: string; paragraphs: string[]; points?: string[] };

export type Insight = {
  slug: string;
  category: 'Insights' | 'Playbooks' | 'Systems' | 'Field Notes';
  title: string;
  description: string;
  readTime: string;
  published: string;
  featured?: boolean;
  related: string[];
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: 'what-is-business-evolution',
    category: 'Insights',
    title: 'What Is Business Evolution?',
    description: 'A practical model for improving how a company creates value, operates, decides, and adapts.',
    readTime: '7 min',
    published: '2026-07-23',
    featured: true,
    related: ['/business-evolution/framework', '/services/digital-transformation', '/process'],
    sections: [
      { title: 'Beyond a digital project', paragraphs: ['Business evolution is the deliberate improvement of the whole operating environment: people, processes, data, customer experience, technology, and intelligence. It is not defined by buying software or adding AI to an unchanged workflow.', 'The strongest evolution programs connect a commercial goal to an operational constraint. They improve the work first, then use technology to make the improved model repeatable and scalable.'] },
      { title: 'The four connected layers', paragraphs: ['At Bevox, the model has four layers: digital experience, operational design, AI-powered intelligence, and software systems. Each can create value independently, but the compounding effect appears when they work as one.'], points: ['Digital: how customers and teams access the business', 'Operational: how work moves and ownership stays clear', 'AI-powered: how knowledge and decisions become faster', 'Software: how the model becomes reliable and scalable'] },
      { title: 'Start where friction is measurable', paragraphs: ['A useful starting point is a recurring process with visible delay, manual coordination, duplicate data, or weak management visibility. Map it, quantify it, redesign it, and prove the new system on a focused scope before expanding.'] },
    ],
  },
  {
    slug: 'business-evolution-framework',
    category: 'Systems',
    title: 'The Business Evolution Framework',
    description: 'Diagnose, design, build, connect, and compound: the five movements behind durable operational change.',
    readTime: '9 min',
    published: '2026-07-23',
    featured: true,
    related: ['/business-evolution/framework', '/roi-calculator', '/process-map'],
    sections: [
      { title: 'A system, not a transformation slogan', paragraphs: ['The framework turns ambition into a sequence of observable decisions. Each movement produces an artifact, a decision, and a measurable next step. That prevents transformation from becoming an open-ended technology program.'] },
      { title: 'The five movements', paragraphs: ['Diagnose the operating reality. Design the better flow. Build the smallest system that proves value. Connect it to the rest of the operation. Compound the result through adoption, measurement, and expansion.'], points: ['Diagnose: constraints, cost, risk, and opportunity', 'Design: future-state workflow, ownership, and data', 'Build: the focused operational product', 'Connect: integrations, intelligence, and reporting', 'Compound: adoption, learning, and measured expansion'] },
      { title: 'The decision gate', paragraphs: ['Every movement ends with a decision gate. Continue only when the expected operational value, user behavior, and technical evidence support the next investment. This keeps speed high without turning speed into recklessness.'] },
    ],
  },
  {
    slug: 'what-should-a-business-automate-first',
    category: 'Playbooks',
    title: 'What Should a Business Automate First?',
    description: 'A scoring method for choosing the first workflow that can prove automation value quickly and safely.',
    readTime: '8 min',
    published: '2026-07-23',
    related: ['/services/business-process-automation', '/solutions/automate-manual-work', '/roi-calculator'],
    sections: [
      { title: 'Do not begin with the loudest task', paragraphs: ['The best first automation is not always the task people complain about most. It is the workflow where repetition, volume, stable rules, usable data, and business impact overlap.'] },
      { title: 'Score the opportunity', paragraphs: ['Rate each candidate from one to five across frequency, time consumed, error cost, delay created, rule stability, and data readiness. Subtract for regulatory risk, unclear ownership, and excessive exceptions.'], points: ['High volume and repeatability', 'Clear inputs and expected outputs', 'Visible cost of delay or error', 'A responsible human escalation path', 'A measurable baseline'] },
      { title: 'Prove one complete outcome', paragraphs: ['Automating fragments can make a process harder to manage. Choose one end-to-end outcome, keep exceptions visible, and compare the new cycle time, error rate, and human effort against the baseline.'] },
    ],
  },
  {
    slug: 'ai-agents-vs-workflow-automation',
    category: 'Insights',
    title: 'AI Agents vs Workflow Automation',
    description: 'Where deterministic workflows win, where agents add value, and why mature systems usually use both.',
    readTime: '8 min',
    published: '2026-07-23',
    related: ['/services/ai-agents', '/services/ai-automation', '/solutions/ai-for-business-operations'],
    sections: [
      { title: 'Different tools for different uncertainty', paragraphs: ['Workflow automation follows explicit rules: when this happens, perform that action. AI agents operate within a goal, context, toolset, and boundary, making limited decisions when the path cannot be fully predetermined.'] },
      { title: 'Use certainty where certainty exists', paragraphs: ['Approvals, data synchronization, notifications, and calculations usually belong in deterministic workflows. Classification, summarization, research, drafting, and contextual triage can benefit from an agent.'], points: ['Workflow: repeatable, auditable, predictable', 'Agent: contextual, adaptive, probabilistic', 'Human: accountable for exceptions and high-impact decisions'] },
      { title: 'The hybrid operating pattern', paragraphs: ['A robust system uses automation as the control plane and agents as bounded intelligence. The workflow provides state, permissions, logs, and escalation. The agent handles ambiguity inside that structure.'] },
    ],
  },
  {
    slug: 'replace-spreadsheets-with-custom-software',
    category: 'Systems',
    title: 'When to Replace Spreadsheets with Custom Software',
    description: 'The operational signals that show a spreadsheet has stopped being a tool and started becoming infrastructure.',
    readTime: '7 min',
    published: '2026-07-23',
    related: ['/solutions/replace-spreadsheets', '/services/internal-business-systems', '/work/bos'],
    sections: [
      { title: 'Spreadsheets are excellent—until the workflow outgrows them', paragraphs: ['A spreadsheet is often the fastest way to model a process. Replacement becomes useful when it carries permissions, approvals, history, ownership, notifications, and business logic that users must remember manually.'] },
      { title: 'Signals of operational debt', paragraphs: ['Look for duplicate versions, broken formulas, unclear ownership, manual status chasing, sensitive data exposure, and reports that require a person to reconstruct reality.'], points: ['Several teams edit the same operational records', 'The process needs roles, approvals, or audit history', 'Errors create financial or customer risk', 'The spreadsheet feeds multiple recurring reports', 'Growth increases coordination faster than output'] },
      { title: 'Replace the workflow, not the grid', paragraphs: ['Custom software should not merely reproduce cells on a screen. It should encode the lifecycle of the work, make the next action obvious, and preserve the flexibility that made the spreadsheet useful in the first place.'] },
    ],
  },
  {
    slug: 'how-to-map-a-business-process',
    category: 'Playbooks',
    title: 'How to Map a Business Process',
    description: 'A concise process-mapping method that reveals delay, rework, exceptions, ownership, and automation potential.',
    readTime: '9 min',
    published: '2026-07-23',
    related: ['/process-map', '/process', '/services/business-process-automation'],
    sections: [
      { title: 'Map what actually happens', paragraphs: ['Begin with a real recent case, not the official procedure. Capture the trigger, every handoff, decision, waiting period, system, document, exception, and final outcome.'] },
      { title: 'Measure the hidden work', paragraphs: ['For each step, record active time, waiting time, frequency, error rate, and who owns the next move. Waiting and follow-up often cost more than the visible task.'], points: ['Trigger and desired outcome', 'People and systems involved', 'Inputs, decisions, and outputs', 'Active time versus waiting time', 'Exceptions, rework, and escalation'] },
      { title: 'Design the future state', paragraphs: ['Remove unnecessary steps before automating. Then assign one source of truth, explicit ownership, automatic routing, visible exceptions, and the few metrics that prove whether the new process is better.'] },
    ],
  },
  {
    slug: 'from-fragmented-tools-to-connected-operations',
    category: 'Field Notes',
    title: 'From Fragmented Tools to Connected Operations',
    description: 'Why integration alone is not enough—and what creates a coherent operating layer across the business.',
    readTime: '8 min',
    published: '2026-07-23',
    related: ['/solutions/connect-disconnected-tools', '/services/api-integrations', '/work/command-center'],
    sections: [
      { title: 'Connection is not coherence', paragraphs: ['Two tools can exchange data and still leave teams confused. Connected operations require a shared definition of records, states, ownership, and what should happen next.'] },
      { title: 'Create the operational spine', paragraphs: ['Choose the system of record for each important entity, define event ownership, and make status changes observable. Integrations should serve the operating model—not become an invisible web of point-to-point dependencies.'], points: ['Canonical records and identifiers', 'Clear event and status ownership', 'Reliable synchronization and retries', 'Visible exceptions and reconciliation', 'Management context across the flow'] },
      { title: 'Add intelligence after observability', paragraphs: ['Once the operation is consistent and measurable, dashboards, alerts, forecasting, and AI become more trustworthy. Intelligence built on ambiguous data only accelerates ambiguity.'] },
    ],
  },
  {
    slug: 'how-to-calculate-automation-roi',
    category: 'Playbooks',
    title: 'How to Calculate Automation ROI',
    description: 'A grounded ROI model that includes capacity, delay, quality, risk, adoption, and ongoing cost.',
    readTime: '8 min',
    published: '2026-07-23',
    related: ['/roi-calculator', '/solutions/automate-manual-work', '/contact'],
    sections: [
      { title: 'Begin with the baseline', paragraphs: ['Record transaction volume, active minutes per transaction, waiting time, loaded labor cost, error frequency, rework, and the financial consequence of delay. Use observed ranges rather than a single optimistic number.'] },
      { title: 'Model value in layers', paragraphs: ['Capacity savings are only one layer. Better cycle time, fewer errors, stronger compliance, faster response, and improved management visibility may be equally important.'], points: ['Recovered team capacity', 'Reduced error and rework cost', 'Shorter cycle and response time', 'Avoided risk and control failures', 'Revenue enabled by faster throughput'] },
      { title: 'Discount for reality', paragraphs: ['Include implementation, integration, maintenance, change management, and adoption. Model conservative, expected, and strong scenarios. The credible case is the one that remains worthwhile under conservative assumptions.'] },
    ],
  },
];

export const insightBySlug = (slug: string) => insights.find((article) => article.slug === slug);

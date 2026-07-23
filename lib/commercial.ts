import { industries, services } from './data';

type Page = {
  slug:string; title:string; eyebrow:string; intro:string; outcomes:string[]; capabilities:string[];
  proof:string; metric:string; related:string[];
};

const serviceDetails: Record<string,Partial<Page>> = {
  'ai-automation': { proof:'Turn unstructured input into consistent action—with human control where it matters.', metric:'Less repetitive work. Faster decisions.' },
  'ai-agents': { proof:'Agents designed for a defined role, knowledge boundary, toolset, and escalation path.', metric:'Capacity that scales without losing control.' },
  'business-process-automation': { proof:'Remove copying, chasing, status checks, and avoidable handoffs from recurring work.', metric:'Shorter cycle times. Fewer errors.' },
  'custom-software-development': { proof:'Own the workflow that differentiates your business instead of forcing it into generic software.', metric:'Software shaped around the operation.' },
  'internal-business-systems': { proof:'Replace disconnected spreadsheets and messages with a reliable operational source of truth.', metric:'One place to run the work.' },
  'web-applications': { proof:'Create a secure, intuitive digital product for clients, partners, or internal teams.', metric:'Better service without more administration.' },
  'crm-development': { proof:'Make the CRM reflect your actual pipeline, handoffs, follow-ups, and management questions.', metric:'More visibility from lead to revenue.' },
  'erp-development': { proof:'Build only the modules your operation needs and connect them into one coherent system.', metric:'Control complexity without enterprise bloat.' },
  'dashboards-business-intelligence': { proof:'Bring operational signals together before delays and exceptions become expensive.', metric:'Decision-ready data, not monthly archaeology.' },
  'api-integrations': { proof:'Keep systems synchronized and eliminate fragile duplicate entry across tools.', metric:'Connected tools. Consistent data.' },
  'no-code-low-code-development': { proof:'Move from prototype to operational product quickly on a platform chosen for the real constraints.', metric:'Faster delivery with responsible architecture.' },
  'digital-transformation': { proof:'Sequence technology decisions around business priorities, adoption, and measurable value.', metric:'A transformation people can actually use.' },
  'ai-strategy-consulting': { proof:'Separate useful AI opportunities from noise and turn the strongest use cases into a build plan.', metric:'Clarity before investment.' },
  'website-development': { proof:'Combine brand, content, UX, engineering, search visibility, and conversion into one system.', metric:'A website that moves the business forward.' },
  'maintenance-support': { proof:'Keep critical systems secure, reliable, relevant, and aligned with changing operations.', metric:'Long-term performance, not launch-and-leave.' },
};

export const servicePages:Page[] = services.map((s) => ({
  slug:s.slug,title:s.title,eyebrow:'Service',intro:s.desc,
  outcomes:['Reduce manual coordination and operational friction','Create a reliable source of truth','Give teams clarity, speed, and better tools'],
  capabilities:['Discovery and workflow mapping','Product and system design','Implementation, integration, and quality assurance','Adoption, measurement, and continuous improvement'],
  proof:serviceDetails[s.slug]?.proof || 'A practical system designed around a measurable business outcome.',
  metric:serviceDetails[s.slug]?.metric || 'Built for operational impact.',
  related:['/process','/solutions/automate-manual-work','/contact'], ...serviceDetails[s.slug]
}));

export const solutions:Page[] = [
  ['replace-spreadsheets','Replace Spreadsheets','Turn fragile spreadsheets into a structured system with permissions, workflows, and live reporting.'],
  ['automate-manual-work','Automate Manual Work','Remove repetitive entry, routing, follow-up, reporting, and document work from daily operations.'],
  ['connect-disconnected-tools','Connect Disconnected Tools','Create one dependable flow of data across the platforms your business already uses.'],
  ['build-a-client-portal','Build a Client Portal','Give clients a clear, secure place for requests, documents, status, communication, and service.'],
  ['build-an-internal-operations-platform','Build an Operations Platform','Centralize the processes, records, tasks, and visibility your teams need to operate.'],
  ['automate-document-processing','Automate Document Processing','Capture, classify, validate, route, and extract useful data from business documents.'],
  ['centralize-business-data','Centralize Business Data','Bring fragmented operational data into a governed, usable source of truth.'],
  ['management-reporting','Management Reporting','Replace delayed reporting with live KPIs, alerts, drill-downs, and decision context.'],
  ['legacy-system-modernization','Modernize Legacy Systems','Reduce risk and friction by progressively replacing outdated software and workflows.'],
  ['ai-for-business-operations','AI for Business Operations','Apply AI to the real work: knowledge, decisions, documents, service, and coordination.'],
].map(([slug,title,intro]) => ({
  slug,title,eyebrow:'Solution',intro,
  outcomes:['Remove the operational bottleneck','Improve consistency and visibility','Create capacity for growth'],
  capabilities:['Current-state diagnosis','Future-state workflow and system design','Practical phased implementation','Impact measurement and iteration'],
  proof:'The solution starts with the constraint—not a predetermined tool.', metric:'From fragmented work to one intelligent operation.',
  related:['/services','/process','/roi-calculator']
}));

const industryProblems:Record<string,string[]> = {
  construction:['Field-to-office coordination','Work orders and project documentation','Materials, assets, crews, and approvals'],
  healthcare:['Patient and administrative workflows','Secure documents and communication','Scheduling, reporting, and service coordination'],
  manufacturing:['Production visibility and exceptions','Inventory and maintenance workflows','Quality records and operational reporting'],
  accounting:['Client requests and document collection','Recurring deadlines and task templates','Portfolio visibility and communication'],
  'logistics-transportation':['Dispatch and status coordination','Fleet, documents, and proof of delivery','Cost and performance visibility'],
  'professional-services':['Pipeline-to-delivery handoffs','Client portals and recurring workflows','Capacity, profitability, and reporting'],
  retail:['Inventory and multi-location visibility','Customer and order workflows','Performance reporting and automation'],
  hospitality:['Guest requests and service coordination','Property and team workflows','Feedback, reporting, and repetitive administration'],
  education:['Enrollment and learner administration','Content, communication, and portals','Scheduling, records, and reporting'],
  agencies:['Sales-to-project handoffs','Client approvals and delivery workflows','Capacity, margin, and performance visibility'],
};

export const industryPages:Page[] = industries.map(i => ({
  slug:i.slug,title:i.title,eyebrow:'Industry',
  intro:`Connected systems and AI-powered operations for ${i.title.toLowerCase()} organizations ready to move beyond fragmented work.`,
  outcomes:industryProblems[i.slug], capabilities:['Operational discovery','Workflow automation','Custom portals and internal systems','Integrations, dashboards, and AI'],
  proof:'We adapt technology to the operating reality, regulation, users, and pace of the industry.',
  metric:'Practical evolution, built around the work.', related:['/solutions','/services','/contact']
}));

export const workPages:Page[] = [
  {slug:'eportal',title:'ePortal',eyebrow:'Work · Client operations',intro:'A client request and internal work platform designed for accounting agencies.',outcomes:['Centralized client requests','Clear ownership and status','Recurring operational workflows'],capabilities:['Client portal','Internal task management','Recurring templates','Management visibility'],proof:'A shared operating layer between the agency and every client.',metric:'Less chasing. Clearer service.',related:['/industries/accounting','/solutions/build-a-client-portal','/contact']},
  {slug:'bos',title:'BOS',eyebrow:'Work · Business operating system',intro:'A modular business operating system connecting the core functions of process-heavy companies.',outcomes:['Connected operational modules','Shared records and workflows','Management-wide visibility'],capabilities:['Work orders and inventory','CRM and commercial operations','Employees, vehicles, and documents','Dashboards and integrations'],proof:'Ten operational modules designed to work as one system.',metric:'One company. One operating system.',related:['/solutions/build-an-internal-operations-platform','/services/erp-development','/contact']},
  {slug:'komandni-centar',title:'Komandni Centar',eyebrow:'Work · Internal platform',intro:'An operational command center for work orders, warehouse movement, teams, documents, and reporting.',outcomes:['Operational control across modules','Faster field and office coordination','Consistent records and reporting'],capabilities:['Work orders','Warehouse and assets','Digital records','Reporting and automation'],proof:'Complex daily work made visible, structured, and manageable.',metric:'Control without operational drag.',related:['/services/internal-business-systems','/industries/construction','/contact']},
  {slug:'workz-ai',title:'Workz.ai',eyebrow:'Work · Product experience',intro:'A focused AI productivity product and digital experience built around clear user outcomes.',outcomes:['Sharper product positioning','Simple, focused experience','Scalable acquisition foundation'],capabilities:['Product strategy','UX and interface system','Web development','Search architecture'],proof:'A modern product experience that explains value without adding complexity.',metric:'Clarity from first visit to action.',related:['/services/web-applications','/services/website-development','/contact']},
  {slug:'churno',title:'Churno',eyebrow:'Work · SaaS platform',intro:'A SaaS experience shaped around customer intelligence, retention, and decisive action.',outcomes:['Clearer product narrative','Conversion-ready web experience','Connected customer workflows'],capabilities:['Experience design','Frontend engineering','Automation','Conversion journeys'],proof:'A complex product story turned into an accessible operating experience.',metric:'From churn signals to action.',related:['/services/web-applications','/services/ai-automation','/contact']},
  {slug:'alba-dominante',title:'Alba Dominante',eyebrow:'Work · Digital evolution',intro:'A premium multilingual digital presence and commerce foundation for luxury Italian interiors.',outcomes:['Premium category positioning','Improved search foundations','Structured multilingual content'],capabilities:['Digital strategy','UX and content structure','Technical SEO','Commerce experience'],proof:'Luxury presentation supported by a disciplined visibility system.',metric:'Brand presence engineered for discovery.',related:['/services/website-development','/solutions/centralize-business-data','/contact']},
];

export const findPage = (pages:Page[],slug:string) => pages.find(p=>p.slug===slug);

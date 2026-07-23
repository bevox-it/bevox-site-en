export const locations = {
  'united-states': { name: 'USA', title: 'Business evolution for ambitious US companies.', context: 'We help growing US companies reduce operational overhead, connect fragmented tools, and build systems that scale without unnecessary complexity.', focus: ['AI and workflow automation','Custom operational software','Customer and client portals','Data and reporting systems'] },
  europe: { name: 'Europe', title: 'Built in Europe. Designed to work across borders.', context: 'Our European team brings regional context, direct collaboration, and strong engineering standards to complex digital and operational work.', focus: ['Business process automation','Internal business systems','Digital platforms','AI adoption and integration'] },
  'middle-east': { name: 'Middle East', title: 'Connected systems for fast-moving businesses.', context: 'We support ambitious companies across the Middle East with digital products, intelligent operations, and scalable business infrastructure.', focus: ['Operational platforms','Customer experiences','Automation and AI','Management intelligence'] },
  australia: { name: 'Australia', title: 'A distributed delivery model built for momentum.', context: 'We work asynchronously and directly with Australian teams, creating clear progress across time zones without adding layers of coordination.', focus: ['Custom software','Workflow automation','Product development','Data and reporting'] },
} as const;

export type LocationSlug = keyof typeof locations;

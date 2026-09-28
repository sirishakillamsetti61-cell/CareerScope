import { DepartmentInfo } from '../types';

export const DEPARTMENTS: Record<string, DepartmentInfo> = {
  'software-engineering': {
    id: 'software-engineering',
    name: 'Software Engineering',
    description: 'Builds core software products, applications, backend systems, APIs, and client-facing interfaces.',
    commonRoles: ['software-engineer', 'cloud-engineer'],
    keySkills: ['Programming (Python, Java, Go, TypeScript)', 'Data Structures & Algorithms', 'Databases', 'System Design', 'Git']
  },
  'data-ai': {
    id: 'data-ai',
    name: 'Data & AI',
    description: 'Derives intelligence, statistical models, analytics dashboards, and artificial intelligence solutions from business data.',
    commonRoles: ['data-analyst', 'ai-ml-engineer'],
    keySkills: ['SQL', 'Python (Pandas, PyTorch)', 'Machine Learning', 'Data Warehousing', 'BI Visualization']
  },
  'product-management': {
    id: 'product-management',
    name: 'Product Management',
    description: 'Defines product vision, prioritizes roadmap features, and coordinates engineering and design to ship impactful solutions.',
    commonRoles: ['product-manager'],
    keySkills: ['Product Strategy', 'User Story Writing', 'A/B Testing', 'Agile Roadmaps', 'Stakeholder Management']
  },
  'ux-design': {
    id: 'ux-design',
    name: 'UX Design',
    description: 'Researches user needs and crafts intuitive visual layouts, user flows, and design systems for web and mobile.',
    commonRoles: ['ux-designer'],
    keySkills: ['Figma', 'User Research', 'Wireframing', 'Design Systems', 'Usability Testing', 'Prototyping']
  },
  'cloud': {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    description: 'Manages cloud hosting, virtual networks, containerization, security policies, and DevOps deployment pipelines.',
    commonRoles: ['cloud-engineer', 'software-engineer'],
    keySkills: ['AWS / Azure / GCP', 'Terraform (IaC)', 'Docker & Kubernetes', 'Linux', 'CI/CD Pipelines']
  },
  'security': {
    id: 'security',
    name: 'Cybersecurity & InfoSec',
    description: 'Defends digital assets against cyber threats, analyzes intrusions, audits vulnerabilities, and enforces compliance.',
    commonRoles: ['cybersecurity-analyst'],
    keySkills: ['SIEM & Log Analysis', 'Network Security', 'Penetration Testing', 'Incident Response', 'Vulnerability Auditing']
  },
  'consulting': {
    id: 'consulting',
    name: 'Consulting & Advisory',
    description: 'Partners with corporate clients to solve strategic operational challenges and architect digital transformations.',
    commonRoles: ['technology-consultant', 'data-analyst'],
    keySkills: ['Structured Problem Solving', 'Business Process Modeling', 'Financial Modeling', 'Executive Decks', 'Change Management']
  },
  'finance': {
    id: 'finance',
    name: 'Banking, Finance & Risk',
    description: 'Oversees financial health, capital allocation, investment underwriting, risk management, and valuation models.',
    commonRoles: ['financial-analyst', 'data-analyst'],
    keySkills: ['Financial Modeling', 'Valuation (DCF, Comps)', 'Accounting (GAAP)', 'Risk Assessment', 'Excel']
  },
  'marketing': {
    id: 'marketing',
    name: 'Marketing',
    description: 'Drives brand awareness, user acquisition campaigns, product positioning, and digital performance metrics.',
    commonRoles: ['data-analyst', 'product-manager'],
    keySkills: ['Digital Marketing', 'SEO / SEM', 'Campaign Analytics', 'Content Strategy', 'Brand Messaging']
  },
  'sales': {
    id: 'sales',
    name: 'Sales & Business Development',
    description: 'Generates client leads, negotiates enterprise contracts, and builds long-term commercial customer relationships.',
    commonRoles: ['technology-consultant'],
    keySkills: ['Enterprise Selling', 'Pipeline Management (Salesforce)', 'Negotiation', 'Client Presentations', 'Account Strategy']
  },
  'human-resources': {
    id: 'human-resources',
    name: 'Human Resources',
    description: 'Attracts talent, manages employee onboarding, compensation, performance reviews, and organizational culture.',
    commonRoles: ['data-analyst'],
    keySkills: ['Talent Acquisition', 'HR Analytics', 'Employee Relations', 'Performance Management', 'Labor Compliance']
  }
};

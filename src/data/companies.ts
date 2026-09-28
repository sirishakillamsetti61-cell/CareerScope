import { Company, Industry } from '../types';
import { DEPARTMENTS } from './departments';

export const INDUSTRIES: Industry[] = [
  'Technology',
  'Consulting',
  'Banking & Finance',
  'E-commerce',
  'Healthcare',
  'Automotive',
  'Telecommunications',
  'Manufacturing',
  'Media',
  'Education'
];

export const ALL_COMPANIES: Company[] = [
  {
    id: 'google',
    name: 'Google',
    industry: 'Technology',
    headquarters: 'Mountain View, California, USA',
    description: 'A global technology pioneer specializing in search engine technologies, online advertising, cloud computing, computer software, quantum computing, and artificial intelligence.',
    brandColor: '#4285F4',
    accentBg: '#EEF2FF',
    logoSvg: 'google',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['ux-design'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['security'],
      DEPARTMENTS['marketing'],
      DEPARTMENTS['human-resources']
    ],
    hiringFocusFresher: 'Evaluates candidates heavily on solid Data Structures & Algorithms, strong problem-solving in Python/C++/Java/Go, system fundamentals, and "Googlyness" (navigating ambiguity, intellectual humility, team empathy).',
    techStackHighlights: ['Go', 'C++', 'Python', 'Java', 'Spanner', 'Kubernetes / Borg', 'TensorFlow', 'Angular'],
    websiteUrl: 'https://careers.google.com',
    rolesAvailableCount: 6
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    industry: 'Technology',
    headquarters: 'Redmond, Washington, USA',
    description: 'World-renowned software enterprise producing computer software, consumer electronics, personal computers, and cloud services through Microsoft Azure, Windows, and Office 365.',
    brandColor: '#00A4EF',
    accentBg: '#F0F9FF',
    logoSvg: 'microsoft',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['ux-design'],
      DEPARTMENTS['security'],
      DEPARTMENTS['consulting']
    ],
    hiringFocusFresher: 'Hires through Microsoft University Recruiting. Looks for proficiency in C#, C++, Python, or Java, clean object-oriented architecture, and passion for developer tools and cloud technologies.',
    techStackHighlights: ['C# / .NET', 'TypeScript', 'Azure', 'C++', 'Python', 'CosmosDB', 'React'],
    websiteUrl: 'https://careers.microsoft.com',
    rolesAvailableCount: 6
  },
  {
    id: 'amazon',
    name: 'Amazon',
    industry: 'E-commerce',
    headquarters: 'Seattle, Washington, USA',
    description: 'Global tech titan focused on e-commerce, cloud computing, digital streaming, and artificial intelligence, operating the world\'s largest online retail marketplace and logistics network.',
    brandColor: '#FF9900',
    accentBg: '#FFFBEB',
    logoSvg: 'amazon',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['ux-design'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['security'],
      DEPARTMENTS['finance']
    ],
    hiringFocusFresher: 'Assessment strictly evaluates Amazon\'s 16 Leadership Principles (Customer Obsession, Ownership, Bias for Action, Dive Deep) alongside rigorous coding (DSA) and low-level object-oriented design.',
    techStackHighlights: ['Java', 'Python', 'AWS', 'DynamoDB', 'Docker', 'React', 'Linux'],
    websiteUrl: 'https://amazon.jobs',
    rolesAvailableCount: 7
  },
  {
    id: 'aws',
    name: 'AWS',
    industry: 'Technology',
    headquarters: 'Seattle, Washington, USA',
    description: 'Amazon Web Services provides on-demand cloud computing platforms and APIs to individuals, companies, and governments on a metered pay-as-you-go basis, powering millions of global businesses.',
    brandColor: '#EC7211',
    accentBg: '#FFF7ED',
    logoSvg: 'aws',
    departments: [
      DEPARTMENTS['cloud'],
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['security'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['consulting'],
      DEPARTMENTS['sales']
    ],
    hiringFocusFresher: 'Hires extensively for Cloud Support Associate (CSA), Solutions Architect Interns, and Software Development Engineers with deep networking, Linux, and cloud infrastructure curiosity.',
    techStackHighlights: ['AWS Lambda', 'EC2', 'S3', 'Terraform', 'Go', 'Python', 'Linux Kernel'],
    websiteUrl: 'https://aws.amazon.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'deloitte',
    name: 'Deloitte',
    industry: 'Consulting',
    headquarters: 'London, UK / New York, USA',
    description: 'The world\'s largest professional services organization, delivering audit, consulting, financial advisory, risk advisory, tax, and enterprise technology services to 85% of the Fortune 500.',
    brandColor: '#86BC25',
    accentBg: '#F7FEE7',
    logoSvg: 'deloitte',
    departments: [
      DEPARTMENTS['consulting'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['finance'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['security'],
      DEPARTMENTS['human-resources']
    ],
    hiringFocusFresher: 'Massive campus recruiter. Evaluates business case analysis, structured problem solving, client communication, ERP systems familiarity (SAP/Salesforce/Oracle), and data analytics in Excel/SQL.',
    techStackHighlights: ['SAP', 'Salesforce', 'Power BI', 'SQL Server', 'Python', 'AWS / Azure', 'Oracle Cloud'],
    websiteUrl: 'https://www.deloitte.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'accenture',
    name: 'Accenture',
    industry: 'Consulting',
    headquarters: 'Dublin, Ireland',
    description: 'A leading global professional services company that helps clients build their digital core, optimize their operations, accelerate revenue growth, and enhance citizen services.',
    brandColor: '#A100FF',
    accentBg: '#FAF5FF',
    logoSvg: 'accenture',
    departments: [
      DEPARTMENTS['consulting'],
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['security'],
      DEPARTMENTS['ux-design']
    ],
    hiringFocusFresher: 'Recruits large cohorts for Associate Software Engineer (ASE) and Technology Consulting Analyst positions. Focuses on aptitude, logical reasoning, fundamental programming, and adaptability.',
    techStackHighlights: ['Java', 'Spring Boot', 'Azure', 'Salesforce', 'React', 'Power BI', 'Docker'],
    websiteUrl: 'https://www.accenture.com/careers',
    rolesAvailableCount: 6
  },
  {
    id: 'tcs',
    name: 'TCS',
    industry: 'Technology',
    headquarters: 'Mumbai, Maharashtra, India',
    description: 'Tata Consultancy Services is an Indian multinational IT services and consulting company providing software development, cloud migration, enterprise software, and cognitive business operations.',
    brandColor: '#0076CE',
    accentBg: '#F0F9FF',
    logoSvg: 'tcs',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['consulting'],
      DEPARTMENTS['security']
    ],
    hiringFocusFresher: 'National qualifier test (TCS NQT) assesses cognitive aptitude, verbal ability, and programming logic. Top performers qualify for higher-tier "Digital" and "Prime" cadenced roles.',
    techStackHighlights: ['Java', 'Python', 'SQL', 'React', 'Angular', 'AWS / Azure', 'C++'],
    websiteUrl: 'https://www.tcs.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'infosys',
    name: 'Infosys',
    industry: 'Technology',
    headquarters: 'Bengaluru, Karnataka, India',
    description: 'A global leader in next-generation digital services and consulting, enabling enterprise clients across 56 countries to navigate their digital and cloud transformations.',
    brandColor: '#007CC3',
    accentBg: '#F0F9FF',
    logoSvg: 'infosys',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['consulting'],
      DEPARTMENTS['security']
    ],
    hiringFocusFresher: 'Offers the renowned Mysore training academy experience. Evaluates candidates through InfyTQ and campus assessments in algorithms, object-oriented concepts, and relational databases.',
    techStackHighlights: ['Java', 'Spring', 'Python', 'Angular', 'Oracle DB', 'Kubernetes', 'Azure'],
    websiteUrl: 'https://www.infosys.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'wipro',
    name: 'Wipro',
    industry: 'Technology',
    headquarters: 'Bengaluru, Karnataka, India',
    description: 'A premier technology services and consulting company focused on building innovative solutions that address clients\' most complex digital transformation needs.',
    brandColor: '#B42573',
    accentBg: '#FDF2F8',
    logoSvg: 'wipro',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['security'],
      DEPARTMENTS['consulting']
    ],
    hiringFocusFresher: 'Hires through Elite National Talent Hunt (NTH) and Turbo tracks. Tests aptitude, coding proficiency (Java, Python, C++), and technical communication.',
    techStackHighlights: ['Java', '.NET', 'Python', 'SQL', 'GCP', 'AWS', 'Docker'],
    websiteUrl: 'https://careers.wipro.com',
    rolesAvailableCount: 5
  },
  {
    id: 'ibm',
    name: 'IBM',
    industry: 'Technology',
    headquarters: 'Armonk, New York, USA',
    description: 'A multinational technology corporation producing computer hardware, middleware, and software, leading in hybrid cloud (Red Hat), enterprise AI (watsonx), and quantum computing.',
    brandColor: '#0530AD',
    accentBg: '#EFF6FF',
    logoSvg: 'ibm',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['security'],
      DEPARTMENTS['consulting']
    ],
    hiringFocusFresher: 'Focuses on hybrid cloud architecture (Red Hat OpenShift, Linux), enterprise Java, Python AI models, and structured cognitive problem-solving games during online screening.',
    techStackHighlights: ['Red Hat OpenShift', 'Linux', 'Java', 'Python', 'watsonx', 'Kubernetes', 'Db2'],
    websiteUrl: 'https://www.ibm.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'oracle',
    name: 'Oracle',
    industry: 'Technology',
    headquarters: 'Austin, Texas, USA',
    description: 'A global computer technology corporation known for database software and technology, cloud engineered systems (OCI), and enterprise software products like ERP, SCM, and HCM.',
    brandColor: '#C74634',
    accentBg: '#FEF2F2',
    logoSvg: 'oracle',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['consulting'],
      DEPARTMENTS['product-management']
    ],
    hiringFocusFresher: 'Values core computer science depth, high-performance database engines, multithreaded C++ and Java systems, and distributed cloud computing (Oracle Cloud Infrastructure).',
    techStackHighlights: ['Oracle Database', 'Java', 'C++', 'OCI', 'PL/SQL', 'Docker', 'Linux'],
    websiteUrl: 'https://www.oracle.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    industry: 'Technology',
    headquarters: 'San Francisco, California, USA',
    description: 'The world\'s #1 Customer Relationship Management (CRM) platform, empowering enterprises across sales, customer service, marketing automation, analytics, and application development.',
    brandColor: '#00A1E0',
    accentBg: '#F0F9FF',
    logoSvg: 'salesforce',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['ux-design'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['sales'],
      DEPARTMENTS['cloud']
    ],
    hiringFocusFresher: 'Recruits through campus internships and Futureforce programs. Tests DSA, object-oriented concepts, API design, and cultural alignment with their "Ohana" values.',
    techStackHighlights: ['Apex', 'Lightning Web Components (LWC)', 'Java', 'Python', 'AWS', 'GraphQL', 'PostgreSQL'],
    websiteUrl: 'https://www.salesforce.com/company/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'adobe',
    name: 'Adobe',
    industry: 'Media',
    headquarters: 'San Jose, California, USA',
    description: 'The global leader in digital media and digital marketing solutions, famous for creative software like Photoshop, Illustrator, Premiere Pro, Acrobat, and Adobe Experience Cloud.',
    brandColor: '#FF0000',
    accentBg: '#FEF2F2',
    logoSvg: 'adobe',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['ux-design'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['cloud']
    ],
    hiringFocusFresher: 'High bar for algorithmic depth, computer graphics foundations, WebAssembly, modern C++, and creative UX passion. Conducts rigorous technical coding rounds.',
    techStackHighlights: ['C++', 'TypeScript / React', 'WebAssembly', 'Python', 'WebGL', 'AWS', 'Node.js'],
    websiteUrl: 'https://www.adobe.com/careers.html',
    rolesAvailableCount: 5
  },
  {
    id: 'capgemini',
    name: 'Capgemini',
    industry: 'Consulting',
    headquarters: 'Paris, France',
    description: 'A global business and technology transformation partner, partnering with companies to transform and manage their business by harnessing the power of technology and AI.',
    brandColor: '#0070AD',
    accentBg: '#F0F9FF',
    logoSvg: 'capgemini',
    departments: [
      DEPARTMENTS['consulting'],
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['security']
    ],
    hiringFocusFresher: 'Massive engineering graduate recruiter. Screens via pseudocode tests, analytical reasoning, and spoken English communication assessments.',
    techStackHighlights: ['Java', 'Spring Boot', 'Cloud Microservices', 'Python', 'Angular', 'Azure'],
    websiteUrl: 'https://www.capgemini.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'cognizant',
    name: 'Cognizant',
    industry: 'Technology',
    headquarters: 'Teaneck, New Jersey, USA',
    description: 'A multinational IT services and consulting firm engineering modern businesses to improve everyday life through cloud, data modernizations, and digital engineering.',
    brandColor: '#0033A0',
    accentBg: '#EFF6FF',
    logoSvg: 'cognizant',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['consulting'],
      DEPARTMENTS['security']
    ],
    hiringFocusFresher: 'Hires through GenC, GenC Elevate, and GenC Next tracks, offering tiered compensation based on demonstrated DSA, cloud, and full-stack coding capability.',
    techStackHighlights: ['Java', 'Python', 'AWS / Azure', 'React', 'SQL', 'Spring Boot'],
    websiteUrl: 'https://careers.cognizant.com',
    rolesAvailableCount: 5
  },
  {
    id: 'ey',
    name: 'EY',
    industry: 'Consulting',
    headquarters: 'London, UK',
    description: 'Ernst & Young is one of the Big 4 accounting organizations, providing assurance, tax, strategy, transaction, and technology consulting services to leading global enterprises.',
    brandColor: '#FFE600',
    accentBg: '#FEFCE8',
    logoSvg: 'ey',
    departments: [
      DEPARTMENTS['consulting'],
      DEPARTMENTS['finance'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['security'],
      DEPARTMENTS['software-engineering']
    ],
    hiringFocusFresher: 'Values business case analysis, analytical reasoning, financial acumen, data visualization (Power BI/Tableau), and clear client-facing presentation abilities.',
    techStackHighlights: ['Power BI', 'SQL Server', 'Excel (Advanced)', 'Python', 'Azure', 'SAP ERP'],
    websiteUrl: 'https://www.ey.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'pwc',
    name: 'PwC',
    industry: 'Consulting',
    headquarters: 'London, UK',
    description: 'PricewaterhouseCoopers is a preeminent global professional services network delivering quality in assurance, advisory, tax, and cloud digital engineering services.',
    brandColor: '#D04A02',
    accentBg: '#FFF7ED',
    logoSvg: 'pwc',
    departments: [
      DEPARTMENTS['consulting'],
      DEPARTMENTS['finance'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['security']
    ],
    hiringFocusFresher: 'Emphasizes the "PwC Professional" leadership framework: whole leadership, business acumen, technical/digital capabilities, global/inclusive mindset, and relationships.',
    techStackHighlights: ['Alteryx', 'Tableau', 'Power BI', 'Salesforce', 'Python', 'SQL', 'Azure'],
    websiteUrl: 'https://www.pwc.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'kpmg',
    name: 'KPMG',
    industry: 'Consulting',
    headquarters: 'Amstelveen, Netherlands',
    description: 'A global network of professional services firms providing audit, tax, and advisory services, helping clients capitalize on transformative digital strategies and manage risk.',
    brandColor: '#00338D',
    accentBg: '#EFF6FF',
    logoSvg: 'kpmg',
    departments: [
      DEPARTMENTS['consulting'],
      DEPARTMENTS['finance'],
      DEPARTMENTS['security'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['cloud']
    ],
    hiringFocusFresher: 'Seeks proactive candidates who can synthesize complex financial datasets, model risk scenarios, communicate clearly in slide decks, and work comfortably in team settings.',
    techStackHighlights: ['Power BI', 'Excel', 'Python', 'SQL', 'SAP', 'ServiceNow', 'AWS'],
    websiteUrl: 'https://www.kpmg.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'jpmorgan',
    name: 'JPMorgan Chase',
    industry: 'Banking & Finance',
    headquarters: 'New York, New York, USA',
    description: 'The largest bank in the United States and the world\'s largest bank by market capitalization, delivering investment banking, asset management, and commercial banking.',
    brandColor: '#117ACA',
    accentBg: '#F0F9FF',
    logoSvg: 'jpmorgan',
    departments: [
      DEPARTMENTS['finance'],
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['security'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['product-management']
    ],
    hiringFocusFresher: 'Recruits through Software Engineer Program (SEP) and Corporate & Investment Bank Analyst programs. Demands rigorous technical algorithms or financial modeling excellence.',
    techStackHighlights: ['Java / Spring', 'Python', 'React', 'AWS', 'Kubernetes', 'Oracle DB', 'Kafka'],
    websiteUrl: 'https://careers.jpmorganchase.com',
    rolesAvailableCount: 6
  },
  {
    id: 'hdfc-bank',
    name: 'HDFC Bank',
    industry: 'Banking & Finance',
    headquarters: 'Mumbai, Maharashtra, India',
    description: 'India\'s largest private sector bank by assets and world-leading financial institution providing retail banking, wholesale banking, treasury, and digital payment ecosystems.',
    brandColor: '#004C8F',
    accentBg: '#EFF6FF',
    logoSvg: 'hdfc-bank',
    departments: [
      DEPARTMENTS['finance'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['security'],
      DEPARTMENTS['product-management']
    ],
    hiringFocusFresher: 'Hires for Future Bankers, Management Trainees, and Digital Tech Associates. Looks for financial literacy, risk analysis, database skills, and customer orientation.',
    techStackHighlights: ['Java', 'Oracle Finacle', 'Python', 'SQL', 'DataStage', 'React', 'Linux'],
    websiteUrl: 'https://www.hdfcbank.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'icici-bank',
    name: 'ICICI Bank',
    industry: 'Banking & Finance',
    headquarters: 'Mumbai, Maharashtra, India',
    description: 'A prominent private sector bank in India offering a wide spectrum of banking products and financial services to corporate and retail customers through cutting-edge digital platforms.',
    brandColor: '#B02A30',
    accentBg: '#FEF2F2',
    logoSvg: 'icici-bank',
    departments: [
      DEPARTMENTS['finance'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['security'],
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['human-resources']
    ],
    hiringFocusFresher: 'Offers the ICICI Bank Probationary Officer (PO) and Tech Analyst programs. Tests analytical ability, banking fundamentals, communication, and digital agility.',
    techStackHighlights: ['Java', 'Python', 'Finacle', 'SQL', 'Power BI', 'Android / iOS', 'CyberArk'],
    websiteUrl: 'https://www.icicicareers.com',
    rolesAvailableCount: 5
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    industry: 'E-commerce',
    headquarters: 'Bengaluru, Karnataka, India',
    description: 'One of India\'s leading e-commerce marketplaces and digital commerce leaders, owned by Walmart, powering retail shopping, digital logistics (Ekart), and consumer fintech.',
    brandColor: '#2874F0',
    accentBg: '#EFF6FF',
    logoSvg: 'flipkart',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['ux-design'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['finance']
    ],
    hiringFocusFresher: 'Hires via Flipkart GRiD challenge and campus placements. Highly technical rounds on low-latency backend systems, concurrency in Java/Go, and algorithmic optimization.',
    techStackHighlights: ['Java', 'Go', 'Kafka', 'HBase / Cassandra', 'React Native', 'Kubernetes', 'Python'],
    websiteUrl: 'https://www.flipkartcareers.com',
    rolesAvailableCount: 6
  },
  {
    id: 'walmart',
    name: 'Walmart',
    industry: 'E-commerce',
    headquarters: 'Bentonville, Arkansas, USA',
    description: 'The world\'s largest company by revenue, operating a global chain of hypermarkets, discount department stores, and cutting-edge omnichannel e-commerce retail technology platforms.',
    brandColor: '#0071CE',
    accentBg: '#F0F9FF',
    logoSvg: 'walmart',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['security'],
      DEPARTMENTS['ux-design']
    ],
    hiringFocusFresher: 'Recruits through Walmart Global Tech university programs and Sparkathon. Values distributed systems problem-solving, microservices, and high-volume data handling.',
    techStackHighlights: ['Java', 'Spring Boot', 'Kafka', 'Azure / GCP', 'React', 'Cassandra', 'Kubernetes'],
    websiteUrl: 'https://careers.walmart.com',
    rolesAvailableCount: 6
  },
  {
    id: 'tesla',
    name: 'Tesla',
    industry: 'Automotive',
    headquarters: 'Austin, Texas, USA',
    description: 'Electric vehicle manufacturer and clean energy company leading the revolution in sustainable transport, Full Self-Driving (FSD) computer vision, humanoid robotics, and battery storage.',
    brandColor: '#E82127',
    accentBg: '#FEF2F2',
    logoSvg: 'tesla',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['security'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['cloud']
    ],
    hiringFocusFresher: 'Fast-paced, high-intensity culture. Evaluates first-principles thinking, hands-on mechanical/embedded C++ or Python ability, autonomous vision knowledge, and relentless work ethic.',
    techStackHighlights: ['C / C++', 'Python', 'PyTorch', 'Linux Real-Time Kernel', 'CUDA', 'React', 'Go'],
    websiteUrl: 'https://www.tesla.com/careers',
    rolesAvailableCount: 5
  },
  {
    id: 'apple',
    name: 'Apple',
    industry: 'Manufacturing',
    headquarters: 'Cupertino, California, USA',
    description: 'The world\'s most valuable consumer technology company, designing and manufacturing iconic hardware (iPhone, Mac, iPad, Apple Watch) and operating ecosystem software platforms (iOS, macOS).',
    brandColor: '#555555',
    accentBg: '#F8FAFC',
    logoSvg: 'apple',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['ux-design'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['security'],
      DEPARTMENTS['cloud']
    ],
    hiringFocusFresher: 'Extreme attention to detail and craft. Focuses on low-level systems programming (Swift, Objective-C, C++), memory management, elegant UX design, and deep technical curiosity.',
    techStackHighlights: ['Swift', 'C++', 'Objective-C', 'Metal', 'Python', 'CoreML', 'Kubernetes'],
    websiteUrl: 'https://www.apple.com/careers',
    rolesAvailableCount: 6
  },
  {
    id: 'meta',
    name: 'Meta',
    industry: 'Media',
    headquarters: 'Menlo Park, California, USA',
    description: 'Connects billions of people across Facebook, Instagram, WhatsApp, Messenger, and pioneers spatial computing and open-source artificial intelligence (Llama, PyTorch).',
    brandColor: '#0668E1',
    accentBg: '#EFF6FF',
    logoSvg: 'meta',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['ux-design'],
      DEPARTMENTS['security'],
      DEPARTMENTS['cloud']
    ],
    hiringFocusFresher: 'Evaluates rapid coding execution (DSA), architectural design at global scale (billions of daily active users), and alignment with company core values like "Move Fast".',
    techStackHighlights: ['React / React Native', 'Python', 'PyTorch', 'C++', 'Hack / PHP', 'Cassandra', 'GraphQL'],
    websiteUrl: 'https://www.metacareers.com',
    rolesAvailableCount: 6
  },
  {
    id: 'netflix',
    name: 'Netflix',
    industry: 'Media',
    headquarters: 'Los Gatos, California, USA',
    description: 'The world\'s leading subscription video streaming entertainment service, pioneering personalized recommendation algorithms, microservices architectures, and global content production.',
    brandColor: '#E50914',
    accentBg: '#FEF2F2',
    logoSvg: 'netflix',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['ux-design'],
      DEPARTMENTS['cloud']
    ],
    hiringFocusFresher: 'Famous for high compensation and candid culture ("Freedom and Responsibility"). Evaluates exceptional engineering maturity, distributed systems, and real-time telemetry.',
    techStackHighlights: ['Java', 'Node.js', 'React', 'AWS', 'Kafka', 'Apache Spark', 'Python'],
    websiteUrl: 'https://jobs.netflix.com',
    rolesAvailableCount: 5
  },
  {
    id: 'uber',
    name: 'Uber',
    industry: 'Technology',
    headquarters: 'San Francisco, California, USA',
    description: 'A global mobility and delivery platform transforming how people and goods move across 70+ countries through ride-hailing, Uber Eats food delivery, and freight logistics.',
    brandColor: '#000000',
    accentBg: '#F8FAFC',
    logoSvg: 'uber',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['ux-design'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['security']
    ],
    hiringFocusFresher: 'Recruits through campus placements and Uber APM programs. Evaluates real-time geospatial routing, graph algorithms, high-throughput microservices in Go/Java, and product intuition.',
    techStackHighlights: ['Go', 'Java', 'Python', 'Kafka', 'Apache Hudi', 'Docker', 'React Native'],
    websiteUrl: 'https://www.uber.com/careers',
    rolesAvailableCount: 6
  },
  // Additional top leaders for Healthcare, Telecommunications, and Education industries to ensure all 10 are represented
  {
    id: 'unitedhealth',
    name: 'UnitedHealth Group',
    industry: 'Healthcare',
    headquarters: 'Minnetonka, Minnesota, USA',
    description: 'A diversified health and well-being company operating UnitedHealthcare (benefits) and Optum (health services, data technology, pharmacy care, and digital medicine).',
    brandColor: '#002677',
    accentBg: '#EFF6FF',
    logoSvg: 'unitedhealth',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['security'],
      DEPARTMENTS['consulting'],
      DEPARTMENTS['finance']
    ],
    hiringFocusFresher: 'Hires software and data graduates for Optum Technology teams. Focuses on HIPAA-compliant health data pipelines, enterprise Java, SQL, and patient care analytics.',
    techStackHighlights: ['Java', 'Spring Boot', 'Python', 'Kafka', 'Snowflake', 'AWS', 'Angular'],
    websiteUrl: 'https://careers.unitedhealthgroup.com',
    rolesAvailableCount: 5
  },
  {
    id: 'cisco',
    name: 'Cisco Systems',
    industry: 'Telecommunications',
    headquarters: 'San Jose, California, USA',
    description: 'The worldwide leader in networking technologies, telecommunications equipment, cybersecurity software (Duo, Splunk), and enterprise collaboration tools (Webex).',
    brandColor: '#1BA0D7',
    accentBg: '#F0F9FF',
    logoSvg: 'cisco',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['cloud'],
      DEPARTMENTS['security'],
      DEPARTMENTS['data-ai']
    ],
    hiringFocusFresher: 'Strong focus on computer networking protocols, Linux internals, C/C++ embedded systems, Python automation, and cybersecurity defense frameworks.',
    techStackHighlights: ['Python', 'C / C++', 'Linux', 'Docker', 'Kubernetes', 'OpenStack', 'Go'],
    websiteUrl: 'https://jobs.cisco.com',
    rolesAvailableCount: 4
  },
  {
    id: 'coursera',
    name: 'Coursera',
    industry: 'Education',
    headquarters: 'Mountain View, California, USA',
    description: 'A premier global online learning platform partnering with more than 300 leading universities and companies to bring flexible, job-relevant online education to millions of learners.',
    brandColor: '#0056D2',
    accentBg: '#EFF6FF',
    logoSvg: 'coursera',
    departments: [
      DEPARTMENTS['software-engineering'],
      DEPARTMENTS['data-ai'],
      DEPARTMENTS['product-management'],
      DEPARTMENTS['ux-design']
    ],
    hiringFocusFresher: 'Passionate about democratizing education. Tests full-stack web engineering, learner analytics, recommendation systems, and accessible design principles.',
    techStackHighlights: ['Scala', 'Python', 'React', 'GraphQL', 'AWS', 'Cassandra', 'Docker'],
    websiteUrl: 'https://about.coursera.org/careers',
    rolesAvailableCount: 4
  }
];

export function getCompanyById(id: string): Company | undefined {
  return ALL_COMPANIES.find(c => c.id === id);
}

export function getCompaniesByIndustry(industry: Industry): Company[] {
  return ALL_COMPANIES.filter(c => c.industry === industry);
}

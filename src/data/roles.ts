import { RoleDetail } from '../types';

export const ALL_ROLES: RoleDetail[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    category: 'Engineering',
    departmentId: 'software-engineering',
    departmentName: 'Software Engineering',
    simpleExplanation: 'Designs, writes, tests, and maintains computer code to build web applications, mobile apps, software platforms, and underlying system tools that solve user problems.',
    responsibilities: [
      'Develop clean, maintainable, and reliable software in languages like Python, Java, C++, TypeScript, or Go',
      'Write and maintain clean code according to team coding guidelines and architectural standards',
      'Debug applications, analyze error traces, and resolve functional defects or system crashes',
      'Work with teams including Product Managers, UX Designers, QA Engineers, and Cloud Operations',
      'Design technical solutions, plan database schemas, and create RESTful/gRPC API interfaces',
      'Participate in peer code reviews, mentor juniors, and conduct unit and integration testing'
    ],
    technicalSkills: [
      'Programming (Python, Java, TypeScript, C++, or Go)',
      'Data Structures & Algorithms (DSA)',
      'Databases (Relational SQL & NoSQL)',
      'Git & Version Control',
      'APIs & Web Services (REST, GraphQL, gRPC)',
      'System Design & Architecture Basics'
    ],
    softSkills: [
      'Analytical Problem Solving',
      'Clear Written & Verbal Communication',
      'Teamwork & Active Collaboration',
      'Time Management & Agile Sprint Prioritization',
      'Curiosity & Continuous Self-Learning'
    ],
    toolsAndPlatforms: ['VS Code / IntelliJ', 'Git & GitHub/GitLab', 'Postman', 'Docker', 'Linux / Bash', 'Jira / Linear'],
    skillProgressions: [
      {
        skillName: 'Programming (Python / Java / Go)',
        category: 'Technical',
        beginner: 'Syntax, variables, conditional logic, loops, functions, basic data collections',
        intermediate: 'Object-Oriented Programming (OOP), modular architecture, error handling, package management, unit testing',
        advanced: 'Concurrency, multithreading, memory profiling, asynchronous I/O, architectural patterns & clean code'
      },
      {
        skillName: 'Data Structures & Algorithms',
        category: 'Technical',
        beginner: 'Arrays, Strings, Linked Lists, Stacks, Queues, Big-O time and space complexity basics',
        intermediate: 'Trees, Binary Search, Hash Tables, Sorting algorithms, Recursion, Graph traversals (BFS/DFS)',
        advanced: 'Dynamic Programming, Graph algorithms (Dijkstra), Tries, Heaps, amortized complexity, optimization tradeoffs'
      },
      {
        skillName: 'Databases & Data Storage',
        category: 'Technical',
        beginner: 'Basic SQL queries (SELECT, INSERT, UPDATE, DELETE), table schemas, basic keys',
        intermediate: 'Complex joins, subqueries, indexing principles, normalization (1NF-3NF), transactions & ACID',
        advanced: 'Query plan optimization, connection pooling, database replication, sharding, distributed transactions & NoSQL'
      },
      {
        skillName: 'APIs & Web Protocols',
        category: 'Technical',
        beginner: 'Client-server architecture, HTTP methods (GET, POST), basic JSON payloads',
        intermediate: 'RESTful API conventions, status codes, query parameters, JWT authentication & CORS handling',
        advanced: 'GraphQL schemas, gRPC protobufs, WebSocket real-time communication, rate limiting, idempotent endpoints'
      },
      {
        skillName: 'System Design',
        category: 'Technical',
        beginner: 'Client, server, and database separation; monolith overview, static vs dynamic assets',
        intermediate: 'Load balancers, caching layers (Redis), message queues (Kafka/RabbitMQ), stateless backend architecture',
        advanced: 'CAP theorem, microservices decomposition, distributed caching, circuit breakers, disaster recovery across regions'
      }
    ],
    careerProgression: [
      { level: 'Associate / Graduate Software Engineer (L1)', experience: '0 - 2 Years', focus: 'Ticket execution, bug fixing, learning codebase, writing unit tests under supervision' },
      { level: 'Software Engineer II (L2)', experience: '2 - 5 Years', focus: 'Independent feature delivery, API design, reviewing code, improving system reliability' },
      { level: 'Senior Software Engineer (L3)', experience: '5 - 8 Years', focus: 'System architecture, cross-team technical leadership, mentoring, technical roadmaps' },
      { level: 'Staff / Principal Engineer (L4+)', experience: '8+ Years', focus: 'Org-wide technical vision, high-concurrency systems, cross-org architectural standards' }
    ],
    roadmap: [
      {
        id: 'se-1',
        stepNumber: 1,
        title: 'Learn Fundamentals',
        shortDesc: 'Master a core language, CS foundations, and algorithmic thinking.',
        description: 'Choose one primary programming language (Python, Java, or C++) and understand variables, control flow, functions, and memory basics.',
        checklist: [
          'Choose one core language (Python, Java, or C++) and build terminal scripts',
          'Understand variables, loops, control structures, and recursion',
          'Learn basic time and space complexity (Big-O notation)',
          'Practice basic linear data structures (arrays, strings, linked lists)'
        ],
        estimatedDuration: '4 - 8 Weeks',
        fresherTips: 'Do not jump between languages. Stick to one until you can comfortably solve LeetCode easy problems.'
      },
      {
        id: 'se-2',
        stepNumber: 2,
        title: 'Build Technical Skills',
        shortDesc: 'Deep dive into OOP, databases, Git, and web protocols.',
        description: 'Learn how software is structured in industry. Master Git version control, relational databases, and building server endpoints.',
        checklist: [
          'Learn Git commands: branch, merge, commit, pull requests, resolving conflicts',
          'Design relational schemas and write SQL queries with joins and constraints',
          'Build backend CRUD APIs using Express.js, FastAPI, or Spring Boot',
          'Practice intermediate data structures (Trees, Hash Maps, Heaps, Graph BFS/DFS)'
        ],
        estimatedDuration: '6 - 10 Weeks',
        fresherTips: 'Host your code on GitHub with clean commit messages and clear README documentation.'
      },
      {
        id: 'se-3',
        stepNumber: 3,
        title: 'Complete Projects',
        shortDesc: 'Ship 2-3 full-stack, real-world applications with authentication and databases.',
        description: 'Build projects that solve actual user pain points rather than clone tutorials. Deploy them to a live URL.',
        checklist: [
          'Build a full-stack CRUD application with user authentication (JWT/OAuth)',
          'Integrate third-party APIs (payment gateway, maps, or real-time webhooks)',
          'Deploy frontend to Vercel/Netlify and backend to Render/AWS/Cloud Run',
          'Write automated unit and integration tests for critical endpoints'
        ],
        estimatedDuration: '6 - 8 Weeks',
        fresherTips: 'Recruiters value deployed links with live demo credentials over dozens of unfinished repos.'
      },
      {
        id: 'se-4',
        stepNumber: 4,
        title: 'Build Resume & Portfolio',
        shortDesc: 'Craft an ATS-compliant 1-page resume and structured portfolio site.',
        description: 'Format your achievements using the XYZ formula (Accomplished [X], as measured by [Y], by doing [Z]).',
        checklist: [
          'Create a single-page clean ATS-friendly resume in PDF format',
          'Include clickable GitHub repository and live project deployment links',
          'Highlight technical skills (Languages, Frameworks, Databases, Tools)',
          'Have your resume reviewed by 2 industry seniors or campus alumni'
        ],
        estimatedDuration: '2 - 3 Weeks',
        fresherTips: 'Keep your resume concise. Bullet points should focus on impact and tech used.'
      },
      {
        id: 'se-5',
        stepNumber: 5,
        title: 'Practice Interviews',
        shortDesc: 'Master coding assessments, mock technical interviews, and behavioral STAR stories.',
        description: 'Prepare for live coding, time-constrained algorithm tests, and behavioral questions about teamwork and challenges.',
        checklist: [
          'Solve 100-150 curated LeetCode/HackerRank problems (NeetCode 150)',
          'Do at least 5 live peer mock interviews on platforms like Pramp or with friends',
          'Prepare 5 STAR stories (Situation, Task, Action, Result) for behavioral rounds',
          'Review basic system design concepts (Load balancers, caching, databases)'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Communicate your thought process out loud when writing code in technical rounds.'
      },
      {
        id: 'se-6',
        stepNumber: 6,
        title: 'Apply for Roles',
        shortDesc: 'Target campus placement, graduate programs, referrals, and career portals.',
        description: 'Strategically apply to target companies with tailored cover notes, alumni reach-outs, and follow-ups.',
        checklist: [
          'Identify 30+ target companies (MNCs, startups, enterprise product firms)',
          'Reach out to alumni and engineers on LinkedIn for warm referrals',
          'Attend campus recruitment drives and university hiring career fairs',
          'Track all applications in a personal spreadsheet with dates and statuses'
        ],
        estimatedDuration: 'Ongoing (4 - 12 Weeks)',
        fresherTips: 'Referrals significantly increase the odds of your resume clearing the initial filter.'
      }
    ],
    hiringCompanies: ['google', 'microsoft', 'amazon', 'apple', 'meta', 'netflix', 'uber', 'tcs', 'infosys', 'accenture', 'adobe', 'salesforce', 'flipkart', 'walmart'],
    averageFresherSalaryGuide: '$85,000 - $130,000 / year (US) | ₹6 - 22 LPA (India)',
    dayInTheLife: 'Starts with a 15-minute team standup, followed by 3-4 hours of uninterrupted code implementation, reviewing peer pull requests, testing bug fixes locally, and attending an architecture planning session.'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    category: 'Data & Analytics',
    departmentId: 'data-ai',
    departmentName: 'Data & AI',
    simpleExplanation: 'Collects, cleans, inspects, and analyzes business datasets to uncover patterns, generate reports, and build interactive dashboards that help executives make informed decisions.',
    responsibilities: [
      'Extract data from relational databases using complex SQL queries and automated scripts',
      'Cleanse messy or missing data, perform normalization, and validate data integrity',
      'Build and maintain interactive dashboards in Power BI, Tableau, or Google Looker Studio',
      'Perform exploratory data analysis (EDA) using Python (Pandas) or R to discover trends',
      'Collaborate with business stakeholders, marketing, and finance teams to define core KPIs',
      'Present findings in clear executive summaries with visual charts and actionable recommendations'
    ],
    technicalSkills: [
      'Advanced SQL (Window functions, CTEs, Aggregations)',
      'Data Visualization (Power BI, Tableau, Looker)',
      'Spreadsheets (Advanced Excel / Google Sheets, Pivot Tables, VLOOKUP/XLOOKUP)',
      'Python for Data Analysis (Pandas, NumPy, Matplotlib, Seaborn)',
      'Statistical Methods & Hypothesis Testing',
      'Data Warehousing Concepts (Snowflake, BigQuery)'
    ],
    softSkills: [
      'Business Acumen & Curiosity',
      'Data Storytelling & Presentation',
      'Attention to Detail & Accuracy',
      'Active Listening & Requirement Gathering',
      'Critical Thinking'
    ],
    toolsAndPlatforms: ['SQL Server / PostgreSQL', 'Power BI / Tableau', 'Excel', 'Jupyter Notebook', 'Snowflake', 'BigQuery'],
    skillProgressions: [
      {
        skillName: 'SQL for Analysis',
        category: 'Technical',
        beginner: 'SELECT, WHERE, ORDER BY, GROUP BY, basic aggregate functions (COUNT, SUM, AVG)',
        intermediate: 'INNER/LEFT/RIGHT JOINs, CASE statements, Subqueries, date-time transformations',
        advanced: 'Window functions (RANK, ROW_NUMBER, LAG, LEAD), Common Table Expressions (CTEs), query performance optimization'
      },
      {
        skillName: 'Business Intelligence & Dashboards',
        category: 'Tool',
        beginner: 'Building bar charts, line graphs, applying basic page filters in Tableau/Power BI',
        intermediate: 'Data modeling, star schema design, calculated fields, parameters, interactive drill-downs',
        advanced: 'DAX formulas, complex LOD expressions (Level of Detail), row-level security, automated data refresh pipelines'
      },
      {
        skillName: 'Python for Data Analysis',
        category: 'Technical',
        beginner: 'Basic syntax, loading CSV files with Pandas, descriptive statistics (.describe(), .info())',
        intermediate: 'Data cleaning, handling missing values, filtering dataframes, merging datasets, Seaborn visualization',
        advanced: 'Automated ETL workflows, regular expressions, exploratory statistical modeling, web scraping with BeautifulSoup'
      },
      {
        skillName: 'Spreadsheets (Excel / Sheets)',
        category: 'Tool',
        beginner: 'Basic arithmetic, cell formatting, SUM, AVERAGE, sorting and filtering rows',
        intermediate: 'VLOOKUP, XLOOKUP, INDEX-MATCH, Pivot Tables, conditional formatting, data validation',
        advanced: 'Power Query for automated data transformation, dynamic arrays, VBA/macros, financial model templates'
      }
    ],
    careerProgression: [
      { level: 'Junior Data Analyst', experience: '0 - 2 Years', focus: 'Ad-hoc SQL queries, generating recurring reports, building dashboard widgets' },
      { level: 'Senior Data Analyst', experience: '2 - 5 Years', focus: 'Owning end-to-end analytics domains, mentoring juniors, defining business KPI taxonomies' },
      { level: 'Lead Analyst / Analytics Manager', experience: '5 - 8 Years', focus: 'Cross-functional data strategy, stakeholder alignment, pipeline governance' },
      { level: 'Head of Business Intelligence / Analytics Director', experience: '8+ Years', focus: 'Enterprise data architecture, data monetization, strategic executive advising' }
    ],
    roadmap: [
      {
        id: 'da-1',
        stepNumber: 1,
        title: 'Learn Fundamentals',
        shortDesc: 'Master spreadsheet modeling, basic statistics, and business metrics.',
        description: 'Understand core mathematical and business metrics like churn, conversion rate, CAC, and ROI. Master Excel and basic probability.',
        checklist: [
          'Master Excel functions: XLOOKUP, INDEX/MATCH, SUMIFS, Pivot Tables',
          'Learn fundamental statistics: Mean, Median, Standard Deviation, Percentiles',
          'Understand core business metrics (Revenue, Retention, Conversion Funnels)',
          'Practice cleaning datasets manually to build intuition for data anomalies'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Being great at Excel builds the mental model for SQL and relational tables.'
      },
      {
        id: 'da-2',
        stepNumber: 2,
        title: 'Build Technical Skills',
        shortDesc: 'Deep dive into SQL queries, joins, and Power BI or Tableau.',
        description: 'SQL is the foundation of any analyst role. Learn how to query multi-table databases and build clean dashboards.',
        checklist: [
          'Practice 50+ SQL queries on SQLZoo, LeetCode Database, or Mode Analytics',
          'Master Window Functions (ROW_NUMBER, DENSE_RANK, LAG, LEAD)',
          'Learn one BI tool: Power BI (DAX) or Tableau (Calculated Fields)',
          'Learn basic Python with Pandas and Matplotlib for exploratory data analysis'
        ],
        estimatedDuration: '6 - 8 Weeks',
        fresherTips: 'Focus on writing readable SQL with clear indentation and aliases.'
      },
      {
        id: 'da-3',
        stepNumber: 3,
        title: 'Complete Projects',
        shortDesc: 'Build 2 comprehensive dashboard case studies with real business recommendations.',
        description: 'Download public datasets (Kaggle, data.gov) and build end-to-end portfolio projects that tell a story.',
        checklist: [
          'E-commerce Customer Segmentation or Sales Performance dashboard',
          'Healthcare / Finance operational metrics reporting case study',
          'Publish interactive Tableau Public or NovyPro Power BI reports',
          'Write a 500-word business memo explaining the key findings and next steps'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'A dashboard without business takeaways is just pretty charts. Include "Key Recommendations".'
      },
      {
        id: 'da-4',
        stepNumber: 4,
        title: 'Build Resume & Portfolio',
        shortDesc: 'Publish your interactive BI portfolio and highlight business impact.',
        description: 'Showcase your SQL queries, code notebooks on GitHub, and interactive dashboards on your portfolio.',
        checklist: [
          'Create a 1-page resume emphasizing SQL, BI tools, and data volumes analyzed',
          'Link Tableau Public or Power BI portfolio directly in your resume header',
          'Document project methodology on GitHub with datasets and ER diagrams',
          'Get feedback on clarity from peers or online analytics communities'
        ],
        estimatedDuration: '2 - 3 Weeks',
        fresherTips: 'Add screenshots of your best charts to your LinkedIn featured section.'
      },
      {
        id: 'da-5',
        stepNumber: 5,
        title: 'Practice Interviews',
        shortDesc: 'Prepare for live SQL tests, business case questions, and data interpretation.',
        description: 'Expect live screen-share SQL querying and case studies like "Why did our product signups drop 15% last week?"',
        checklist: [
          'Practice live coding complex SQL joins and aggregations without auto-complete',
          'Learn product analytics case frameworks (Metrics decomposition, root-cause analysis)',
          'Practice explaining statistical concepts in plain English to non-technical interviewers',
          'Prepare 5 STAR stories on handling ambiguous requirements or unclean data'
        ],
        estimatedDuration: '3 - 5 Weeks',
        fresherTips: 'When given a metric drop problem, never guess. Clarify seasonality, bugs, and segments first.'
      },
      {
        id: 'da-6',
        stepNumber: 6,
        title: 'Apply for Roles',
        shortDesc: 'Apply to business intelligence, marketing analytics, and operations analyst roles.',
        description: 'Target banks, consulting firms, e-commerce giants, and SaaS companies with tailored portfolio links.',
        checklist: [
          'Target entry-level titles: Junior Data Analyst, BI Analyst, Operations Analyst, MIS Executive',
          'Connect with analytics managers on LinkedIn sharing your dashboard case study',
          'Apply directly via company career portals with customized resumes',
          'Follow up with recruiter contacts 5-7 business days after applying'
        ],
        estimatedDuration: 'Ongoing (4 - 10 Weeks)',
        fresherTips: 'Consulting and financial firms hire huge cohorts of fresh data analysts annually.'
      }
    ],
    hiringCompanies: ['deloitte', 'ey', 'pwc', 'kpmg', 'jpmorgan', 'hdfc-bank', 'icici-bank', 'amazon', 'flipkart', 'walmart', 'accenture', 'google', 'uber'],
    averageFresherSalaryGuide: '$65,000 - $95,000 / year (US) | ₹4.5 - 12 LPA (India)',
    dayInTheLife: 'Pulls weekly operational metrics using SQL, troubleshoots a missing data field in an automated ingestion pipeline, updates the executive revenue dashboard, and meets with marketing to evaluate last month’s campaign ROI.'
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Solutions Engineer',
    category: 'Cloud & Infrastructure',
    departmentId: 'cloud',
    departmentName: 'Cloud & Infrastructure',
    simpleExplanation: 'Designs, deploys, and manages scalable computing systems, storage, and networking on cloud providers like AWS, Microsoft Azure, and Google Cloud to keep digital services running fast and reliably.',
    responsibilities: [
      'Provision and configure cloud compute instances, serverless functions, and storage buckets',
      'Implement Infrastructure as Code (IaC) using Terraform, CloudFormation, or Ansible',
      'Configure Virtual Private Clouds (VPCs), subnets, routing tables, and security firewalls',
      'Ensure high availability, disaster recovery, automated backups, and autoscaling',
      'Monitor cloud resource consumption, optimize cloud bills, and implement FinOps practices',
      'Collaborate with development teams to migrate legacy on-premises servers to cloud architectures'
    ],
    technicalSkills: [
      'Cloud Providers (AWS / Azure / GCP)',
      'Infrastructure as Code (Terraform)',
      'Linux Server Administration & Bash',
      'Cloud Networking (VPC, CIDR, DNS, Load Balancers)',
      'Containerization (Docker & Kubernetes basics)',
      'Identity & Access Management (IAM & Security Policies)'
    ],
    softSkills: [
      'Methodical Troubleshooting',
      'Security-First Mindset',
      'Calm Under Pressure (Incident Management)',
      'Clear Documentation',
      'Cross-Team Collaboration'
    ],
    toolsAndPlatforms: ['AWS Console / CLI', 'Terraform', 'Docker', 'Kubernetes', 'Linux Ubuntu / RHEL', 'CloudWatch / Datadog'],
    skillProgressions: [
      {
        skillName: 'Cloud Architecture (AWS / GCP / Azure)',
        category: 'Technical',
        beginner: 'Virtual machines (EC2/Compute Engine), object storage (S3), basic IAM user permissions',
        intermediate: 'VPC design, public/private subnets, NAT gateways, application load balancers, RDS databases',
        advanced: 'Multi-region architectures, serverless event-driven flows (Lambda, EventBridge), transit gateways, hybrid connectivity'
      },
      {
        skillName: 'Infrastructure as Code (Terraform)',
        category: 'Technical',
        beginner: 'HCL syntax, providers, creating single resources (S3 bucket, EC2 instance), terraform apply/destroy',
        intermediate: 'Variables, output values, state files, remote S3 backends with DynamoDB locking, terraform modules',
        advanced: 'Custom reusable modules, dynamic blocks, terraform workspaces, CI/CD pipeline integration, drift detection'
      },
      {
        skillName: 'Linux & Scripting',
        category: 'Technical',
        beginner: 'File navigation, permissions (chmod/chown), SSH keys, package managers (apt, yum)',
        intermediate: 'Bash scripting for automated tasks, systemd services, cron jobs, process inspection (top, htop, ps)',
        advanced: 'Kernel tuning, network socket debugging (netstat, tcpdump), custom system monitoring scripts'
      },
      {
        skillName: 'Containers & Orchestration',
        category: 'Technical',
        beginner: 'Writing Dockerfiles, building container images, docker run, port mapping',
        intermediate: 'Docker compose multi-container setups, image size optimization, container registries (ECR/GCR)',
        advanced: 'Kubernetes Pods, Deployments, Services, Ingress controllers, Helm charts, cluster autoscaling'
      }
    ],
    careerProgression: [
      { level: 'Associate Cloud Engineer', experience: '0 - 2 Years', focus: 'Provisioning resources, running terraform scripts, basic VPC setups, monitoring alerts' },
      { level: 'Cloud Engineer / Cloud Consultant', experience: '2 - 5 Years', focus: 'Cloud migration execution, automated CI/CD deployment, security hardening' },
      { level: 'Senior Cloud Solutions Architect', experience: '5 - 8 Years', focus: 'Designing resilient enterprise cloud topologies, cost governance, multi-cloud strategy' },
      { level: 'Principal Cloud Architect / Director', experience: '8+ Years', focus: 'Executive cloud vision, enterprise digital transformation, regulatory compliance oversight' }
    ],
    roadmap: [
      {
        id: 'ce-1',
        stepNumber: 1,
        title: 'Learn Fundamentals',
        shortDesc: 'Understand computer networking, Linux administration, and virtualization.',
        description: 'Cloud is built on Linux and networking. Grasp IP addressing, DNS, ports, and command-line navigation before diving into cloud providers.',
        checklist: [
          'Install Linux (Ubuntu WSL or VirtualBox) and practice 40+ daily terminal commands',
          'Learn networking fundamentals: OSI model, TCP/IP, DNS, DHCP, CIDR notation',
          'Understand client-server architecture and HTTP/HTTPS SSL certificates',
          'Write basic Bash automation scripts to backup files or check server status'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Do not touch cloud services until you are comfortable inside a headless Linux terminal.'
      },
      {
        id: 'ce-2',
        stepNumber: 2,
        title: 'Build Technical Skills',
        shortDesc: 'Master AWS or Azure core services and earn an entry-level certification.',
        description: 'Focus on one major cloud platform (AWS or Azure). Master IAM, VPCs, compute instances, storage, and databases.',
        checklist: [
          'Create a free-tier AWS or Azure account and set up billing alarms',
          'Deploy a secure VPC with public/private subnets, NAT gateway, and security groups',
          'Host a static website on S3/CloudFront and a dynamic app on EC2 with an RDS database',
          'Study for and pass AWS Certified Solutions Architect - Associate or Azure AZ-104'
        ],
        estimatedDuration: '6 - 8 Weeks',
        fresherTips: 'An associate-level cloud certification provides huge credibility for freshers without prior work experience.'
      },
      {
        id: 'ce-3',
        stepNumber: 3,
        title: 'Complete Projects',
        shortDesc: 'Deploy automated infrastructure using Terraform and containerized apps.',
        description: 'Move away from clicking in the web console. Everything in industry is automated with code.',
        checklist: [
          'Write Terraform code to spin up an entire web application stack from scratch',
          'Containerize a multi-tier app using Docker and deploy to AWS ECS or EKS',
          'Configure a CI/CD pipeline in GitHub Actions that runs terraform plan/apply',
          'Set up monitoring and alerting with AWS CloudWatch and SNS alerts'
        ],
        estimatedDuration: '5 - 7 Weeks',
        fresherTips: 'Provide architecture diagrams in your GitHub repos showing your VPC subnet topology.'
      },
      {
        id: 'ce-4',
        stepNumber: 4,
        title: 'Build Resume & Portfolio',
        shortDesc: 'Showcase your certification badge and Terraform code repositories.',
        description: 'Recruiters look for verifiable cloud certs and clear GitHub repositories with IaC code.',
        checklist: [
          'Display your verified Credly certification badge prominently on LinkedIn and resume',
          'Create a GitHub repository titled `cloud-infrastructure-terraform` with clear docs',
          'Document cost considerations and security practices implemented in your projects',
          'Have your resume checked for cloud terminology (VPC, IAM, Terraform, S3, ECS)'
        ],
        estimatedDuration: '2 - 3 Weeks',
        fresherTips: 'Mention security best practices (e.g. least-privilege IAM roles) in your bullet points.'
      },
      {
        id: 'ce-5',
        stepNumber: 5,
        title: 'Practice Interviews',
        shortDesc: 'Practice cloud architecture whiteboard scenarios and troubleshooting.',
        description: 'Be ready to answer questions on high availability, troubleshooting a downed server, and subnet CIDR math.',
        checklist: [
          'Whiteboard: "Design a fault-tolerant, auto-scaling web application across 2 availability zones"',
          'Practice troubleshooting scenarios: "An EC2 instance cannot connect to the internet, diagnose why"',
          'Master IAM security concepts (Roles vs Users vs Policies vs SCPs)',
          'Prepare STAR stories on automating manual tasks and overcoming cloud bugs'
        ],
        estimatedDuration: '3 - 5 Weeks',
        fresherTips: 'Always mention security, backup, and cost optimization when answering architecture questions.'
      },
      {
        id: 'ce-6',
        stepNumber: 6,
        title: 'Apply for Roles',
        shortDesc: 'Apply to Cloud Engineer, Cloud Consultant, and DevOps Graduate roles.',
        description: 'Major cloud consulting partners (Deloitte, Accenture, Capgemini, TCS) and tech companies hire aggressively.',
        checklist: [
          'Target titles: Junior Cloud Engineer, Cloud Support Associate, Cloud Consultant',
          'Apply to AWS, Microsoft, Google Cloud, and Tier-1 Cloud Consulting partners',
          'Engage with local AWS User Groups and community meetups',
          'Follow up on applications with hiring managers demonstrating your IaC repo'
        ],
        estimatedDuration: 'Ongoing (4 - 10 Weeks)',
        fresherTips: 'Cloud Support Associate (CSA) at AWS is one of the premier entry-level paths into cloud.'
      }
    ],
    hiringCompanies: ['aws', 'microsoft', 'google', 'ibm', 'oracle', 'deloitte', 'accenture', 'capgemini', 'cognizant', 'tcs', 'wipro', 'infosys'],
    averageFresherSalaryGuide: '$80,000 - $120,000 / year (US) | ₹5.5 - 16 LPA (India)',
    dayInTheLife: 'Reviews daily cloud budget alerts, writes Terraform scripts to automate an application cluster deployment, investigates a DNS routing latency ticket, and conducts a load-balancing security audit.'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    category: 'Product & Strategy',
    departmentId: 'product-management',
    departmentName: 'Product Management',
    simpleExplanation: 'Sits at the intersection of business, technology, and user experience to identify customer problems, define what features to build, and lead cross-functional teams to launch successful products.',
    responsibilities: [
      'Conduct customer interviews and survey user pain points to discover viable product opportunities',
      'Author detailed Product Requirement Documents (PRDs) and user stories with acceptance criteria',
      'Define product roadmaps, prioritize backlogs using frameworks like RICE or MoSCoW',
      'Collaborate daily with Engineering leads, UI/UX Designers, Data Analysts, and Marketing',
      'Track North Star metrics, user retention, conversion funnels, and churn rates',
      'Lead sprint planning, product demos, feature launch checklists, and post-launch retrospectives'
    ],
    technicalSkills: [
      'Product Analytics (Mixpanel, Amplitude, Google Analytics)',
      'Wireframing & Prototyping (Figma basics)',
      'Technical Literacy (APIs, System Architecture, Databases)',
      'Agile / Scrum Methodologies (Jira, Confluence)',
      'A/B Testing & Experimentation Design',
      'Market & Competitive Research'
    ],
    softSkills: [
      'Influence Without Authority',
      'Empathetic Communication',
      'Strategic Prioritization',
      'Executive Storytelling & Presentation',
      'Decisiveness in Ambiguity'
    ],
    toolsAndPlatforms: ['Jira / Linear', 'Figma', 'Mixpanel / Amplitude', 'Notion / Confluence', 'Postman', 'Google Workspace'],
    skillProgressions: [
      {
        skillName: 'Product Discovery & PRD Writing',
        category: 'Technical',
        beginner: 'Writing user stories in standard format: "As a [user], I want [goal], so that [benefit]"',
        intermediate: 'Drafting complete PRDs with user flows, edge cases, success metrics, and release phases',
        advanced: 'Opportunity solution trees, jobs-to-be-done (JTBD) frameworks, discovery sprint facilitation'
      },
      {
        skillName: 'Product Analytics & Metrics',
        category: 'Technical',
        beginner: 'Defining North Star metrics, tracking active users (DAU/MAU), basic funnel conversion',
        intermediate: 'Setting up event tracking schemas, cohort retention analysis, tracking feature adoption',
        advanced: 'Designing statistically sound A/B tests, multi-variant testing, sample size calculation, guardrail metrics'
      },
      {
        skillName: 'Prioritization Frameworks',
        category: 'Technical',
        beginner: 'MoSCoW (Must, Should, Could, Won\'t), effort vs impact matrix',
        intermediate: 'RICE scoring (Reach, Impact, Confidence, Effort), Kano model categorization',
        advanced: 'Cost of delay, WSJF (Weighted Shortest Job First), strategic portfolio balancing'
      },
      {
        skillName: 'Technical Literacy',
        category: 'Technical',
        beginner: 'Understanding frontend vs backend, REST APIs, JSON data structures',
        intermediate: 'Evaluating technical debt tradeoffs, understanding database schema constraints and caching',
        advanced: 'Assessing engineering scalability estimates, API design reviews, AI model capabilities and latency bounds'
      }
    ],
    careerProgression: [
      { level: 'Associate Product Manager (APM)', experience: '0 - 2 Years', focus: 'Feature-level execution, writing user stories, user interviews, tracking release metrics' },
      { level: 'Product Manager (PM)', experience: '2 - 5 Years', focus: 'Owning a complete product area or squad, quarterly roadmap definition, stakeholder alignment' },
      { level: 'Senior Product Manager', experience: '5 - 8 Years', focus: 'Multi-squad product strategy, driving revenue or growth initiatives, mentoring APMs' },
      { level: 'Group PM / Director / VP of Product', experience: '8+ Years', focus: 'Organizational product vision, hiring PM leaders, cross-company portfolio prioritization' }
    ],
    roadmap: [
      {
        id: 'pm-1',
        stepNumber: 1,
        title: 'Learn Fundamentals',
        shortDesc: 'Understand the PM role, customer empathy, and the software product lifecycle.',
        description: 'Read canonical PM literature (Inspired by Marty Cagan, The Lean Startup) and understand how technology products make money.',
        checklist: [
          'Read "Inspired" by Marty Cagan and "Cracking the PM Interview"',
          'Study how top products (Spotify, Uber, Airbnb) solve user pain points',
          'Learn the Agile/Scrum framework (Sprints, Epics, Standups, Retrospectives)',
          'Understand key business models: SaaS, Marketplace, Freemium, Ad-based'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Do not think PM is about being the "boss". It is about serving the team and the customer.'
      },
      {
        id: 'pm-2',
        stepNumber: 2,
        title: 'Build Technical Skills',
        shortDesc: 'Learn PRD authoring, wireframing in Figma, and data analytics.',
        description: 'PMs need to communicate visually and quantitatively. Learn to analyze user funnels and create clickable prototypes.',
        checklist: [
          'Master Figma basics to create wireframes and user interaction flows',
          'Write 2 exhaustive Product Requirement Documents (PRDs) for feature ideas',
          'Learn product analytics tools (Mixpanel demo / Amplitude sandbox)',
          'Learn basic SQL to query user behavior logs without relying on engineers'
        ],
        estimatedDuration: '5 - 7 Weeks',
        fresherTips: 'Write a PRD for a real app you use daily, proposing a feature that solves a concrete flaw.'
      },
      {
        id: 'pm-3',
        stepNumber: 3,
        title: 'Complete Projects',
        shortDesc: 'Create a teardown portfolio, design a feature end-to-end, or launch a mini-project.',
        description: 'Show proof of product thinking through publicly published product teardowns or side projects launched with engineers.',
        checklist: [
          'Publish a comprehensive Product Teardown analyzing a popular app flaw and your proposed solution',
          'Partner with a student software engineer to build and launch a functional micro-product',
          'Conduct 5 real user interviews and document your insights into an Opportunity Solution Tree',
          'Define the go-to-market (GTM) launch strategy and initial KPI targets'
        ],
        estimatedDuration: '6 - 8 Weeks',
        fresherTips: 'A live side project with 100 real users beats any theoretical PowerPoint presentation.'
      },
      {
        id: 'pm-4',
        stepNumber: 4,
        title: 'Build Resume & Portfolio',
        shortDesc: 'Build a Notion or personal portfolio showcasing your PRDs, teardowns, and user research.',
        description: 'Recruiters want to see how you think. A visual portfolio with structured case studies is critical for PM applicants.',
        checklist: [
          'Build a clean personal portfolio (Notion or personal web link) highlighting 3 product case studies',
          'Include clickable Figma prototype links, PRD documents, and data metrics',
          'Write your resume focusing on outcomes: "Shipped feature that improved activation by 18%"',
          'Have your portfolio critiqued by an existing PM in an online community'
        ],
        estimatedDuration: '2 - 3 Weeks',
        fresherTips: 'Clearly articulate "Why this problem mattered" before jumping into your solution.'
      },
      {
        id: 'pm-5',
        stepNumber: 5,
        title: 'Practice Interviews',
        shortDesc: 'Master Product Sense, Analytical/Metrics, and Behavioral interview questions.',
        description: 'PM interviews follow structured frameworks: CIRCLES for product design, root-cause analysis for metrics, and STAR for leadership.',
        checklist: [
          'Master the CIRCLES method for Product Sense ("Design an alarm clock for the blind")',
          'Practice Execution questions ("Metric X dropped by 10%, how do you investigate?")',
          'Practice 15+ peer mock interviews on Lewis Lin Slack or Product Management clubs',
          'Refine stories demonstrating how you influenced teammates without direct managerial authority'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Always start product design questions by segmenting user personas and choosing one target user.'
      },
      {
        id: 'pm-6',
        stepNumber: 6,
        title: 'Apply for Roles',
        shortDesc: 'Target Associate Product Manager (APM) cohorts and rotational programs.',
        description: 'Google, Uber, Meta, Salesforce, and Walmart run prestigious APM programs tailored specifically for fresh graduates.',
        checklist: [
          'Apply to APM programs (Google APM, Uber APM, Salesforce APM, Flipkart APM)',
          'Target Product Analyst, Junior PM, and Business Analyst roles at fast-growing tech firms',
          'Network with APM alumni on LinkedIn for program insights and referrals',
          'Tailor your pitch to the specific product mission of each company you apply to'
        ],
        estimatedDuration: 'Ongoing (6 - 12 Weeks)',
        fresherTips: 'APM applications open once a year (typically August-October). Mark calendar deadlines early!'
      }
    ],
    hiringCompanies: ['google', 'microsoft', 'amazon', 'uber', 'meta', 'apple', 'adobe', 'salesforce', 'flipkart', 'walmart', 'netflix'],
    averageFresherSalaryGuide: '$95,000 - $145,000 / year (US) | ₹10 - 28 LPA (India)',
    dayInTheLife: 'Facilitates daily engineering standup, reviews designer wireframes for a checkout revamp, meets with customer support leads to triage user feedback, writes sprint user stories in Jira, and tests staging builds.'
  },
  {
    id: 'ux-designer',
    title: 'UX / UI Designer',
    category: 'Design',
    departmentId: 'ux-design',
    departmentName: 'UX Design',
    simpleExplanation: 'Researches how people interact with digital products and crafts intuitive, accessible, and visually captivating interfaces that make technology easy and enjoyable to use.',
    responsibilities: [
      'Conduct generative user research, stakeholder interviews, and usability testing sessions',
      'Create low-fidelity wireframes, information architecture diagrams, and user flow charts',
      'Design high-fidelity user interfaces, design systems, and responsive component libraries in Figma',
      'Build interactive prototypes with micro-animations to simulate real app interactions',
      'Ensure accessibility standards (WCAG AA/AAA compliance, color contrast, screen reader compatibility)',
      'Handoff polished specs, asset exports, and interaction guidelines to front-end developers'
    ],
    technicalSkills: [
      'Interface Design & Prototyping (Figma)',
      'User Research & Usability Testing Methods',
      'Information Architecture & User Journey Mapping',
      'Design Systems & Component Tokens',
      'Accessibility Standards (WCAG 2.1)',
      'Basic Front-End Understanding (HTML, CSS, Flexbox/Grid)'
    ],
    softSkills: [
      'Deep User Empathy',
      'Design Critique & Constructive Feedback',
      'Visual Storytelling',
      'Cross-Functional Negotiation',
      'Attention to Aesthetic Craft'
    ],
    toolsAndPlatforms: ['Figma', 'FigJam / Miro', 'Lottie / Principle', 'Maze / UserTesting', 'Notion', 'Adobe Creative Cloud'],
    skillProgressions: [
      {
        skillName: 'Figma & Visual Craft',
        category: 'Tool',
        beginner: 'Frames, shapes, typography hierarchy, basic color styles, exporting PNGs/SVGs',
        intermediate: 'Auto-layout, nested components, component properties, variants, responsive constraints',
        advanced: 'Design token architecture, multi-brand library maintenance, interactive variables & conditional prototypes'
      },
      {
        skillName: 'User Experience Research',
        category: 'Technical',
        beginner: 'Writing user survey questionnaires, observing unmoderated user sessions',
        intermediate: 'Moderated usability testing, heuristic evaluation, card sorting, tree testing, affinity mapping',
        advanced: 'Longitudinal diary studies, quantitative usability benchmarking (SUS scores), behavioral analytics synthesis'
      },
      {
        skillName: 'Information Architecture',
        category: 'Technical',
        beginner: 'Creating simple sitemaps and linear screen flows',
        intermediate: 'Complex navigation taxonomies, search and filter states, multi-step checkout logic',
        advanced: 'Enterprise workspace architecture, permission-based UI states, multi-modal interaction models'
      },
      {
        skillName: 'Design Systems & Tokens',
        category: 'Technical',
        beginner: 'Building a consistent color palette, button states (default, hover, active, disabled)',
        intermediate: 'Creating comprehensive component libraries with states, dark mode adaptations, spacing scales',
        advanced: 'W3C design token standards, headless UI synchronization with React/Tailwind tokens, governance models'
      }
    ],
    careerProgression: [
      { level: 'Junior UX/UI Designer', experience: '0 - 2 Years', focus: 'UI screen layout, executing component variations, icon creation, basic usability notes' },
      { level: 'Product Designer', experience: '2 - 5 Years', focus: 'End-to-end product design, running user studies, managing design system modules' },
      { level: 'Senior Product Designer', experience: '5 - 8 Years', focus: 'Complex interaction workflows, design strategy across squads, cross-functional leadership' },
      { level: 'Staff / Design Director', experience: '8+ Years', focus: 'Global brand and product design language, creative leadership, design ops scaling' }
    ],
    roadmap: [
      {
        id: 'ux-1',
        stepNumber: 1,
        title: 'Learn Fundamentals',
        shortDesc: 'Understand visual hierarchy, typography, color theory, and Gestalt principles.',
        description: 'Design is not just decoration. Learn why humans perceive order, contrast, alignment, and rhythm.',
        checklist: [
          'Read "The Design of Everyday Things" by Don Norman and "Refactoring UI"',
          'Study Gestalt psychology principles (Proximity, Similarity, Continuity, Closure)',
          'Learn typography fundamentals: type scales, line heights, font pairings, contrast ratios',
          'Practice recreating 5 well-designed mobile app screens pixel-for-pixel in Figma'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Copying existing world-class apps is the fastest way to train your design eye for spacing and padding.'
      },
      {
        id: 'ux-2',
        stepNumber: 2,
        title: 'Build Technical Skills',
        shortDesc: 'Master Figma Auto-Layout, component variants, and interactive prototyping.',
        description: 'Figma is the industry standard. Become fluent with Auto-Layout, responsive constraints, and design systems.',
        checklist: [
          'Master Figma Auto-Layout (nested flex containers, fill vs hug vs fixed)',
          'Build an accessible UI component library with buttons, inputs, modals, and tooltips',
          'Learn basic HTML and CSS (Flexbox, Box Model) so you understand engineering constraints',
          'Practice interactive prototyping with smart animations and component variables'
        ],
        estimatedDuration: '6 - 8 Weeks',
        fresherTips: 'Engineers love designers who understand how CSS Flexbox works.'
      },
      {
        id: 'ux-3',
        stepNumber: 3,
        title: 'Complete Projects',
        shortDesc: 'Execute 2 thorough UX case studies showing real problem discovery to final UI.',
        description: 'Do not just post pretty Dribbble shots. Case studies must showcase user research, wireframes, iterations, and usability testing.',
        checklist: [
          'Case Study 1: Redesign a frustrating public service or mobile app with user feedback',
          'Case Study 2: Design a 0-to-1 concept solving a specific student or local community pain point',
          'Conduct usability tests with 3 real users on your prototype and document revisions made',
          'Show before-and-after iterations and state explicitly why certain design choices were abandoned'
        ],
        estimatedDuration: '6 - 8 Weeks',
        fresherTips: 'Highlighting design failures that you corrected based on user testing is a huge green flag to recruiters.'
      },
      {
        id: 'ux-4',
        stepNumber: 4,
        title: 'Build Resume & Portfolio',
        shortDesc: 'Publish an online design portfolio with 2-3 in-depth case studies.',
        description: 'Your portfolio is 90% of your job application. Keep case studies scannable with clear visual headings.',
        checklist: [
          'Create a portfolio website on Framer, Webflow, or a custom domain',
          'Structure each case study: Context, Problem, Research, Solution, Iterations, Outcome',
          'Optimize your site for mobile viewing (many hiring managers review portfolios on phones)',
          'Include a brief "About Me" section highlighting your design philosophy and personality'
        ],
        estimatedDuration: '3 - 4 Weeks',
        fresherTips: 'Keep intro summaries short. Hiring managers spend less than 90 seconds reviewing a portfolio.'
      },
      {
        id: 'ux-5',
        stepNumber: 5,
        title: 'Practice Interviews',
        shortDesc: 'Prepare for portfolio walkthroughs, past work critiques, and whiteboard design challenges.',
        description: 'Be prepared to present one case study for 20 minutes and tackle an on-the-spot whiteboard problem.',
        checklist: [
          'Prepare a 20-minute slide deck for your primary case study presentation',
          'Practice timed 30-minute whiteboard design challenges using structured frameworks',
          'Be ready to answer: "Why did you choose this layout over an alternative?"',
          'Prepare answers on resolving conflicts between business goals and user preferences'
        ],
        estimatedDuration: '3 - 5 Weeks',
        fresherTips: 'Never be defensive during portfolio critiques. Listen thoughtfully and explain your rationale.'
      },
      {
        id: 'ux-6',
        stepNumber: 6,
        title: 'Apply for Roles',
        shortDesc: 'Apply to Product Designer and UX Designer positions across tech and agencies.',
        description: 'Connect with design leads on Twitter/X and LinkedIn, share work in progress, and attend design meetups.',
        checklist: [
          'Target titles: Junior Product Designer, UX/UI Designer, Visual Designer, UX Researcher',
          'Apply to consumer tech giants (Apple, Google, Netflix, Airbnb) and enterprise SaaS firms',
          'Reach out directly to Design Managers on LinkedIn with a polite note and your portfolio link',
          'Participate in design hackathons and community design challenges'
        ],
        estimatedDuration: 'Ongoing (4 - 12 Weeks)',
        fresherTips: 'A tailored note commenting on the company’s recent design update gets noticed.'
      }
    ],
    hiringCompanies: ['apple', 'google', 'adobe', 'meta', 'microsoft', 'netflix', 'uber', 'amazon', 'salesforce', 'flipkart'],
    averageFresherSalaryGuide: '$75,000 - $115,000 / year (US) | ₹5 - 18 LPA (India)',
    dayInTheLife: 'Synthesizes recordings from 3 customer usability sessions, refines auto-layout components for a mobile checkout redesign, pairs with an iOS developer on animation timings, and reviews icon additions to the Figma design system.'
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    category: 'Security',
    departmentId: 'security',
    departmentName: 'Cybersecurity & InfoSec',
    simpleExplanation: 'Protects an organization’s computer networks, cloud servers, and sensitive user data from cyber attacks, malware, unauthorized breaches, and digital fraud.',
    responsibilities: [
      'Monitor Security Information and Event Management (SIEM) systems for anomalous activity',
      'Investigate security alerts, triage potential intrusion incidents, and isolate compromised systems',
      'Perform vulnerability assessments, scanning networks and servers for missing patches',
      'Assist in penetration testing and simulate threat actor tactics in controlled labs',
      'Implement security policies, multi-factor authentication (MFA), and zero-trust controls',
      'Educate company employees on phishing threats, social engineering, and secure password hygiene'
    ],
    technicalSkills: [
      'Network Security & Protocols (TCP/IP, Firewalls, VPNs, DNS, Wireshark)',
      'SIEM Tools & Log Analysis (Splunk, Microsoft Sentinel, Elastic)',
      'Operating System Internals (Linux & Windows Security)',
      'Vulnerability Management & Pen Testing Basics (Nmap, Nessus, Burp Suite)',
      'Scripting for Security Automation (Python, Bash, PowerShell)',
      'Security Frameworks (NIST CSF, MITRE ATT&CK, ISO 27001)'
    ],
    softSkills: [
      'Investigative Persistence',
      'Ethical Integrity & Discretion',
      'Clear Crisis Communication',
      'Composure Under High Stress',
      'Pattern Recognition'
    ],
    toolsAndPlatforms: ['Splunk', 'Wireshark', 'Burp Suite', 'Nmap', 'Kali Linux', 'CrowdStrike / Defender'],
    skillProgressions: [
      {
        skillName: 'Network Defense & Packet Analysis',
        category: 'Technical',
        beginner: 'Port scanning with Nmap, inspecting packets in Wireshark, identifying basic protocols',
        intermediate: 'Analyzing PCAP files for malicious payloads, firewall rulesets, configuring intrusion detection (Snort/Suricata)',
        advanced: 'Deep packet inspection, defeating covert channels, zero-trust network micro-segmentation'
      },
      {
        skillName: 'SIEM & Threat Detection',
        category: 'Tool',
        beginner: 'Searching logs in Splunk or Elastic, understanding syslog formats',
        intermediate: 'Writing detection rules (SPL, KQL), correlating multi-source logs, reducing false positives',
        advanced: 'Building automated SOAR playbooks, integrating threat intelligence feeds, MITRE ATT&CK threat mapping'
      },
      {
        skillName: 'Vulnerability Assessment & Pen Testing',
        category: 'Technical',
        beginner: 'Running automated vulnerability scanners (Nessus/OpenVAS), understanding CVE scores',
        intermediate: 'Web application testing (OWASP Top 10: SQLi, XSS, CSRF) using Burp Suite',
        advanced: 'Manual exploit verification, privilege escalation in Windows/Linux environments, evasion techniques'
      }
    ],
    careerProgression: [
      { level: 'SOC Analyst Tier 1 (Security Operations)', experience: '0 - 2 Years', focus: 'Monitoring SIEM queues, alert triage, incident ticket creation, initial containment' },
      { level: 'SOC Analyst Tier 2 / Incident Responder', experience: '2 - 5 Years', focus: 'Deep dive forensic analysis, malware containment, root-cause investigation' },
      { level: 'Senior Security Engineer / Pen Tester', experience: '5 - 8 Years', focus: 'Architecture security reviews, red team exercises, defensive tool engineering' },
      { level: 'Security Architect / CISO (Chief InfoSec Officer)', experience: '8+ Years', focus: 'Enterprise risk management, regulatory compliance, executive board advising' }
    ],
    roadmap: [
      {
        id: 'cy-1',
        stepNumber: 1,
        title: 'Learn Fundamentals',
        shortDesc: 'Master networking, operating systems, and cryptography basics.',
        description: 'You cannot defend what you do not understand. Learn how computer networks route packets and how OS security permissions operate.',
        checklist: [
          'Study TCP/IP, subnets, ports, DNS, SSL/TLS, and the OSI model deeply',
          'Learn Linux and Windows command-line navigation and file permission models',
          'Understand symmetric vs asymmetric encryption, hashing, and digital certificates',
          'Study the CIA Triad (Confidentiality, Integrity, Availability) and basic cyber threats'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'CompTIA Network+ or Security+ study materials are fantastic foundational references.'
      },
      {
        id: 'cy-2',
        stepNumber: 2,
        title: 'Build Technical Skills',
        shortDesc: 'Practice hands-on labs on TryHackMe, Hack The Box, and earn Security+.',
        description: 'Hands-on practical experience is everything in cybersecurity. Complete guided rooms on TryHackMe.',
        checklist: [
          'Complete the "Pre-Security" and "SOC Level 1" learning paths on TryHackMe',
          'Learn packet inspection using Wireshark on sample traffic captures',
          'Earn CompTIA Security+ or Cisco CyberOps Associate certification',
          'Write Python or Bash scripts to parse log files and extract IP addresses'
        ],
        estimatedDuration: '6 - 10 Weeks',
        fresherTips: 'CompTIA Security+ is the most widely recognized entry-level filter in corporate security hiring.'
      },
      {
        id: 'cy-3',
        stepNumber: 3,
        title: 'Complete Projects',
        shortDesc: 'Build a home lab with a virtual SIEM (Splunk/ELK) and analyze real attack traffic.',
        description: 'Set up your own virtual machines to generate attack logs, detect them in a SIEM, and document your incident report.',
        checklist: [
          'Deploy a free Splunk or Elastic SIEM home lab on a local hypervisor or cloud VM',
          'Ingest Windows Event logs and generate alerts for suspicious PowerShell executions',
          'Participate in 2 Capture The Flag (CTF) security competitions',
          'Write a detailed Incident Investigation Report analyzing a simulated malware intrusion'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Publishing your home lab setup and write-ups on LinkedIn gets immediate attention from SOC hiring managers.'
      },
      {
        id: 'cy-4',
        stepNumber: 4,
        title: 'Build Resume & Portfolio',
        shortDesc: 'Highlight your certifications, TryHackMe ranking, and lab write-ups.',
        description: 'Make your technical curiosity obvious on paper with active certs and documented CTF write-ups.',
        checklist: [
          'List CompTIA Security+, Network+, or BTL1 credentials prominently',
          'Link your GitHub or personal blog containing your SIEM lab write-ups',
          'Include your TryHackMe badge and Top % ranking',
          'Tailor bullet points to emphasize alert triage, log parsing, and security frameworks'
        ],
        estimatedDuration: '2 - 3 Weeks',
        fresherTips: 'Demonstrating that you built a home lab on your own initiative puts you ahead of 90% of applicants.'
      },
      {
        id: 'cy-5',
        stepNumber: 5,
        title: 'Practice Interviews',
        shortDesc: 'Prepare for technical triage scenarios, port identification, and attack mechanics.',
        description: 'Interviewers will test your baseline knowledge: "What happens when you type google.com?", "How does a 3-way handshake work?"',
        checklist: [
          'Memorize common network port numbers (22, 53, 80, 443, 3389, etc.)',
          'Practice explaining how common attacks work (Phishing, Ransomware, SQLi, Man-in-the-Middle)',
          'Be ready to walk through a mock alert: "A user clicked an unknown link in an email, what steps do you take?"',
          'Review the MITRE ATT&CK framework and Cyber Kill Chain'
        ],
        estimatedDuration: '3 - 5 Weeks',
        fresherTips: 'Always remember to mention "isolate the affected host" early in any containment scenario.'
      },
      {
        id: 'cy-6',
        stepNumber: 6,
        title: 'Apply for Roles',
        shortDesc: 'Apply for SOC Analyst Tier 1, Security Associate, and InfoSec Auditor roles.',
        description: 'Banks, government defense contractors, healthcare networks, and MSSP consulting firms hire entry-level SOC analysts.',
        checklist: [
          'Target titles: SOC Analyst Tier 1, Information Security Associate, Cyber Defense Analyst',
          'Apply to top financial banks (JPMorgan Chase, HDFC, ICICI) and consulting firms (Deloitte, EY)',
          'Join local OWASP and ISSA security chapters for local networking',
          'Follow up with cybersecurity recruiters and SOC managers directly'
        ],
        estimatedDuration: 'Ongoing (4 - 10 Weeks)',
        fresherTips: 'Managed Security Service Providers (MSSPs) hire large volumes of junior analysts and provide intense training.'
      }
    ],
    hiringCompanies: ['jpmorgan', 'hdfc-bank', 'icici-bank', 'deloitte', 'ey', 'pwc', 'kpmg', 'microsoft', 'amazon', 'google', 'ibm', 'cisco'],
    averageFresherSalaryGuide: '$70,000 - $105,000 / year (US) | ₹5 - 14 LPA (India)',
    dayInTheLife: 'Monitors the SOC SIEM console for brute-force login anomalies, contacts an employee whose laptop triggered an endpoint malware alert to isolate the machine, documents the incident timeline, and reviews weekly vulnerability scan reports.'
  },
  {
    id: 'technology-consultant',
    title: 'Technology & Business Consultant',
    category: 'Consulting',
    departmentId: 'consulting',
    departmentName: 'Technology Consulting',
    simpleExplanation: 'Advises corporate leaders on how to modernize their business operations, migrate to modern enterprise technology, optimize workflows, and drive digital transformations.',
    responsibilities: [
      'Analyze client business operations, interview stakeholders, and identify operational bottlenecks',
      'Map current-state workflows ("As-Is") and architect future-state business processes ("To-Be")',
      'Evaluate software vendor solutions (SAP, Salesforce, Oracle, Cloud) to match client requirements',
      'Prepare executive PowerPoint presentations, financial cost-benefit models, and implementation roadmaps',
      'Bridge the communication gap between client executives and offshore technical engineering teams',
      'Support change management, user training programs, and post-go-live operational readiness'
    ],
    technicalSkills: [
      'Enterprise Systems Overview (SAP, Salesforce, Oracle, Workday)',
      'Business Process Modeling (BPMN, Flowcharts, Lucidchart)',
      'Financial Modeling & Business Case Analysis (ROI, TCO)',
      'Data Analytics (Advanced Excel, Power BI, SQL basics)',
      'Agile Transformation & Project Management Frameworks',
      'Cloud & IT Strategy Fundamentals'
    ],
    softSkills: [
      'Executive Client Presence & Communication',
      'Structured Problem Solving & Hypothesis Thinking',
      'Stakeholder Management & Persuasion',
      'Adaptability Across Multiple Industries',
      'Time Management Under Tight Deadlines'
    ],
    toolsAndPlatforms: ['Microsoft PowerPoint', 'Microsoft Excel', 'Lucidchart / Visio', 'Jira / Confluence', 'Power BI', 'Salesforce / SAP'],
    skillProgressions: [
      {
        skillName: 'Structured Problem Solving & Case Method',
        category: 'Technical',
        beginner: 'Issue trees, MECE principle (Mutually Exclusive, Collectively Exhaustive), pyramid principle',
        intermediate: 'Hypothesis-driven problem solving, root cause analysis, 80/20 Pareto prioritization',
        advanced: 'Strategic organizational redesign, business model innovation, turnaround strategy'
      },
      {
        skillName: 'Business Process Modeling & Requirements',
        category: 'Technical',
        beginner: 'Drafting linear workflow flowcharts, recording meeting minutes and functional requirements',
        intermediate: 'BPMN 2.0 diagrams, swimlane maps, functional specification documents (FSDs), gap analysis',
        advanced: 'Enterprise architecture alignment, cross-departmental ERP integration mapping, change impact matrices'
      },
      {
        skillName: 'Financial Case Modeling',
        category: 'Technical',
        beginner: 'Total Cost of Ownership (TCO) basics, software licensing calculations',
        intermediate: 'Net Present Value (NPV), Internal Rate of Return (IRR), payback period sensitivity analysis',
        advanced: 'Multi-year digital transformation capital expenditure (CapEx) vs OpEx optimization models'
      }
    ],
    careerProgression: [
      { level: 'Analyst / Associate Consultant', experience: '0 - 2 Years', focus: 'Data gathering, building client presentation decks, process mapping, PMO support' },
      { level: 'Consultant / Senior Consultant', experience: '2 - 5 Years', focus: 'Leading client workstreams, delivering functional solution specs, managing client relationships' },
      { level: 'Manager / Senior Manager', experience: '5 - 9 Years', focus: 'Project delivery governance, team leadership, account expansion, proposal development' },
      { level: 'Director / Partner', experience: '9+ Years', focus: 'Practice leadership, multimillion-dollar client sales, trusted executive advisor to C-suite' }
    ],
    roadmap: [
      {
        id: 'tc-1',
        stepNumber: 1,
        title: 'Learn Fundamentals',
        shortDesc: 'Master structured thinking, the MECE framework, and executive communication.',
        description: 'Consulting requires razor-sharp communication. Learn the Minto Pyramid Principle and how businesses generate profit.',
        checklist: [
          'Read "The McKinsey Way" and "The Pyramid Principle" by Barbara Minto',
          'Master structured problem-solving frameworks (MECE, Issue Trees, 5 Whys)',
          'Learn basic financial statements (Income Statement, Balance Sheet, Cash Flow)',
          'Understand core IT trends: Cloud migration, ERP implementations, AI automation'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Always answer questions using top-down communication: conclusion first, followed by supporting reasons.'
      },
      {
        id: 'tc-2',
        stepNumber: 2,
        title: 'Build Technical Skills',
        shortDesc: 'Master advanced Excel modeling, PowerPoint deck craft, and process mapping.',
        description: 'Excel and PowerPoint are the consultant’s primary tools. Learn how to turn raw numbers into crisp visual slides.',
        checklist: [
          'Build financial business models with sensitivity tables in Excel without using the mouse',
          'Learn executive slide design principles: visual hierarchy, action titles, callout boxes',
          'Learn business process mapping tools (Lucidchart or Visio) using BPMN standards',
          'Gain familiarity with major enterprise software platforms (Salesforce, SAP, AWS)'
        ],
        estimatedDuration: '5 - 7 Weeks',
        fresherTips: 'Every slide you create must have a takeaway action title, not just a label like "Analysis".'
      },
      {
        id: 'tc-3',
        stepNumber: 3,
        title: 'Complete Projects',
        shortDesc: 'Solve 15+ business case studies and compete in university case competitions.',
        description: 'Participate in case competitions where you analyze a company’s operational challenge and pitch solutions to a panel.',
        checklist: [
          'Prepare and submit entries for at least 2 national or collegiate business case competitions',
          'Author a comprehensive Digital Transformation Strategy deck for a legacy retail or banking business',
          'Include market size estimation, competitor benchmarking, technical architecture, and 3-year ROI',
          'Present your deck live to mentors or peers and handle aggressive Q&A'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Case competition podium finishes are the strongest signal on a fresher consulting resume.'
      },
      {
        id: 'tc-4',
        stepNumber: 4,
        title: 'Build Resume & Portfolio',
        shortDesc: 'Craft a high-impact consulting resume highlighting leadership and quantitative results.',
        description: 'Consulting resumes are heavily scrutinized for leadership, academic excellence, and quantifiable achievements.',
        checklist: [
          'Use bullet points formatted as: Action Verb + Context + Quantifiable Business Impact',
          'Highlight student club leadership, case competition wins, and academic honors',
          'Ensure 100% flawless typography, alignment, and formatting with zero typos',
          'Get resume reviews from campus alumni working at the Big 4 or top consulting firms'
        ],
        estimatedDuration: '2 - 3 Weeks',
        fresherTips: 'Consulting firms discard resumes with formatting inconsistencies or typos immediately.'
      },
      {
        id: 'tc-5',
        stepNumber: 5,
        title: 'Practice Interviews',
        shortDesc: 'Master Case Interviews (market sizing, profitability, digital strategy) and behavioral fit.',
        description: 'Consulting interviews are famously rigorous. Practice live case solving with partners using frameworks.',
        checklist: [
          'Solve 25+ live case interviews with practice partners (Market entry, cost reduction, M&A)',
          'Master guesstimate and market sizing mental math (e.g. "How many smartphones sold in India annually?")',
          'Prepare polished behavioral stories demonstrating leadership, handling conflict, and resilience',
          'Read "Case in Point" by Marc Cosentino and watch Victor Cheng case preparation videos'
        ],
        estimatedDuration: '5 - 8 Weeks',
        fresherTips: 'Take notes cleanly during the prompt and take 60 seconds to structure your thoughts before speaking.'
      },
      {
        id: 'tc-6',
        stepNumber: 6,
        title: 'Apply for Roles',
        shortDesc: 'Target campus placement and associate consulting analyst intakes.',
        description: 'Big 4 (Deloitte, PwC, EY, KPMG) and tech consulting giants (Accenture, Capgemini, Cognizant) hire huge campus cohorts.',
        checklist: [
          'Apply to Big 4 Consulting (Deloitte, EY, PwC, KPMG) graduate analyst programs',
          'Apply to technology advisory firms (Accenture, Capgemini, IBM Consulting, Cognizant)',
          'Network with consulting alumni on LinkedIn 2-3 months before campus hiring visits',
          'Attend company info sessions and ask thoughtful questions regarding specific practice areas'
        ],
        estimatedDuration: 'Ongoing (4 - 12 Weeks)',
        fresherTips: 'Look out for dedicated Technology Advisory and Digital Transformation campus drives.'
      }
    ],
    hiringCompanies: ['deloitte', 'accenture', 'ey', 'pwc', 'kpmg', 'capgemini', 'cognizant', 'ibm', 'tcs', 'infosys', 'wipro'],
    averageFresherSalaryGuide: '$75,000 - $110,000 / year (US) | ₹6 - 15 LPA (India)',
    dayInTheLife: 'Attends client morning sync on ERP migration progress, gathers process requirements from the warehouse supply chain manager, models implementation cost savings in Excel, builds an executive slide deck for the CFO review, and updates the project milestone tracker.'
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI / Machine Learning Engineer',
    category: 'Data & AI',
    departmentId: 'data-ai',
    departmentName: 'Data & AI',
    simpleExplanation: 'Builds, trains, evaluates, and deploys artificial intelligence models, machine learning algorithms, and deep neural networks that automate complex predictions, recognize speech or vision, and power intelligent products.',
    responsibilities: [
      'Prepare, preprocess, clean, and augment large text, image, tabular, or audio training datasets',
      'Train, fine-tune, and optimize machine learning and deep learning models (PyTorch, TensorFlow)',
      'Evaluate model accuracy, precision, recall, F1 scores, and benchmark against baselines',
      'Deploy models as scalable, low-latency microservices using Docker, FastAPI, and Triton/ONNX',
      'Implement Retrieval-Augmented Generation (RAG) pipelines and fine-tune Large Language Models (LLMs)',
      'Monitor model drift, data distribution changes, and maintain automated retraining pipelines (MLOps)'
    ],
    technicalSkills: [
      'Python & Scientific Libraries (NumPy, Pandas, Scikit-Learn)',
      'Deep Learning Frameworks (PyTorch, TensorFlow)',
      'Mathematics (Linear Algebra, Calculus, Probability & Statistics)',
      'Natural Language Processing (NLP) / Computer Vision (CV)',
      'LLMs, Embeddings & Vector Databases (Pinecone, Chroma, Milvus)',
      'MLOps & Deployment (FastAPI, Docker, MLflow, AWS SageMaker)'
    ],
    softSkills: [
      'Scientific Rigor & Experimentation Discipline',
      'Handling Ambiguity in Unstructured Data',
      'Patience with Long Training Cycles',
      'Clear Explanation of Complex Mathematical Concepts',
      'Ethical AI Awareness'
    ],
    toolsAndPlatforms: ['PyTorch', 'Jupyter Lab', 'Hugging Face', 'FastAPI', 'Docker', 'MLflow / Weights & Biases', 'AWS SageMaker / Vertex AI'],
    skillProgressions: [
      {
        skillName: 'Classical Machine Learning',
        category: 'Technical',
        beginner: 'Linear regression, logistic regression, decision trees, train/test split, accuracy metrics',
        intermediate: 'Random Forests, XGBoost, LightGBM, hyperparameter tuning (GridSearchCV), cross-validation, feature engineering',
        advanced: 'Ensemble methods, dimensionality reduction (PCA, t-SNE), anomaly detection, handling extreme class imbalance'
      },
      {
        skillName: 'Deep Learning & Neural Networks',
        category: 'Technical',
        beginner: 'Feedforward neural networks, perceptrons, activation functions (ReLU, Sigmoid), backpropagation',
        intermediate: 'Convolutional Neural Networks (CNNs) for vision, Recurrent networks/LSTMs, PyTorch Dataset & DataLoader',
        advanced: 'Transformer architecture, self-attention mechanisms, multi-GPU distributed training, quantization & pruning'
      },
      {
        skillName: 'Generative AI & LLMs',
        category: 'Technical',
        beginner: 'Prompt engineering, API integration with foundation models (Gemini, Claude, GPT)',
        intermediate: 'RAG pipelines with LangChain/LlamaIndex, text chunking strategies, embeddings, vector databases',
        advanced: 'Supervised fine-tuning (LoRA / QLoRA), RLHF principles, evaluation frameworks, agentic workflows'
      },
      {
        skillName: 'MLOps & Model Deployment',
        category: 'Technical',
        beginner: 'Saving model weights (.pkl, .pt), serving predictions via simple Flask/FastAPI endpoints',
        intermediate: 'Containerizing ML services with Docker, batch vs real-time inference, model tracking with MLflow',
        advanced: 'Triton inference server, ONNX runtime acceleration, automated retraining pipelines, data drift monitoring'
      }
    ],
    careerProgression: [
      { level: 'Associate ML Engineer / Junior AI Developer', experience: '0 - 2 Years', focus: 'Data cleaning, running baseline experiments, model evaluation, API wrappers' },
      { level: 'Machine Learning Engineer', experience: '2 - 5 Years', focus: 'Model architecture selection, fine-tuning, production deployment, MLOps automation' },
      { level: 'Senior ML Engineer / AI Lead', experience: '5 - 8 Years', focus: 'Novel architecture adaptation, scaling distributed training clusters, enterprise AI strategy' },
      { level: 'Principal AI Scientist / Head of AI', experience: '8+ Years', focus: 'Pioneering proprietary models, research publications, executive AI governance' }
    ],
    roadmap: [
      {
        id: 'ml-1',
        stepNumber: 1,
        title: 'Learn Fundamentals',
        shortDesc: 'Master linear algebra, multivariable calculus, probability, and Python.',
        description: 'AI is fundamentally applied mathematics. Solidify vectors, matrices, dot products, derivatives, and Bayes theorem.',
        checklist: [
          'Study Linear Algebra: Matrix multiplication, Eigenvalues, Vector spaces (3Blue1Brown series)',
          'Learn Probability & Statistics: Normal distributions, conditional probability, expectation, variance',
          'Master Python libraries: NumPy vectorization, Pandas data manipulation, Matplotlib visualization',
          'Implement basic gradient descent from scratch in pure Python'
        ],
        estimatedDuration: '6 - 8 Weeks',
        fresherTips: 'Do not rush past mathematics; it is what separates true engineers from people who just copy library code.'
      },
      {
        id: 'ml-2',
        stepNumber: 2,
        title: 'Build Technical Skills',
        shortDesc: 'Master Scikit-Learn for classical ML and PyTorch for Deep Learning.',
        description: 'Learn when simple models (logistic regression, gradient boosting) outperform complex neural networks.',
        checklist: [
          'Master Scikit-Learn: Classification, Regression, Clustering, PCA, Pipeline construction',
          'Learn PyTorch: Tensors, autograd, building custom nn.Module architectures, loss functions',
          'Build and train a CNN from scratch on CIFAR-10 or Fashion-MNIST',
          'Learn how Transformers and attention mechanisms work conceptually'
        ],
        estimatedDuration: '8 - 10 Weeks',
        fresherTips: 'PyTorch is the gold standard in modern industry and research labs.'
      },
      {
        id: 'ml-3',
        stepNumber: 3,
        title: 'Complete Projects',
        shortDesc: 'Deploy 2 production-grade AI projects: one computer vision/NLP and one LLM/RAG app.',
        description: 'Recruiters want to see that your models do not just live in a Jupyter notebook, but can be queried via live APIs.',
        checklist: [
          'Project 1: Fine-tune an open-source Transformer (Hugging Face) on a custom domain dataset',
          'Project 2: Build a production Retrieval-Augmented Generation (RAG) assistant with vector search',
          'Wrap both models in FastAPI endpoints, containerize with Docker, and deploy to a cloud instance',
          'Measure and document latency, throughput, and memory consumption under load'
        ],
        estimatedDuration: '6 - 8 Weeks',
        fresherTips: 'A deployed model with a working demo frontend is 10x more impressive than an offline notebook.'
      },
      {
        id: 'ml-4',
        stepNumber: 4,
        title: 'Build Resume & Portfolio',
        shortDesc: 'Publish your Hugging Face models, Kaggle achievements, and GitHub repositories.',
        description: 'Provide links to your Hugging Face profile, live demo apps, and well-commented GitHub code.',
        checklist: [
          'Create a Hugging Face public profile showcasing your fine-tuned models or datasets',
          'Link GitHub repos with clear READMEs, requirements.txt, architecture diagrams, and metrics',
          'Highlight your Kaggle competition participation or Notebook medals',
          'Format resume bullets focusing on accuracy improvements and latency reductions achieved'
        ],
        estimatedDuration: '2 - 3 Weeks',
        fresherTips: 'Mention specific metrics on your resume: "Reduced model inference latency by 45% using ONNX runtime".'
      },
      {
        id: 'ml-5',
        stepNumber: 5,
        title: 'Practice Interviews',
        shortDesc: 'Prepare for ML theory questions, coding data structures, and ML system design.',
        description: 'ML interviews test three pillars: standard CS coding (DSA), mathematical/algorithmic theory, and ML system design.',
        checklist: [
          'Review standard theory: Bias-Variance tradeoff, Overfitting prevention, Activation choices',
          'Practice implementing algorithms from scratch (e.g. K-Means, Linear Regression, Attention)',
          'Master ML System Design: "Design a YouTube recommendation system" or "Design a fraud detector"',
          'Prepare STAR stories on overcoming messy datasets or non-converging loss curves'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'In ML system design, always discuss training data collection, labeling, and online evaluation metrics.'
      },
      {
        id: 'ml-6',
        stepNumber: 6,
        title: 'Apply for Roles',
        shortDesc: 'Target ML Engineer, AI Developer, and Data Science graduate roles.',
        description: 'Tech giants, AI research labs, autonomous vehicle companies, and high-growth startups are actively seeking ML talent.',
        checklist: [
          'Target titles: Junior ML Engineer, AI Developer, Applied Scientist, Data Scientist - Machine Learning',
          'Apply to AI leaders (Google DeepMind, Meta AI, Microsoft, NVIDIA, Amazon, OpenAI)',
          'Connect with AI researchers and engineering managers on LinkedIn and Twitter',
          'Contribute to open-source ML projects on GitHub to build public credibility'
        ],
        estimatedDuration: 'Ongoing (6 - 12 Weeks)',
        fresherTips: 'Open-source contributions to libraries like Transformers or LangChain are fantastic resume boosters.'
      }
    ],
    hiringCompanies: ['google', 'microsoft', 'amazon', 'meta', 'apple', 'netflix', 'tesla', 'uber', 'adobe', 'salesforce', 'ibm'],
    averageFresherSalaryGuide: '$100,000 - $155,000 / year (US) | ₹8 - 25 LPA (India)',
    dayInTheLife: 'Analyzes loss curves from an overnight training run on GPU clusters, cleans and tokenizes a new dataset batch, optimizes a vector embedding search pipeline to reduce latency, and pairs with the product team on prompt evaluation benchmarks.'
  },
  {
    id: 'financial-analyst',
    title: 'Financial & Investment Analyst',
    category: 'Finance',
    departmentId: 'finance',
    departmentName: 'Banking, Finance & Risk',
    simpleExplanation: 'Evaluates investment opportunities, analyzes corporate financial statements, builds forecasting models, and assesses market risks to help institutions and individuals allocate capital profitably.',
    responsibilities: [
      'Examine financial statements (10-K, 10-Q reports, balance sheets, cash flows) of public and private companies',
      'Build financial projection models, Discounted Cash Flow (DCF) valuations, and comparable company analyses (Comps)',
      'Monitor macroeconomic trends, interest rate decisions, industry regulations, and equity markets',
      'Prepare investment pitch books, credit underwriting memos, and board presentations',
      'Track portfolio performance, calculate risk-adjusted returns (Sharpe ratio), and evaluate hedging strategies',
      'Support mergers & acquisitions (M&A) due diligence, bond issuances, or corporate lending reviews'
    ],
    technicalSkills: [
      'Financial Modeling (DCF, LBO, 3-Statement Models)',
      'Advanced Excel (Index/Match, Data Tables, Scenario Managers)',
      'Accounting & Financial Statement Analysis (GAAP / IFRS)',
      'Valuation Methodologies (Multiples, DCF, Precedent Transactions)',
      'Financial Terminals (Bloomberg, FactSet, Capital IQ)',
      'Python / SQL for Quantitative Finance Basics'
    ],
    softSkills: [
      'Extreme Numerical Accuracy',
      'Work Ethic & Stamina Under Deadlines',
      'Commercial Awareness & Market Curiosity',
      'Clear Written & Oral Briefings',
      'Integrity & Regulatory Ethics'
    ],
    toolsAndPlatforms: ['Microsoft Excel', 'Bloomberg Terminal', 'Capital IQ', 'PowerPoint', 'FactSet', 'Python / R'],
    skillProgressions: [
      {
        skillName: '3-Statement Financial Modeling',
        category: 'Technical',
        beginner: 'Linking Income Statement, Balance Sheet, and Cash Flow statement correctly in Excel',
        intermediate: 'Working capital schedules, depreciation waterfalls, debt schedules with interest circularity',
        advanced: 'Dynamic scenario toggles (base, bull, bear), M&A accretion/dilution models, sensitivity matrices'
      },
      {
        skillName: 'Company Valuation Methodologies',
        category: 'Technical',
        beginner: 'P/E ratios, EV/EBITDA multiples, understanding enterprise value vs equity value',
        intermediate: 'Discounted Cash Flow (DCF), calculating Weighted Average Cost of Capital (WACC), terminal value',
        advanced: 'Leveraged Buyout (LBO) returns analysis, sum-of-the-parts (SOTP) valuation, distress valuation'
      },
      {
        skillName: 'Financial Data & Programming',
        category: 'Technical',
        beginner: 'Pulling stock prices and financial metrics using Yahoo Finance or basic Excel plugins',
        intermediate: 'Automating financial data extraction with Python Pandas and SQL database queries',
        advanced: 'Monte Carlo simulations for portfolio risk, quantitative factor backtesting'
      }
    ],
    careerProgression: [
      { level: 'Investment Banking / Financial Analyst', experience: '0 - 3 Years', focus: 'Financial modeling, pitch book preparation, due diligence data rooms, industry research' },
      { level: 'Associate', experience: '3 - 6 Years', focus: 'Managing transaction workflows, client interactions, mentoring analysts, negotiating terms' },
      { level: 'Vice President (VP)', experience: '6 - 9 Years', focus: 'Origination support, client deal execution leadership, cross-functional deal management' },
      { level: 'Managing Director (MD) / Partner', experience: '9+ Years', focus: 'C-suite relationship management, multi-billion dollar deal origination, firm governance' }
    ],
    roadmap: [
      {
        id: 'fa-1',
        stepNumber: 1,
        title: 'Learn Fundamentals',
        shortDesc: 'Master corporate accounting, financial statements, and time value of money.',
        description: 'Accounting is the language of business. Understand debits, credits, revenue recognition, and how the 3 statements interconnect.',
        checklist: [
          'Study the 3 core financial statements: Income Statement, Balance Sheet, Cash Flow',
          'Learn core accounting mechanics: Accrual vs cash accounting, working capital, depreciation',
          'Understand Time Value of Money (TVM): Present Value, Future Value, Discount rates',
          'Read daily financial news (The Wall Street Journal, Financial Times, Bloomberg)'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Be able to explain: "If depreciation goes up by $10, walk me through how all 3 statements change."'
      },
      {
        id: 'fa-2',
        stepNumber: 2,
        title: 'Build Technical Skills',
        shortDesc: 'Master keyboard-only Excel modeling and DCF/Comps valuation methods.',
        description: 'Investment banks require rapid, error-free financial modeling in Excel without using the mouse.',
        checklist: [
          'Learn Excel navigation shortcuts and build a dynamically linked 3-statement model',
          'Master Discounted Cash Flow (DCF) modeling from scratch including WACC calculation',
          'Learn Comparable Company Analysis (Trading Comps) and Precedent Transactions',
          'Study for CFA Level 1 or take recognized financial modeling courses (BIWS, CFI)'
        ],
        estimatedDuration: '6 - 8 Weeks',
        fresherTips: 'Format your models cleanly: blue font for hardcoded inputs, black for formulas, green for links.'
      },
      {
        id: 'fa-3',
        stepNumber: 3,
        title: 'Complete Projects',
        shortDesc: 'Write 2 thorough equity research stock reports and investment pitch decks.',
        description: 'Select a publicly traded company and write an initiation-of-coverage research report with price target and valuation.',
        checklist: [
          'Author an Equity Research initiation report (10-15 pages) for a public company',
          'Build the accompanying full financial model with 5-year forecasts and sensitivity tables',
          'Create a 10-slide M&A or investment thesis pitch deck in PowerPoint',
          'Participate in the CFA Institute Research Challenge or university investment funds'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Bring printed copies of your pitch deck and financial models to your interviews.'
      },
      {
        id: 'fa-4',
        stepNumber: 4,
        title: 'Build Resume & Portfolio',
        shortDesc: 'Create a finance resume emphasizing transactions, modeling skills, and GPA.',
        description: 'Finance resumes follow strict standard formats (Wall Street Oasis template). Keep formatting bulletproof.',
        checklist: [
          'Use the standard Wall Street Oasis / Harvard investment banking resume format',
          'Highlight academic GPA, test scores, financial modeling certifications, and student fund roles',
          'Include a link to your sample equity research report and financial model PDF',
          'Review every number and alignment carefully to guarantee zero formatting discrepancies'
        ],
        estimatedDuration: '2 - 3 Weeks',
        fresherTips: 'A single misaligned margin or inconsistent date format can get a finance resume discarded.'
      },
      {
        id: 'fa-5',
        stepNumber: 5,
        title: 'Practice Interviews',
        shortDesc: 'Master technical accounting questions, valuation walk-throughs, and deal discussions.',
        description: 'Finance interviews are highly technical. Be ready to walk through valuations and pitch a stock in 90 seconds.',
        checklist: [
          'Master the "400 Investment Banking Interview Questions" guide (M&I / WSO)',
          'Prepare a crisp 90-second stock pitch: Thesis, Catalysts, Valuation, Risks',
          'Walk through a DCF step-by-step from Revenue down to Enterprise Value and Share Price',
          'Prepare stories on handling 80-hour work weeks, tight deadlines, and extreme detail focus'
        ],
        estimatedDuration: '4 - 6 Weeks',
        fresherTips: 'Have an articulate opinion on where interest rates and inflation are heading and why.'
      },
      {
        id: 'fa-6',
        stepNumber: 6,
        title: 'Apply for Roles',
        shortDesc: 'Target summer analyst internships, graduate investment banking, and commercial credit roles.',
        description: 'Top investment banks and commercial banks recruit 12-18 months in advance for their analyst classes.',
        checklist: [
          'Apply to global investment banks (JPMorgan Chase, Goldman Sachs, Morgan Stanley, Citi)',
          'Apply to leading commercial and retail banks (HDFC Bank, ICICI Bank, Bank of America)',
          'Conduct 20+ informational phone calls with alumni working as current analysts and associates',
          'Track superday interview schedules and prepare relentlessly for each firm'
        ],
        estimatedDuration: 'Ongoing (6 - 14 Weeks)',
        fresherTips: 'Alumni networking is essential in finance; warm referrals make the difference for getting an interview slot.'
      }
    ],
    hiringCompanies: ['jpmorgan', 'hdfc-bank', 'icici-bank', 'deloitte', 'ey', 'pwc', 'kpmg', 'walmart', 'apple', 'amazon'],
    averageFresherSalaryGuide: '$85,000 - $135,000 / year (US) | ₹8 - 24 LPA (India)',
    dayInTheLife: 'Spreads quarterly earnings numbers into an operating model, pulls comparable company multiples from Bloomberg, assists in drafting a 30-slide pitch book for a healthcare acquisition, and verifies debt schedule calculations.'
  }
];

export function getRoleById(id: string): RoleDetail | undefined {
  return ALL_ROLES.find(r => r.id === id);
}

export function getRolesByDepartment(deptId: string): RoleDetail[] {
  return ALL_ROLES.filter(r => r.departmentId === deptId);
}

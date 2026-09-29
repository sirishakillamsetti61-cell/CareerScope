import { ALL_COMPANIES } from '../data/companies';
import { ALL_ROLES } from '../data/roles';

/**
 * Intelligent CareerScope Knowledge Engine
 * Provides comprehensive career, roadmap, and company guidance
 * when n8n webhook is offline or being configured.
 */
export function generateCareerResponse(query: string): string {
  const lower = query.toLowerCase();

  // 1. Check for specific company match
  const matchedCompany = ALL_COMPANIES.find(c => 
    lower.includes(c.name.toLowerCase()) || lower.includes(c.id.toLowerCase())
  );

  // 2. Check for specific role match
  const matchedRole = ALL_ROLES.find(r => 
    lower.includes(r.title.toLowerCase()) || 
    lower.includes(r.id.toLowerCase()) ||
    (r.id === 'software-engineer' && (lower.includes('swe') || lower.includes('software engineer') || lower.includes('developer'))) ||
    (r.id === 'data-analyst' && lower.includes('data analyst')) ||
    (r.id === 'data-scientist' && lower.includes('data scientist')) ||
    (r.id === 'cloud-architect' && (lower.includes('cloud') || lower.includes('architect') || lower.includes('aws'))) ||
    (r.id === 'product-manager' && (lower.includes('product manager') || lower.includes(' pm ') || lower.includes('pm?')))
  );

  // 3. Compare query
  if (lower.includes('compare') || lower.includes('difference between') || lower.includes('vs')) {
    const rolesFound = ALL_ROLES.filter(r => 
      lower.includes(r.title.toLowerCase()) || lower.includes(r.id.toLowerCase())
    );
    if (rolesFound.length >= 2) {
      const [r1, r2] = rolesFound;
      return `### ⚖️ Comparison: **${r1.title}** vs **${r2.title}**\n\n` +
        `| Aspect | **${r1.title}** | **${r2.title}** |\n` +
        `|---|---|---|\n` +
        `| **Department** | ${r1.departmentName} | ${r2.departmentName} |\n` +
        `| **Core Focus** | ${r1.simpleExplanation} | ${r2.simpleExplanation} |\n` +
        `| **Fresher Salary Guide** | ${r1.averageFresherSalaryGuide} | ${r2.averageFresherSalaryGuide} |\n` +
        `| **Primary Skills** | ${r1.technicalSkills.slice(0, 3).join(', ')} | ${r2.technicalSkills.slice(0, 3).join(', ')} |\n` +
        `| **Tools & Platforms** | ${r1.toolsAndPlatforms.slice(0, 3).join(', ')} | ${r2.toolsAndPlatforms.slice(0, 3).join(', ')} |\n\n` +
        `**Recommendation:** Choose **${r1.title}** if you enjoy ${r1.departmentName.toLowerCase()} and building core systems. Choose **${r2.title}** if you are more oriented toward ${r2.departmentName.toLowerCase()} and cross-functional leadership.`;
    }
  }

  // 4. Role specific details
  if (matchedRole) {
    if (lower.includes('roadmap') || lower.includes('how to become') || lower.includes('steps') || lower.includes('path')) {
      const roadmapText = matchedRole.roadmap.map(step => 
        `**Step ${step.stepNumber}: ${step.title}** (${step.estimatedDuration})\n` +
        `• Focus: ${step.description}\n` +
        `• Checklist Milestones: ${step.checklist.slice(0, 2).map(c => `\`${c}\``).join(', ')}\n` +
        `• Fresher Tip: ${step.fresherTips}`
      ).join('\n\n');

      return `### 🗺️ Career Roadmap: **${matchedRole.title}**\n\n` +
        `**Department:** ${matchedRole.departmentName} · **Expected Entry Benchmark:** ${matchedRole.averageFresherSalaryGuide}\n\n` +
        `Here is the step-by-step trajectory to master this role:\n\n` +
        roadmapText +
        `\n\n💡 *Tip: Check out the Roadmaps tab in CareerScope for interactive milestone tracking!*`;
    }

    if (lower.includes('skill') || lower.includes('tools') || lower.includes('technolog') || lower.includes('learn')) {
      const skillsList = matchedRole.skillProgressions.slice(0, 4).map(sp => 
        `• **${sp.skillName}** (${sp.category}):\n` +
        `  - Beginner: ${sp.beginner}\n` +
        `  - Intermediate: ${sp.intermediate}\n` +
        `  - Advanced: ${sp.advanced}`
      ).join('\n');

      return `### 🛠️ Required Skills Breakdown for **${matchedRole.title}**\n\n` +
        `**Technical Core Skills:** ${matchedRole.technicalSkills.join(', ')}\n\n` +
        `**Tools & Platforms:** ${matchedRole.toolsAndPlatforms.join(', ')}\n\n` +
        `**Skill Progression Matrix:**\n${skillsList}\n\n` +
        `**Soft Skills:** ${matchedRole.softSkills.join(', ')}\n\n` +
        `**Hiring Companies:** ${matchedRole.hiringCompanies.map(id => id.toUpperCase()).join(', ')}`;
    }

    if (lower.includes('interview') || lower.includes('salary') || lower.includes('pay') || lower.includes('prepare')) {
      return `### 💼 Interview & Compensation Guide: **${matchedRole.title}**\n\n` +
        `• **Compensation Range (Fresher/Junior):** ${matchedRole.averageFresherSalaryGuide}\n` +
        `• **Interview Focus Areas:**\n` +
        `  1. Foundational data structures and domain logic\n` +
        `  2. Real-world scenario problem solving (${matchedRole.departmentName})\n` +
        `  3. Systems architecture and tooling proficiency (${matchedRole.toolsAndPlatforms.slice(0, 3).join(', ')})\n` +
        `  4. Behavioral & cross-functional communication\n\n` +
        `• **Top Hiring Employers:** ${matchedRole.hiringCompanies.map(c => c.toUpperCase()).join(', ')}\n\n` +
        `**Day in the Life:** ${matchedRole.dayInTheLife}`;
    }

    // Default overview for the matched role
    return `### 📌 Overview: **${matchedRole.title}**\n\n` +
      `**Department:** ${matchedRole.departmentName} · **Benchmark:** ${matchedRole.averageFresherSalaryGuide}\n\n` +
      `**What they do:** ${matchedRole.simpleExplanation}\n\n` +
      `**Key Responsibilities:**\n` +
      matchedRole.responsibilities.slice(0, 4).map(r => `• ${r}`).join('\n') +
      `\n\n**Core Skills:** ${matchedRole.technicalSkills.join(', ')}\n\n` +
      `**Tools & Platforms:** ${matchedRole.toolsAndPlatforms.join(', ')}\n\n` +
      `**Top Employers:** ${matchedRole.hiringCompanies.map(c => c.toUpperCase()).join(', ')}\n\n` +
      `*Feel free to ask for their complete 6-stage roadmap, interview tips, or compare with another role!*`;
  }

  // 5. Company specific details
  if (matchedCompany) {
    const departments = matchedCompany.departments.map(d => 
      `• **${d.name}**: ${d.description} (Skills: ${d.keySkills.slice(0, 3).join(', ')})`
    ).join('\n');

    return `### 🏢 Company Profile: **${matchedCompany.name}**\n\n` +
      `• **Industry:** ${matchedCompany.industry}\n` +
      `• **Headquarters:** ${matchedCompany.headquarters}\n` +
      `• **Overview:** ${matchedCompany.description}\n` +
      `• **Fresher Hiring Focus:** ${matchedCompany.hiringFocusFresher}\n` +
      `• **Tech Stack Highlights:** ${matchedCompany.techStackHighlights.join(', ')}\n` +
      `• **Careers Portal:** [${matchedCompany.websiteUrl}](${matchedCompany.websiteUrl})\n\n` +
      `**Key Departments:**\n${departments}\n\n` +
      `*Ask me about any specific role at ${matchedCompany.name} or how to prepare for their engineering interviews!*`;
  }

  // 6. Generic tech career advice
  return `### 🚀 CareerScope AI Guide\n\n` +
    `I can help you navigate career decisions, tech job roles, and industry expectations:\n\n` +
    `• **Explore Roles:** Software Engineer, Data Scientist, Cloud Architect, Product Manager, Cybersecurity Analyst, UI/UX Designer, and more.\n` +
    `• **Company Profiles:** Google, Microsoft, Amazon, Meta, Apple, Netflix, Stripe, Uber, Airbnb, and more.\n` +
    `• **Roadmaps:** 6-stage structured milestone roadmaps from foundational syntax to production deployment.\n` +
    `• **Skills Breakdown:** Beginner, intermediate, and advanced tech stacks with project deliverables.\n\n` +
    `*Try asking: "What is the roadmap for Cloud Architect?" or "Compare Software Engineer vs Data Analyst"*`;
}

/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 
// NOTE: If you are using logos (like Accenture), you MUST ensure the image file 
// (e.g., accentureLogo.png) is correctly placed in the ./assets/images folder.

// --- NECESSARY EXPORTS ---
const isHireable = true; 

// --- SPLASH SCREEN ---
const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

// --- SUMMARY AND GREETING SECTION ---
const illustration = {
  animated: true 
};

const greeting = {
  username: "Manaswini Pisipati",
  title: "Hi All, I'm Manaswini Pisipati",
  subTitle: emoji(
    "M.S. in Data Science for Business graduate with strong skills in Python, SQL, Power BI. Five+ years of experience in Oracle ERP, data visualization, process automation, and translating business requirements into actionable insights. Looking forward to contributing as a Data Analyst or Business Analyst to apply analytical and problem-solving skills to drive data-driven decisions and business growth."
  ),
  resumeLink: "resume (14).pdf", // Matches your uploaded file name
  displayGreeting: true 
};

// --- SOCIAL MEDIA LINKS ---
const socialMediaLinks = {
  github: "https://github.com/manasp20",
  linkedin: "https://www.linkedin.com/in/manaswinisp",
  gmail: "manaswinipisipati95@gmail.com",
  display: true 
};

// --- SKILLS SECTION ---
const skillsSection = {
  title: "What I Do",
  subTitle:
    "Data Analyst and Business Analyst candidate with 5+ years of experience in Oracle ERP, data visualization, and process automation.",
  skills: [
[cite_start]    emoji("⚡ M.S. in Data Science for Business graduate with strong skills in Python, SQL, Power BI. [cite: 4]"),
[cite_start]    emoji("⚡ Five+ years of experience in Oracle ERP, data visualization, process automation. [cite: 5]"),
[cite_start]    emoji("⚡ Translating business requirements into actionable insights. [cite: 5]"),
[cite_start]    emoji("⚡ Applying analytical and problem-solving skills to drive data-driven decisions and business growth. [cite: 6]")
  ],
  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "R", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-bar"},
    {skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-pie"},
    {skillName: "Oracle ERP", fontAwesomeClassname: "fas fa-server"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Jira/Confluence", fontAwesomeClassname: "fab fa-jira"},
    {skillName: "Scikit-learn", fontAwesomeClassname: "fas fa-brain"}
  ],
  display: true
};

// --- EDUCATION SECTION ---
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Portland State University",
      // logo: require("./assets/images/PSULogo.png"), // Add logo if available
      subHeader: "M.S. in Applied Data Science for Business, GPA: 3.7/4",
[cite_start]      duration: "Expected Aug 2025 [cite: 11]",
      desc: "Relevant Coursework: Data Mining, Data Warehousing, Data Visualization, Deep Learning, NLP, and Machine Learning." 
    },
    {
      schoolName: "GITAM University",
      // logo: require("./assets/images/gitamLogo.png"), // Add logo if available
      subHeader: "B.Tech. in Computer Science",
[cite_start]      duration: "May 2017 [cite: 11]",
      desc: "Core Computer Science curriculum."
    }
  ]
};


// Your top 3 proficient stacks/tech experience (Using Skill Bars)
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Data Visualization (Tableau, Power BI)", progressPercentage: "85%"},
    {Stack: "Programming (Python, SQL, R)", progressPercentage: "90%"},
    {Stack: "Oracle ERP R12.1.3 (PO, INV)", progressPercentage: "90%"},
    {Stack: "AI & ML (Scikit-learn, NLP, Clustering)", progressPercentage: "80%"},
    {Stack: "Project Management (Jira, Agile)", progressPercentage: "85%"},
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Application Development Analyst - Oracle ERP",
      company: "Accenture Pvt Ltd",
      // companylogo: require("./assets/images/accentureLogo.png"), // Add logo if available
[cite_start]      date: "May 2017 – Feb 2020 [cite: 18]",
      desc: "Resolved procurement issues, automated reporting, and implemented regression testing for Oracle ERP modules.",
      descBullets: [
[cite_start]        "Reduced manual reporting effort by 30-40% via automation of procurement and invoice modules. [cite: 16]",
[cite_start]        "Resolved SLA-bound procurement issues across 15+ clients, boosting ticket closure rate by 25%. [cite: 17]",
[cite_start]        "Implemented entire Regression Testing using HP Unified Functional Testing under Automation Framework. [cite: 19]",
[cite_start]        "Generated $72K in annual savings by streamlining reporting and building cost-tracking dashboards. [cite: 20]"
      ]
    }
  ]
};

// Your Open Source Section to View Your Github Pinned Projects
const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "Data Analytics, Machine Learning, and Optimization",
  projects: [
    {
[cite_start]      projectName: "Birmingham Housing Market Model [cite: 22]",
      projectDesc:
        "Built a logistic regression model to identify rent-burdened applicants at high default risk. Integrated data from Census, ACRE, Eviction Lab, and OneApp internal sales logs. [cite_start]Performed various visualization using custom visuals. [cite: 23, 25, 27]",
      footerLink: []
    },
    {
[cite_start]      projectName: "Pharmacy Analytics Dashboard - Cigna [cite: 28]",
      projectDesc:
        "Visualized drug cost trends and supplier behavior to improve rebate strategies. [cite_start]Reduced monthly reporting time by 50% through reusable ETL and pipeline logic. [cite: 29, 30]",
      footerLink: []
    },
    {
[cite_start]      projectName: "Hospital Resource Optimization - Shanghai [cite: 30]",
      projectDesc:
        "Clustered patient demographics to optimize triage and wait-time prioritization. [cite_start]Applied PCA and reward modeling to simulate a 20% drop in ER wait times. [cite: 31, 32]",
      footerLink: []
    },
    {
[cite_start]      projectName: "Mall Customer Segmentation Analysis [cite: 32]",
      projectDesc:
        "Performed customer segmentation to guide marketing strategy using clustering. [cite_start]Identified 3 high-potential customer segments and visualized findings to deliver actionable insights. [cite: 33, 34, 35]",
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Leadership & Recognition🏆 "),
  subtitle:
    "Recognitions and milestones that highlight my career journey.",
  achievementsCards: [
    {
[cite_start]      title: "Zenith Awardee-Best Performer 2018 [cite: 37]",
      description: ""
    },
    {
[cite_start]      title: "Pinnacle Award FY20 2020 [cite: 38]",
      description: ""
    },
    {
[cite_start]      title: "Best Orator Global FinTech Innovation Pitch 2019 [cite: 39]",
      description: ""
    },
    {
      title: "The Rising Star award for showcasing leadership and team management activities. [cite_start]2017 [cite: 40]",
      description: ""
    },
    {
[cite_start]      title: "Oracle Procurement Cloud (1Z0-963) Certified [cite: 12]",
[cite_start]      description: "Also holds Graduate Certificate in Business Intelligence and Analytics. [cite: 13]"
    },
    {
[cite_start]      title: "AWS Certified Cloud Practitioner [cite: 13]",
[cite_start]      description: "Also holds Microsoft Azure Fundamentals certification. [cite: 13]"
    }
  ],
  display: true
};

// --- CONTACT INFO ---
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: emoji("Feel free to reach out for opportunities!"),
  number: "+1 971 329 545", 
  email_address: "manaswinipisipati95@gmail.com"
};

const resumeSection = { display: true }; // Needed for export

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
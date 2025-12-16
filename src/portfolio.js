/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 
// NOTE: If you are using logos (e.g., Accenture or US PBM), you MUST ensure the image files 
// are correctly placed in the ./assets/images folder.

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
  resumeLink: "resume (14).pdf", 
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
    emoji("⚡ M.S. in Data Science for Business graduate with strong skills in Python, SQL, Power BI."),
    emoji("⚡ Five+ years of experience in Oracle ERP, data visualization, process automation."),
    emoji("⚡ Translating business requirements into actionable insights."),
    emoji("⚡ Applying analytical and problem-solving skills to drive data-driven decisions and business growth.")
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
      subHeader: "M.S. in Applied Data Science for Business, GPA: 3.7/4",
      duration: "Expected Aug 2025",
      desc: "Relevant Coursework: Data Mining, Data Warehousing, Data Visualization, Deep Learning, NLP, and Machine Learning." 
    },
    {
      schoolName: "GITAM University",
      subHeader: "B.Tech. in Computer Science",
      duration: "May 2017",
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
      role: "PROJECT ANALYST",
      company: "US PBM",
      // companylogo: require("./assets/images/uspbmLogo.png"), 
      date: "Jun 2021 – Aug 2024",
      desc: "Spearheaded project planning, timeline management, and budgeting, ensuring alignment with Agile best practices and driving significant improvements in team productivity and delivery timelines.",
      descBullets: [
        "Spearheaded project planning, timeline management, and budgeting while facilitating Scrum ceremonies (planning, daily stand-ups, reviews, retrospectives) to ensure alignment with Agile best practices and sprint goals.",
        "Maintained comprehensive project trackers and status reports, proactively managed dependencies, and executed critical program tasks, which resulted in a 40% increase in overall team productivity and a 15% improvement in project delivery timelines.",
        "Partnered with IT teams defined data requirements, troubleshot data discrepancies, and implement ETL processes, improving data accuracy by 30% and ensuring reliable data pipelines for reporting.",
        "Directed project, implemented an ensemble strategy for integrating model predictions, and utilized GitHub for effective collaboration."
      ]
    },
    {
      role: "Senior Application Development Analyst - Oracle ERP",
      company: "Accenture Pvt Ltd",
      // companylogo: require("./assets/images/accentureLogo.png"), 
      date: "May 2017 – Feb 2020",
      desc: "Resolved procurement issues, automated reporting, and implemented regression testing for Oracle ERP modules.",
      descBullets: [
        "Reduced manual reporting effort by 30-40% via automation of procurement and invoice modules.",
        "Resolved SLA-bound procurement issues across 15+ clients, boosting ticket closure rate by 25%.",
        "Implemented entire Regression Testing using HP Unified Functional Testing under Automation Framework.",
        "Generated $72K in annual savings by streamlining reporting and building cost-tracking dashboards."
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
      projectName: "Birmingham Housing Market Model",
      projectDesc:
        "Built a logistic regression model to identify rent-burdened applicants at high default risk. Integrated data from Census, ACRE, Eviction Lab, and OneApp internal sales logs. Performed various visualization using custom visuals.",
      footerLink: [{
          name: "View Project",
          url: "https://github.com/manasp20/Capstone_Proj_B-ham--AL-housing-market"
        }]
    },
    {
    projectName: "Healthcare Operational & Resource Optimization",
    projectDesc:
      "Applied advanced analytics to optimize healthcare operations, covering both patient flow and financial efficiency. Built a clustering model (PCA, Reward Modeling) to improve hospital triage/wait times (simulated 20% drop in ER wait times) and developed a Power BI dashboard to visualize drug cost trends, reducing monthly rebate reporting time by 50% via reusable ETL logic.",
    footerLink: [
        {
            name: "View Project",
            url: "https://github.com/manasp20/ETM540_FinalProject"
        }
    ]
},

{
  projectName: "Mall Customer Segmentation Analysis",
  projectDesc:
    "Performed customer segmentation to guide marketing strategy using clustering. Identified  high-potential customer segments and visualized findings to deliver actionable insights.",
  footerLink: [
    {
      text: "View Code",
      href: "https://github.com/manasp20/mall_customer_segmentation"
    }
  ]
}
]
};

// Achievement Section
const achievementSection = {
  title: emoji("Leadership & Recognition🏆 "),
  subtitle:
    "Recognitions and milestones that highlight my career journey.",
  achievementsCards: [
    {
      title: "Zenith Awardee-Best Performer 2018",
      description: ""
    },
    {
      title: "Pinnacle Award FY20 2020",
      description: ""
    },
    {
      title: "Best Orator Global FinTech Innovation Pitch 2019",
      description: ""
    },
    {
      title: "The Rising Star award for showcasing leadership and team management activities. 2017",
      description: ""
    },
    {
      title: "Oracle Procurement Cloud (1Z0-963) Certified",
      description: "Also holds Graduate Certificate in Business Intelligence and Analytics."
    },
    {
      title: "AWS Certified Cloud Practitioner",
      description: "Also holds Microsoft Azure Fundamentals certification."
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
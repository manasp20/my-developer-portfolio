/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// --- NECESSARY EXPORTS (To fix the compilation errors) ---
// These are required by the template's components to compile successfully
//export
const isHireable = true; 
//export const workExperiences = { display: false }; // Set to false since you don't have this data structure yet
//export const bigProjects = { display: false }; // Set to false to prevent errors
//export const achievementSection = { display: false }; // Set to false to prevent errors


// --- SPLASH SCREEN ---
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 
};

// --- SUMMARY AND GREETING SECTION ---
const greeting = {
  username: "Manaswini Pisipati",
  title: "Hi All, I'm Manaswini Pisipati",
  subTitle: emoji(
    "M.S. in Applied Data Science for Business graduate actively seeking Data Analyst and Business Analyst roles to leverage my skills in data visualization and business analytics. Five+ years of experience delivering data-driven insights and scalable solutions, specializing in Oracle ERP R12.1.3 (PO, INV), process optimization, and dashboard development using Power BI."
  ),
  resumeLink: "resume.pdf", // Placeholder: Change this to your PDF's name in the public folder
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
    emoji(
      "⚡ Translating complex business requirements into actionable insights and scalable data solutions"
    ),
    emoji(
      "⚡ Expertise in Oracle ERP R12.1.3 (PO, INV) for system analysis and process optimization"
    ),
    emoji(
      "⚡ Developing interactive dashboards using Tableau and Power BI to visualize key performance indicators"
    ),
    emoji(
      "⚡ Building data models, performing clustering (K-Means), and leveraging NLP/Generative AI concepts"
    )
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
      // logo: require("./assets/images/PSULogo.png"), // You will need to add a PSU logo image
      subHeader: "M.S. in Applied Data Science for Business",
      duration: "Expected Aug 2025, GPA: 3.7/4",
      desc: "Relevant Coursework in Data Science, Visualization, Business Analytics, and Machine Learning."
    },
    {
      schoolName: "GITAM University",
      // logo: require("./assets/images/gitamLogo.png"), // Keep this logo if it's already in the assets folder
      subHeader: "B.Tech. in Computer Science",
      duration: "May 2017",
      desc: "Core Computer Science curriculum."
    }
  ]
};

// --- PROJECTS SECTION (INSERT THIS CODE BLOCK) ---
const projects = [
    // 1. YOUR NEW CAPSTONE PROJECT - Fully Defined and Linked
    {
        name: "Birmingham Housing Market Model (Capstone)",
        description: [
            "Engineered a **Logistic Regression Model (Python/Scikit-learn)** to predict tenant default risk based on financial indicators (Rent-to-Income, Credit Score), improving applicant risk assessment.",
            "Integrated and cleaned data from four complex sources, including Census, Eviction Lab, and ACRE economic data, with internal OneApp sales logs for **robust feature engineering**.",
            "Quantified localized market risk by identifying that **42% of renters were rent-burdened** and pinpointing key Birmingham ZIP codes with the highest predicted default rates (~7.2%).",
            "Delivered visualization reports (**Matplotlib/Seaborn**) and strategic policy recommendations to stakeholders, proving that **rent burden > 30%** was the primary driver of default."
        ],
        tags: ["Python", "Logistic Regression", "Scikit-learn", "Data Wrangling", "Data Visualization", "Risk Analysis"],
        // *** YOUR CORRECT GITHUB LINK ***
        github: "https://github.com/manasp20/Capstone_Proj_B-ham--AL-housing-market", 
        link: "", 
    },
    // 2. PROJECT 2 (Placeholder - Change the link later)
    {
        name: "Inventory Demand Forecasting",
        description: [
            "Built a Time Series Model (ARIMA/Prophet) to forecast product demand for a major e-commerce retailer, reducing inventory surplus by 15%.",
            "Conducted comprehensive Exploratory Data Analysis (EDA) on transactional data to identify seasonality and trend components.",
        ],
        tags: ["Python", "Time Series", "ARIMA", "Prophet", "Tableau", "Forecasting"],
        github: "#", // <-- REPLACE THIS LATER WITH YOUR PROJECT 2 GITHUB LINK
        link: "",
    },
    // 3. PROJECT 3 (Placeholder - Change the link later)
    {
        name: "Healthcare Claims Clustering",
        description: [
            "Applied K-Means Clustering in Python to segment patient claim data, revealing 5 distinct fraud patterns.",
            "Processed and cleaned over 500,000 records, engineering features like Claim Frequency and Provider Network Density.",
        ],
        tags: ["Python", "K-Means", "Clustering", "Fraud Detection", "Pandas", "Healthcare"],
        github: "#", // <-- REPLACE THIS LATER WITH YOUR PROJECT 3 GITHUB LINK
        link: "", 
    },
];
// --- END PROJECTS SECTION INSERT ---

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, // Set to true if you want to use the skill bars
  displayCodersrank: false,
  display: false // Set this to false to hide the section until you fill it out
};

// Work experience section
const workExperiences = {
  display: false, // Set this to true if you want to display the section
  experience: []
};

// Your Open Source Section to View Your Github Pinned Projects
const openSource = {
    showGithubProfile: "true", 
    display: false // Set to true if you want to display the section
};

// Some big projects you have worked on
const bigProjects = {
    display: false, // Set to true if you want to display the section
    projects: []
};

// Achievement Section
const achievementSection = {
    display: false, // Set to true if you want to display the section
    achievementsCards: []
};

// --- CONTACT INFO ---
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: emoji("Feel free to reach out for opportunities!"),
  number: "+1 971 329 545", // Update with your actual number
  email_address: "manaswinipisipati95@gmail.com"
};

const illustration = { animated: true }; // Needed for export
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
/**
 * All portfolio content lives here. Edit this file to update the site.
 * Everything below is sourced from the resume; anything marked TODO is a
 * placeholder for you to fill in.
 */

export const site = {
  name: "Bhaskar B C",
  shortName: "Bhaskar",
  title: "Full Stack Developer | AI Integration & Automation Developer",
  role: "Full Stack Developer",
  tagline: "AI Integration & Automation Developer",
  description:
    "Bhaskar B C is a Full Stack Developer building practical web applications, AI-integrated features and intelligent automation workflows.",
  email: "bhaskarshekar76@gmail.com",
  location: "Bangalore, India",
  // TODO: add your real profile URLs. Icons are hidden while these are empty.
  github: "",
  linkedin: "",
  resume: "/Bhaskar_B_C_Resume.pdf",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const heroStats = [
  { value: "15+", label: "Website pages maintained" },
  { value: "200+", label: "Monthly feedback items automated" },
  { value: "30%", label: "Less manual processing effort" },
  { value: "4", label: "AI & full-stack projects" },
];

export const aboutHighlights = [
  {
    icon: "graduation",
    title: "Education",
    text: "B.E. in Information Science Engineering at Global Academy of Technology, Bangalore (2022 – 2026).",
  },
  {
    icon: "code",
    title: "Software development",
    text: "Hands-on with JavaScript, React, Next.js, Node.js and Python, building responsive interfaces backed by REST APIs.",
  },
  {
    icon: "building",
    title: "Bosch India Foundation",
    text: "Full-stack development and management intern (Nov 2025 – Apr 2026), shipping CMS pages and workflow automation.",
  },
  {
    icon: "sparkles",
    title: "AI & automation",
    text: "Integrates models such as Claude, GPT-4 and the OpenAI API into products and workflows that remove manual effort.",
  },
  {
    icon: "puzzle",
    title: "Problem-solving",
    text: "Starts from the user's journey, maps the workflow, then automates the repetitive parts and keeps people in the loop.",
  },
  {
    icon: "target",
    title: "Goal",
    text: "To contribute to high-quality software in a collaborative engineering team, and keep growing as a full-stack and AI engineer.",
  },
] as const;

export const experience = [
  {
    company: "Bosch India Foundation",
    role: "Full Stack Development & Management Intern",
    period: "Nov 2025 – Apr 2026",
    location: "On-site, India",
    featured: true,
    summary:
      "Built and maintained the web presence and turned a manual feedback process into an automated, AI-assisted workflow.",
    bullets: [
      "Enhanced and maintained 15+ website pages using structured, CMS-based development (FirstSpirit CMS), improving content accessibility, navigation and overall user experience.",
      "Engineered automated feedback workflows with Microsoft Power Automate, Microsoft Forms and Planner, converting 200+ monthly feedback submissions into trackable action items.",
      "Integrated Claude AI into the feedback analysis workflow to identify, classify and prioritise actionable insights from unstructured user responses.",
      "Streamlined end-to-end workflow automation, reducing manual processing effort by 30%.",
      "Designed an interactive Learning Management System (LMS) workflow prototype in Figma, mapping user journeys, system interactions and functional requirements.",
      "Contributed to CI/CD pipelines for efficient deployment, working alongside cross-functional teams.",
    ],
    tech: [
      "FirstSpirit CMS",
      "Microsoft Power Automate",
      "Microsoft Forms",
      "Planner",
      "Claude AI",
      "Figma",
      "JavaScript",
      "Node.js",
    ],
  },
] as const;

export type Project = {
  slug: string;
  name: string;
  period: string;
  icon: "heart" | "activity" | "message" | "shield";
  category: string;
  short: string;
  problem: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string; // TODO: add repo URL
  demo?: string; // TODO: add live demo URL
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-rehabilitation-coach",
    name: "AI Rehabilitation Coach",
    period: "Dec 2024 – Jan 2025",
    icon: "activity",
    category: "Computer Vision · Real-time AI",
    short:
      "A real-time physical therapy monitoring system that uses AI and computer vision to coach rehabilitation exercises.",
    problem:
      "Rehabilitation exercises are easy to perform incorrectly without a therapist watching. This system watches the movement and gives corrective feedback as it happens.",
    description:
      "An AI-powered system that monitors rehabilitation exercises and delivers real-time corrective feedback using computer vision, then summarises progress in automated reports.",
    features: [
      "YOLOv8 pose estimation with joint-angle analysis to detect body movement",
      "Random Forest model that classifies exercise form",
      "WebSocket-based real-time pipeline delivering feedback within 2 seconds",
      "GPT-4 generated personalised exercise feedback and automated progress reports",
    ],
    tech: ["YOLOv8", "Random Forest", "WebSocket", "GPT-4"],
    featured: true,
  },
  {
    slug: "health-deficiency-detection",
    name: "Health Deficiency Detection Web App",
    period: "Feb 2025 – Mar 2025",
    icon: "heart",
    category: "Full-Stack · AI Integration",
    short:
      "A web app that analyses uploaded blood reports to detect health deficiencies and suggest foods or supplements.",
    problem:
      "Blood reports are dense and hard for most people to interpret. This app turns an uploaded report into understandable, personalised insights.",
    description:
      "A full-stack application: a Next.js frontend and a FastAPI (Python) backend that analyses uploaded blood reports, with the OpenAI API identifying deficiencies and recommending relevant foods or supplements.",
    features: [
      "Secure blood report uploads",
      "AI-driven identification of deficiencies using the OpenAI API",
      "Personalised food and supplement recommendations",
      "Next.js frontend with a FastAPI and Python backend",
    ],
    tech: ["Next.js", "FastAPI", "Python", "OpenAI API"],
    featured: true,
  },
  {
    slug: "sentiment-analysis-nltk",
    name: "Sentiment Analysis with NLTK",
    period: "Sep 2024 – Oct 2024",
    icon: "message",
    category: "NLP · Data Analysis",
    short:
      "Reads blog content from the web and scores positive and negative sentiment, exporting the results to Excel.",
    problem:
      "Judging the tone of large amounts of web content by hand does not scale. This project automates the extraction and scoring.",
    description:
      "A sentiment analysis project that uses NLTK to evaluate sentiment from web content, reading data from blogging web pages and storing the results in an Excel sheet.",
    features: [
      "Reads data from blogging web pages",
      "Identifies negative and positive parameters in the text",
      "Stores the analysed results in an Excel sheet",
    ],
    tech: ["Python", "NLTK", "Pandas", "NumPy"],
  },
  {
    slug: "my-covid-detector",
    name: "My Covid Detector",
    period: "Aug 2024 – Sep 2024",
    icon: "shield",
    category: "Machine Learning · Prediction",
    short:
      "A predictive model that assesses COVID-19 risk levels from a comprehensive dataset of health indicators.",
    problem:
      "Estimating risk from many different health indicators at once is hard to do manually. This model combines several techniques to predict risk levels.",
    description:
      "An ensemble model combining Random Forest, Gradient Boosting and DBSCAN clustering to predict COVID-19 risk levels, built on data aggregated from over 5,000 case records and multiple health indicators.",
    features: [
      "Ensemble of Random Forest and Gradient Boosting",
      "DBSCAN clustering to group similar cases",
      "Data aggregated from 5,000+ COVID-19 case records",
    ],
    tech: ["Random Forest", "Gradient Boosting", "DBSCAN"],
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: "braces",
    items: ["Python", "JavaScript", "Java"],
  },
  {
    title: "Frontend Development",
    icon: "layout",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: "server",
    items: ["Node.js", "FastAPI", "REST APIs"],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["MongoDB", "Relational Databases", "NoSQL"],
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    items: [
      "Claude AI",
      "OpenAI API",
      "GPT-4",
      "YOLOv8",
      "Random Forest",
      "Gradient Boosting",
      "DBSCAN",
      "NLTK",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Automation & Integration",
    icon: "workflow",
    items: ["Microsoft Power Automate", "Microsoft Forms", "Planner", "WebSocket", "CI/CD"],
  },
  {
    title: "Developer Tools & Platforms",
    icon: "wrench",
    items: ["Git", "Visual Studio Code", "Azure", "Figma", "Microsoft Power BI", "Tableau"],
  },
] as const;

export const education = [
  {
    school: "Global Academy of Technology",
    degree: "Bachelor of Engineering – Information Science Engineering",
    period: "Nov 2022 – Jun 2026",
    place: "Bangalore, Karnataka",
    note: "CGPA: 7.7",
  },
  {
    school: "BASE PU College",
    degree: "Pre-University (PU)",
    period: "Feb 2020 – Sep 2022",
    place: "Bangalore, Karnataka",
    note: "",
  },
] as const;

export const certifications = [
  { name: "100x Devs", detail: "MERN, DevOps, System Design, Java" },
  { name: "Coursera", detail: "Introduction to Android Mobile Backend Application Development" },
  { name: "UpSkill", detail: "Software Testing" },
  { name: "IBM", detail: "Generative AI Engineering" },
] as const;

export const activities = [
  {
    title: "Co-Convenor, 24th VTU Youth Fest 2025",
    text: "Demonstrated leadership and organisational skills.",
  },
  {
    title: "Treasurer, Inspire Club (ISE Department)",
    text: "Organised workshops and a national-level hackathon to foster community engagement.",
  },
] as const;

// Data profil untuk AI Chatbot
const profileData = {
  personalInfo: {
    name: "M. Farij Ariefqy Saputra",
    nickname: "Farij",
    title: "Full Stack Developer",
    location: "Kendal, Jawa Tengah, Indonesia",
    email: "farijariefqy11@gmail.com",
    phone: "+6281809717338",
    instagram: "https://www.instagram.com/farij_ariefqy/",
    linkedin: "https://www.linkedin.com/in/m-farij-ariefqy-saputra/",
    yearsOfExperience: 4,
    totalProjects: 50,
    companiesWorkedWith: 3
  },

  summary: "With over 4 years of professional experience as a programmer, I specialize in developing robust and efficient applications using Java and PHP. My expertise extends to mastering popular frameworks such as Laravel and Spring Boot, enabling me to deliver high-quality solutions tailored to clients' needs. I am passionate about learning and growth, driven by my personal motto: 'If I fail, I learn and try again until the goal is achieved.'",

  education: {
    degree: "Bachelor of Informatics",
    university: "Universitas PGRI Semarang",
    period: "2015 - 2019",
    gpa: "3.55/4.0",
    focus: "Software development, database management, and web technologies"
  },

  skills: {
    primary: [
      { name: "Java (Spring Boot, Spring MVC, Spring ORM)", level: 90 },
      { name: "PHP (Laravel)", level: 85 },
      { name: "Android Native (Java)", level: 80 }
    ],
    frameworks: ["Spring Boot", "Spring MVC", "Laravel", "Apache Cordova"],
    databases: ["MySQL", "PostgreSQL", "Oracle"],
    tools: ["Maven", "Git", "JasperReports", "iText", "Apache POI", "Quartz Scheduler"],
    frontend: ["JavaScript", "HTML", "CSS", "Bootstrap", "Vue.js", "XML"],
    others: ["RESTful API", "Microservices", "Multi-module Architecture", "Report Generation", "SDK Development"]
  },

  experience: [
    {
      position: "Java Full-Stack Developer",
      company: "PT. Klickers",
      location: "Jakarta",
      period: "Oct 2023 – Present",
      responsibilities: [
        "Develop and maintain the Agent Management System",
        "Build and maintain Java-based enterprise applications using Maven multi-module architecture",
        "Architect and implement complex business logic within the service layer using Spring MVC and Spring ORM",
        "Create features to generate dynamic reports in PDF (JasperReports, iText) and Excel (Apache POI) formats",
        "Automate key business processes by designing and implementing scheduled jobs with Quartz Scheduler"
      ],
      technologies: ["Java", "Spring MVC", "Spring ORM", "Maven", "JasperReports", "iText", "Apache POI", "Quartz"]
    },
    {
      position: "IT Software Developer",
      company: "PT. Kawasan Industri Kendal",
      location: "Kendal",
      period: "Jan 2022 – Oct 2023",
      responsibilities: [
        "Developed and maintained E-Tender, ERP, and Recruitment systems using Laravel Framework",
        "Enhanced existing applications to improve stability, usability, and security",
        "Participated in deployment and testing processes across multiple environments"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "Vue.js"]
    },
    {
      position: "Application Developer",
      company: "PT. Mitra Integrasi Informatika (Placement: PT Bank Negara Indonesia)",
      location: "Jakarta",
      period: "Mar 2020 – Dec 2021",
      responsibilities: [
        "Developed SMS Banking system using Java",
        "Built SMS Menu application using Apache Cordova Framework",
        "Developed SMS Admin system for Tellers using Java and JavaScript",
        "Created TapCash SDK for Android partners using Java and XML",
        "Developed TapCash Android App using Java and XML",
        "Collaborated closely with cross-functional teams throughout the development process"
      ],
      technologies: ["Java", "JavaScript", "Android", "Apache Cordova", "XML"]
    }
  ],

  projects: [
    {
      name: "Agent Management System",
      description: "Enterprise-level system for managing agents with comprehensive features including reporting, scheduling, and data management",
      technologies: ["Java", "Spring MVC", "Maven", "JasperReports"],
      company: "PT. Klickers"
    },
    {
      name: "E-Tender System",
      description: "Comprehensive tender management system handling entire procurement workflow from bidding to contract management",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      company: "PT. Kawasan Industri Kendal"
    },
    {
      name: "TapCash SDK & Android App",
      description: "Developed SDK for partner integration and full-featured Android application for BNI's TapCash digital payment system",
      technologies: ["Java", "Android", "XML", "SDK"],
      company: "BNI (via PT. Mitra Integrasi Informatika)"
    },
    {
      name: "SMS Banking System",
      description: "Secure banking system enabling customers to perform transactions via SMS with robust security and real-time processing",
      technologies: ["Java", "JavaScript", "Apache Cordova"],
      company: "BNI (via PT. Mitra Integrasi Informatika)"
    },
    {
      name: "Enterprise Resource Planning (ERP)",
      description: "Full-scale ERP system managing company resources, inventory, HR, and financial operations with real-time analytics",
      technologies: ["Laravel", "PHP", "MySQL", "Vue.js"],
      company: "PT. Kawasan Industri Kendal"
    },
    {
      name: "Recruitment Management System",
      description: "Streamlined recruitment platform handling job postings, applicant tracking, interviews, and hiring workflows",
      technologies: ["Laravel", "PHP", "Bootstrap"],
      company: "PT. Kawasan Industri Kendal"
    }
  ],

  services: [
    {
      name: "Hari Kebahagiaan Kita",
      description: "Platform untuk pembuatan undangan online, harga murah dan pembuatan cepat",
      url: "https://harikebahagiaankita.com/"
    },
    {
      name: "Software Development",
      description: "Untuk pembuatan software berbasis Web maupun Mobile",
      contact: "https://wa.me/6281809717338"
    }
  ],

  strengths: [
    "Strong problem-solving abilities",
    "Expertise in both backend and frontend development",
    "Experience with enterprise-level applications",
    "Proficient in multiple programming languages and frameworks",
    "Quick learner and adaptable to new technologies",
    "Team collaboration and cross-functional communication",
    "Dedicated and persistent (motto: 'If I fail, I learn and try again until the goal is achieved')"
  ],

  availability: "Currently employed but open to new opportunities",

  workPreference: {
    type: ["Full-time", "Contract", "Freelance"],
    location: ["Remote", "Hybrid", "Jakarta", "Semarang", "Kendal"],
    industries: ["Fintech", "E-commerce", "Enterprise Software", "Startup"]
  }
};

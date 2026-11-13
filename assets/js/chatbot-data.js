// Data profil untuk AI Chatbot (disesuaikan dengan CV terbaru)
const profileData = {
  personalInfo: {
    name: "M. Farij Ariefqy Saputra",
    nickname: "Farij",
    title: "Java and PHP Developer",
    location: "Kendal, Central Java, Indonesia",
    email: "farijariefqy11@gmail.com",
    phone: "+62 818-0971-7338",
    instagram: "https://www.instagram.com/farij_ariefqy/",
    linkedin: "https://www.linkedin.com/in/m-farij-ariefqy-saputra/",
    website: "https://mfarijariefqy.github.io/",
    cvUrl: "assets/cv/CV_M_Farij_Ariefqy_Saputra.pdf",
    yearsOfExperience: 6, // dihitung ulang otomatis oleh site.js
    totalProjects: 50,
    companiesWorkedWith: 3
  },

  summary: "Java and PHP Developer with over 6 years of professional experience building enterprise-grade systems in banking, insurance, and industrial sectors. Proven track record delivering production applications for large-scale clients, including mobile banking SDKs and fintech integrations. Strong expertise in Java (Spring Boot/Spring MVC) and PHP (Laravel), with hands-on experience in SQL Server, PostgreSQL, MySQL, and Oracle. Certified in Application Security (EC-Council) and AWS Cloud services. Adept at translating complex business requirements into maintainable, scalable technical solutions.",

  education: {
    degree: "Bachelor of Informatics",
    university: "Universitas PGRI Semarang",
    period: "2015 - 2019",
    gpa: "3.55/4.00",
    focus: "Final project: Electronic Document Management System for Thesis Examination Documents"
  },

  skills: {
    primary: [
      { name: "Java (Spring Boot, Spring MVC)" },
      { name: "PHP (Laravel)" },
      { name: "REST API" }
    ],
    languages: ["Java", "PHP", "JavaScript"],
    frameworks: ["Spring Boot", "Spring MVC", "Laravel", "REST API", "Maven", "Gradle"],
    databases: ["SQL Server", "PostgreSQL", "MySQL", "Oracle", "Firebase"],
    tools: ["Git", "Postman", "IntelliJ IDEA", "Eclipse", "Linux", "Docker"],
    securityCloud: ["Application Security (EC-Council Certified)", "AWS (SageMaker, Generative AI)"]
  },

  experience: [
    {
      position: "Java Fullstack Developer",
      company: "PT Klickers",
      location: "Jakarta",
      period: "Oct 2023 – Present",
      responsibilities: [
        "Developed and maintained an Agent Management System for insurance operations using Spring Framework (agent onboarding, lifecycle tracking, commission management)",
        "Designed and implemented RESTful APIs for core insurance business processes on SQL Server",
        "Refactored legacy codebase applying Clean Code and design patterns (MVC, Service Layer, Repository)",
        "Collaborated with business analysts and QA teams on enhancements, bug resolution, and feature delivery",
        "Translated client business rules into scalable Java-based implementations"
      ],
      technologies: ["Java", "Spring", "REST API", "SQL Server"]
    },
    {
      position: "IT Software Developer",
      company: "PT Kawasan Industri Kendal",
      location: "Kendal",
      period: "Jan 2022 – Oct 2023",
      responsibilities: [
        "Developed and maintained an ERP system using Laravel (procurement, inventory, reporting)",
        "Built Java backend services for an Autogate System integrated with hardware sensors",
        "Developed a Recruitment Web Application using Laravel",
        "Implemented an E-Tender System using Laravel",
        "Worked closely with IT and business teams to align system functionality with operational needs"
      ],
      technologies: ["PHP", "Laravel", "Java", "MySQL"]
    },
    {
      position: "Junior Developer",
      company: "PT Mitra Integrasi Informatika (Onsite at Bank Negara Indonesia)",
      location: "Jakarta",
      period: "Jan 2020 – Dec 2021",
      responsibilities: [
        "Onsite developer in the IoT Group at Bank Negara Indonesia (BNI)",
        "Developed and enhanced SMS Banking and SMS Menu systems",
        "Developed TapCash SDK for third-party partner integrations with BNI's e-money platform",
        "Rebuilt TapCash Go Android Application from scratch (NFC-based e-money)",
        "Developed Bancslink integration for SMS Banking interbank transaction routing",
        "Performed System Integration Testing (SIT) for Android and iOS apps, unit tests and delivery documentation"
      ],
      technologies: ["Java", "Android", "NFC", "SDK"]
    }
  ],

  projects: [
    {
      name: "Agent Management System",
      description: "Insurance agent onboarding, lifecycle tracking, and commission management",
      technologies: ["Java", "Spring", "REST API", "SQL Server"],
      company: "PT Klickers"
    },
    {
      name: "TapCash SDK & TapCash Go",
      description: "Partner SDK for BNI's e-money platform and a from-scratch rebuild of the NFC-based TapCash Go Android app",
      technologies: ["Java", "Android", "NFC", "SDK"],
      company: "BNI (via PT Mitra Integrasi Informatika)"
    },
    {
      name: "SMS Banking & Bancslink Integration",
      description: "SMS Banking and SMS Menu features with Bancslink integration for interbank transaction routing",
      technologies: ["Java"],
      company: "BNI (via PT Mitra Integrasi Informatika)"
    },
    {
      name: "Autogate System",
      description: "Java backend integrated with hardware sensors for industrial park access control and vehicle logging",
      technologies: ["Java"],
      company: "PT Kawasan Industri Kendal"
    },
    {
      name: "ERP System",
      description: "Procurement, inventory, and reporting for an industrial park company",
      technologies: ["Laravel", "PHP", "MySQL"],
      company: "PT Kawasan Industri Kendal"
    },
    {
      name: "E-Tender & Recruitment System",
      description: "Procurement tendering and recruitment web applications",
      technologies: ["Laravel", "PHP"],
      company: "PT Kawasan Industri Kendal"
    }
  ],

  certifications: [
    { name: "Application Security Engineer (Java Focus)", issuer: "EC-Council", date: "Aug 2020", id: "ECC7813496520" },
    { name: "Generative AI Essentials on AWS", issuer: "AWS Training Online", date: "Nov 2025", id: "xAw-x1HNYEKi6DGiNbcBRg2" },
    { name: "Generative AI for Executives", issuer: "AWS Training Online", date: "Nov 2025", id: "QGDPL1KKz06PC6bYsEatmw2" },
    { name: "Practical Data Science with Amazon SageMaker", issuer: "AWS Training Online", date: "Nov 2025", id: "vbixDBrkW0WobH9hXJVGzw2" },
    { name: "Java Developer Bootcamp (Junior Full Stack Java Developer)", issuer: "PT Mitra Integrasi Informatika", date: "Jan – Mar 2020" }
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
    "6+ years building enterprise systems in banking, insurance, and industrial sectors",
    "Delivered production applications for large-scale clients, including mobile banking SDKs",
    "Strong in Java (Spring Boot/Spring MVC) and PHP (Laravel)",
    "Certified in Application Security (EC-Council)",
    "Clean Code and design patterns (MVC, Service Layer, Repository)",
    "Translates complex business requirements into maintainable, scalable solutions",
    "Collaborates well with business analysts, QA, and clients"
  ],

  availability: "Currently employed but open to new opportunities",

  workPreference: {
    type: ["Full-time", "Contract", "Freelance"],
    location: ["Remote", "Hybrid", "Jakarta", "Semarang", "Kendal"],
    industries: ["Banking & Fintech", "Insurance", "Enterprise Software", "Startup"]
  }
};

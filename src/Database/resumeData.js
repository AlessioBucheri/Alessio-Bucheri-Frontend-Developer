const resumeData = {
  profile: {
    name: "Alessio Bucheri",
    role: "Backend Developer",
    location: "Rome, Italy",
    address: "Viale Aldo Ballarin, 35, 00142 Roma",
    email: "alessio.j.1993@gmail.com",
    portfolio: "https://alessiobucheriportfolio.netlify.app/",
    github: "https://github.com/AlessioBucheri",
    linkedin: "https://www.linkedin.com/in/alessio-bucheri-462721214/",
    cvPath: "/resume/alessio-bucheri-cv.pdf",
    summary:
      "I am a developer based in Rome with a frontend foundation and current backend experience in enterprise environments. Today I work on ASP.NET APIs, microservices and complex business workflows, while keeping a strong focus on clarity, performance and product quality.",
  },
  highlights: [
    "Backend Developer at Avanade",
    "ASP.NET & Microservices",
    "English C1",
  ],
  experience: [
    {
      title: "Backend Developer",
      company: "Avanade",
      period: "January 2025 - Present",
      location: "Rome",
      summary:
        "Working on enterprise microservices for a national INPS system.",
      bullets: [
        "Design and maintain microservices in enterprise environments.",
        "Develop Web APIs in ASP.NET on .NET 6.",
        "Implement complex business rules for payments, workflows and case handling.",
        "Integrate external services through REST APIs and handle complex JSON payloads.",
        "Manage JWT-based security, asynchronous flows and large data aggregations.",
        "Collaborate closely with frontend teams and functional analysts.",
      ],
    },
  ],
  education: [
    {
      title: "Academy Applicativa ASP.NET Fullstack Developer",
      organization: "I&M Consulting",
      period: "October 2024 - November 2024",
      description:
        "Applied training focused on ASP.NET fullstack development and enterprise workflows.",
    },
    {
      title: "Front End Development Certificate",
      organization: "Start2Impact",
      period: "January 2024 - April 2024",
      description:
        "Digital training certificate focused on frontend development.",
      note: "Final score: 94/100",
    },
    {
      title: "Liceo Classico Sperimentale Bertrand Russell",
      organization: "Rome",
      period: "2007 - 2012",
    },
  ],
  coreSkills: [
    { name: "Frontend", level: 88 },
    { name: "ASP.NET APIs", level: 85 },
    { name: "SQL & Data", level: 80 },
    { name: "Microservices", level: 82 },
  ],
  skillGroups: [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Angular (base)"],
    },
    {
      title: "Backend",
      items: [
        "C#",
        ".NET 6",
        "ASP.NET Web API",
        "Entity Framework",
        "REST API",
        "Identity",
        "JWT Authentication",
        "Microservices",
      ],
    },
    {
      title: "Database & Performance",
      items: [
        "SQL Server",
        "Stored Procedures",
        "Advanced Querying",
        "Data Aggregation",
        "JSON Parsing",
      ],
    },
    {
      title: "Tools & Methods",
      items: ["Azure DevOps", "Git", "Visual Studio", "Agile / Scrum", "Canva", "Adobe"],
    },
  ],
  languages: [
    { name: "English", level: "C1" },
    { name: "French", level: "A1" },
    { name: "Spanish", level: "A1" },
  ],
};

export default resumeData;

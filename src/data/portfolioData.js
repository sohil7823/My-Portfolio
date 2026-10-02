// Centralized content for the portfolio.
// Keeping data separate from components makes every section easy to update
// without touching JSX or CSS.

export const personal = {
  name: "Sohil",
  title: "Software Developer | B.Tech CSE (AI & ML)",
  location: "Nuh (Gurugram), Haryana - 122508",
  phone: "+91 9813600332",
  email: "khansohil78539@gmail.com",
  github: "https://github.com/sohil7823",
  linkedin: "https://www.linkedin.com/in/sohil-57a340292",
  resumePath: "/Sohil Resume.pdf",
  photoPath: "sohil.jpeg",
};

export const rotatingRoles = [
  "Software Developer",
  "Full Stack Developer",
  "AI & ML Enthusiast",
  "Problem Solver",
];

export const heroDescription =
  "I am a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning, passionate about software development, problem solving, and building real-world applications.";

export const aboutMe = {
  intro:
    "I am a B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at GD Goenka University. I am passionate about software development, Artificial Intelligence, Machine Learning, Data Structures and Algorithms, and problem solving. I enjoy building real-world applications and continuously improving my technical skills.",
  highlights: [
    { label: "Degree", value: "B.Tech CSE (AI & ML)" },
    { label: "GPA", value: "8.02" },
    { label: "Timeline", value: "2023 – 2027" },
    { label: "Focus", value: "Aspiring Software Developer" },
  ],
};

export const whyHireMe = [
  {
    title: "Problem Solving",
    points: ["Data Structures & Algorithms", "Logical thinking", "Competitive programming mindset"],
  },
  {
    title: "Software Development",
    points: ["Java", "Python", "JavaScript", "React", "Node.js"],
  },
  {
    title: "AI & Machine Learning",
    points: ["Machine Learning", "Data Analysis", "EDA", "AI fundamentals"],
  },
  {
    title: "Team & Communication",
    points: ["Teamwork", "Communication", "Analytical skills", "Technical learning"],
  },
];

export const skillGroups = [
  {
    category: "Programming",
    skills: ["Java", "Python", "C++", "JavaScript", "OOPs"],
  },
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "EJS"],
  },
  {
    category: "Databases",
    skills: ["SQL", "MongoDB"],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Data Preprocessing",
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "SVM",
      "K-Means",
      "PCA",
      "Data Analysis",
      "EDA",
      "Artificial Intelligence",
    ],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
  {
    category: "Core Computer Science",
    skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOPs"],
  },
];

export const experience = [
  {
    role: "Amazon Virtual Workshop Participant",
    date: "April 2024",
    points: [
      "Learned basics of e-commerce operations and order management.",
      "Gained understanding of customer service processes.",
      "Developed communication and problem-solving skills.",
    ],
  },
];

export const projects = [
  {
    number: "01",
    name: "Spotify Clone",
    tag: "Frontend Web Project",
    date: "July 2025",
    description:
      "Designed and developed the homepage of a Spotify-inspired web application using HTML, CSS, and JavaScript. Implemented navigation, music sections, responsive layout, and user-interface components with focus on design and user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sohil7823",
    demo: null,
  },
  {
    number: "02",
    name: "Wanderlust",
    date: "",
    description:
      "Developed a secure, full-featured travel platform with JWT authentication, MVC routing, Joi-validated REST APIs, dynamic content, and image uploads. Implemented authentication, authorization, and review management features using Passport.js and MongoDB Atlas, deployed on Render.",
    tech: ["React, EJS, Node.js, Express, MongoDB, MongoDB Atlas, Passport.js, JWT, MVC"],
    github: "https://github.com/sohil7823",
    demo: null,
  },
];

export const research = {
  conference: "ICNMA 2025 — International Conference",
  topic: "Using Machine Learning to Improve Tuberculosis Diagnosis and Treatment in Healthcare",
  contributions: [
    "Assisted in data collection and report preparation.",
    "Gained knowledge of research methodology and technical writing.",
    "Collaborated with team members during research work.",
  ],
};

export const education = [
  {
    period: "2023 – 2027",
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    institute: "GD Goenka University",
    place: "Gurugram, Haryana",
    score: "GPA: 8.02",
  },
  {
    period: "2021 – 2022",
    degree: "Class XII",
    specialization: "HBSE Board",
    institute: "Haryana Sr. Sec. School",
    place: "",
    score: "Percentage: 69%",
  },
  {
    period: "2019 - 2020",
    degree: "Secondary School",
    specialization: "HBSE Board",
    institute: "NDM Public Sr. Sec. School",
    place: "",
    score: "Percentage: 85.80%",
  },
];

export const certifications = [
  {
    title: "Full Stack Development Certificate",
    year: "2025",
    description: "Certification covering full stack web development fundamentals and practices.",
    path: "https://drive.google.com/file/d/1uixJ9BCgusNakQCcXSQMomZ5A8KMvCjS/view?usp=sharing",
  },
  {
    title: "International Conference on Novel Materials & Applications",
    year: "2025",
    description: "Participation and contribution — ICNMA 2025.",
    path: "https://drive.google.com/file/d/1zJB1MTS8JSTID7_5pko4K7FO5Q-wZlFw/view?usp=sharing",
  },
  {
    title: "Amazon Virtual Workshop",
    year: "2024",
    description: "Completed a virtual workshop on e-commerce operations and customer service.",
    path: "https://drive.google.com/file/d/1_n6fwwDZAJ7Sh0OYZw6Dj-0eUyomhozV/view?usp=sharing",
  },
];

export const achievements = [
  "Qualified HSSC IT Operator Examination (2025)",
  "Contributed to research work at ICNMA 2025",
  "Completed Amazon Virtual Workshop",
];

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

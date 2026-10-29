// Portfolio Configuration & Data for Ayush Solanki
// Edit this file to update projects, skills, social links, and bio information!

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problemSolved: string;
  description: string;
  technologies: string[];
  status: 'Planning' | 'In Progress' | 'Completed';
  category: 'C Programming' | 'Java' | 'Web Development' | 'Database' | 'Systems';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'CS Fundamentals' | 'Tools';
  status: 'Core Foundation' | 'Currently Learning';
  description: string;
  iconName: string;
}

export interface LearningStage {
  id: string;
  title: string;
  description: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  keyTopics: string[];
}

export interface CareerGoal {
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ayush Solanki",
    headline: "Aspiring Software Developer | BCA Student | Programming Enthusiast",
    tagline: "Turning Logic Into Code, Ideas Into Reality.",
    institution: "Swami Rama Himalayan University (SRHU)",
    degree: "Bachelor of Computer Applications (BCA)",
    academicYear: "Second Year",
    expectedGraduation: "2027",
    primaryInterests: "Programming and Software Development",
    currentFocus: "Coding fundamentals, problem-solving, and practical projects",
    careerGoal: "Software Development",
    bioIntro: "Hey, I'm Ayush, a second-year BCA student passionate about programming and software development. I enjoy learning how software works, solving problems through code, and exploring technologies that help turn ideas into practical applications. I'm continuously improving my programming skills and building my foundation for a career in technology.",
    aboutText: [
      "I'm Ayush Solanki, currently pursuing my Bachelor of Computer Applications (BCA) at SRHU. I'm interested in programming, logical thinking, and understanding how applications are designed and developed.",
      "I have experience with C programming and Java, along with foundational knowledge of Data Structures and Algorithms. I'm working toward strengthening my coding fundamentals, learning modern development tools, and gaining practical experience through projects.",
      "My goal is to become a skilled software developer who can solve real-world problems and build reliable, useful applications."
    ],
    careerOverview: "I'm building a strong foundation in computer science and programming with the long-term goal of working in software development. I want to gain practical experience, contribute to meaningful projects, participate in hackathons, and continue learning from real-world engineering challenges.",
    contactInvitation: "I'm always interested in connecting with people who enjoy programming, technology, and building useful things. Feel free to reach out for collaboration, project discussions, or internship opportunities.",
    email: "ayushsolanki.dev@gmail.com", // User can replace with exact email
    github: "https://github.com/ayushsolanki", // User can replace with exact profile
    linkedin: "https://linkedin.com/in/ayush-solanki", // User can replace with exact profile
    resumeFileName: "Ayush_Solanki_Resume.pdf",
    location: "Dehradun, Uttarakhand, India",
  },

  // Terminal metadata representation
  terminalMeta: {
    developer: "Ayush Solanki",
    education: "BCA @ SRHU",
    interests: ["Programming", "Software Development"],
    status: "Always Learning",
    currentLanguages: ["C", "Java"],
    exploring: ["Python", "Modern Web Tech", "Advanced DSA"],
    targetRole: "Software Engineer",
  },

  // Skills accurately organized without fake percentages
  skills: [
    // Programming Languages
    {
      name: "C Programming",
      category: "Languages",
      status: "Core Foundation",
      description: "Low-level memory management, pointers, structures, file handling, and foundational algorithmic thinking.",
      iconName: "Binary"
    },
    {
      name: "Java",
      category: "Languages",
      status: "Core Foundation",
      description: "Object-oriented programming, class design, inheritance, polymorphism, and Java Collections fundamentals.",
      iconName: "Coffee"
    },
    {
      name: "Python",
      category: "Languages",
      status: "Currently Learning",
      description: "Exploring scripting, clean syntax, data manipulation, and introductory algorithm implementation.",
      iconName: "Code2"
    },

    // Computer Science Fundamentals
    {
      name: "Object-Oriented Programming (OOP)",
      category: "CS Fundamentals",
      status: "Core Foundation",
      description: "Encapsulation, abstraction, modular architecture, and code reusability concepts applied in Java and C++.",
      iconName: "Boxes"
    },
    {
      name: "Data Structures & Algorithms",
      category: "CS Fundamentals",
      status: "Core Foundation",
      description: "Arrays, linked lists, stacks, queues, searching and sorting techniques, time & space complexity analysis.",
      iconName: "Workflow"
    },
    {
      name: "Database Management Systems (DBMS)",
      category: "CS Fundamentals",
      status: "Core Foundation",
      description: "Relational database concepts, normalization, schema design, and entity-relationship modeling.",
      iconName: "Database"
    },
    {
      name: "Problem-Solving",
      category: "CS Fundamentals",
      status: "Core Foundation",
      description: "Breaking complex problem statements into logical pseudocode and robust algorithmic solutions.",
      iconName: "Lightbulb"
    },

    // Development Tools
    {
      name: "Visual Studio Code",
      category: "Tools",
      status: "Core Foundation",
      description: "Primary IDE for editing code, extensions, debugging C and Java programs, and terminal integration.",
      iconName: "FileCode"
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      status: "Core Foundation",
      description: "Version control workflows, commit management, branching, and maintaining code repositories on GitHub.",
      iconName: "GitBranch"
    },
    {
      name: "MySQL",
      category: "Tools",
      status: "Core Foundation",
      description: "Writing structured SQL queries (DDL, DML), joins, constraints, and data retrieval operations.",
      iconName: "Server"
    }
  ] as SkillItem[],

  // Honest, authentic projects with clear editable placeholders
  projects: [
    {
      id: "personal-portfolio",
      title: "Premium Developer Portfolio",
      tagline: "Modern, responsive portfolio website built with React & Tailwind CSS",
      problemSolved: "Creates a professional online presence to showcase academic milestones, code samples, and projects without template clutter.",
      description: "Engineered a high-performance, dark-themed portfolio featuring interactive C & Java code visualizers, an embedded developer terminal, dynamic project filters, and clean contact workflows.",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
      status: "Completed",
      category: "Web Development",
      githubUrl: "https://github.com/ayushsolanki/developer-portfolio",
      liveUrl: "#",
      featured: true,
      highlights: [
        "Interactive code visualizer running C and Java code",
        "Terminal-style interactive interface with custom commands",
        "100% responsive dark mode with electric blue accents",
        "Type-safe single-source data architecture"
      ]
    },
    {
      id: "student-record-system",
      title: "Student Record Management System",
      tagline: "Console-based CRUD application built with C and file I/O",
      problemSolved: "Simplifies student enrollment and grade tracking via structured binary and text file persistence in C.",
      description: "An academic project implementing structured data handling in C. Features record addition, search by roll number, record update, GPA calculation, and sorting using linked structures.",
      technologies: ["C", "Data Structures", "File Handling", "Pointers"],
      status: "In Progress",
      category: "C Programming",
      githubUrl: "https://github.com/ayushsolanki/student-record-system",
      featured: true,
      highlights: [
        "Binary file persistence for persistent data storage",
        "Dynamic memory allocation using malloc and free",
        "Menu-driven CLI interface with input sanitization",
        "Demonstrates algorithmic sorting on student records"
      ]
    },
    {
      id: "dsa-lab-toolkit",
      title: "DSA Visualizer & Problem Lab",
      tagline: "Java implementation of fundamental algorithms and data structures",
      problemSolved: "Bridges the gap between theoretical algorithm study and practical step-by-step code execution.",
      description: "A structured repository of Java implementations for core data structures (Stacks, Queues, Linked Lists, Binary Trees) along with algorithm benchmarking and time complexity comparisons.",
      technologies: ["Java", "OOP", "Algorithms", "Collections"],
      status: "In Progress",
      category: "Java",
      githubUrl: "https://github.com/ayushsolanki/java-dsa-lab",
      featured: true,
      highlights: [
        "Modular class hierarchy for Linear and Non-Linear Data Structures",
        "Comparative execution benchmarks between Bubble, Selection, and Merge Sort",
        "Clean unit tests verifying edge cases and boundary conditions"
      ]
    },
    {
      id: "hospital-dbms-portal",
      title: "University / Clinic DBMS Architecture",
      tagline: "Relational database schema and management system with MySQL",
      problemSolved: "Structures relational records for appointments, patient histories, and department staff with ACID compliance.",
      description: "Database design project created as part of the BCA curriculum at SRHU. Includes Normalized schemas (3NF), complex SQL queries with multi-table joins, and trigger constraints.",
      technologies: ["MySQL", "Relational Algebra", "Database Design"],
      status: "Planning",
      category: "Database",
      githubUrl: "https://github.com/ayushsolanki/university-dbms-project",
      featured: false,
      highlights: [
        "Entity-Relationship diagrams mapped to 3NF tables",
        "Stored procedures and views for reporting",
        "Integrity constraints and foreign key cascading"
      ]
    },
    {
      id: "upcoming-fullstack-app",
      title: "Student Collab Hub (Future Project)",
      tagline: "Full-stack project sharing and study group platform for BCA peers",
      problemSolved: "Provides a centralized space for university students to share code snippets, organize study groups, and track assignments.",
      description: "Currently in architectural planning phase. Planned to combine modern frontend practices with Java Spring or Node backend services and relational data storage.",
      technologies: ["Java / Node", "SQL", "REST API", "React"],
      status: "Planning",
      category: "Web Development",
      featured: false,
      highlights: [
        "Authentication and user role management",
        "Peer-to-peer code snippet repository",
        "Assignment deadline reminders"
      ]
    }
  ] as Project[],

  // Education Timeline
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Swami Rama Himalayan University (SRHU)",
    location: "Dehradun, Uttarakhand",
    status: "Second Year (Pursuing)",
    expectedYear: "2024 – 2027",
    department: "Himalayan School of Science and Technology (HSST)",
    description: "Rigorous undergraduate curriculum focusing on core computing principles, programming methodologies, software engineering paradigms, and practical lab assignments.",
    curriculumHighlights: [
      "Programming in C (Syntax, Pointers, Memory Management, File Handling)",
      "Object-Oriented Programming with Java (Classes, Inheritance, Exception Handling)",
      "Data Structures and Algorithms fundamentals (Searching, Sorting, Linear Lists)",
      "Database Management Systems & Structured Query Language (SQL)",
      "Computer Organization, Architecture & Operating System Principles",
      "Discrete Mathematics & Logical Reasoning for Computing"
    ],
    achievements: [
      "Consistent academic performance in core programming and lab coursework",
      "Active participant in technical workshops, coding practice, and departmental initiatives",
      "Selected as student lead for programming peer-study discussions"
    ]
  },

  // Learning Roadmap
  learningJourney: [
    {
      id: "stage-1",
      title: "Core Programming Fundamentals",
      description: "Mastered fundamental procedural programming, memory handling, and control flows in C.",
      status: "Completed",
      keyTopics: ["C Syntax & Standard Library", "Pointers & Memory Allocation", "File I/O in C", "Algorithm Dry Runs"]
    },
    {
      id: "stage-2",
      title: "Object-Oriented Programming with Java",
      description: "Strengthening modular architecture, encapsulation, polymorphism, and Java fundamentals.",
      status: "Ongoing",
      keyTopics: ["Java Classes & Interfaces", "Exception Handling", "Inheritance & Polymorphism", "Java Collections Basics"]
    },
    {
      id: "stage-3",
      title: "Data Structures & Algorithmic Thinking",
      description: "Deepening practical implementation of linear and non-linear structures for problem-solving.",
      status: "Ongoing",
      keyTopics: ["Stacks & Queues", "Linked Lists Operations", "Binary Search & Sorting", "Time/Space Complexity (Big-O)"]
    },
    {
      id: "stage-4",
      title: "Clean Code & Software Engineering Workflows",
      description: "Learning industry practices: Git version control, meaningful naming, modular decomposition, and debugging.",
      status: "Ongoing",
      keyTopics: ["Git Branching & PRs", "VS Code Debugger Tools", "Code Readability Standards", "Documentation"]
    },
    {
      id: "stage-5",
      title: "Database Engineering & SQL Proficiency",
      description: "Designing robust normalized database models and writing performant relational queries.",
      status: "Ongoing",
      keyTopics: ["Relational Schema Design", "Complex SQL Joins", "Normalization (1NF-3NF)", "Index Basics"]
    },
    {
      id: "stage-6",
      title: "Full-Stack Development & Real-World Systems",
      description: "Connecting backend logic with modern responsive user interfaces and RESTful web services.",
      status: "Upcoming",
      keyTopics: ["Modern JavaScript/TypeScript", "REST API Architecture", "Backend Services in Java", "Deployment & CI/CD"]
    }
  ] as LearningStage[],

  // Career Goals
  careerGoals: [
    {
      title: "Software Development",
      tagline: "Engineering Robust, Maintainable Software",
      description: "Developing clean, efficient, and reliable applications that solve real-world problems with well-architected software patterns.",
      icon: "Code"
    },
    {
      title: "Problem-Solving",
      tagline: "Mastering Core Computational Logic",
      description: "Approaching challenges systematically through algorithms, logical decomposition, and thoughtful optimization.",
      icon: "Cpu"
    },
    {
      title: "Real-World Projects",
      tagline: "Beyond Textbook Exercises",
      description: "Transforming classroom theory into practical, deployed utilities, developer tools, and community applications.",
      icon: "Rocket"
    },
    {
      title: "Internship Opportunities",
      tagline: "Industry Immersion & Mentorship",
      description: "Eager to contribute to engineering teams, absorb industry best practices, and learn from experienced senior developers.",
      icon: "Briefcase"
    },
    {
      title: "Continuous Learning",
      tagline: "Constant Improvement Mindset",
      description: "Embracing software evolution, exploring emerging frameworks, and reading engineering blogs and documentation daily.",
      icon: "Compass"
    }
  ] as CareerGoal[]
};


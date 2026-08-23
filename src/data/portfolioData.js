import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import {
  FaFacebook,
  FaFigma,
  FaGithub,
  FaJava,
  FaMapMarkerAlt,
  FaReact,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline, IoLogoJavascript } from "react-icons/io5";
import {
  SiAndroidstudio,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiPython,
  SiSqlite,
} from "react-icons/si";

export const navLinks = [
  { name: "About Me", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Education", section: "education" },
  { name: "Experience", section: "experience" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

export const heroStats = [
  { value: "10+", label: "Projects" },
  { value: "2025", label: "building since" },
  { value: "CSE", label: "student" },
];

export const heroHighlights = ["Flutter Apps", "Firebase Ready", "Clean Architecture"];

export const sectionHeaders = {
  skills: {
    eyebrow: "Toolkit",
    title: "Skills",
    description:
      "I use these technologies with a focus on clean code, reusable structure, and interfaces that stay smooth on real devices.",
  },
  education: {
    eyebrow: "Education",
    title: "Academic Path",
    description:
      "Computer science foundation, practical mobile development, and a habit of learning by building.",
  },
  experience: {
    eyebrow: "Experience",
    title: "Practice Through Projects",
    description:
      "I am growing through focused app builds, university work, and production-style habits: planning, clean components, and testing on real devices.",
  },
  projects: {
    eyebrow: "Selected Work",
    title: "Projects",
    description:
      "Production-style mobile apps built with Flutter, REST APIs, authentication, booking flows, Firebase, and real-world product logic.",
  },
};

export const skills = [
  { skill: "Dart", Icon: SiDart },
  { skill: "Flutter", Icon: SiFlutter },
  { skill: "Firebase", Icon: SiFirebase },
  { skill: "REST API", Icon: FaServer },
  { skill: "Auth", Icon: FaShieldAlt },
  { skill: "Figma", Icon: FaFigma },
  { skill: "SQLite", Icon: SiSqlite },
  { skill: "Android Studio", Icon: SiAndroidstudio },
  { skill: "Java", Icon: FaJava },
  { skill: "Python", Icon: SiPython },
  { skill: "GitHub", Icon: FaGithub },
  { skill: "JavaScript", Icon: IoLogoJavascript },
  { skill: "React", Icon: FaReact },
];

export const educationData = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institute: "Bangladesh University of Business and Technology (BUBT)",
    year: "2022 - Present",
    location: "Mirpur, Dhaka, Bangladesh",
  },
  {
    degree: "HSC (Science)",
    institute: "Netrakona Govt. College",
    year: "2018 - 2020",
    gpa: "GPA: 4.83 / 5.00",
    location: "Netrakona, Bangladesh",
  },
  {
    degree: "SSC (Science)",
    institute: "Dutt High School",
    year: "2016 - 2018",
    gpa: "GPA: 4.78 / 5.00",
    location: "Netrakona, Bangladesh",
  },
];

export const experiences = [
  {
    job: "Flutter App Developer",
    company: "SparkTech Agency",
    date: "2025 - ",
    responsibilities: [
      "Built Flutter apps with Firebase, SQLite, API integration, and responsive UI.",
      "Practiced clean folder structure, reusable widgets, and state-aware screens.",
      "Prepared portfolio-ready case studies with GitHub repositories.",
    ],
  },
  {
    job: "CSE Student",
    company: "BUBT",
    date: "2022 - May,2026",
    responsibilities: [
      "Studying software engineering fundamentals, data structures, and databases.",
      "Applying academic concepts through mobile apps and problem-solving work.",
      "Collaborating with peers on learning projects and technical exploration.",
    ],
  },
  {
    job: "Frontend Learner",
    company: "React, JavaScript, UI Systems",
    date: "Ongoing",
    responsibilities: [
      "Building better UI judgment across layout, accessibility, and component design.",
      "Using JavaScript and React knowledge to understand modern product interfaces.",
      "Connecting mobile thinking with web-friendly presentation and portfolios.",
    ],
  },
];

export const projects = [
  {
    name: "FamilyApp - Family Management System",
    year: "2025",
    align: "right",
    apkLink: "https://play.google.com/store/apps/details?id=com.momapp.family",
    githubLink: "https://github.com/sparktechagency/familyapp",
    type: "REST API, JWT, Role-Based Auth, Local Storage",
    accent: "cyan",
    visualLabel: "Family Hub",
    gallery: [
      "/images/family1.jpeg",
      "/images/family2.jpeg",
      "/images/family3.jpeg",
      "/images/family4.jpeg",
    ],
    description: [
      "Built a mobile application to centralize household planning and family organization.",
      "Implemented shared calendar for event tracking and advanced task management for chores.",
      "Developed meal planning features with automated grocery list generation.",
    ],
  },
  {
    name: "Wuffoos - Pet Care & Sitter",
    year: "2026",
    align: "left",
    apkLink: "https://play.google.com/store/apps/details?id=com.wuffoos.app",
    githubLink: "https://github.com/mursalin49/petcare",
    type: "Flutter, Dart, Role-Based Auth, REST API, GetX",
    accent: "orange",
    visualLabel: "Pet Care",
    gallery: [
      "/images/Wuffoos1.jpeg",
      "/images/Wuffoos2.jpeg",
      "/images/Wuffoos3.jpeg",
      "/images/Wuffoos4.jpeg",
    ],
    description: [
      "Developed a dual-interface app with profile switching for Pet Owners and Pet Sitters.",
      "Built an earnings dashboard for sitters to track income, monthly revenue, and pending payments.",
      "Integrated calendar-based booking for dog walking, boarding, and day care services.",
      "Implemented multi-language support and secure social authentication.",
    ],
  },
  {
    name: "Ayudame - Multi-Service Platform",
    year: "2026",
    align: "right",
    image: "/images/social.jpg",
    apkLink:
      "https://play.google.com/store/apps/details?id=com.lavell.ayudame",
    githubLink: "https://github.com/sparktechagency/lavellh",
    type: "Flutter, Dart, REST API, Firebase, Provider",
    accent: "cyan",
    visualLabel: "Services",
    gallery: [
      "/images/Ayudame1.jpeg",
      "/images/Ayudame2.jpeg",
      "/images/Ayudame3.jpeg",
      "/images/Ayudame4.jpeg",
    ],
    description: [
      "Developed a multi-service platform connecting users with service providers, business owners, and event managers.",
      "Built real-time service booking and management features with seamless API integration.",
      "Enhanced UX with responsive UI, secure authentication, and streamlined category navigation.",
    ],
  },
  {
    name: "Plant Monitoring System (IoT)",
    year: "2025",
    align: "left",
    image: "/images/plant.png",
    apkLink:
      "https://drive.google.com/file/d/12qw1TLdp6VyiyCntn9Gl5d7lgQeAeaqI/view?usp=sharing",
    githubLink: "https://github.com/mursalin49/Plant-Monitoring-App",
    type: "Flutter, Dart, Firebase Realtime DB, NodeMCU, IoT",
    accent: "orange",
    visualLabel: "IoT Live",
    description: [
      "Developed a real-time plant monitoring system using IoT and mobile app integration.",
      "Integrated soil moisture sensors to monitor plant health accurately.",
      "Implemented manual and automatic motor control through the mobile app.",
      "Used Firebase Realtime Database for live data updates and device communication.",
    ],
  },
];

export const contactInfo = [
  { text: "mursalinnirob@gmail.com", Icon: BsEnvelope },
  { text: "+88 01752331906", Icon: FiPhone },
  { text: "Dhaka, Bangladesh", Icon: IoLocationOutline },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/mursalin-nirob-388942390/",
    Icon: BsLinkedin,
  },
  { label: "GitHub", link: "https://github.com/mursalin49", Icon: BsGithub },
  {
    label: "Facebook",
    link: "https://facebook.com/md.mursalin.hasan.nirob2",
    Icon: FaFacebook,
  },
];

export const LocationIcon = FaMapMarkerAlt;

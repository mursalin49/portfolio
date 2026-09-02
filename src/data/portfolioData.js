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
  { value: "12+", label: "Projects" },
  { value: "1+", label: "Years experience" },
  { value: "CSE", label: "Student" },
];

export const heroHighlights = ["Flutter Apps", "Firebase Ready", "Clean Architecture"];

export const sectionHeaders = {
  skills: {
    eyebrow: "Toolkit",
    title: "Skills",
    description:
      "Tools I use for mobile development, backend integration, and production deployments.",
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

export const skillsCategories = [
  {
    category: "Mobile Development",
    skills: ["Flutter", "Dart", "GetX", "BLoC", "Responsive UI", "Android", "iOS"],
  },
  {
    category: "Backend & APIs",
    skills: ["REST APIs", "Firebase", "Firestore", "Authentication", "Real-time DB", "Node.js", "Python"],
  },
  {
    category: "State Management",
    skills: ["GetX", "Provider", "BLoC", "Clean Architecture", "MVVM"],
  },
  {
    category: "Databases & Storage",
    skills: ["Firebase", "SQLite", "Hive", "SharedPreferences", "GetStorage", "Firestore"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "GitHub", "Android Studio", "VS Code", "Figma", "Postman", "CI/CD", "Agile"],
  },
  {
    category: "Other Technologies",
    skills: ["Java", "Python", "JavaScript", "React", "IoT", "Google Maps API", "WebRTC"],
  },
];

export const educationData = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institute: "Bangladesh University of Business and Technology (BUBT)",
    year: "2022 - Present",
    location: "Mirpur, Dhaka, Bangladesh",
    logo: "/images/bubt.webp",
  },
  {
    degree: "HSC (Science)",
    institute: "Netrakona Govt. College",
    year: "2018 - 2020",
    gpa: "GPA: 4.83 / 5.00",
    location: "Netrakona, Bangladesh",
    logo: "/images/netrakona%20govt.png",
  },
  {
    degree: "SSC (Science)",
    institute: "Dutt High School",
    year: "2016 - 2018",
    gpa: "GPA: 4.78 / 5.00",
    location: "Netrakona, Bangladesh",
    logo: "/images/dutt%20high.jpg",
  },
];

export const experiences = [
  {
    job: "Flutter App Developer",
    company: "SparkTech Agency",
    date: "Oct 2025 - May 2026",
    logo: "/images/Sparktech%20Agency.jpeg",
    responsibilities: [
      "Developed and maintained production-level cross-platform mobile applications for Android and iOS using Flutter and Dart.",
      "Integrated RESTful APIs and third-party services, worked with Firebase (Authentication, Firestore, FCM) for seamless real-time functionality.",
      "Architected scalable, maintainable codebases using GetX and BLoC state management while following Clean Architecture principles.",
      "Collaborated with UI/UX designers and backend engineers in an Agile, cross-functional environment.",
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
    name: "Umrah & Hajj Pilot - GPS Tracking App",
    year: "2025",
    align: "right",
    apkLink: "https://github.com/mursalin49/umra-and-hajj-pilot/releases/tag/v1.0.0",
    githubLink: "https://github.com/mursalin49/umra-and-hajj-pilot",
    type: "Flutter, Kotlin, Google Maps SDK, Activity Recognition API",
    accent: "cyan",
    visualLabel: "GPS Track",
    gallery: [
      "/images/Umrah1.png",
      "/images/Umrah2.png",
      "/images/Umrah3.png",
      "/images/Umrah4.png",
    ],
    description: [
      "Built a real-time GPS tracking app with background location logging and Google Maps route visualization.",
      "Implemented activity detection (walking, running, driving) using Android's Activity Recognition API.",
      "Optimized battery usage with configurable location update intervals and smart connectivity handling.",
    ],
  },
  {
    name: "HerFitness - Fitness & Trainer Booking App",
    year: "2025",
    align: "left",
    apkLink: "https://github.com/mursalin49/HerFitness/releases/tag/v1.0.1",
    githubLink: "https://github.com/mursalin49/HerFitness",
    type: "Flutter, Dart, REST API, In-App Wallet",
    accent: "orange",
    visualLabel: "Fitness Hub",
    gallery: [
      "/images/HerFitness1.png",
      "/images/HerFitness2.png",
      "/images/HerFitness3.png",
      "/images/HerFitness4.png",
    ],
    description: [
      "Designed dual-role (Member/Trainer) onboarding with identity verification and custom profile setup.",
      "Built trainer discovery and booking screens supporting both online and in-person sessions.",
      "Developed an in-app wallet and payment dashboard with transaction history and health assessment modules.",
    ],
  },
  {
    name: "Jonssony - EMDR Psychology App",
    year: "2025",
    align: "right",
    apkLink: "https://github.com/mursalin49/PsychologyApp/releases/tag/v1.0.0",
    githubLink: "https://github.com/mursalin49/PsychologyApp",
    type: "Flutter, Dart, In-App Subscription, Audio/Haptics",
    accent: "cyan",
    visualLabel: "Therapy App",
    gallery: [
      "/images/emdr1.jpeg",
      "/images/emdr2.jpeg",
      "/images/emdr3.jpeg",
      "/images/emdr4.jpeg",
    ],
    description: [
      "Developed an EMDR (Eye Movement Desensitization & Reprocessing) therapy app with guided bilateral stimulation for trauma and anxiety management.",
      "Built a freemium model with free tier (guided EMDR sessions, breathing exercises, grounding practices) and premium subscription unlocking advanced tools.",
      "Implemented full multi-sensory bilateral stimulation in premium with advanced visual light-bar patterns, 3D spatial bilateral audio, and haptic feedback.",
      "Integrated AI-driven mood insights to track users' emotional journey over time.",
    ],
  },
  {
    name: "Naibirly - Service Marketplace Platform",
    year: "2025",
    align: "left",
    apkLink: "https://github.com/mursalin49/service-marketplace-platform/releases/tag/v1.0.1",
    githubLink: "https://github.com/mursalin49/service-marketplace-platform",
    type: "Flutter, GetX (MVVM), REST API, OTP Auth, GetStorage",
    accent: "orange",
    visualLabel: "Marketplace",
    gallery: [
      "/images/naibrily1.jpeg",
      "/images/naibrily2.jpeg",
      "/images/naibrily3.jpeg",
      "/images/naibrily4jpeg.jpeg",
    ],
    description: [
      "Built a dual-user marketplace with distinct Customer (discovery, booking, notifications) and Provider (gig setup, rate config, team/employee management) workflows.",
      "Implemented reactive MVVM architecture with GetX for real-time order status, notifications, and clean dependency injection.",
      "Developed category-based service search/filtering with CachedNetworkImage-optimized provider portfolios.",
    ],
  },
  {
    name: "Avishal - Aircraft Audit System",
    year: "2024",
    align: "right",
    apkLink: "https://github.com/mursalin49/aircraft_audit_system/releases/tag/v1.0.0",
    githubLink: "https://github.com/mursalin49/aircraft_audit_system",
    type: "Flutter, Dart, Role-Based Access Control, PDF Reporting",
    accent: "cyan",
    visualLabel: "Audit System",
    gallery: [
      "/images/avishal1.png",
      "/images/avishal2.png",
      "/images/avishal3.png",
      "/images/avishal4.png",
    ],
    description: [
      "Implemented role-based permission management with off-canvas forms for granular, checkbox-driven feature access control.",
      "Built role-filtered dashboards and tab views (Home, Audit, Report) shown per user permission (Inspector, Auditor, Admin).",
      "Developed flight schedule audit forms with departure/arrival time tracking and manual field inputs.",
      "Built submission history search and filtering by departure or flight number for historical audit lookup.",
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

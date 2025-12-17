import React from "react";
import profilImg from "../assets/profile.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const assets = {
  profilImg,
};

export const navMenu = [
  "Home",
  "Skills",
  "Projects",
  "Contact",
  "About",
  "Experience",
  "Education",
  "Certifications",
];

export const skillsData = [
  { icon: "/img/react.jpg", title: "React.js" },
  { icon: "/img/css.jpg", title: "CSS" },
  { icon: "/img/docker.jpg", title: "Docker" },
  { icon: "/img/html.jpg", title: "HTML" },
  { icon: "/img/java.jpg", title: "Java" },
  { icon: "/img/javascript.jpg", title: "JavaScript" },
  { icon: "/img/mySql.jpg", title: "MySQL" },
  { icon: "/img/postgresql.jpg", title: "PostgreSQL" },
  { icon: "/img/python.jpg", title: "Python" },
  { icon: "/img/c.jpg", title: "C" },
  { icon: "/img/git.jpg", title: "Git" },
  { icon: "/img/gitHub.jpg", title: "GitHub" },
  { icon: "/img/node.jpg", title: "Node js" },
  { icon: "/img/springBoot.jpg", title: "Spring Boot" },
  { icon: "/img/springSec.jpg", title: "Spring security " },
  { icon: "/img/jwt.png", title: "JWT" },
];
export const projectsData = [
  {
    title: "Web Application Design and Development - OCP El Jadida",
    description:
      "A full-stack solution developed with Spring Boot and React.js to digitize and optimize the management of technical interventions. The application centralizes the planning, real-time monitoring, and traceability of interventions, significantly improving operational efficiency and the coordination of technical teams.",
    imageUrl: "/img/ocp.png",
    technologies: [
      "React.js",
      "Java",
      "Spring Security",
      "JWT",
      "PostgesSql",
      "Tailwind CSS",
      "Html",
    ],
    gitHubLink: "https://github.com/khalilbaidouri/Gestion-des-Intervention",
    post: "fullstack developer",
    linkDeploy: "https://taskflow-black.vercel.app/#/login",
  },
  {
    title: "BAC Club - Biologists In Action Club",
    description:
      "Plateforme digitale moderne présentant les activités et valeurs du Biologists In Action Club. Interface intuitive permettant de découvrir les événements, projets humanitaires et opportunités d'engagement du club étudiant.",
    imageUrl: "/img/bac.png",
    technologies: ["Node.js", "Tailwind CSS", "React.js", "MongoDB", "Next.js"],
    gitHubLink: "https://github.com/khalilbaidouri/Gestion-des-Intervention",
    post: "backend developer",
    linkDeploy: "https://club-bac.vercel.app/",
  },
  {
    title: "Collaborative Project Management Application",
    description:
      "An innovative application developed within an academic framework at the Faculty of Sciences and Techniques of Settat, offering a centralized solution for team collaboration.",
    imageUrl: "/img/projet.png",
    technologies: ["Java", "JavaFX", "Spring Security", "MySql", "JWT"],
    gitHubLink: "https://github.com/khalilbaidouri/projet-java",
    post: "backend developer",
    linkDeploy: "#",
  },
  {
    title: "Social Media Platform",
    description:
      "A social networking application developed in collaboration with my colleague Mouad Sadik, allowing users to create and manage their profile, publish content, interact with other members and exchange messages, with secure access and role management.",
    imageUrl: "/img/minista.png",
    technologies: [
      "Next.js",
      "Java",
      "Spring Security",
      "JWT",
      "MySqL",
      "Tailwind CSS",
      "Html",
      "TypeScript",
    ],
    gitHubLink: "https://github.com/khalilbaidouri/social-media-backend",
    post: "fullstack developer",
    linkDeploy: "https://minista-chat.vercel.app/",
  },
];
export const reseauData = [
  {
    icon: FaGithub,
    link: "https://github.com/khalilbaidouri",
    title: "GitHub",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/baidouri-khalil-874034330/",
    title: "LinkedIn",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/khalilbaidouri/",
    title: "Instagram",
  },
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100091862744544",
    title: "Facebook",
  },
];

export const formationData = [
  {
    diploma: "Engineering Cycle in Computer Science",
    institution: "Faculty of Sciences and Techniques, Settat",
    period: "2024 - 2027",
    last: true,
  },
  {
    diploma: "DEUST",
    institution: "Faculty of Sciences and Techniques, Settat",
    period: "2022 - 2024",
    last: false,
  },
  {
    diploma: "Baccalaureate",
    institution: "Mohammed IV High School, Casablanca",
    period: "2021 - 2022",
    last: false,
  },
];

export const certificationsData = [
  {
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    date: "2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2802A778893CA58FC35DA8E8B4E3B351121B98851A70C99D81AB491216F0BB39",
    imge: "/img/oracle.png",
  },
  {
    title: "HackerRank Java (Basic) Certification",
    issuer: "HackerRank",
    date: "2025",
    link: "https://www.hackerrank.com/certificates/iframe/a0f322ce6f9b",
    imge: "/img/hackerRank.png",
  },
];

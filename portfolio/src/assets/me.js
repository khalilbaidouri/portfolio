import React from "react";
import profilImg from "../assets/profile.jpg";

export const assets = {
  profilImg,
};

export const navMenu = ["Home", "Skills", "Projects", "Contact", "About","experience"];

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
    technologies: ["React.js", "Java", "Spring Security", "JWT", "PostgesSql"],
    gitHubLink: "https://github.com/khalilbaidouri/Gestion-des-Intervention",
    post: "fullstack developer",
    linkDeploy: "https://taskflow-black.vercel.app/#/login",
  },
  {
    title: "BAC Club - Biologists In Action Club",
    description:
      "Plateforme digitale moderne présentant les activités et valeurs du Biologists In Action Club. Interface intuitive permettant de découvrir les événements, projets humanitaires et opportunités d'engagement du club étudiant.",
    imageUrl: "/img/bac.png",
    technologies: ["Express.js", "MongoDB", "JavaScript"],
    gitHubLink: "https://github.com/khalilbaidouri/Gestion-des-Intervention",
    post: "backend developer",
    linkDeploy: "https://club-bac.vercel.app/",
  },
  {
    title: "Collaborative Project Management Application",
    description:
      "An innovative application developed within an academic framework at the Faculty of Sciences and Techniques of Settat, offering a centralized solution for team collaboration.",
    imageUrl: "/img/projet.png",
    technologies: ["Java", "JavaFX", "MySql"],
    gitHubLink: "https://github.com/khalilbaidouri/projet-java",
    post: "backend developer",
    linkDeploy: "#",
  },
];

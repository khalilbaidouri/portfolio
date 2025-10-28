import React from "react";
import profilImg from "../assets/profile.jpg";

export const assets = {
  profilImg,
};

export const navMenu = ["Home", "Skills", "Projects", "Contact", "About"];

export const skillsData = [
  { icon: '/img/react.jpg', title: 'React.js' },
  { icon: '/img/css.jpg', title: 'CSS' },
  { icon: '/img/docker.jpg', title: 'Docker' },
  { icon: '/img/html.jpg', title: 'HTML' },
  { icon: '/img/java.jpg', title: 'Java' },
  { icon: '/img/javascript.jpg', title: 'JavaScript' },
  { icon: '/img/mySql.jpg', title: 'MySQL' },
  { icon: '/img/postgresql.jpg', title: 'PostgreSQL' },
  { icon: '/img/python.jpg', title: 'Python' },
  { icon: '/img/c.jpg', title: 'C' },
  { icon: '/img/git.jpg', title: 'Git' },
  { icon: '/img/gitHub.jpg', title: 'GitHub' },
  { icon: '/img/node.jpg', title: 'Node js' },
  { icon: '/img/springBoot.jpg', title: 'Spring Boot' },
  { icon: '/img/springSec.jpg', title: 'Spring security ' },
  { icon: '/img/jwt.png', title: 'JWT' },
]
export const projectsData = [
  {
    title: "Project One",
    description:
      "This is a brief description of Project One. It showcases my skills in frontend development using React.js and backend integration with Node.js.",
    imageUrl: "https://via.placeholder.com/300x200",
    technologies: ["React.js", "Node.js", "Express.js"],
  },
  {
    title: "Project Two",
    description:
      "This is a brief description of Project Two. It focuses on building scalable APIs and managing data efficiently using Express.js and MongoDB.",
    imageUrl: "https://via.placeholder.com/300x200",
    technologies: ["Express.js", "MongoDB", "JavaScript"],
  },
  {
    title: "Project Three",
    description:
      "This is a brief description of Project Three. It highlights my expertise in mobile app development using React Native and API integration.",
    imageUrl: "https://via.placeholder.com/300x200",
    technologies: ["React Native", "API Integration", "Expo"],
  },
];

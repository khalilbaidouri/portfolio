import React from 'react'
import { FaCode, FaMicrochip, FaMobile, FaReact, FaRProject } from 'react-icons/fa'
 import profilImg from '../assets/profile.jpg'

export const assets = {
  profilImg,
} 

export const navMenu = ['Home', 'Skills', 'Projects', 'Contact', 'About']

export const skillsData = [
  {
    icon: FaMicrochip,
    title: 'Backend',
    technologies: ['Node.js', 'java.js', 'Django', 'Flask', 'MongoDB', 'SQL', 'Java'],
  },
  {
    icon: FaReact,
    title: 'Frontend',
    technologies: ['React.js', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    icon: FaMobile,
    title: 'Mobile',
    technologies: ['React Native', 'Flutter', 'Ionic', 'Expo'],
  },
]

export const projectsData = [
  {
    title: 'Project One',
    description:
      'This is a brief description of Project One. It showcases my skills in frontend development using React.js and backend integration with Node.js.',
    imageUrl: 'https://via.placeholder.com/300x200',
    technologies: ['React.js', 'Node.js', 'Express.js'],
  },
  {
    title: 'Project Two',
    description:
      'This is a brief description of Project Two. It focuses on building scalable APIs and managing data efficiently using Express.js and MongoDB.',
    imageUrl: 'https://via.placeholder.com/300x200',
    technologies: ['Express.js', 'MongoDB', 'JavaScript'],
  },
  {
    title: 'Project Three',
    description:
      'This is a brief description of Project Three. It highlights my expertise in mobile app development using React Native and API integration.',
    imageUrl: 'https://via.placeholder.com/300x200',
    technologies: ['React Native', 'API Integration', 'Expo'],
  },
]

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { Projects } from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Snowfall from 'react-snowfall';
import { motion } from "framer-motion";
const Home = () => {
  return (
        <>
         <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

<Snowfall
  color="#FF0033"
/*   style={{
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 0,
    pointerEvents: "none",
  }} */
/>
    <div>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
    </div>
    </motion.div>
        </>

  );
};

export default Home;

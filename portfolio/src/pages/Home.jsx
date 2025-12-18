import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { Projects } from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Snowfall from 'react-snowfall';

const Home = () => {
  return (
        <>

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
        </>

  );
};

export default Home;

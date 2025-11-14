import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { Projects } from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
    </div>
  );
};

export default Home;

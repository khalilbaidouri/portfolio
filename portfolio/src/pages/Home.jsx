import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { Projects } from "../components/Projects";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;

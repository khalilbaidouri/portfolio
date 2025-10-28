import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />

    </div>
  );
};

export default Home;

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />

    </div>
  );
};

export default Home;

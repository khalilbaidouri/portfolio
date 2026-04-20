import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { Projects } from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Chatbot from "../components/Chatbot";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Khalil Baidouri — Développeur Full Stack</title>
        <meta name="description" content="Portfolio de Khalil Baidouri, développeur Full Stack passionné. Découvrez mes projets, compétences, formations et certifications." />
        <meta name="keywords" content="Khalil Baidouri, développeur full stack, portfolio, React, Node.js" />
        <meta name="author" content="Khalil Baidouri" />
        <meta property="og:title" content="Khalil Baidouri — Développeur Full Stack" />
        <meta property="og:description" content="Portfolio de Khalil Baidouri, développeur Full Stack." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khalilbaidouri.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khalil Baidouri — Développeur Full Stack" />
        <meta name="twitter:description" content="Portfolio de Khalil Baidouri — projets, compétences et formations." />
        <link rel="canonical" href="https://khalilbaidouri.dev" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Chatbot />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FormQuestion from "./pages/questions";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="scroll-smooth dark:bg-zinc-950 dark:text-zinc-100 min-h-screen transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormQuestion />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;

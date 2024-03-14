import React from "react";
import "./index.css";
import About from "./App Components/Routes/About";
import Home from "./App Components/Routes/Home";
import Projects from "./App Components/Routes/Projects";
import Contact from "./App Components/Routes/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import DataEntry from "./pages/DataEntry";

function App() {
  const [portfolioData, setPortfolioData] = useState({});

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: "1" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<DataEntry setPortfolioData={setPortfolioData} />} />
          <Route path="/home" element={<Home portfolioData={portfolioData} />} />
          <Route path="/about" element={<About portfolioData={portfolioData} />} />
          <Route path="/projects" element={<Projects portfolioData={portfolioData} />} />
          <Route path="/contact" element={<Contact portfolioData={portfolioData} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

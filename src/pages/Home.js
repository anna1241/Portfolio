import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";

const Home = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("portfolioData"));
    if (storedData) setPortfolioData(storedData);
  }, []);

  return (
    <div>
      {portfolioData ? (
        <>
          <Hero name={portfolioData.name} bio={portfolioData.bio} />
          <About profilePic={portfolioData.profilePic} skills={portfolioData.skills} bio={portfolioData.bio} />
          <Projects />
        </>
      ) : (
        <p>No data available. Please fill the form.</p>
      )}
    </div>
  );
};

export default Home;

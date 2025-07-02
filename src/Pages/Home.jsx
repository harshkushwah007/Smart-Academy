import React from "react";
import Hero from "../Component/Home/Hero";
import About from "./About";
import Course from "./Course";

const Home = () => {
  return (
    <>
      <div className="bg-amber-50">
        <Hero />
        <About />
        <Course />
      </div>
    </>
  );
};

export default Home;

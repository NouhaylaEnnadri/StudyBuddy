import React from "react";
import { Categories, Course, Hero, Navbar } from "../components";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-base-100 via-base-200 to-base-300 ">
      <Navbar />
      <Hero />
      <Categories />
      <Course />
    </div>
  );
};

export default Home;

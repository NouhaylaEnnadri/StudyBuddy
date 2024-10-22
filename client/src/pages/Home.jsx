import React, { useState } from "react";
import { Categories, Course, Hero, Navbar } from "../components";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Navbar />
      <Hero />
      <Categories onSelectCategory={setSelectedCategory} />
      <Course selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;

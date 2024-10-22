import React, { useEffect, useState } from "react";
import posts from "../data/courses.json"; // Adjust the path as necessary

const Categories = ({ selectedCategory, onSelectCategory }) => {
  const [uniqueTags, setUniqueTags] = useState([]);

  // Function to get unique tags from posts
  useEffect(() => {
    const tags = new Set(); // using a Set to ensure uniqueness
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tags.add(tag); // Add each tag to the Set
      });
    });
    setUniqueTags([...tags]); // Convert the Set to an array and set it in the state
  }, []);

  const handleCategoryClick = (tag) => {
    onSelectCategory(tag);
  };

  return (
    <div className="flex flex-col items-center pt-6 px-12">
      <div className="flex flex-wrap gap-2 justify-center mx-6">
        {/* All category button */}
        <button
          className={`px-4 py-2 text-center rounded-lg transition-colors duration-300 border ${
            selectedCategory === null
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-blue-600 hover:text-white`}
          onClick={() => handleCategoryClick(null)} // Show all courses
        >
          All
        </button>
        {/* Unique category buttons */}
        {uniqueTags.map((tag, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-center rounded-lg transition-colors duration-300 border ${
              selectedCategory === tag
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border-gray-300"
            } hover:bg-blue-600 hover:text-white`}
            onClick={() => handleCategoryClick(tag)} // Set selected category
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;

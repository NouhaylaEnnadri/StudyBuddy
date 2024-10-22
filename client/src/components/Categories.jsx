import React, { useEffect, useState } from "react";
import posts from "../data/courses.json"; // Adjust the path as necessary

const Categories = () => {
  const [selectedTag, setSelectedTag] = useState(null);
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

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    // Filter logic for displaying posts based on the tag can be implemented here
  };

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {uniqueTags.map((tag, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-center rounded-lg transition-colors duration-300 border ${
              selectedTag === tag
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border-gray-300"
            } hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {selectedTag && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold">
            Showing posts for: {selectedTag}
          </h3>
          {/* Display filtered posts based on selected tag */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {posts
              .filter((post) => post.tags.includes(selectedTag))
              .map((filteredPost, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-300 rounded-lg bg-white"
                >
                  <img
                    src={filteredPost.image}
                    alt={filteredPost.title}
                    className="rounded-lg mb-4 w-full h-40 object-cover"
                  />
                  <h4 className="font-bold text-lg mb-2">
                    {filteredPost.title}
                  </h4>
                  <p>{filteredPost.level}</p>
                  <p>{filteredPost.price}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
                    {filteredPost.buttonLabel}
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;

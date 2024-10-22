import React, { useEffect, useState } from "react";
import coursesData from "../data/courses.json"; // Adjust the path as necessary

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Load courses from the JSON file (or you can directly use the imported data)
    setCourses(coursesData);
  }, []);

  return (
    <div className="min-h-screen flex  mx-28 items-center py-20">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="max-w-sm bg-base-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 mb-6"
          >
            <div className="relative">
              <img
                className="w-full h-40 object-cover"
                src={course.image}
                alt={course.title}
              />
              {course.price && (
                <span className="absolute top-2 left-2 bg-yellow-400  font-semibold py-1 px-3 rounded">
                  {course.price}
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold ">{course.level}</h3>
              <h1 className="mt-2 text-xl font-bold  cursor-pointer">
                {course.title}
              </h1>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <p className="ml-2 ">{course.tags.join(", ")}</p>
              </div>
              <button className="mt-4 w-full py-2 px-4 text-white bg-secondary bg-opacity-70 font-semibold rounded-lg hover:bg-secondary transition duration-200">
                {course.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;

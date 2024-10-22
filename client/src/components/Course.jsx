// src/components/CourseCard.js

import React from "react";

const Course = ({ course }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={course.image}
        alt={course.courseName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{course.courseName}</h3>
        <p className="text-gray-600">{course.description}</p>
        <div className="flex justify-between mt-4">
          <span className="text-sm text-gray-500">{course.category}</span>
          <span className="font-bold">${course.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Course;

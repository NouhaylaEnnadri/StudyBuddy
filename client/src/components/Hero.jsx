import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import feather from "feather-icons";
import { Hero_img } from "../assets"; // Assuming you have a hero image to replace

const Hero = () => {
  useEffect(() => {
    feather.replace(); // Initialize Feather icons
  }, []);

  const BentoItem = ({ children, className }) => {
    return <div className={`rounded-lg p-6 ${className}`}>{children}</div>;
  };

  return (
    <div className="text-white py-12">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Hero Section */}
          <BentoItem className="md:col-span-2 bg-secondary bg-opacity-30">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Top-Rated Courses from Fellow Students
            </h1>
            <p className="text-xl text-purple-200">
              Share and explore courses that have helped students just like you
              succeed. Find recommendations tailored to your field of study.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-secondary bg-opacity-35 hover:bg-secondary transition-colors duration-200 font-semibold py-2 px-4 rounded-lg mt-6 w-max"
            >
              Start Sharing
              <i data-feather="arrow-right" className="ml-2"></i>
            </a>
          </BentoItem>

          {/* About Us Section (Quick Access) */}
          <BentoItem className="bg-base-300">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex flex-col items-center bg-gray-700 hover:bg-gray-600 transition-colors duration-200 p-4 rounded-lg"
              >
                <i data-feather="users" className="mb-2"></i>
                <span>Student-Driven</span>
              </a>
             
              <a
                href="#"
                className="flex flex-col items-center bg-gray-700 hover:bg-gray-600 transition-colors duration-200 p-4 rounded-lg"
              >
                <i data-feather="thumbs-up" className="mb-2"></i>
                <span>Peer Recommendations</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center bg-gray-700 hover:bg-gray-600 transition-colors duration-200 p-4 rounded-lg"
              >
                <i data-feather="book-open" className="mb-2"></i>
                <span>Explore Courses</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center bg-gray-700 hover:bg-gray-600 transition-colors duration-200 p-4 rounded-lg"
              >
                <i data-feather="check-circle" className="mb-2"></i>
                <span>Join Our Community</span>
              </a>
            </div>
          </BentoItem>

          {/* Highlighted Course Section */}
          <BentoItem className="bg-primary bg-opacity-20">
            <img
              src={Hero_img} // Replace with your actual image
              alt="Featured Course"
              className="h-24 rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">
              Recommended by Top Students
            </h2>
            <p className="text-green-100">
              Browse courses handpicked by students who excel in your field.
            </p>
          </BentoItem>

          {/* Community Showcase */}
          <BentoItem className="bg-accent bg-opacity-15">
            <h2 className="text-2xl font-semibold mb-4">Community Showcase</h2>
            <div className="flex space-x-4 mb-4">
              <img
                src="https://picsum.photos/200"
                alt="User 1"
                className="w-10 h-10 rounded-full"
              />
              <img
                src="https://picsum.photos/200"
                alt="User 2"
                className="w-10 h-10 rounded-full"
              />
              <img
                src="https://picsum.photos/200"
                alt="User 3"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <p className="text-gray-300">
              Join thousands of students sharing their experiences and course
              recommendations.
            </p>
          </BentoItem>

          {/* Fifth Box (New Section) */}
          <BentoItem className="bg-secondary bg-opacity-20">
            <h2 className="text-2xl font-semibold mb-4">
              Explore Fields of Study
            </h2>
            <p className="text-gray-200">
              Dive into a variety of academic fields and discover courses that
              fit your future goals.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200 font-semibold py-2 px-4 rounded-lg mt-4 w-max"
            >
              Explore Now
              <i data-feather="arrow-right" className="ml-2"></i>
            </a>
          </BentoItem>
        </div>
      </div>
    </div>
  );
};

export default Hero;

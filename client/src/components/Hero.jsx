import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import feather from "feather-icons";
import { logo } from "../assets";

const Hero = () => {
  useEffect(() => {
    feather.replace(); // Initialize Feather icons
  }, []);

  const BentoItem = ({ children, className }) => {
    return <div className={`rounded-lg p-6 ${className}`}>{children}</div>;
  };

  return (
    <div className=" text-white py-12">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoItem className="md:col-span-2 bg-secondary bg-opacity-30">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Unleash Your Creativity
            </h1>
            <p className="text-xl text-purple-200">
              Build extraordinary tools that push the boundaries of what's
              possible.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-secondary bg-opacity-35 hover:bg-secondary transition-colors duration-200 font-semibold py-2 px-4 rounded-lg mt-6 w-max"
            >
              Get Started
              <i data-feather="arrow-right" className="ml-2"></i>
            </a>
          </BentoItem>

          <BentoItem className="bg-base-300">
            <h2 className="text-2xl font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex flex-col items-center bg-gray-700 hover:bg-gray-600 transition-colors duration-200 p-4 rounded-lg"
              >
                <i data-feather="code" className="mb-2"></i>
                <span>Code</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center bg-gray-700 hover:bg-gray-600 transition-colors duration-200 p-4 rounded-lg"
              >
                <i data-feather="layout" className="mb-2"></i>
                <span>Design</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center bg-gray-700 hover:bg-gray-600 transition-colors duration-200 p-4 rounded-lg"
              >
                <i data-feather="terminal" className="mb-2"></i>
                <span>CLI</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center bg-gray-700 hover:bg-gray-600 transition-colors duration-200 p-4 rounded-lg"
              >
                <i data-feather="settings" className="mb-2"></i>
                <span>Settings</span>
              </a>
            </div>
          </BentoItem>

          {/* Additional Bento Items */}
          <BentoItem className="bg-primary bg-opacity-20">
            <img
              src={logo}
              alt="Feature Spotlight"
              className=" h-24 rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">
              AI-Powered Workflows
            </h2>
            <p className="text-green-100">
              Harness the power of artificial intelligence to automate and
              optimize your daily tasks.
            </p>
          </BentoItem>

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
              Join thousands of developers building amazing tools and sharing
              their creations.
            </p>
          </BentoItem>

          <BentoItem className="bg-gradient-to-br from-secondary to-accent text-gray-900">
            <i data-feather="zap" className="mb-4 w-12 h-12"></i>
            <h2 className="text-2xl font-semibold mb-2">
              Lightning Fast Updates
            </h2>
            <p>
              Our latest release brings 2x performance improvements and new
              customization options.
            </p>
          </BentoItem>

         
        </div>
      </div>
    </div>
  );
};

export default Hero;

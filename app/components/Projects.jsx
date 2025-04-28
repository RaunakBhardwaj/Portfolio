import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

function Projects() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-800 dark:text-indigo-300 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project Card 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-40">
              {/* <img
                src={assets.project1}
                alt="Project 1"
                className="object-cover w-full h-full"
              /> */}
              <Image alt="" src={assets.project1} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-indigo-800 dark:text-indigo-300">
                Project Name 1
              </h3>
              <p className="text-base mb-4 text-gray-700 dark:text-gray-300">
                Brief description of the project. It's a great project
                showcasing my skills in React, Node.js, and other technologies.
              </p>
              <a
                href="https://raunakbhardwaj.github.io/Registration-portal/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gradient-to-br from-blue-950 via-purple-500 to-indigo-500 text-white font-medium transition duration-300 hover:opacity-80"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-40">
              {/* <img
                src="#"
                alt="Project 2"
                className="object-cover w-full h-full"
              /> */}
              <Image alt="" src={assets.project2} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-indigo-800 dark:text-indigo-300">
                Project Name 2
              </h3>
              <p className="text-base mb-4 text-gray-700 dark:text-gray-300">
                Brief description of the project. A simple yet effective app
                built with Next.js and Tailwind CSS.
              </p>
              <a
                href="https://raunakbhardwaj.github.io/Noughts-crosses-Game-with-js/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gradient-to-br from-blue-950 via-purple-500 to-indigo-500 text-white font-medium transition duration-300 hover:opacity-80"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-40">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Project 3"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-indigo-800 dark:text-indigo-300">
                Project Name 3
              </h3>
              <p className="text-base mb-4 text-gray-700 dark:text-gray-300">
                This project demonstrates my experience with D3.js for data
                visualization and interactive charts.
              </p>
              <a
                href="https://github.com/yourusername/project3"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gradient-to-br from-blue-950 via-purple-500 to-indigo-500 text-white font-medium transition duration-300 hover:opacity-80"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

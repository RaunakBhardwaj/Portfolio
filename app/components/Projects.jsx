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
              <Image alt="" src={assets.project3} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-indigo-800 dark:text-indigo-300">
                Portfolio
              </h3>
              <p className="text-base mb-4 text-gray-700 dark:text-gray-300">
                A modern and responsive portfolio web app built with Next.js and
                Tailwind CSS, showcasing projects and skills. The web app
                features a Contact Form integrated with EmailJS to enable
                seamless communication with users or potential clients.
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
                Noughts and crosses Game
              </h3>
              <p className="text-base mb-4 text-gray-700 dark:text-gray-300">
                A simple and interactive Tic-Tac-Toe game built using JavaScript
                and DOM manipulation. Players alternate turns to place their
                marks (X or O) on a 3x3 grid, with the objective to get three of
                their marks in a row, either horizontally, vertically, or
                diagonally.
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
              {/* <img
                src={assets.project1}
                alt="Project 1"
                className="object-cover w-full h-full"
              /> */}
              <Image alt="" src={assets.project1} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-indigo-800 dark:text-indigo-300">
                Registration Portal
              </h3>
              <p className="text-base mb-4 text-gray-700 dark:text-gray-300">
                A static registration portal built with HTML, CSS, and
                JavaScript. New users can register, log in, view, and update
                their details via a dashboard.Designed to demonstrate frontend
                form handling, validation, and responsive UI.
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
        </div>
      </div>
    </div>
  );
}

export default Projects;

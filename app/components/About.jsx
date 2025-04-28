import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg border-4 border-indigo-600 bg-gradient-to-br from-indigo-800 to-blue-900">
            <Image
              className="object-cover"
              alt="User Image"
              src={assets.user_image}
              fill
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">
            About Me
          </h2>
          <p className="leading-relaxed text-lg">
            I am a detail-oriented Frontend Developer with over 5 years of
            experience in building user-focused, scalable, and high-performance
            web applications. Proficient in JavaScript frameworks such as React,
            Vue, and Next.js with TypeScript, I specialize in translating
            designs into responsive and accessible UIs. I am passionate about
            writing clean, maintainable code and thrive in collaborative,
            cross-functional environments to deliver exceptional web
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

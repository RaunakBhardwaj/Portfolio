import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-70 h-70 rounded-full overflow-hidden shadow-lg border-4 border-indigo-600 bg-gradient-to-br from-indigo-800 to-blue-900">
            <Image
              alt="Profile Image"
              src={assets.profile_img}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-950 via-purple-500 to-indigo-500">
              Hello, I'm <br />
            </span>
            <TypeAnimation
              sequence={[
                "Raunak",
                1000,
                "Frontend Developer",
                1000,
                "UI/UX Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "0.8em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <h4 className="mb-4 text-base sm:text-sm lg:text-sm">
            JavaScript | React | Next.js | HTML | CSS
          </h4>
          <a
            href="/RaunakSingh_CV.pdf"
            download
            className="px-4 py-2 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-950 via-purple-500 to-indigo-500 hover:dark:bg-gray-700 text-white font-medium transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

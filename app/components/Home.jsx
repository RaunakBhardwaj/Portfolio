import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2">
          <div className=" place-self-center">
            <Image alt="" src={assets.profile_img} width={400} height={400} />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Raunak
          </h1>
          <h3 className="text-2xl lg:text-4xl font-bold">Frontend Developer</h3>
          <h4 className="mb-4">JavaScript | React | Nextjs | HTML | CSS</h4>
          {/* <button className=" dark:bg-gray-900 dark:text-white border rounded p-2">
            Download my CV
          </button> */}
          <a
            href="/RaunakSingh_CV.pdf"
            download
            className=" inline-block dark:bg-gray-800 hover:dark:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;

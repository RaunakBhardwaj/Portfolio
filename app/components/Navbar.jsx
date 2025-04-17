import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <>
      <nav className="w-full fiexd px-5 lg:px-8 xl:px-[8%] py-5 flex item-center justify-between z-50">
        <a href="#top">
          <Image
            alt=""
            src={assets.logo}
            className="w-28 cursor-pointer mr-14 mt-2.5"
          />
        </a>
        <ul className="hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#e&e">Education & Experiance</a>
          </li>
          <li>
            <a href="#work">My work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div>
          <a
            href="#contact"
            className="hidden lg:flex item-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4"
          >
            Contact <Image alt="" src={assets.arrow_icon} className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

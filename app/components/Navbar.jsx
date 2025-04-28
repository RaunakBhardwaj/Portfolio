"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

function Navbar() {
  // mobile menu open and close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-5 flex items-center justify-between z-50 bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <a href="#top">
          <Image
            alt=""
            src={assets.logo_dark}
            className="w-28 cursor-pointer mr-14 mt-2.5"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 ">
          <li>
            <a className="" href="#top">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experiance</a>
          </li>
          <li>
            <a href="#projects">My work</a>
          </li>
        </ul>
        {/* dark mode btn */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="border px-4 py-2 w-full sm:w-fit rounded-full hidden md:block"
          >
            Contact me
          </a>
          {/* <button className="border px-4 py-2 w-full sm:w-fit rounded-full hidden md:block">
            Contact Me
          </button> */}
          {/* <button>
            <Image alt="" src={assets.moon_icon} className="w-6" />
          </button> */}
          {!isMenuOpen ? (
            <button
              onClick={toggleMenu}
              className="block md:hidden color-white ml-3"
            >
              <Image alt="menu" src={assets.menu_white} className="w-6" />
            </button>
          ) : (
            <button
              onClick={closeMenu}
              className="block md:hidden color-white ml-3"
            >
              <Image alt="close" src={assets.close_white} className="w-6" />
            </button>
          )}
        </div>
      </nav>
      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[75px] left-0 w-full bg-white  dark:bg-gray-900 text-black dark:text-white p-5 shadow-md z-50 transition-colors duration-300">
          <ul className="flex flex-col gap-4 text-center mt-2">
            <li>
              <a href="#top" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About me
              </a>
            </li>
            <li>
              <a href="#education" onClick={closeMenu}>
                Education & Experience
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                My work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact me
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;

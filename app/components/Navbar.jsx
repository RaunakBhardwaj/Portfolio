"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

function Navbar() {
  // mobile menu open and close state
  const [isMenuopen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-5 flex items-center justify-between z-50 ">
        <a href="#top">
          <Image
            alt=""
            src={assets.logo}
            className="w-28 cursor-pointer mr-14 mt-2.5"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
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
            <a href="#experiance">Experiance</a>
          </li>
          <li>
            <a href="#work">My work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        {/* dark mode btn */}
        <div className="flex items-center gap-4">
          <button>
            <Image alt="" src={assets.moon_icon} className="w-6" />
          </button>

          <button onClick={toggleMenu} className="block md:hidden ml-3">
            <Image alt="" src={assets.menu_black} className="w-6" />
          </button>
        </div>
      </nav>
      {/* mobile menu */}
      {isMenuopen && (
        <div className="md:hidden absolute top-[75px] left-0 w-full bg-white p-5 shadow-md z-40">
          <ul className="flex flex-col gap-4 text-center">
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
              <a href="#work" onClick={closeMenu}>
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

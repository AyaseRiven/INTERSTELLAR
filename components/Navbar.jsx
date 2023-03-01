import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaBorderStyle } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [BorderColor, setBorderColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffff");
        setTextColor("#000");
        setBorderColor("#000");
      } else {
        setColor("transparent");
        setTextColor("#ffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link
          href="/"
          style={{ color: `${BorderColor}` }}
          className="rounded-md px-3.5 py-2 m-1 relative group cursor-pointer border-2 font-medium border-white"
        >
          <h1 style={{ color: `${textColor}` }} className=" font-bold text-4xl">
            JGallery
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 group text-lg font-semibold text-white transition duration-300 ">
            <Link href="/" style={{ color: `${textColor}` }}>
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-500"></span>
            </Link>
          </li>
          <li className="p-4 group text-lg font-semibold text-white transition duration-3008">
            <Link href="/#gallery" style={{ color: `${textColor}` }}>
              Gallery
            </Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-500"></span>
          </li>
          <li className="p-4 group text-lg font-semibold text-white transition duration-300">
            <Link href="/Work" style={{ color: `${textColor}` }}>
              Work
            </Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-500"></span>
          </li>
          <li className="p-4 group text-lg font-semibold text-white transition duration-300">
            <Link href="/Contact" style={{ color: `${textColor}` }}>
              Contact
            </Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-500"></span>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/Work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

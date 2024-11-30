import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" top-0 left-0 w-full bg-white z-50">
      {/* {/ Main Navbar Container /} */}
      <div className="flex justify-between items-center p-6 ">
        {/* {/ Logo /} */}
        <div
          className="font-bold text-xl ml-14 bg-cover bg-center p-2 rounded-lg"
          style={{ backgroundImage: 'url(/img/Ve.png)' }}
        >
          Logo
        </div>

        {/* {/ Toggle Button for Mobile /} */}
        <button onClick={toggleMenu} className="text-black md:hidden focus:outline-none">
          {isOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu Icon (Hamburger)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* {/ Links - Visible on Larger Screens /} */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link to="/" className="text-[#5D56F1] font-bold hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-black hover:text-blue-500">
            About Us
          </Link>
          <Link to="/services" className="text-black hover:text-blue-500">
            Services
          </Link>
          <Link to="/portfolio" className="text-black hover:text-blue-500">
            Portfolio
          </Link>
          <Link to="/blog" className="text-black hover:text-blue-500">
            Blog
          </Link>
        </div>

        {/* {/ CTA Button /} */}
        <a
          href="/consultation"
          className="hidden md:block border-2 border-[#5D56F1] text-[#5D56F1] font-medium px-4 py-2 rounded-2xl hover:bg-blue-500 hover:text-white mr-14"
        >
          Free Consultation
        </a>
      </div>

      {/* {/ Dropdown Menu for Mobile /} */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start bg-white shadow-lg p-4 space-y-2">
          <Link to="/home" className="text-black hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-black hover:text-blue-500">
            About Us
          </Link>
          <Link to="/services" className="text-black hover:text-blue-500">
            Services
          </Link>
          <Link to="/portfolio" className="text-black hover:text-blue-500">
            Portfolio
          </Link>
          <Link to="/blog" className="text-black hover:text-blue-500">
            Blog
          </Link>
          <a
            href="/consultation"
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



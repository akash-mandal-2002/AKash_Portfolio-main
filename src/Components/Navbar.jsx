import { useState } from "react";
// import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "../Style/Navbar.css"; // Make sure you add your custom styles here if needed
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar flex justify-between items-center px-3 py-4">
      <div className="navbar_logo">
        <h1 className="text-4xl text-gray-200 p-1 px-6">AKASH</h1>
      </div>

      {/* Middle Navbar */}
      <div className="hidden md:flex items-center space-x-12 text-2xl text-gray-200">
        <nav>
          <ul className="flex items-center space-x-12">
            <li className="hover:cursor-pointer">
              <Link to="/">WELCOME</Link>
            </li>

            <li className="hover:cursor-pointer">
              <Link to="/project">WORK </Link>
            </li>

            <li className="hover:cursor-pointer">
              {" "}
              <Link to="/about">ABOUT</Link>
            </li>

            <li className="hover:cursor-pointer">
              {" "}
              <Link to="/contact">CONTACT </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right Navbar */}
      <div className="hidden md:flex md:mr-6 rounded-md px-4 pt-2 pb-2.5 cursor-pointer border border-transparent hover:border-[#a3b3ff] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
        <button className="text-2xl text-gray-200">Let's Talk</button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden z-[100]">
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#000" />
      </div>

      {/* Mobile Navbar */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full h-[100vh] mobile_navbar z-[100]`}
      >
        <nav>
          <ul className="flex flex-col items-center py-10 space-y-20 mt-8 text-xl text-gray-100">
            <li className="hover:cursor-pointer text-4xl">Welcome</li>
            <li className="hover:cursor-pointer text-4xl">Work</li>
            <li className="hover:cursor-pointer text-4xl">About</li>
            <li className="hover:cursor-pointer text-4xl">Contact</li>
          </ul>
        </nav>
        {/* <div className="flex justify-center py-1">
          <div className="bg-[#74d0ef] rounded-2xl px-6 py-4 mt-8 cursor-pointer hover:bg-[#a3d4f1]">
            <button className="text-2xl text-neutral-700">Let Talk</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;

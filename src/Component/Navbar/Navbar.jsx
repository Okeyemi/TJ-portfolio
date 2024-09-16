import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <nav className=" text-white p-4 fixed w-full z-10 bg-[#1F242D] shadow-sm">
      <div className=" max-w-7xl mx-auto flex justify-between items-center md:px-6">
        <div className="text-2xl font-bold">
          <Link to="/">
            Okeyemi <span className="text-[#00EEFF]">Creative</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="cursor-pointer hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="cursor-pointer hover:text-blue-500">
            About
          </Link>
          <Link to="/projects" className="cursor-pointer hover:text-blue-500">
            Projects
          </Link>
          <Link to="/contact" className="cursor-pointer hover:text-blue-500">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </nav>
  );
};

export default Navbar;

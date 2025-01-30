import React from 'react';
import '../Navbar.css';  // Import the CSS file for Navbar styling
import logo1 from "../assets/Picture1.png"; 
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
          <nav className="fixed top-0 w-full bg-purple-900 text-white flex justify-between items-center px-8 py-4 shadow-md z-10">
          <div className="flex items-center space-x-4">
            <img src={logo1} alt="Logo" className="h-10" />
            <span className="text-2xl font-bold">SoT Railway Ticketing System</span>
          </div>
          <Link to="/" className="hover:bg-purple-700 rounded-lg px-4 py-2 text-sm font-medium">
            Logout
          </Link>
        </nav>
        
  );
};

export default Navbar;

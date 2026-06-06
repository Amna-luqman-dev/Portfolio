import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
  <h1>Navbar</h1>
     <nav className="flex justify-between items-center bg-gray-900 text-white px-8 py-4">
      
    
      <div>
        <h2 className="text-2xl font-bold">Portfolio</h2>
      </div>

     
      <ul className="flex gap-8">
        <li>
          <Link to="/" className="hover:text-sky-400 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-sky-400 transition">
            About Me
          </Link>
        </li>

        <li>
          <Link to="/services" className="hover:text-sky-400 transition">
            Services
          </Link>
        </li>

        <li>
          <Link to="/skills" className="hover:text-sky-400 transition">
            Skills
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-sky-400 transition">
            Contact Me
        </Link>
        </li>
      </ul>
    </nav> 
    

    </>
  );
}
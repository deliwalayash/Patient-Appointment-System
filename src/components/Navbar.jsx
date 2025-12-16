import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO + NAME */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
            C
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Care Lifecare
            </h1>
            <p className="text-xs text-gray-500 -mt-1">
              Hospital • Surat
            </p>
          </div>
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/book-app"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 transition"
              }
            >
              Book Appointment
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/viewappointment"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 transition"
              }
            >
              Appointments
            </NavLink>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link
            to="/book-app"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE MENU ICON (UI only) */}
        <button className="md:hidden text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

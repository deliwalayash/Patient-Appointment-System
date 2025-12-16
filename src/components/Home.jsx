import React from "react";
import { Link } from "react-router-dom";

import image from '../assets/images/Gemini_Generated_Image_vozahvvozahvvoza.png'

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            Trusted Multispeciality Hospital in Surat
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Care Lifecare Hospital
            <span className="block text-blue-600">
              Compassion. Care. Cure.
            </span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Providing advanced medical care with experienced doctors,
            modern technology, and a patient-first approach.
            Your health is our highest priority.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/book-app"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Book Appointment
            </Link>

            <Link
              to="/viewappointment"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-blue-700 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              View Appointments
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">15+</h3>
              <p className="text-sm text-gray-500">Expert Doctors</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">24/7</h3>
              <p className="text-sm text-gray-500">Emergency Care</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">10k+</h3>
              <p className="text-sm text-gray-500">Happy Patients</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex justify-center">
          <img
            src="/images/hero.png"
            alt="Care Lifecare Hospital"
            className="max-w-lg rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

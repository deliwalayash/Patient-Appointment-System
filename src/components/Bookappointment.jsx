import React from "react";
import doctors from "./doctors";
import { useNavigate } from "react-router-dom";

const Bookappointment = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Book an Appointment
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Choose a specialist doctor and book your appointment in just a few clicks.
          </p>
        </div>

        {/* DOCTOR GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="h-56 w-full object-cover"
                />

                {/* AVAILABILITY BADGE */}
                <span
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${
                    doctor.isAvailability
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {doctor.isAvailability ? "Available" : "Unavailable"}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {doctor.name}
                </h3>

                <p className="text-blue-600 font-medium mt-1">
                  {doctor.specialization}
                </p>

                <div className="mt-3 text-sm text-gray-600 space-y-1">
                  <p>Experience: {doctor.experience}</p>
                  <p>Consultation Fees: ₹{doctor.fees}</p>
                </div>

                {/* CTA */}
                <button
                  disabled={!doctor.isAvailability}
                  onClick={() => navigate(`/book-app/${doctor.id}`)}
                  className={`mt-6 w-full py-2.5 rounded-lg font-semibold transition ${
                    doctor.isAvailability
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookappointment;

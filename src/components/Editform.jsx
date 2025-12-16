import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Editform = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) || []
  );

  const [patient, setPatient] = useState({
    name: "",
    age: "",
    date: "",
    mobilenumber: "",
    problem: "",
    doctorname: "",
  });

  // ✅ Load selected patient
  useEffect(() => {
    const found = patients.find(
      (p) => p.id === Number(id)
    );

    if (found) {
      setPatient(found);
    }
  }, [id, patients]);

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPatients = patients.map((p) =>
      p.id === Number(id) ? patient : p
    );

    setPatients(updatedPatients);
    localStorage.setItem(
      "patients",
      JSON.stringify(updatedPatients)
    );

    navigate("/viewappointment");
  };

  // 🧠 Guard UI if patient not found
  if (!patient.name) {
    return (
      <div className="text-center mt-20 text-gray-600">
        Loading patient details...
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-16 bg-white shadow-xl rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Edit Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Patient Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Patient Name
          </label>
          <input
            type="text"
            id="name"
            value={patient.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={patient.age}
            onChange={handleChange}
            required
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Appointment Date
          </label>
          <input
            type="date"
            id="date"
            value={patient.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            required
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            type="number"
            id="mobilenumber"
            value={patient.mobilenumber}
            onChange={handleChange}
            required
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Problem */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Problem
          </label>
          <textarea
            id="problem"
            value={patient.problem}
            onChange={handleChange}
            required
            rows="3"
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Doctor (readonly) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Doctor
          </label>
          <input
            value={patient.doctorname}
            disabled
            className="w-full rounded-lg border bg-gray-100 px-4 py-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update Appointment
          </button>

          <button
            type="button"
            onClick={() => navigate("/viewappointment")}
            className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editform;

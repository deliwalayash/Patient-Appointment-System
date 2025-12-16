import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import doctors from "./doctors";

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectDoctor = doctors.find((doc) => doc.id == id);

  const [patient, setPatient] = useState({
    name: "",
    age: "",
    date: "",
    mobilenumber: "",
    problem: "",
  });

  const [patients, setPatients] = useState([]);
  const [errors, setErrors] = useState({});

  // Load existing patients
  useEffect(() => {
    const stored = localStorage.getItem("patients");
    if (stored) {
      setPatients(JSON.parse(stored));
    }
  }, []);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!patient.name.trim()) newErrors.name = "Patient name is required";
    if (!patient.age || patient.age <= 0) newErrors.age = "Enter valid age";
    if (!patient.date || patient.date < today)
      newErrors.date = "Date cannot be in the past";
    if (!patient.mobilenumber || patient.mobilenumber.length < 10)
      newErrors.mobilenumber = "Enter valid mobile number";
    if (!patient.problem.trim())
      newErrors.problem = "Please describe the problem";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const newPatient = {
      id: Date.now(),
      doctorname: selectDoctor.name,
      doctorid: selectDoctor.id,
      ...patient,
    };

    const updatedPatients = [...patients, newPatient];
    localStorage.setItem("patients", JSON.stringify(updatedPatients));

    navigate("/viewappointment");
  };

  if (!selectDoctor) {
    return (
      <p className="text-center text-red-600 mt-10">
        Doctor not found
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10"
    >
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
        Book Appointment
      </h2>

      {/* Patient Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Patient Name</label>
        <input
          id="name"
          value={patient.name}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Age */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Age</label>
        <input
          type="number"
          id="age"
          value={patient.age}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            errors.age ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
      </div>

      {/* Date */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Appointment Date
        </label>
        <input
          type="date"
          id="date"
          min={new Date().toISOString().split("T")[0]}
          value={patient.date}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            errors.date ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      {/* Mobile */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Mobile Number
        </label>
        <input
          type="number"
          id="mobilenumber"
          value={patient.mobilenumber}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            errors.mobilenumber ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.mobilenumber && (
          <p className="text-red-500 text-sm">{errors.mobilenumber}</p>
        )}
      </div>

      {/* Problem */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Health Problem
        </label>
        <textarea
          id="problem"
          rows="3"
          value={patient.problem}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            errors.problem ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.problem && (
          <p className="text-red-500 text-sm">{errors.problem}</p>
        )}
      </div>

      {/* Doctor */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">
          Doctor
        </label>
        <input
          disabled
          value={selectDoctor.name}
          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Confirm Appointment
      </button>
    </form>
  );
};

export default Form;

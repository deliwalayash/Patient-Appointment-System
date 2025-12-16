import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Viewappointment = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) || []
  );

  const handleDelete = (id) => {
    const updated = patients.filter((p) => p.id !== id);
    setPatients(updated);
  };

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <div className="max-w-7xl mx-auto px-6 mt-16">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Appointments
        </h1>
        <button
          onClick={() => navigate("/book-app")}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + New Appointment
        </button>
      </div>

      {/* EMPTY STATE */}
      {patients.length === 0 ? (
        <div className="bg-white shadow rounded-xl p-10 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            No appointments found
          </h2>
          <p className="text-gray-500 mt-2">
            Book a new appointment to see it here.
          </p>
        </div>
      ) : (
        <div className="relative overflow-x-auto bg-white shadow-xl rounded-2xl">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Patient</th>
                <th className="px-6 py-4">Doctor</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Mobile</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((curEle) => (
                <tr
                  key={curEle.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {curEle.name}
                  </td>

                  <td className="px-6 py-4">
                    {curEle.doctorname}
                  </td>

                  <td className="px-6 py-4">
                    {curEle.date}
                  </td>

                  <td className="px-6 py-4">
                    {curEle.mobilenumber}
                  </td>

                  <td className="px-6 py-4 text-center space-x-2">
                    <button
                      onClick={() =>
                        navigate(`/edit-form/${curEle.id}`)
                      }
                      className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(curEle.id)}
                      className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Viewappointment;

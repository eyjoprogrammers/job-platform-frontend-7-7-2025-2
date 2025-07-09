import React from "react";

const JobCard = ({ title, company, location }) => {
  return (
    <div className="bg-secondary text-dark shadow-md rounded-xl p-5 hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-1">{company}</p>
      <p className="text-sm text-gray-600">{location}</p>
      <button className="mt-4 bg-primary text-white px-4 py-1 rounded-lg hover:bg-cyan-700 transition">
        تقديم الآن
      </button>
    </div>
  );
};

export default JobCard;

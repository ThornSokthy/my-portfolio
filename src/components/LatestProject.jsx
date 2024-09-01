import React from "react";

const LatestProject = ({ image, title, desc }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 py-10">
      <div className="skill-icon text-4xl text-blue-500">
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button className="bg-transparent border border-pink-400 text-pink-400 mt-4 px-6 py-2 rounded hover:bg-pink-400 hover:text-white transition-colors">
          View Project
        </button>
      </div>
    </div>
  );
};

export default LatestProject;

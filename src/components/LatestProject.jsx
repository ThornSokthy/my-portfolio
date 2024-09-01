import React from "react";

const LatestProject = ({ image, title, desc, reverse }) => {
  return (
    <div
      className={`grid grid-cols-1 justify-items-center md:grid-cols-2 gap-14 items-center ${
        reverse ? "md:grid-cols-2 md:[direction:rtl]" : ""
      }`}
    >
      <div className="text-4xl text-blue-500">
        <img src={image} alt="" />
      </div>
      <div className="text-center md:text-left w-[70%]">
        <h2 className="text-base mb-2">{title}</h2>
        <p className="text-sm sm:text-base">{desc}</p>
        <button className="bg-transparent border border-pink-400 text-pink-400 mt-4 px-6 py-2 rounded hover:bg-pink-400 hover:text-white transition-colors">
          View Project
        </button>
      </div>
    </div>
  );
};

export default LatestProject;

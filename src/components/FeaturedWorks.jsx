import React from "react";
import { Link, useNavigate } from "react-router-dom";
import projectData from "../data/projectData";

const FeaturedWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="my-12 px-6 sm:px-12 md:px-20 lg:px-48">
      <h2 className="text-2xl font-semibold">Latest Project</h2>
      <div className="space-y-6 mt-4">
        {projectData.slice(-3).reverse().map((work, index) => (
          <div
            key={work.id}
            className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 border-b border-red-600 pb-6"
            onClick={() => navigate(`/projects/${work.id}`)}
          >
            {/* Gambar */}
            <img
              src={work.image}
              alt={work.title}
              className="w-full md:w-[200px] lg:w-[300px] xl:w-[500px] h-auto object-cover rounded-md shadow-md m-auto"
            />
            {/* Teks */}
            <div className="text-start flex-1">
              <h3 className="text-lg sm:text-xl font-bold">{work.title}</h3>
              <div className="text-sm md:text-md text-[#8695A4] font-semibold my-2 md:my-4">
                <span className="bg-red-600 text-white font-bold px-1 md:px-2 md:py-1 rounded-xl mr-4">{work.year}</span>
                {work.category}
              </div>
              <p className="mt-2 text-gray-700 text-sm md:text-md lg:text-lg text-justify">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 md:mt-6 text-end text-xs md:text-md lg:text-lg">
        <Link
          to="/allproject"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          See All Projects
        </Link>
      </div>
    </div>

  );
};

export default FeaturedWorks;

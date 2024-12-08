import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import projectData from "../data/projectData";
import ReactPlayer from "react-player";

const ProjectDetailPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleImageClick = (src) => {
    setCurrentIndex(src); // Set gambar yang diklik
  };

  const handleCloseModal = () => {
    setCurrentIndex(null); // Tutup modal
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % project.images.length
    ); // Geser ke gambar berikutnya
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + project.images.length) % project.images.length
    ); // Geser ke gambar sebelumnya
  };


  if (!project) {
    return <h2 className="text-center py-10">Project not found</h2>;
  }

  return (
    <div className="container mx-auto pb-10 px-4 sm:px-6 lg:px-48">
      <nav className="text-sm text-gray-600 mb-4">
        <span>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </span>
        <span className="mx-2">/</span>
        <span>
          <Link to="/allproject" className="hover:underline">
            All Project
          </Link>
        </span>
        <span className="mx-2">/</span>
        <span className="text-red-600">{project.title}</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h1>
      <div className="text-sm sm:text-md text-[#8695A4] font-semibold my-4 sm:my-6">
        <span className="text-white bg-red-600 rounded-xl font-bold px-2 mr-4">
          {project.year}
        </span>
        {project.category}
      </div>
      <p className="text-sm md:text-md lg:text-lg text-gray-700 w-full md:w-3/4 mb-6 sm:mb-10">
        {project.description}
      </p>

      {/* Grid gambar */}
      <div className="mt-6 grid grid-cols-1  gap-6">
        {project.images.map((src, index) => (
          <div
            key={index}
            className="relative group cursor-pointer shadow-md"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={src}
              alt={`${project.title} - Image ${index + 1}`}
              className="w-full h-[300px] md:h-[630px] rounded-md object-cover object-top transition duration-300 ease-in-out group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
          </div>
        ))}
      </div>

      {/* Modal gambar */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={project.images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="w-[90vw] h-[90vh] object-contain"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-red-600 rounded-full px-3 py-1"
            >
              ✕
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-600 bg-opacity-50 hover:bg-gray-800 rounded-full px-3 py-1"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-600 bg-opacity-50 hover:bg-gray-800 rounded-full px-3 py-1"
            >
              ❯
            </button>
          </div>
        </div>
      )}

      {/* Video Demonstrasi */}
      <div className="mt-10">
        <h3 className="text-lg sm:text-2xl font-semibold my-4 sm:my-6">Video Demonstrasi</h3>
        <div className="bg-gray-900 p-4 rounded-md">
          <ReactPlayer
            url={project.video}
            playing={false}
            controls={true}
            loop={true}
            width="100%"
            height="30vh"
            volume={0}
            muted={true}
            config={{
              file: {
                attributes: {
                  controlsList: "download",
                },
              },
            }}
          />
        </div>
      </div>
    </div>

  );
};

export default ProjectDetailPage;

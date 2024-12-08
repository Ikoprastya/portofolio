import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import projectData from "../data/projectData";



const AllProjectsPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    return (
        <div className="container mx-auto py-10 px-48 ">
            
            <nav className="text-sm text-gray-600 mb-4">
                <span>
                    <Link
                    to="/"
                    className="hover:underline"
                    >
                    Home
                    </Link>
                </span>
                <span className="mx-2">/</span>
                <span className="text-red-600">All Project</span>
            </nav>
        
            <h1 className="text-3xl font-bold pb-10">All Project</h1>
            <div className="space-y-8">
                {projectData.slice().reverse().map((project) => (
                <div
                    key={project.id}
                    className="flex flex-col md:flex-row items-center md:items-start gap-10 cursor-pointer border-b  border-red-600 pb-10"
                    onClick={() => navigate(`/projects/${project.id}`)}
                >
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-[500px] h-full object-cover rounded-md shadow-md"
                    />
                    <div className="flex-1">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="text-md text-[#8695A4] font-semibold my-4">
                        <span className="text-white bg-red-600 rounded-xl font-bold px-2 mr-4">{`${project.year}`}</span> {`${project.category}`}
                    </div>
                    <p className="mt-2 text-gray-700">{project.description}</p>
                    </div>
                </div>
                
                ))}
            
            </div>
        </div>
    );
};

export default AllProjectsPage;

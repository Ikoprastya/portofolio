import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import ProjectDetailPage from "./pages/DetailProject";



function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800">
        <div className="container mx-auto">
        <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/allproject" element={<AllProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Routes>
        </div>
        <div  >
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Content from "../components/Content";
import RecentPosts from "../components/RecentPosts";
import FeaturedWorks from "../components/FeaturedWorks";



function LandingPage() {
  return (
    <div>
      <div className="container mx-auto">
        <Content />
      </div>
      <div className="mx-auto bg-[#EDF7FA]">
        <RecentPosts />
      </div>
      <div className="container mx-auto">
        <FeaturedWorks />  
      </div>
    </div>

 
    
  );
}

export default LandingPage;

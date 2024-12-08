import React from "react";
import postData from "../data/postData";

const RecentPosts = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-48">
      <h2 className="text-2xl font-semibold">Creative Reels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {postData.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 md:p-6 flex flex-col">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p className="text-sm text-gray-600">{`${post.date} | ${post.tags}`}</p>
            
            <div className="mt-4 flex justify-center">
              <iframe
                className="w-full h-56 md:h-48"
                src={post.url}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-2 text-gray-700 flex-grow">{post.description}</p>
          </div>
        ))}
      </div>
    </div>



  );
};


export default RecentPosts;

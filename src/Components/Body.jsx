import React from 'react';

const Body = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center -mt-52">
      <h1 className="text-4xl tablet:text-6xl  laptop:text-8xl font-extrabold mb-2 ">
        THIS IS PURPLE
      </h1>
      <p className="text-base tablet:text-lg text-gray-600 mb-6">
        "Crafted to Inspire. Designed to Define."
      </p>
      <button className="bg-black text-white px-4 py-2 tablet:px-6 tablet:py-2 rounded-full font-medium hover:bg-gray-800">
        Explore
      </button>
    </div>
  );
};

export default Body;

import React from 'react';
import videoBg from '../assets/videoBg.mp4'; 

const Bvideo = () => {
  return (
    <div className="flex justify-center items-center bg-white w-screen h-[40vh] tablet:h-[30vh] laptop:h-[60vh] relative">
      <video
        className="shadow-lg w-full h-[40vh] tablet:h-[30vh] laptop:h-[60vh] object-cover" 
        autoPlay
        playsInline
        loop
        muted
        src={videoBg}
      >
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 tablet:opacity-30 laptop:opacity-40"></div>
    </div>
  );
};

export default Bvideo;

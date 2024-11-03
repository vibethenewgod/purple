import React, { useEffect, useRef } from 'react';
import videoBg from '../assets/videoBg.mp4'; 

const Bvideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if video can autoplay; otherwise, show controls
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If autoplay fails, show controls to allow user to play manually
        videoRef.current.controls = true;
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center bg-white w-screen h-[60vh] -mb-72 tablet:mb-0 laptop:mb-0 tablet:h-[30vh] laptop:h-[60vh] relative">
      <video
        ref={videoRef}
        className="shadow-lg w-full h-[60vh] tablet:h-[30vh] laptop:h-[60vh] object-cover"
        autoPlay
        playsInline
        loop
        muted
        preload="auto" // Preloads the video for smoother playback
        src={videoBg}
      >
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 tablet:opacity-30 laptop:opacity-40"></div>
    </div>
  );
};

export default Bvideo;



// import React from 'react';
// import videoBg from '../assets/videoBg.mp4'; 

// const Bvideo = () => {
//   return (
//     <div className="flex justify-center items-center bg-white w-screen h-[60vh] -mb-72 tablet:mb-0 laptop:mb-0 tablet:h-[30vh] laptop:h-[60vh] relative ">
//       <video
//         className="shadow-lg w-full h-[60vh] tablet:h-[30vh] laptop:h-[60vh] object-cover" 
//         autoPlay
//         playsInline
//         loop
//         muted
//         src={videoBg}
//       >
//         Your browser does not support the video tag.
//       </video>
      
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 tablet:opacity-30 laptop:opacity-40"></div>
//     </div>
//   );
// };

// export default Bvideo;

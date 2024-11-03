import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Topbar = () => {
  const [showShipping, setShowShipping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowShipping((prev) => !prev); 
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-full bg-black py-2 border-b border-gray-300 text-center">
      {showShipping ? (
        <div className="text-sm font-semibold text-white">
          FREE SHIPPING ON ORDERS $60+ 
          <span className="ml-2 underline cursor-pointer">SEE DETAILS</span>
        </div>
      ) : (
        <div className="flex justify-center items-center space-x-4 text-white">
          <FaFacebook className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Topbar;

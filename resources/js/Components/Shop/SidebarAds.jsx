import React from 'react';
import discBG from '../../../../public/assets/discBG.png'; // Adjust the path as needed

const SidebarAds = () => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={discBG}
        alt="Discount Background"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-6">
        <h2 className="text-3xl font-bold mb-2 text-center text-orange-500">
          70% <span className='text-black' >OFF</span> 
        </h2>
        <p className="text-lg mb-4 text-center text-white">
          on your first order
        </p>
        <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300 text-sm">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SidebarAds;

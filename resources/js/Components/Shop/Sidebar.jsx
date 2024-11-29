// src/components/Sidebar.js
import React from 'react';
import SidebarAds from './SidebarAds';

const Sidebar = () => {
  return (
    <div className="w-64 bg-green-50 p-6 shadow-lg">
      <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center mb-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
        </svg>
        Filter
      </button>
      <div className="mb-6">
        <h2 className="font-semibold text-xl mb-4 text-green-800">All Categories</h2>
        <ul className="space-y-2">
          <li><input type="checkbox" id="fruit" className="mr-2 accent-green-500 cursor-pointer"/><label htmlFor="fruit" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">Fresh Fruit (25)</label></li>
          <li><input type="checkbox" id="vegetables" className="mr-2 accent-green-500 cursor-pointer"/><label htmlFor="vegetables" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">Vegetables (150)</label></li>
          <li><input type="checkbox" id="cooking" className="mr-2 accent-green-500 cursor-pointer"/><label htmlFor="cooking" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">Cooking (54)</label></li>
          <li><input type="checkbox" id="snacks" className="mr-2 accent-green-500 cursor-pointer"/><label htmlFor="snacks" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">Snacks (47)</label></li>
          <li><input type="checkbox" id="beverages" className="mr-2 accent-green-500 cursor-pointer"/><label htmlFor="beverages" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">Beverages (43)</label></li>
          <li><input type="checkbox" id="beauty" className="mr-2 accent-green-500 cursor-pointer"/><label htmlFor="beauty" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">Beauty & Health (38)</label></li>
          <li><input type="checkbox" id="bread" className="mr-2 accent-green-500 cursor-pointer"/><label htmlFor="bread" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">Bread & Bakery (15)</label></li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="font-semibold text-xl mb-4 text-green-800">Price</h2>
        <div className="flex items-center">
          <input type="range" min="50" max="1500" className="w-full accent-green-500 cursor-pointer" />
        </div>
        <div className="flex justify-between text-sm mt-2">
          <input type="number" placeholder="$50" className="w-1/2 p-1 border border-green-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-green-500 hover:border-green-400 transition duration-300 ease-in-out" />
          <input type="number" placeholder="$1500" className="w-1/2 p-1 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:border-green-400 transition duration-300 ease-in-out" />
        </div>
      </div>
      <div className="mb-6">
        <h2 className="font-semibold text-xl mb-4 text-green-800">Rating</h2>
        <ul className="space-y-2">
          <li>
            <input type="checkbox" id="5stars" className="mr-2 accent-green-500 cursor-pointer" />
            <label htmlFor="5stars" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">⭐⭐⭐⭐⭐ (5.0)</label>
          </li>
          <li>
            <input type="checkbox" id="4stars" className="mr-2 accent-green-500 cursor-pointer" />
            <label htmlFor="4stars" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">⭐⭐⭐⭐☆ (4.0 & up)</label>
          </li>
          <li>
            <input type="checkbox" id="3stars" className="mr-2 accent-green-500 cursor-pointer" />
            <label htmlFor="3stars" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">⭐⭐⭐☆☆ (3.0 & up)</label>
          </li>
          <li>
            <input type="checkbox" id="2stars" className="mr-2 accent-green-500 cursor-pointer" />
            <label htmlFor="2stars" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">⭐⭐☆☆☆ (2.0 & up)</label>
          </li>
          <li>
            <input type="checkbox" id="1star" className="mr-2 accent-green-500 cursor-pointer" />
            <label htmlFor="1star" className="text-green-700 hover:text-green-900 transition duration-300 ease-in-out cursor-pointer">⭐☆☆☆☆ (1.0 & up)</label>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="font-semibold text-xl mb-4 text-green-800">Popular Tag</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Healthy</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Low Fat</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Vegetarian</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Kid foods</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Vitamins</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Bread</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Meat</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Snacks</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Lunch</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Dinner</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Breakfast</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer">Fruit</span>
        </div>
      </div>
      <div className='mb-6' >
        <SidebarAds/>
      </div>
    </div>
  );
};

export default Sidebar;

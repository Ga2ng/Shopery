import React from 'react';
import { FaCalendarAlt, FaUser, FaComments, FaUtensils } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const BlogCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-102 border border-gray-200">
      <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <FaCalendarAlt className="mr-2" />
          <span className="font-medium">{article.date}</span>
        </div>
        <h2 className="text-xl font-semibold mb-3 text-gray-800 hover:text-blue-600 transition-colors duration-200">{article.title}</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
        <div className="mt-4">
          <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
            Read More
            <IoIosArrowForward className="ml-1" />
          </a>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-between items-center text-gray-500 text-sm border-t border-gray-200">
        <span className="flex items-center hover:text-blue-600 transition-colors duration-200">
          <FaUtensils className="mr-2" />
          Food
        </span>
        <span className="flex items-center hover:text-blue-600 transition-colors duration-200">
          <FaUser className="mr-2" />
          By Admin
        </span>
        <span className="flex items-center hover:text-blue-600 transition-colors duration-200">
          <FaComments className="mr-2" />
          {article.comments} Comments
        </span>
      </div>
    </div>
  );
};

export default BlogCard;

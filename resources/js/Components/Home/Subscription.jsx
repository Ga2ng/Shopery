import React from 'react';
import { FaLeaf, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import Button from '../Button';
import Logo from '../Logo';

const Subscription = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 py-12 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center md:justify-start w-full md:w-1/3 mb-6 md:mb-0  ">
            <Logo className="h-12 w-auto m-auto " />
          </div>
          <div className="w-full md:w-2/3">
            <form className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
              <div className="relative flex-grow">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                  placeholder="Your email address"
                />
              </div>
              <Button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out flex items-center justify-center"
              >
                <span className="mr-2">Subscribe</span>
                <FaPaperPlane />
              </Button>
            </form>
            <p className="mt-4 text-sm text-gray-600 italic">Join our community for exclusive eco-friendly tips and offers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

import Button from '@/Components/Button';
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-stretch p-12 bg-gradient-to-br from-green-50 to-white">
      <div className="border-2 border-green-200 rounded-lg p-8 w-full lg:w-1/3 mb-8 lg:mb-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <div className="mb-8 flex items-center">
          <FaMapMarkerAlt className="text-green-500 text-2xl mr-4" />
          <p className="font-bold text-gray-700">275 Ash Dr. San Jose, South Dakota 83475</p>
        </div>
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-green-500 text-xl mr-4" />
            <p className="text-gray-600 hover:text-green-500 transition-colors duration-300">Proxy@gmail.com</p>
          </div>
          <p className="text-gray-600 hover:text-green-500 transition-colors duration-300 ml-8">Help.proxy@gmail.com</p>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <FaPhone className="text-green-500 text-xl mr-4" />
            <p className="text-gray-600">(219) 555-0114</p>
          </div>
          <p className="text-gray-600 ml-8">(654) 333-0187</p>
        </div>
      </div>
      <div className="w-full lg:w-2/3 bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ml-0 lg:ml-8">
        <h2 className="text-3xl font-bold mb-6 text-green-600">Just Say Hello!</h2>
        <p className="mb-8 text-gray-600 leading-relaxed">
          Do you fancy saying Hi to me or want to get started with your project and you need my help? Feel free to contact me.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="template" className="block text-gray-700 font-medium mb-2">Template Cookie</label>
            <input
              type="text"
              id="template"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              placeholder="Hello!"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              placeholder="zakirsoft@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subjects</label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <Button
            type="submit"
            className="bg-green-500 text-white py-3 px-6  hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;

// Import necessary components
import React from 'react';
import { FaShippingFast, FaHeadset, FaLock, FaUndoAlt } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="flex justify-around py-10 bg-gray-50">
      <div className="flex flex-col items-center text-center">
        <FaShippingFast className="text-green-500 text-4xl mb-2" />
        <h3 className="text-lg font-bold">Free Shipping</h3>
        <p className="text-gray-500">Free shipping on all your order</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <FaHeadset className="text-green-500 text-4xl mb-2" />
        <h3 className="text-lg font-bold">Customer Support 24/7</h3>
        <p className="text-gray-500">Instant access to Support</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <FaLock className="text-green-500 text-4xl mb-2" />
        <h3 className="text-lg font-bold">100% Secure Payment</h3>
        <p className="text-gray-500">We ensure your money is safe</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <FaUndoAlt className="text-green-500 text-4xl mb-2" />
        <h3 className="text-lg font-bold">Money-Back Guarantee</h3>
        <p className="text-gray-500">30 Days Money-Back Guarantee</p>
      </div>
    </div>
  );
};

export default Features;

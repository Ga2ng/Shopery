import React from 'react';
import { FaHeart, FaShoppingCart, FaLock } from 'react-icons/fa';

const FeaturedCard = ({ image, name, price, rating, available }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md w-60 h-96 mx-2 flex flex-col justify-between">
      <div>
        <img src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded-md" />
        <h3 className="text-lg font-semibold mb-2 truncate">{name}</h3>
        <p className="text-gray-500 mb-2">${price}</p>
        <div className="flex items-center mb-2">
          <div className="text-yellow-500">
            {'★'.repeat(rating)}
            {'☆'.repeat(5 - rating)}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        {available ? (
          <button className="text-green-500">
            <FaShoppingCart />
          </button>
        ) : (
          <FaLock className="text-gray-400" />
        )}
        <button className="text-red-500">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;

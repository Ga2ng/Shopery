import React from 'react';
import { FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa';

const ProductCard = ({ product, onClick }) => {
  return (
    <div onClick={onClick} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
      <div className="relative mb-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:brightness-110" />
        <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition-colors duration-300">
          <FaHeart className="text-xl" />
        </button>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-green-600 transition-colors duration-300">{product.name}</h3>
      <div className="flex items-center mb-2">
        <FaStar className="text-yellow-400 mr-1" />
        <span className="text-sm text-gray-600">{product.reviews}</span>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-green-600 font-bold text-lg">{product.price}</p>
          {product.oldPrice && <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>}
        </div>
        <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-110">
          <FaShoppingCart className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

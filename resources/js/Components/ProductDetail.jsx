import React, { useState } from 'react';
import { FaTimes, FaStar, FaShoppingCart, FaMinus, FaPlus, FaHeart, FaShare, FaInstagram, FaWhatsapp, FaLink } from 'react-icons/fa';

function ProductDetail({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const shareOnInstagram = () => {
    // Implement Instagram sharing logic
  };

  const shareOnWhatsApp = () => {
    // Implement WhatsApp sharing logic
  };

  const copyLink = () => {
    // Implement link copying logic
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-4xl w-full relative">
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300" 
          onClick={onClose}
        >
          <FaTimes className="text-2xl" />
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <img
              className="w-full h-80 object-cover rounded-lg shadow-md mb-4"
              src={product.image}
              alt={product.name}
            />
            <div className="flex space-x-3">
              {[1, 2, 3].map((index) => (
                <img
                  key={index}
                  className="w-20 h-20 object-cover rounded-md shadow-sm hover:opacity-80 transition-opacity cursor-pointer"
                  src={`https://via.placeholder.com/80?text=Image+${index}`}
                  alt={`Thumbnail ${index}`}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
              </div>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">Category: {product.category || 'Uncategorized'}</div>
              <div className="text-3xl font-bold text-green-600 mb-2">{product.price}</div>
              {product.oldPrice && (
                <div className="text-lg text-gray-500 line-through mb-4">{product.oldPrice}</div>
              )}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <label className="mr-4 text-gray-700 font-medium">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={decrementQuantity}
                    className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-l-md focus:outline-none"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-4 py-2 bg-white text-gray-700">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-r-md focus:outline-none"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={toggleFavorite}
                  className={`text-2xl ${isFavorite ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition-colors duration-300`}
                >
                  <FaHeart />
                </button>
                <button onClick={shareOnInstagram} className="text-2xl text-pink-500 hover:text-pink-600 transition-colors duration-300">
                  <FaInstagram />
                </button>
                <button onClick={shareOnWhatsApp} className="text-2xl text-green-500 hover:text-green-600 transition-colors duration-300">
                  <FaWhatsapp />
                </button>
                <button onClick={copyLink} className="text-2xl text-blue-500 hover:text-blue-600 transition-colors duration-300">
                  <FaLink />
                </button>
              </div>
              <button className="w-full bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center justify-center">
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

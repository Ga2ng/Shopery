import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function OurFeatures() {
  const [currentPage, setCurrentPage] = useState(0);
  const featuredProducts = [
    {
      id: 1,
      image: 'https://i.pinimg.com/236x/3f/a2/87/3fa287c717ff7a7102e6d872c68b5bda.jpg',
      name: "Green Apple",
      price: "$14.99",
      reviews: "4.0",
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/236x/3f/a2/87/3fa287c717ff7a7102e6d872c68b5bda.jpg',
      name: "Fresh Banana",
      price: "$12.99",
      reviews: "5.0",
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/236x/3f/a2/87/3fa287c717ff7a7102e6d872c68b5bda.jpg',
      name: "Juicy Orange",
      price: "$9.99",
      reviews: "4.0",
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/236x/3f/a2/87/3fa287c717ff7a7102e6d872c68b5bda.jpg',
      name: "Red Strawberry",
      price: "$16.99",
      reviews: "5.0",
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/236x/3f/a2/87/3fa287c717ff7a7102e6d872c68b5bda.jpg',
      name: "Sweet Mango",
      price: "$19.99",
      reviews: "4.0",
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/236x/3f/a2/87/3fa287c717ff7a7102e6d872c68b5bda.jpg',
      name: "Fresh Pineapple",
      price: "$17.99",
      reviews: "4.0",
    },
    {
      id: 7,
      image: 'https://i.pinimg.com/236x/3f/a2/87/3fa287c717ff7a7102e6d872c68b5bda.jpg',
      name: "Ripe Avocado",
      price: "$21.99",
      reviews: "5.0",
    },
    {
      id: 8,
      image: 'https://i.pinimg.com/236x/3f/a2/87/3fa287c717ff7a7102e6d872c68b5bda.jpg',
      name: "Fresh Grapes",
      price: "$15.99",
      reviews: "4.0",
    },
  ];

  const productsPerPage = 5;
  const pageCount = Math.ceil(featuredProducts.length / productsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < pageCount - 1 ? prev + 1 : prev));
  };

  return (
    <div className="mx-auto container bg-gray-50 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {featuredProducts.map((product) => (
              <div key={product.id} className="w-1/5 flex-shrink-0 px-2">
                <ProductCard
                  product={product}
                  onClick={() => {/* Handle click event */}}
                />
              </div>
            ))}
          </div>
        </div>
        <button 
          onClick={handlePrevPage} 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          disabled={currentPage === 0}
        >
          <FaChevronLeft className={`text-2xl ${currentPage === 0 ? 'text-gray-300' : 'text-green-600'}`} />
        </button>
        <button 
          onClick={handleNextPage} 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          disabled={currentPage === pageCount - 1}
        >
          <FaChevronRight className={`text-2xl ${currentPage === pageCount - 1 ? 'text-gray-300' : 'text-green-600'}`} />
        </button>
      </div>
    </div>
  );
}

export default OurFeatures;
import React, { useState } from 'react';

const categories = [
  { name: 'Fresh Fruit', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Fresh Vegetables', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Meat & Fish', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Snacks', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Beverages', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Dairy', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Bakery', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Frozen Foods', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Canned Goods', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Grains & Pasta', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Condiments', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Household', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Personal Care', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Pet Supplies', image: 'https://i.pinimg.com/564x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
  { name: 'Organic Products', image: 'https://i.pinimg.com/56tuk t4x/25/d0/fa/25d0facc68c9ba6260065953e49cd4e3.jpg' },
];

function Categories() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCategories = 5;

  const nextCategories = () => {
    setStartIndex((prevIndex) => 
      (prevIndex + visibleCategories >= categories.length) ? 0 : prevIndex + visibleCategories
    );
  };

  const prevCategories = () => {
    setStartIndex((prevIndex) => 
      (prevIndex - visibleCategories < 0) ? Math.max(categories.length - visibleCategories, 0) : prevIndex - visibleCategories
    );
  };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.slice(startIndex, startIndex + visibleCategories).map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={prevCategories} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            &#8592;
          </button>
          <button 
            onClick={nextCategories} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Categories;

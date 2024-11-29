import React from 'react';

const Ads = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Ad */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Fresh Vegetables"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-3xl font-bold mb-2">Fresh Vegetables</h3>
                  <p className="text-yellow-300 text-xl mb-4">Up to 30% Off</p>
                  <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Ad */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Organic Fruits"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-3xl font-bold mb-2">Organic Fruits</h3>
                  <p className="text-yellow-300 text-xl mb-4">Fresh & Healthy</p>
                  <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ads;

import React from 'react';
import Features from './Features';

function Header() {
  return (
    <>
      <header className="text-white py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-8">
            <div className="w-[70%] bg-[url('/assets/welcome.jpg')] bg-cover bg-center p-10 rounded-xl shadow-lg flex flex-col justify-center h-[500px]">
              <h1 className="text-5xl font-bold mb-6">Fresh & Healthy Organic Food</h1>
              <p className="text-2xl mb-8">Sale up to <span className="text-yellow-300 font-bold">30% off</span></p>
              <button className="bg-yellow-300 text-green-500 px-8 py-4 rounded-full font-bold text-xl hover:bg-green-600 hover:text-yellow-300 transition duration-300 w-max">Shop now</button>
            </div>
            <div className="w-[30%] space-y-6 flex flex-col justify-between h-[500px]">
              <div className='bg-[url("/assets/fruitBG.png")] bg-cover bg-center p-6 rounded-xl shadow-lg flex-1 flex flex-col justify-center'>
                <p className="text-black text-2xl font-extrabold bg-yellow-300 px-3 py-1 rounded-lg shadow-md inline-block mb-4">75% OFF</p>
                <div className="space-y-2 mb-4">
                  <p className="text-black text-2xl font-bold">Summer Sale</p>
                  <p className="text-black text-base font-semibold max-w-xs">Special Products Deal of the Month</p>
                </div>
                <button className="bg-black text-green-500 px-6 py-2 rounded-full font-bold text-sm hover:bg-green-500 hover:text-black transition duration-300 transform hover:scale-105 w-max">
                  Shop now
                </button>
              </div>
              <div className='bg-[url("/assets/leafBG.png")] bg-cover bg-center p-6 rounded-xl shadow-lg flex-1 flex flex-col justify-center items-center text-center'>
                <p className="text-sm font-extrabold px-3 py-1 rounded-lg shadow-md inline-block mb-4">Best Deal</p>
                <div className="space-y-2 mb-4">
                  <p className="text-3xl font-bold">Special Products</p>
                  <p className="text-xl font-semibold max-w-xs">Deal of the Month</p>
                </div>
                <button className="bg-black text-green-500 px-6 py-2 rounded-full font-bold text-sm hover:bg-green-500 hover:text-black transition duration-300 transform hover:scale-105 w-max">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>
        <Features/>
      </header>
    </>
  );
}

export default Header;

// src/App.js
import ProductCard from '@/Components/ProductCard';
import LayoutShopCard from '@/Components/Shop/LayoutShopCard';
import Sidebar from '@/Components/Shop/Sidebar';
import React from 'react';


const Shop = () => {
  return (
    <div className="flex">
      <Sidebar />
      <LayoutShopCard/>
    </div>
  );
};

export default Shop;

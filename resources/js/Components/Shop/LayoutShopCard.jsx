import ProductCard from '@/Components/ProductCard';
import ProductDetail from '@/Components/ProductDetail';
import React, { useState } from 'react';

const products = [
  {
    name: 'Fresh Broccoli',
    price: 2.99,
    originalPrice: 3.99,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Organic Carrots',
    price: 1.99,
    originalPrice: null,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Crisp Lettuce',
    price: 1.49,
    originalPrice: 1.99,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Red Bell Peppers',
    price: 3.49,
    originalPrice: 4.99,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Cherry Tomatoes',
    price: 2.99,
    originalPrice: null,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Green Beans',
    price: 2.49,
    originalPrice: 2.99,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Fresh Spinach',
    price: 1.99,
    originalPrice: 2.49,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Zucchini',
    price: 1.79,
    originalPrice: null,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Yellow Squash',
    price: 1.89,
    originalPrice: 2.29,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Brussels Sprouts',
    price: 3.29,
    originalPrice: 3.99,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Asparagus Bundle',
    price: 3.99,
    originalPrice: 4.99,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Cauliflower Head',
    price: 2.79,
    originalPrice: null,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Eggplant',
    price: 1.99,
    originalPrice: 2.49,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Sweet Corn',
    price: 0.79,
    originalPrice: 0.99,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
  {
    name: 'Red Onions',
    price: 1.29,
    originalPrice: null,
    image: 'https://i.pinimg.com/564x/61/86/82/61868225f7c50a312ed7a33c48bece8c.jpg',
    inStock: true,
  },
];

const LayoutShopCard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} onClick={() => handleCardClick(product)} />
      ))}
      {selectedProduct && <ProductDetail product={selectedProduct} onClose={handleCloseDetail} />}
    </div>
  );
};

export default LayoutShopCard;

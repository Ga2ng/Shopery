import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import ProductDetail from '../ProductDetail';

const products = [
  { name: 'Green Apple', price: '$14.99', oldPrice: '$29.99', image: 'https://i.pinimg.com/564x/11/c7/10/11c710e964432708cba581b68a931cfd.jpg' },
  { name: 'Fresh Indian Minta', price: '$20.00', image: 'https://i.pinimg.com/564x/11/c7/10/11c710e964432708cba581b68a931cfd.jpg' },
  { name: 'Chinese Cabbage', price: '$12.00', image: 'https://i.pinimg.com/564x/11/c7/10/11c710e964432708cba581b68a931cfd.jpg' },
  { name: 'Green Lettuce', price: '$9.00', image: 'https://i.pinimg.com/564x/11/c7/10/11c710e964432708cba581b68a931cfd.jpg' },
  { name: 'Eggplant', price: '$34.00', image: 'https://i.pinimg.com/564x/11/c7/10/11c710e964432708cba581b68a931cfd.jpg' },
  { name: 'Big Potatoes', price: '$12.00', image: 'https://i.pinimg.com/564x/11/c7/10/11c710e964432708cba581b68a931cfd.jpg' },
  { name: 'Corn', price: '$12.00', image: 'https://i.pinimg.com/564x/11/c7/10/11c710e964432708cba581b68a931cfd.jpg' },
  { name: 'Fresh Cauliflower', price: '$12.00', image: 'https://i.pinimg.com/564x/11/c7/10/11c710e964432708cba581b68a931cfd.jpg' },
  { name: 'Green Capsicum', price: '$30.00', oldPrice: '$50.00', image: 'https://i.pinimg.com/564x/11/c7/10/11c710e964432708cba581b68a931cfd.jpg' },
  { name: 'Green Chilli', price: '$34.00', image: 'https://i.pinimg.com/564x/11/c7/10/11c710e964432708cba581b68a931cfd.jpg' },
];

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Popular Products</h2>
          {/* <div className="w-24 h-1 bg-green-500 mx-auto"></div> */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} onClick={() => handleCardClick(product)} />
          ))}
        </div>
      </div>
      {selectedProduct && <ProductDetail product={selectedProduct} onClose={handleCloseDetail} />}
    </div>
  );
}

export default Products;

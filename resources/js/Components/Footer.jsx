// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-green-500 font-bold text-lg">Ecobazar</h2>
          <p className="mt-4 text-sm">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
          </p>
          <div className="mt-4">
            <p>(219) 555-0114</p>
            <p>Proxy@gmail.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold">My Account</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>My Account</li>
            <li>Order History</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold">Helps</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Contact</li>
            <li>FAQs</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold">Proxy</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>About</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold">Categories</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Fruit & Vegetables</li>
            <li>Meat & Fish</li>
            <li>Bread & Bakery</li>
            <li>Beauty & Health</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs">&copy; Ecobazar eCommerce &copy; 2021. All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* <img src="apple-pay.png" alt="Apple Pay" className="h-6" />
          <img src="visa.png" alt="Visa" className="h-6" />
          <img src="discover.png" alt="Discover" className="h-6" />
          <img src="mastercard.png" alt="MasterCard" className="h-6" />
          <img src="secure-payment.png" alt="Secure Payment" className="h-6" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Components/Layout.jsx
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';


const MainLayout = ({ children }) => {
  const currentRoute = window.location.pathname;
  const hideNavbarRoutes = ['/', '/login', '/register', '/forgot-password'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(currentRoute);

  return (
    <div className="min-h-screen flex flex-col">
      {shouldShowNavbar && <Navbar />}
      <main className={`flex-grow ${hideNavbarRoutes.includes(currentRoute) ? 'pt-0' : 'pt-[9rem]'}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

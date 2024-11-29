import Navbar from '@/Components/Navbar';
import React from 'react';


export default function Test() {
  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-white rounded shadow-md">
      <Navbar></Navbar>
      <header className="mb-4">
        <h1 className="text-3xl font-bold mb-2">Test Page</h1>
      </header>
      <main className="flex flex-col justify-center">
        <section className="mb-4 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2">Section 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </section>
        <section className="mb-4 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2">Section 2</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </section>
      </main>
      <footer className="text-center p-4">
        <p className="text-gray-600">&copy; 2023 Test Page</p>
      </footer>
      <img src={"/assets/download.jpeg"} alt="he mbot" />
    </div>
  );
};

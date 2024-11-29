// AuthLayout.jsx
import React from "react";

export default function AuthLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <section
                className="w-1/2 bg-cover bg-center text-white"
                style={{ backgroundImage: "url('/assets/welcome.jpg')" }}
            >
                {/* Left side with full-height image */}
                <div className="flex flex-col justify-center h-full p-12">
                    <h1 className="text-5xl font-bold mb-8">Fresh & Healthy Organic Food</h1>
                    <div className="bg-black bg-opacity-30 p-8 rounded-lg">
                        <div className="mb-4">
                            <h2 className="text-2xl font-semibold">Sale up to</h2>
                            <h2 className="text-6xl font-bold text-yellow-400">30% OFF</h2>
                        </div>
                        <p className="text-xl">Free shipping on all your order.</p>
                    </div>
                </div>
            </section>
            <section className="w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8">{children}</div>
            </section>
        </div>
    );
}

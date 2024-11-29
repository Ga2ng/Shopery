import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">About Us</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                            alt="Team" 
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-green-600 mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            We are committed to providing sustainable and eco-friendly solutions 
                            that make a positive impact on our planet. Our team of dedicated 
                            professionals works tirelessly to innovate and create products that 
                            not only meet the needs of our customers but also contribute to a 
                            greener future.
                        </p>
                        <h2 className="text-3xl font-semibold text-green-600 mb-4">Our Values</h2>
                        <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed">
                            <li>Sustainability</li>
                            <li>Innovation</li>
                            <li>Integrity</li>
                            <li>Customer-centric approach</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-semibold text-green-600 mb-8 text-center">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((member) => (
                            <div key={member} className="bg-green-50 p-6 rounded-lg shadow-md">
                                <img 
                                    src={`https://randomuser.me/api/portraits/men/${member}.jpg`}
                                    alt={`Team Member ${member}`}
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-green-700 text-center mb-2">John Doe</h3>
                                <p className="text-gray-600 text-center">Co-founder & CEO</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 bg-green-600 text-white p-8 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Join Our Mission</h2>
                    <p className="text-center mb-8">
                        Be part of our journey towards a sustainable future. 
                        Together, we can make a difference.
                    </p>
                    <div className="text-center">
                        <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { MdFavoriteBorder } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link } from "@inertiajs/react";
import Button from "./Button";

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            {/* <section className="bg-gray-100 text-gray-700 flex justify-between items-center py-2 px-6 text-sm">
                <div className="flex items-center">
                    <span className="material-icons">place</span>
                    <span>
                        Store Location: Simorejo WKwkwk
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <span>ID</span>
                    <span>RP</span>
                    <span>Sign in / Sign Up</span>
                </div>
            </section> */}
            <div className="bg-white shadow-md flex justify-between items-center py-4 px-6">
                <div className="flex items-center space-x-4">
                    <Logo />
                    <div className="relative">
                        <input
                            type="text"
                            className="border rounded-full pl-4 pr-16 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Search"
                        />
                        <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full px-3 py-1 text-sm">
                            Search
                        </Button>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="material-icons text-2xl hover:text-green-600 cursor-pointer">
                        <MdFavoriteBorder />
                    </span>
                    <div className="h-8 w-px bg-green-600 mx-2"></div>
                    <div className="flex items-center space-x-2">
                        <span className="material-icons text-2xl hover:text-green-600 cursor-pointer relative">
                            <BsHandbag />
                            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                1
                            </span>
                        </span>
                        <div>
                            <p className="text-sm">Shopping Cart : </p>
                            <p className="font-semibold">$57.00</p>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-green-600 mx-2"></div>
                    <span className="material-icons">admin</span>
                    <span>terserah@gmail.com</span>
                    <div className="h-8 w-px bg-green-600 mx-2"></div>
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            axios.post(route("logout")).then(() => {
                                window.location.reload();
                            });
                        }}
                        className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
                    >
                        <FiLogOut className="text-lg" />
                        <span>Logout</span>
                    </Button>
                </div>
            </div>
            <section className="bg-gray-800 text-white py-2 px-6">
                <div className="flex space-x-6">
                    <a href="/home" className="hover:underline">
                        Home
                    </a>
                    <a href="/shop" className="hover:underline">
                        Shop
                    </a>
                    {/* <a href="#" className="hover:underline">
                        Pages
                    </a> */}
                    <a href="/blog" className="hover:underline">
                        Blog
                    </a>
                    <a href="/about" className="hover:underline">
                        About Us
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Navbar;

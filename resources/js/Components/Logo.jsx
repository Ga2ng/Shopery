import React from 'react';

const Logo = ({ className, imageClassName, textClassName }) => {
    return (
        <div className={`flex items-center ${className}`}>
            <img
                src="assets/leaf.svg"
                alt="Logo"
                className={`h-8 mr-2 ${imageClassName}`}
            />
            <h1 className={`font-bold text-2xl text-green-600 ${textClassName}`}>
                Shopery
            </h1>
        </div>
    );
};

export default Logo;

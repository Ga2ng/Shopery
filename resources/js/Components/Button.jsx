import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  className = '', 
  disabled = false,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  bgColor,
  textColor,
  ...props
}) => {
  const baseClasses = 'rounded-full font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: `bg-${bgColor} text-${textColor} focus:ring-${bgColor}`,
    secondary: `bg-${bgColor} text-${textColor} focus:ring-${bgColor}`,
    outline: `bg-transparent border border-${bgColor} text-${textColor} focus:ring-${bgColor}`,
  };

  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button> 
  );
};

export default Button

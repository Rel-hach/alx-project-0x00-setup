import React from 'react';
import { ButtonProps } from '../interfaces';

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
    // Enhanced size classes with better proportions
    const sizeClasses = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    };

    // Shape classes with more modern rounded options
    const shapeClasses = {
        rounded: 'rounded-lg',
        pill: 'rounded-full',
        square: 'rounded-none'
    };

    // Gradient background with hover effect
    const className = `
        bg-gradient-to-r from-indigo-500 to-purple-600 
        text-white font-medium tracking-wide
        ${sizeClasses[size]} 
        ${shapeClasses[shape]}
        shadow-md hover:shadow-lg 
        transform hover:-translate-y-0.5 
        transition-all duration-200
        hover:from-indigo-600 hover:to-purple-700
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50
    `;

    return <button className={className}>{title}</button>;
};

export default Button;
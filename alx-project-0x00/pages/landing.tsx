// Button component
const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
    const sizeClasses = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    };

    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full',
    };

    const className = `
        bg-gradient-to-r from-indigo-500 to-purple-600 
        text-white font-medium
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        shadow-md hover:shadow-lg
        transition-all duration-200
        hover:from-indigo-600 hover:to-purple-700
    `;

    return <button className={className}>{title}</button>;
};
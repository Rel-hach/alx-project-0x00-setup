import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Discover Your Perfect Stay
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Luxury villas, cozy apartments, and unique homes for your next adventure
                </p>
            </div>

            {/* Property Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <Card />
                <Card />
                <Card />
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap justify-center gap-4">
                <Button 
                    title="Check Availability" 
                    size="medium" 
                    shape="rounded-sm"
                />
                <Button 
                    title="Book Now" 
                    size="medium" 
                    shape="rounded-md"
                />
                <Button 
                    title="$120/night" 
                    size="medium" 
                    shape="rounded-full"
                />
            </div>
        </div>
    );
};

export default Landing;
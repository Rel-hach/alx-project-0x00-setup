import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-extralight mb-6">Available Listings</h1>

            {/* Property Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <Card />

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
                <Button title="Check Availability" size="medium" shape="rounded-sm " styles="rounded-lg" />
                <Button title="Book Now" size="medium" shape="rounded-md" styles="rounded-lg" />
                <Button title="$120/night" size="medium" shape="rounded-full" styles="rounded-lg" />

            </div>
        </div>
    );
};

export default Landing;

import Image from "next/image"
import HOUSE_IMAGE from "@/public/assets/images/house.png"
import STAR_IMAGE from "@/public/assets/images/star.png"
import React from "react"
import Pill from "./Pill"

const Card: React.FC = () => {
    return (
        <div className="w-[380px] cursor-pointer group">
            {/* Image container with hover zoom effect */}
            <div className="relative overflow-hidden rounded-2xl mb-4 h-[300px]">
                <Image 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    src={HOUSE_IMAGE} 
                    alt="Modern beach villa"
                    fill
                />
                {/* Floating price tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    <span className="font-bold text-purple-700">$2,450</span>
                    <span className="text-xs text-gray-500">/night</span>
                </div>
            </div>

            {/* Pills container */}
            <div className="flex gap-2 mb-3">
                <Pill title="Top Villa" variant="primary" />
                <Pill title="Self CheckIn" variant="secondary" />
                <Pill title="Free Reschedule" variant="tertiary" />
            </div>

            {/* Content */}
            <div className="space-y-2">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Villa Arrecife Beach House</h3>
                        <p className="text-gray-500 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            Sideman, Bali, Indonesia
                        </p>
                    </div>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                        <Image src={STAR_IMAGE} alt="star" width={16} height={16} />
                        <span className="ml-1 font-medium">4.76</span>
                    </div>
                </div>

                {/* Features */}
                <div className="flex justify-between items-center pt-2">
                    <div className="flex space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            4 guests
                        </span>
                        <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H5a1 1 0 010-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2
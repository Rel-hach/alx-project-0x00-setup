const About: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our Story
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        Redefining Luxury Stays Since 2015
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Founded with a passion for exceptional hospitality, LuxeStays has grown from a single villa in Bali to a global collection of premium properties.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        Our mission is to connect discerning travelers with extraordinary homes that offer more than just a place to stay, but truly memorable experiences.
                    </p>
                    <Button 
                        title="Meet Our Team" 
                        size="medium" 
                        shape="pill" 
                        variant="secondary"
                    />
                </div>
                <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video">
                    {/* Placeholder for image or video */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
                        <span className="text-gray-400">Property showcase</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
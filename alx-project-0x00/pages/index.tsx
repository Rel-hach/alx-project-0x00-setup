const Home: React.FC = () => {
    return (
        <main className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                        Airbnb Application Clone System
                    </span>
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-indigo-100">
                    Discover premium vacation rentals with world-class amenities and unforgettable experiences
                </p>
                <Button 
                    title="Browse Properties →" 
                    size="large" 
                    shape="pill" 
                    className="shadow-lg hover:shadow-xl"
                />
            </div>
        </main>
    )
}

export default Home;
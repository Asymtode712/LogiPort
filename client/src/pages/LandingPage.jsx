import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">LogiPort</h1>
          <div className="space-x-4">
            <Link to="/login" className="hover:text-blue-200 transition">Login</Link>
            <Link to="/register" className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition">Sign Up</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold mb-6">Book Your Ride with Ease</h2>
        <p className="text-xl mb-8">Choose from a wide range of vehicles and get to your destination in style.</p>
        <Link to="/booking" className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition">
          Book Now
        </Link>
      </main>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Van', 'Truck', 'Bike'].map((vehicle) => (
            <div key={vehicle} className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{vehicle}</h3>
              <p className="mb-4">Perfect for {vehicle === 'Van' ? 'group travel' : vehicle === 'Truck' ? 'heavy loads' : 'quick trips'}.</p>
              <Link to="/booking" className="text-blue-300 hover:text-blue-100 transition">Book a {vehicle}</Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-blue-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 LogiPort. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
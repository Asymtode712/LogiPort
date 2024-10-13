import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCardIcon, ScaleIcon, CalendarIcon, MapPinIcon} from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = !localStorage.getItem('token'); 
  const handleBookingClick = () => {
    if (isLoggedIn) {
      navigate('/booking');
    } else {
      navigate('/login');
    }
  };

  const handleTrackingClick = () => {
    if (isLoggedIn) {
      navigate('/tracking');
    } else {
      navigate('/login');
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <img className="h-12 w-auto" src="fast-delivery.svg" alt="" />
              <h1 className="text-2xl text-blue-600 font-bold">LogiPort</h1>
            </div>
            <div className="flex items-center">
              <button onClick={handleBookingClick} className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Login</button>
              <button onClick={handleTrackingClick} className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Revolutionizing Logistics
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Connect with our fleet of drivers to transport your goods efficiently and securely. 
            Real-time availability, competitive pricing, and live tracking at your fingertips.
          </p>
          <div className="mt-10 sm:flex">
            <Link to="/booking" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition">
              Book Now
            </Link>
            <Link to="/tracking" className="mt-3 sm:mt-0 sm:ml-3 bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-400 transition">
              Track Shipment
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to ship your goods
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Real-time Availability',
                  description: 'See available vehicles in your area instantly and book with a click.',
                  icon: 'calendar',
                },
                {
                  name: 'Live Tracking',
                  description: 'Track your shipment in real-time from pickup to delivery.',
                  icon: 'location-marker',
                },
                {
                  name: 'Secure Payments',
                  description: 'Safe and secure payment processing for peace of mind.',
                  icon: 'credit-card',
                },
                {
                  name: 'Scalable Solutions',
                  description: 'Whether you\'re an individual or a large corporation, we\'ve got you covered.',
                  icon: 'scale',
                },
              ].map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      {feature.icon === 'credit-card' && <CreditCardIcon className="h-6 w-6" aria-hidden="true" />}
                      {feature.icon === 'scale' && <ScaleIcon className="h-6 w-6" aria-hidden="true" />}
                      {feature.icon === 'calendar' && <CalendarIcon className="h-6 w-6" aria-hidden="true" />}
                      {feature.icon === 'location-marker' && <MapPinIcon className="h-6 w-6" aria-hidden="true" />}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Sign up now and ship with ease.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Join thousands of satisfied customers who trust us with their logistics needs.
          </p>
          <Link
            to="/register"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Sign up for free
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {['About', 'Blog', 'Jobs', 'Press', 'Accessibility', 'Partners'].map((item) => (
              <div key={item} className="px-5 py-2">
                <a href="/" className="text-base text-gray-400 hover:text-gray-300">
                  {item}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2024 LogiPort, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
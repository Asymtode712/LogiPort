import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const vehicleTypes = [
  { type: 'Van', icon: '🚐', capacity: 'Up to 1000 kg', volume: '10 m³' },
  { type: 'Light Truck', icon: '🚚', capacity: 'Up to 3500 kg', volume: '20 m³' },
  { type: 'Heavy Truck', icon: '🚛', capacity: 'Up to 26000 kg', volume: '40 m³' },
];

function LogisticsBooking() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [goods, setGoods] = useState('');
  const [weight, setWeight] = useState('');
  const [volume, setVolume] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [price, setPrice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted');
  };

  const calculatePrice = () => {
    // This is where you'd implement your pricing logic
    // For now, we'll just set a dummy price
    setPrice(Math.floor(Math.random() * 500) + 100);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-6">
          <h2 className="text-3xl font-bold text-white">Book Your Logistics Service</h2>
          <p className="mt-2 text-blue-100">Fast, reliable transportation for your goods</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">Pickup Location</label>
              <input
                type="text"
                id="pickup"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700">Drop-off Location</label>
              <input
                type="text"
                id="dropoff"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                id="date"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                id="time"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {vehicleTypes.map((vType) => (
                <div
                  key={vType.type}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    vehicle === vType.type ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'
                  }`}
                  onClick={() => setVehicle(vType.type)}
                >
                  <div className="text-3xl mb-2">{vType.icon}</div>
                  <h3 className="font-semibold">{vType.type}</h3>
                  <p className="text-sm text-gray-600 mt-1">Capacity: {vType.capacity}</p>
                  <p className="text-sm text-gray-600">Volume: {vType.volume}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="goods" className="block text-sm font-medium text-gray-700">Goods Description</label>
              <input
                type="text"
                id="goods"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={goods}
                onChange={(e) => setGoods(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Total Weight (kg)</label>
              <input
                type="number"
                id="weight"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="volume" className="block text-sm font-medium text-gray-700">Total Volume (m³)</label>
              <input
                type="number"
                id="volume"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">Special Instructions</label>
            <textarea
              id="specialInstructions"
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={calculatePrice}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Calculate Price
            </button>
            {price && (
              <div className="text-2xl font-bold text-green-600">
                Estimated Price: ${price}
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Book Now
            </button>
            <Link to="/tracking" className="text-blue-600 hover:text-blue-800">
              Track your shipment
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogisticsBooking;
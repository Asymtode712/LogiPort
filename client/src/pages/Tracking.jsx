import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');  // Backend server

function LogisticsTracking() {
  const [shipment, setShipment] = useState({
    id: 'SHP123456',
    status: 'In Transit',
    location: { lat: 40.7128, lng: -74.0060 },
    eta: '2023-06-15 14:30',
    origin: 'New York, NY',
    destination: 'Los Angeles, CA',
    driver: { name: 'John Doe', phone: '+1 (555) 123-4567' },
    vehicle: { type: 'Heavy Truck', plate: 'XYZ 789' },
    goods: 'Electronics',
    weight: '5000 kg',
    volume: '20 m³',
    progress: 70
  });

  useEffect(() => {
    socket.on('shipmentUpdate', (data) => {
      setShipment(prevShipment => ({ ...prevShipment, ...data }));
    });

    return () => {
      socket.off('shipmentUpdate');
    };
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-500';
      case 'In Transit': return 'bg-blue-500';
      case 'Delivered': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-6">
          <h2 className="text-3xl font-bold text-white">Shipment Tracking</h2>
          <p className="mt-2 text-blue-100">Real-time updates on your cargo</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Shipment ID: {shipment.id}</h3>
            </div>
            <div className={`px-4 py-2 rounded-full text-white font-semibold ${getStatusColor(shipment.status)}`}>
              {shipment.status}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Current Location</h3>
              <p className="text-gray-700">Latitude: {shipment.location.lat.toFixed(6)}</p>
              <p className="text-gray-700">Longitude: {shipment.location.lng.toFixed(6)}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Estimated Time of Arrival</h3>
              <p className="text-2xl font-bold text-green-600">{shipment.eta}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Origin</h3>
              <p className="text-gray-700">{shipment.origin}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Destination</h3>
              <p className="text-gray-700">{shipment.destination}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4">Driver Information</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700"><span className="font-semibold">Name:</span> {shipment.driver.name}</p>
              <p className="text-gray-700"><span className="font-semibold">Phone:</span> {shipment.driver.phone}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4">Vehicle Information</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700"><span className="font-semibold">Type:</span> {shipment.vehicle.type}</p>
              <p className="text-gray-700"><span className="font-semibold">Plate Number:</span> {shipment.vehicle.plate}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4">Cargo Details</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700"><span className="font-semibold">Goods:</span> {shipment.goods}</p>
              <p className="text-gray-700"><span className="font-semibold">Weight:</span> {shipment.weight}</p>
              <p className="text-gray-700"><span className="font-semibold">Volume:</span> {shipment.volume}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4">Journey Progress</h3>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {shipment.progress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: `${shipment.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4">Shipment Updates</h3>
            <div className="space-y-4">
              {/* This would be populated with real updates from your backend */}
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">2023-06-14 10:30</p>
                <p className="text-gray-700">Shipment departed from origin facility</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">2023-06-14 08:15</p>
                <p className="text-gray-700">Shipment arrived at origin facility</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">2023-06-13 14:45</p>
                <p className="text-gray-700">Shipment picked up from sender</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogisticsTracking;
import React from "react";
import { Package, Truck, MapPin, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Package className="w-10 h-10 text-blue-600" />,
    title: "Order Placed",
    description: "Your order has been confirmed and is being processed."
  },
  {
    id: 2,
    icon: <Truck className="w-10 h-10 text-blue-600" />,
    title: "On the Way",
    description: "Your package is out for delivery with our courier."
  },
  {
    id: 3,
    icon: <MapPin className="w-10 h-10 text-blue-600" />,
    title: "Almost There",
    description: "Your package is near your delivery address."
  },
  {
    id: 4,
    icon: <CheckCircle className="w-10 h-10 text-green-600" />,
    title: "Delivered",
    description: "Package delivered successfully to your doorstep."
  }
];

const Delivery = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Track Your Delivery
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay updated with the real-time status of your order. Fast, secure, and reliable delivery at your convenience.
        </p>
      </section>

      {/* Tracking Info */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {/* Order Info Card */}
       

        {/* Delivery Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Real-Time Tracking</h2>
        <p className="text-gray-600 mb-6">Track your order on the live map below.</p>
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Delivery Map"
            src="https://www.google.com/maps/embed/"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Delivery;

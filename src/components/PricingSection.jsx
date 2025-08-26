import React from "react";
import { CheckCircle, MinusCircle } from "lucide-react";

const PricingCard = ({ title, desc, price, options }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800 capitalize">{title}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-extrabold text-gray-900">{price[0]}{price[1]}</span>
        <span className="text-gray-500 text-lg font-semibold">/{price[2]}</span>
      </div>
      <ul className="flex flex-col gap-3 mb-6">
        {options.map((option, key) => (
          <li key={key} className="flex items-center gap-3 text-gray-700">
            {option.icon}
            <span className="text-sm">{option.info}</span>
          </li>
        ))}
      </ul>
      <button className="w-full rounded-xl bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-600 transition">
        Get Started
      </button>
    </div>
  );
};

const PricingSection = () => {
  const cards = [
    {
      title: "Starter",
      desc: "Perfect for individuals or small families",
      price: ["$", "129", "month"],
      options: [
        { icon: <CheckCircle size={20} className="text-blue-700" />, info: "1,000 Liters(1 tank)" },
        { icon: <CheckCircle size={20} className="text-blue-700" />, info: "Free Delivery" },
        { icon: <MinusCircle size={20} className="text-gray-400" />, info: "Priority Support" },
        { icon: <MinusCircle size={20} className="text-gray-400" />, info: "Scheduled Delivery" },
      ],
    },
    {
      title: "Premium",
      desc: "Best for medium-sized households",
      price: ["$", "299", "month"],
      options: [
        { icon: <CheckCircle size={20} className="text-blue-700" />, info: "3,000 Water Bottles (3 tanks)" },
        { icon: <CheckCircle size={20} className="text-blue-700" />, info: "Free Delivery" },
        { icon: <CheckCircle size={20} className="text-blue-700" />, info: "Scheduled Delivery" },
        { icon: <MinusCircle size={20} className="text-gray-400" />, info: "Priority Support" },
      ],
    },
    {
      title: "Business",
      desc: "For offices or large families",
      price: ["$", "499", "month"],
      options: [
        { icon: <CheckCircle size={20} className="text-blue-700" />, info: "Unlimited Water Supply" },
        { icon: <CheckCircle size={20} className="text-blue-700" />, info: "Free Delivery" },
        { icon: <CheckCircle size={20} className="text-blue-700" />, info: "Scheduled Delivery" },
        { icon: <CheckCircle size={20} className="text-blue-700" />, info: "Priority Support" },
      ],
    },
  ];

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="container mx-auto text-center max-w-5xl">
        <h2 className="text-blue-700 font-bold text-lg mb-3">Pricing Plans</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Choose the Perfect Plan for Your Water Needs
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Stay hydrated without hassle. Compare our plans and select the one that fits your lifestyle.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>

        <p className="mt-10 text-gray-500 text-sm">
          All plans include 24/7 customer support and flexible delivery schedules.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

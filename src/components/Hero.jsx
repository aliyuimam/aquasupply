import { Truck, Home } from 'lucide-react';

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('../water.jpg')" }}
      >
        {/* Dark overlay behind the text */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10 text-white">
          <h1 className="mt-5 text-3xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Order <span className="font-bold text-blue-300">Clean Water</span> <br />
            Delivered to Your Door
          </h1>
          <p className="mx-auto mt-6 max-w-md text-gray-200">
            Fast, affordable, and safe drinking water at your convenience. Stay hydrated without leaving your home.
          </p>
        </div>
        
        <div className="relative mt-10 z-10 text-center">
          <a
            href="/order"
            className="inline-block rounded-xl bg-blue-700 px-10 py-3 font-medium text-white hover:bg-blue-600 transition-colors"
          >
            Order Now
          </a>
        </div>
        
        {/* Features Section */}
        <div className="relative mt-16 mb-16 flex flex-col items-center justify-center divide-y divide-gray-300 sm:flex-row sm:divide-x sm:divide-y-0 md:mt-1 bg-white/70 rounded-xl p-6 max-w-3xl mx-auto backdrop-blur-md z-10">
          <div className="flex max-w-xs space-x-2 px-4 py-4">
            <Home className="text-blue-600 w-6 h-6 flex-shrink-0" />
            <p className="text-gray-600">Affordable water plans for every household</p>
          </div>
          <div className="flex max-w-xs space-x-2 px-4 py-4">
            <Truck className="text-blue-600 w-6 h-6 flex-shrink-0" />
            <p className="text-gray-600">Fast home delivery at your convenience</p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Hero;
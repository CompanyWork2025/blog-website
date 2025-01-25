import React from "react";
import bgImage from "../../assets/banner2.png";

const SubscriptionForm = () => {
  return (
    <div
      className="relative w-full h-64 mt-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute top-0 left-0 right-0 p-8 text-center text-white">
        <h1 className="text-lg lg:text-5xl font-bold mb-4">Get our stories delivered From us to your inbox weekly.</h1>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full px-8">
        <div className="flex justify-center items-center space-x-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-lg border border-gray-300 w-[500px]"
          />
          <button className="bg-purple-500 text-white px-4 py-3 rounded-r-lg">Subscribe</button>
        </div>
        <p className="text-center text-white mt-6">
          Get the latest updates directly to your inbox.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionForm;

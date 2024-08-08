"use client"
import { useState } from "react";

function OrganizationCards() {
    const organizations = [
      { name: "Amsterdam Organization", color: "bg-green-100" },
      { name: "Rotterdam Organization", color: "bg-yellow-100" },
      { name: "Utrecht Organization", color: "bg-red-100" },
      { name: "The Hague Organization", color: "bg-blue-100" },
      { name: "Eindhoven Organization", color: "bg-purple-100" },
      { name: "Groningen Organization", color: "bg-pink-100" },
    ];
  
    const [startIndex, setStartIndex] = useState(0);
  
    const handlePrev = () => {
      setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };
  
    const handleNext = () => {
      setStartIndex((prevIndex) => Math.min(organizations.length - 3, prevIndex + 1));
    };
  
    return (
      <div className="relative">
        <div className="flex space-x-4 overflow-hidden">
          {organizations.slice(startIndex, startIndex + 3).map((org, index) => (
            <div
              key={index}
              className={`${org.color} rounded-lg p-6 w-80 flex-shrink-0 transition-all duration-300 ease-in-out`}
            >
              <h3 className="text-lg font-semibold mb-2">{org.name}</h3>
              <p className="text-sm text-gray-600 mb-4">*Location</p>
              <p className="text-sm mb-4">*Overview about the organization</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded">
                Details
              </button>
            </div>
          ))}
        </div>
        <button
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md ${
            startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md ${
            startIndex >= organizations.length - 3 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleNext}
          disabled={startIndex >= organizations.length - 3}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  }

  export default OrganizationCards
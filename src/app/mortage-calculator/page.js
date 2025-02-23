"use client";
import { useState } from "react";

export default function MortgageCalculator() {
  const [monthlyPayment, setMonthlyPayment] = useState(2000);
  const homePrice = Math.round(monthlyPayment * 140);
  const downPayment = Math.round(homePrice * 0.2);

  const handleSliderChange = (e) => {
    setMonthlyPayment(Number(e.target.value));
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Mortgage Calculator</h1>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-medium">Home Price</label>
          <input
            type="text"
            value={`$${homePrice.toLocaleString()}`}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-md text-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-medium">Monthly Payment</label>
          <div className="flex items-center">
            <input
              type="text"
              value={`$${monthlyPayment.toLocaleString()}/mo`}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md text-lg"
            />
          </div>
          <input
            type="range"
            min="500"
            max="5000"
            step="50"
            value={monthlyPayment}
            onChange={handleSliderChange}
            className="w-full mt-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-lg font-medium">ZIP Code</label>
            <input
              type="text"
              placeholder="Enter ZIP"
              className="w-full p-3 border border-gray-300 rounded-md text-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-medium">Down Payment</label>
            <input
              type="text"
              value={`$${downPayment.toLocaleString()}`}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-700 text-lg font-medium">Interest Rate</label>
            <input
              type="text"
              placeholder="e.g. 6.5%"
              className="w-full p-3 border border-gray-300 rounded-md text-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-medium">Length of Loan</label>
            <select className="w-full p-3 border border-gray-300 rounded-md text-lg">
              <option value="30">30 years</option>
              <option value="20">20 years</option>
              <option value="15">15 years</option>
              <option value="10">10 years</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-green-600 text-white p-3 rounded-md text-lg mt-6 hover:bg-green-700">
          Get Pre-Approved
        </button>
      </div>
    </main>
  );
}




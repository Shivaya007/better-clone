'use client';
import { useState } from 'react';

export default function MortgageCalculator() {
  const [formData, setFormData] = useState({
    homePrice: '',
    downPayment: '',
    loanTerm: '30',
    interestRate: '',
    propertyTax: '',
    zipCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    // Add mortgage calculation logic here
    console.log('Calculating with data:', formData);
  };

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Mortgage Calculator</h1>
        <form onSubmit={handleCalculate} className="space-y-6">
          <div>
            <label className="block mb-2">Home Price</label>
            <input
              type="number"
              name="homePrice"
              value={formData.homePrice}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          {/* Add more form fields */}
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
            Calculate
          </button>
        </form>
      </div>
    </main>
  );
}
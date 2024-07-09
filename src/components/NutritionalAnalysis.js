import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const NutritionalAnalysis = () => {
  const [ingredients, setIngredients] = useState('');
  const [nutritionData, setNutritionData] = useState(null);

  const analyzeNutrition = () => {
    const mockData = [
      { name: 'Calories', amount: 350, unit: 'kcal' },
      { name: 'Protein', amount: 15, unit: 'g' },
      { name: 'Carbs', amount: 40, unit: 'g' },
      { name: 'Fat', amount: 12, unit: 'g' },
      { name: 'Fiber', amount: 5, unit: 'g' },
    ];
    setNutritionData(mockData);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Nutritional Analysis</h1>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block mb-2">Enter ingredients (comma-separated):</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
        />
      </div>
      <button
        onClick={analyzeNutrition}
        className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300"
      >
        Analyze Nutrition
      </button>
      {nutritionData && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Nutritional Information</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={nutritionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Suggestions for Improvement</h3>
              <ul className="list-disc pl-5">
                <li>Consider adding more fiber-rich ingredients to increase your fiber intake.</li>
                <li>Try to reduce the amount of saturated fats by using healthier oil alternatives.</li>
                <li>Include more lean protein sources to balance your macronutrients.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionalAnalysis;

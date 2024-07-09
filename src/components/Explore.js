import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const cuisines = ['Italian', 'Thai', 'Japanese', 'Mexican', 'Indian', 'American'];
const dietaryRestrictions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free'];
const cookingTimes = ['Under 30 minutes', '30-60 minutes', 'Over 60 minutes'];

const chefs = [
  { name: 'Luca Rossi', specialty: 'Italian Cuisine' },
  { name: 'Anurak Phan', specialty: 'Thai Cuisine' },
  { name: 'Haruto Tanaka', specialty: 'Japanese Cuisine' },
];

const recipes = [
  { name: 'Spaghetti Carbonara', chef: 'Luca Rossi', cuisine: 'Italian', time: 'Under 30 minutes', restrictions: ['Dairy-Free'] },
  { name: 'Pad Thai', chef: 'Anurak Phan', cuisine: 'Thai', time: '30-60 minutes', restrictions: ['Gluten-Free'] },
  { name: 'Sushi Rolls', chef: 'Haruto Tanaka', cuisine: 'Japanese', time: 'Over 60 minutes', restrictions: ['Dairy-Free'] },
  { name: 'Tacos', chef: 'Carlos Lopez', cuisine: 'Mexican', time: '30-60 minutes', restrictions: ['Nut-Free'] },
  { name: 'Paneer Butter Masala', chef: 'Priya Singh', cuisine: 'Indian', time: 'Over 60 minutes', restrictions: ['Vegetarian'] },
  { name: 'Vegan Burger', chef: 'Alex Johnson', cuisine: 'American', time: 'Under 30 minutes', restrictions: ['Vegan'] },
];

const Explore = () => {
  const [filters, setFilters] = useState({
    cuisine: [],
    dietaryRestrictions: [],
    cookingTime: [],
  });

  const [expandedFilters, setExpandedFilters] = useState({
    cuisine: false,
    dietaryRestrictions: false,
    cookingTime: false,
  });

  const toggleFilter = (category, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value)
        ? prevFilters[category].filter(item => item !== value)
        : [...prevFilters[category], value]
    }));
  };

  const toggleExpand = (category) => {
    setExpandedFilters(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredRecipes = recipes.filter(recipe => 
    (filters.cuisine.length === 0 || filters.cuisine.includes(recipe.cuisine)) &&
    (filters.cookingTime.length === 0 || filters.cookingTime.includes(recipe.time)) &&
    (filters.dietaryRestrictions.length === 0 || 
      filters.dietaryRestrictions.every(restriction => recipe.restrictions.includes(restriction)))
  );

  const FilterSection = ({ title, options, category }) => (
    <div className="mb-4">
      <button 
        className="flex justify-between items-center w-full text-left font-semibold mb-2"
        onClick={() => toggleExpand(category)}
      >
        {title}
        {expandedFilters[category] ? <ChevronUp /> : <ChevronDown />}
      </button>
      {expandedFilters[category] && (
        <div className="space-y-2">
          {options.map(option => (
            <label key={option} className="flex items-center">
              <input
                type="checkbox"
                checked={filters[category].includes(option)}
                onChange={() => toggleFilter(category, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );

  const recipesByCuisine = filteredRecipes.reduce((acc, recipe) => {
    if (!acc[recipe.cuisine]) {
      acc[recipe.cuisine] = [];
    }
    acc[recipe.cuisine].push(recipe);
    return acc;
  }, {});

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-orange-600">Explore Recipes and Chefs</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <h2 className="text-2xl font-semibold mb-4 text-orange-600">Filters</h2>
          <div className="bg-orange-100 p-4 rounded-lg">
            <FilterSection title="Cuisine" options={cuisines} category="cuisine" />
            <FilterSection title="Dietary Restrictions" options={dietaryRestrictions} category="dietaryRestrictions" />
            <FilterSection title="Cooking Time" options={cookingTimes} category="cookingTime" />
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-semibold mb-6 text-orange-600">Recipes by Cuisine</h2>
          <div className="space-y-8">
            {Object.entries(recipesByCuisine).map(([cuisine, recipes]) => (
              <div key={cuisine} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-orange-600 border-b border-orange-200 pb-2">{cuisine} Cuisine</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {recipes.map(recipe => (
                    <div key={recipe.name} className="card border border-orange-200 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-500">{recipe.name}</h4>
                      <p><span className="font-semibold">Chef:</span> {recipe.chef}</p>
                      <p><span className="font-semibold">Cooking Time:</span> {recipe.time}</p>
                      <p><span className="font-semibold">Dietary Restrictions:</span> {recipe.restrictions.join(', ') || 'None'}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6 text-orange-600">Featured Chefs</h2>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-3 gap-6">
              {chefs.map(chef => (
                <div key={chef.name} className="chefs-card rounded-lg shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">{chef.name}</h3>
                  <p><span className="font-semibold">Specialty:</span> {chef.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

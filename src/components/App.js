import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { ChefHat, Book, Calendar, MessageSquare, Activity, Video } from 'lucide-react';
import Home from './Home';
import Explore from './Explore';
import Register from './Register';
import AskChef from './AskChef';
import NutritionalAnalysis from './NutritionalAnalysis';
import LiveCookingDemo from './LiveCookingDemo';
import './global.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="navbar bg-orange-600 text-white shadow-md py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="navbar-logo text-3xl font-bold flex items-center hover:text-orange-200 transition duration-300 mb-4 sm:mb-0">
            <ChefHat className="mr-3" size={36} />
            Culinary Creations
          </Link>
          <div className="navbar-links flex flex-wrap justify-center space-x-6">
            <NavLink to="/explore" icon={<Book className="w-5 h-5" />} text="Explore" />
            <NavLink to="/register" icon={<Calendar className="w-5 h-5" />} text="Register" />
            <NavLink to="/ask-chef" icon={<MessageSquare className="w-5 h-5" />} text="Ask a Chef" />
            <NavLink to="/nutritional-analysis" icon={<Activity className="w-5 h-5" />} text="Nutrition" />
            <NavLink to="/live-cooking-demo" icon={<Video className="w-5 h-5" />} text="Live Demo" />
          </div>
        </div>
      </nav>

      <main className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ask-chef" element={<AskChef />} />
          <Route path="/nutritional-analysis" element={<NutritionalAnalysis />} />
          <Route path="/live-cooking-demo" element={<LiveCookingDemo />} />
        </Routes>
      </main>

      <footer className="footer bg-brown-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h3 className="footer-title text-2xl font-semibold mb-2">Culinary Creations</h3>
          <p className="footer-subtitle mb-4 italic">Elevate your cooking skills with us</p>
          <div className="footer-contact mt-4">
            <p className="font-semibold text-xl mb-2">Contact Us</p>
            <p className="text-lg">613-000-1234</p>
            <p>Monday - Friday, 7am - 7pm</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link to={to} className="navbar-link flex items-center hover:text-orange-200 transition duration-300 text-lg">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

export default App;

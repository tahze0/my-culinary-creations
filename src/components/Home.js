import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Calendar, Star } from 'lucide-react';

const Home = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#FF7F50' }}>
        Welcome to Culinary Creations
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '40px', textAlign: 'center' }}>
        Discover a world of flavors, learn from top chefs, and elevate your cooking skills with our interactive classes and recipes.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
        <FeatureCard
          to="/explore"
          icon={<Book size={48} color="#FF7F50" />}
          title="Explore Recipes"
          description="Discover new dishes and cooking techniques from around the world."
        />
        <FeatureCard
          to="/register"
          icon={<Calendar size={48} color="#FF7F50" />}
          title="Register for Classes"
          description="Join live cooking classes with expert chefs and improve your skills."
        />
      </div>

      <div className="card">
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#FF7F50' }}>
          User Reviews
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} color="#FFD700" style={{ marginRight: '5px' }} />
          ))}
        </div>
        <p style={{ fontStyle: 'italic', fontSize: '18px', marginBottom: '10px' }}>
          "Culinary Creations has transformed my cooking skills! The classes are informative and fun, and the recipes are amazing."
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>- Sarah L.</p>
      </div>
    </div>
  );
};

const FeatureCard = ({ to, icon, title, description }) => (
  <Link to={to} className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <div style={{ marginBottom: '20px' }}>{icon}</div>
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#FF7F50' }}>{title}</h2>
    <p>{description}</p>
  </Link>
);

export default Home;
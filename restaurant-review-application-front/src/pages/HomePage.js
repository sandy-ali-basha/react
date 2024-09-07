import React from 'react';
import { useNavigate } from 'react-router-dom';

// Define categories for the list
const categories = [
  { name: 'Pizza', image: '/images/pizza.jpg' },
  { name: 'Burger', image: '/images/burger.jpg' },
  { name: 'Sweets', image: '/images/sweets.jpg' },
  { name: 'Fast Food', image: '/images/fastfood.jpg' },
  { name: 'Home Made', image: '/images/homemade.jpg' },
  { name: 'Traditional Food', image: '/images/traditional.jpg' },
];

// Define a featured category for the large section at the top
const featuredCategory = { name: 'Featured', image: '/images/featured.jpg' };

const HomePage = ({ userName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const handleCategoryClick = (category) => {
    navigate('/restaurants/${category}');
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1 className="page-title">YUMMY</h1>
        <nav className="nav-bar">
          <button onClick={() => navigate('/home')}>Home</button>
          <button onClick={() => navigate('/about-us')}>About Us</button>
          <button onClick={() => navigate('/contact-us')}>Contact Us</button>
        </nav>
        <button onClick={handleLogout} className="logout-button">Logout</button>
        <span className="user-name">Welcome, {userName}</span>
      </header>

      <section className="featured-section">
        <div className="featured-card" onClick={() => handleCategoryClick(featuredCategory.name)}>
          <img src={featuredCategory.image} alt={featuredCategory.name} className="featured-image" />
          <h1 className="featured-title">{featuredCategory.name}</h1>
        </div>
      </section>

      <main className="categories">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className="category-card" 
            onClick={() => handleCategoryClick(category.name)}
          >
            <img src={category.image} alt={category.name} className="category-image" />
            <h2 className="category-title">{category.name}</h2>
          </div>
        ))}
      </main>

      <section className="reviews">
        <h2>What our customers say</h2>
        <div className="reviews-slider">
          {/* Add customer review cards here */}
          <div className="review-card">"The best food I've ever had!" - Customer A</div>
          <div className="review-card">"Amazing experience!" - Customer B</div>
          <div className="review-card">"Would highly recommend." - Customer C</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
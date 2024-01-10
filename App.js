import React, { useState, useEffect } from 'react';
import FoodCard from './Components/FoodCard';
import Wishlist from './Components/Wishlist';
import foodsData from './Data';
import './App.css';



const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  const addToWishlist = (food) => {
    const updatedWishlist = [...wishlist, food];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const clearWishlist = () => {
    setWishlist([]);
    setSelectedFood(null); 
    localStorage.removeItem('wishlist');
  };

  const handleWishlistItemClick = (index) => {
    setSelectedFood(wishlist[index]);
  };

  return (
    <div className="app">
      <h1>Food Menu</h1>
      <div className="content">
        <div className={`food-list ${selectedFood ? 'food-list-disabled' : ''}`}>
          {foodsData.map((food) => (
            <FoodCard key={food.id} food={food} addToWishlist={addToWishlist} />
          ))}
        </div>
        <div className="wishlist-and-details">
          <Wishlist
            wishlist={wishlist}
            clearWishlist={clearWishlist}
            onWishlistItemClick={handleWishlistItemClick}
          />
          {selectedFood && (
            <div className="selected-food">
              <h2>Selected Food Details</h2>
              <p>Name: {selectedFood.name}</p>
              <p>Price: ${selectedFood.price}</p>
              <p>Category: {selectedFood.category}</p>
              <p>Ingredients: {selectedFood.ingredients.join(', ')}</p>
              <p>Location: {selectedFood.location}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;



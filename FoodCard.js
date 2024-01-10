import React from 'react';

const FoodCard = ({ food, addToWishlist }) => {
  return (
    <div className="food-card">
      <h2>{food.name}</h2>
      <p>Price: ${food.price}</p>
      <p>Category: {food.category}</p>
      <p>Ingredients: {food.ingredients.join(', ')}</p>
      <p>Location: {food.location}</p>
      <button onClick={() => addToWishlist(food)}>Add to Wishlist</button>
    </div>
  );
};

export default FoodCard;

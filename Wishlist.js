// import React from 'react';

// const Wishlist = ({ wishlist, clearWishlist }) => {
//   return (
//     <div className="wishlist">
//       <h2>Wishlist</h2>
//       <button onClick={clearWishlist}>Clear Wishlist</button>
//       <ul>
//         {wishlist.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Wishlist;



// src/components/Wishlist.js
import React from 'react';

const Wishlist = ({ wishlist, clearWishlist, onWishlistItemClick }) => {
  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map((item, index) => (
          <li key={index} onClick={() => onWishlistItemClick(index)}>
            {item.name}
          </li>
        ))}
      </ul>
      <button onClick={clearWishlist}>Clear Wishlist</button>
    </div>
  );
};

export default Wishlist;

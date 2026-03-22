import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import "./Wishlist.css"

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-container">
      <h2>My List</h2>
      <p>There are <span className="highlight">{wishlist.length}</span> products in your My List</p>

      {wishlist.length === 0 ? (
        <p className="empty">Your wishlist is empty 💔</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.img} alt={item.title} className="wishlist-img" />
              <div className="wishlist-info">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div className="rating">{"⭐".repeat(item.rating)}</div>
                <div className="price">
                  <span className="new">₹{item.price}</span>
                  <span className="old">₹{item.oldPrice}</span>
                  <span className="discount">{item.discount} OFF</span>
                </div>
              </div>
              <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>❌</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;

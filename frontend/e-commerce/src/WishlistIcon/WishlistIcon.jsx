// src/components/WishlistIcon/WishlistIcon.jsx
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from "../Context/WishlistContext"
import "./WishlistIcon.css";

function WishlistIcon() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-icon-wrapper">
      <span className="wishlist-icon" >❤️</span>
      {wishlist.length > 0 && (
        <span className="wishlist-count">{wishlist.length}</span>
      )}
    </div>
  );
}

export default WishlistIcon;

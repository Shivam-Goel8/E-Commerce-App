import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./CartIcon.css";

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  // Total quantity count
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="cart-icon">
      <FaShoppingCart />
      {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
    </div>
  );
};

export default CartIcon;

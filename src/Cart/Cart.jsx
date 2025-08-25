// src/Cart/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./Cart.css"; // import css

function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-container">
      {/* Left Section - Cart Items */}
      <div className="cart-left">
        <h3>Your Cart</h3>
        <p>There are <b>{cart.length}</b> products in your cart</p>

        {cart.length === 0 ? (
          <p className="empty-cart">🛒 No items in cart</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.title} className="cart-item-img" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p className="desc">{item.desc?.slice(0, 40)}...</p>
                <div className="rating">{"⭐".repeat(item.rating || 4)}</div>

                <div className="cart-options">
                  <select
                    value={item.size || "M"}
                    onChange={() => { }}
                    className="size-select"
                  >
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>

                  <select
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                    className="qty-select"
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="price-row">
                  <span className="new">₹{item.price}</span>
                  <span className="old">₹{item.oldPrice}</span>
                  <span className="discount">{item.discount} OFF</span>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ❌
              </button>
            </div>
          ))
        )}
      </div>

      {/* Right Section - Cart Totals */}
      <div className="cart-right">
        <h3>Cart Totals</h3>
        <div className="totals">
          <p>
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </p>
          <p>
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
          </p>
          <p>
            <span>Estimate for</span>
            <span>India</span>
          </p>
          <hr />
          <p className="total">
            <span>Total</span>
            <span>₹{total}</span>
          </p>
        </div>
        <button className="checkout-btn">🛍️ Place Order</button>
      </div>
    </div>
  );
}

export default Cart;

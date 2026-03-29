import React from "react";
import "./CartModel.css";
import { useNavigate } from "react-router-dom";

const CartModal = ({ product, onClose }) => {
    const navigate = useNavigate();

    if (!product) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-box large">

                {/* CLOSE BUTTON */}
                <span className="close-btn" onClick={onClose}>✖</span>

                <div className="modal-grid">

                    {/* LEFT - BIG IMAGE */}
                    <div className="modal-left">
                        <img src={product.img} alt="" />
                    </div>

                    {/* RIGHT - DETAILS */}
                    <div className="modal-right">
                        <h2>{product.name}</h2>

                        <p className="desc">
                            Premium quality product with best fabric and comfort.
                            Perfect for daily wear and special occasions.
                        </p>

                        <div className="rating">
                            ⭐⭐⭐⭐☆ (4.5)
                        </div>

                        {/* PRICE */}
                        <div className="price-box">
                            <span className="new">₹{product.price}</span>
                            <span className="old">₹{product.price + 300}</span>
                            <span className="discount">20% OFF</span>
                        </div>

                        {/* FEATURES */}
                        <ul className="features">
                            <li>✔ High Quality Material</li>
                            <li>✔ 7 Days Replacement</li>
                            <li>✔ Free Delivery</li>
                        </ul>

                        {/* BUTTONS */}
                        <div className="modal-buttons">
                            <button onClick={onClose}>Continue Shopping</button>

                            <button
                                className="go-cart"
                                onClick={() => navigate("/cart")}
                            >
                                Go to Cart
                            </button>

                            <button className="buy-now">
                                Buy Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
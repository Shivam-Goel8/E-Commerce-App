import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./Nav.css";
import CartIcon from "../CartIcon/CartIcon";
import WishlistIcon from "../WishlistIcon/WishlistIcon";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import API from "../utils";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  const { cart } = useContext(CartContext);


  const totalQty = cart.reduce(
    (sum, item) => sum + item.quantity,
[]
  );

  const logout = async () => {
    await API.post("/logout", {
      withCredentials: true
    });

    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <div className="top-navbar">
        <div className="logo">
          <span>Quick</span><span className="highlight">Cart</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button>🔍</button>
        </div>

        <div className="nav-right">

          {/* 🔥 MAIN LOGIC */}
          {user ? (
            <>
              <span className="user-name">Hi, {user.name}</span>
              <button onClick={logout} className="login-btn">Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}

          <Link to="/wishlist">
            <WishlistIcon />
          </Link>

          <Link to="/cart">
            <CartIcon className="cart-icon" />
            <span className="total-cart">{totalQty}</span>
          </Link>
        </div>
      </div>

      {/* rest same */}
      <div className={`second-navbar ${menuOpen ? "active" : ""}`}>
        <div className="categories">CATEGORIES</div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/fashion">Fashion</Link></li>
          <li><Link to="/electronics">Electronics</Link></li>
          <li><Link to="/bags">Bags</Link></li>
          <li><Link to="/footwear">Footwear</Link></li>
          <li><Link to="/jewellery">Jewellery</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>

        <div className="delivery">🚚 Free International Delivery</div>
      </div>
    </>
  );
}

export default Nav;
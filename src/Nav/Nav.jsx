import { Link } from "react-router-dom";
import { useState } from 'react'
import "./Nav.css";
import { FaSearch, FaBars } from "react-icons/fa";
import CartIcon from "../CartIcon/CartIcon";
import WishlistIcon from "../WishlistIcon/WishlistIcon"
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* --- Top Navbar --- */}
      <div className="top-navbar">
        <div className="logo">
          <span>Quick</span><span className="highlight">Cart</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button><FaSearch /></button>
        </div>

        <div className="nav-right">
          <Link to="/login">Login</Link>
          <Link to="/wishlist">
            <WishlistIcon />  {/* ✅ New Component */}
          </Link>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </div>
      </div>

      {/* --- Second Navbar --- */}
      <div className={`second-navbar ${menuOpen ? "active" : ""}`}>
        <div className="categories">CATEGORIES</div>

        {/* Hamburger menu (only visible on mobile) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/fashion">Fashion</Link></li>
          <li><Link to="/electronics">Electronics</Link></li>
          <li><Link to="/bags">Bags</Link></li>
          <li><Link to="/footwear">Footwear</Link></li>
          <li><Link to="/jewellery">Jewellery</Link></li>
        </ul>

        <div className="delivery">🚚 Free International Delivery</div>
      </div>
    </>
  );
}

export default Nav;

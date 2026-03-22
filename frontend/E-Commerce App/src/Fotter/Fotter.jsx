import React from "react";
import "./Fotter.css";
import { FaFacebookF, FaYoutube, FaPinterestP, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Features Row */}
      <div className="footer-top">
        <div className="feature">
          <span>🚚</span>
          <h4>Free Shipping</h4>
          <p>For all Orders Over $100</p>
        </div>
        <div className="feature">
          <span>↩️</span>
          <h4>30 Days Returns</h4>
          <p>For an Exchange Product</p>
        </div>
        <div className="feature">
          <span>💳</span>
          <h4>Secured Payment</h4>
          <p>Payment Cards Accepted</p>
        </div>
        <div className="feature">
          <span>🎁</span>
          <h4>Special Gifts</h4>
          <p>Our First Product Order</p>
        </div>
        <div className="feature">
          <span>🎧</span>
          <h4>Support 24/7</h4>
          <p>Contact us Anytime</p>
        </div>
      </div>

      <hr />

      {/* Main Footer Content */}
      <div className="footer-main">
        {/* Contact */}
        <div className="footer-col">
          <h3>Contact us</h3>
          <p>Classyshop - Mega Super Store</p>
          <p>507-Union Trade Centre France</p>
          <p>sales@yourcompany.com</p>
          <p className="phone">(+91) 9876-543-210</p>
          <p className="chat">💬 Online Chat <br /> Get Expert Help</p>
        </div>

        {/* Products */}
        <div className="footer-col">
          <h3>Products</h3>
          <ul>
            <li>Prices drop</li>
            <li>New products</li>
            <li>Best sales</li>
            <li>Contact us</li>
            <li>Sitemap</li>
            <li>Stores</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3>Our company</h3>
          <ul>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms and conditions of use</li>
            <li>About us</li>
            <li>Secure payment</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col newsletter">
          <h3>Subscribe to newsletter</h3>
          <p>Subscribe to our latest newsletter to get news about special discounts.</p>
          <input type="email" placeholder="Your Email Address" />
          <button>SUBSCRIBE</button>
          <div className="checkbox">
            <input type="checkbox" /> 
            <span>I agree to the terms and conditions and the privacy policy</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <FaFacebookF />
          <FaYoutube />
          <FaPinterestP />
          <FaInstagram />
        </div>
        <p>© 2024 - Ecommerce Template</p>
        <div className="payment-icons">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

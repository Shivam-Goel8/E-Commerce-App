import React, { useState, useContext } from "react";
import { CartContext, } from "../Context/CartContext"; // import context
import { WishlistContext } from "../Context/WishlistContext";
import "./ProductListing.css";

const ProductSlider = () => {
  const { addToCart } = useContext(CartContext); // use cart context
  const { addToWishlist } = useContext(WishlistContext);
  const products = [
    {
      id: 41,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/r/k/y/korean-style-trendy-tote-bag-30-canvas-tote-flipkart-tote-original-imah2wy9brtfqgbu.jpeg?q=70",
      title: "Lavie",
      desc: "Women Solid Tote Bag",
      price: 1599,
      oldPrice: 2499,
      discount: "36%",
      rating: 5,
    },
    {
      id: 42,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sling-bag/g/d/h/trendy-sling-bags-for-women-long-handle-sling-bag-haveglam-original-imahavnybwk6kmqf.jpeg?q=70",
      title: "Caprese",
      desc: "Textured Sling Bag",
      price: 1299,
      oldPrice: 1999,
      discount: "35%",
      rating: 4,
    },
    {
      id: 43,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/w/b/c/-original-imagy5w8mzc9reh9.jpeg?q=70",
      title: "Allen Solly",
      desc: "Men Leather Laptop Backpack",
      price: 2499,
      oldPrice: 3499,
      discount: "28%",
      rating: 5,
    },
    {
      id: 44,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/p/q/f/-original-imah46hhzvrtyzjz.jpeg?q=70",
      title: "Skybags",
      desc: "Unisex Casual Backpack",
      price: 1999,
      oldPrice: 2999,
      discount: "33%",
      rating: 4,
    },
    {
      id: 45,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/5/i/v/-original-imah2c4ysun7hbeb.jpeg?q=70",
      title: "American Tourister",
      desc: "Medium Trolley Bag",
      price: 4499,
      oldPrice: 6500,
      discount: "30%",
      rating: 5,
    },
    {
      id: 46,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/duffel-bag/m/f/y/9-wrn-70l-24-inch-wheel-duffle-traveling-travel-duffel-original-imahfngw9qghxg2d.jpeg?q=70",
      title: "Tommy Hilfiger",
      desc: "Men Solid Duffle Bag",
      price: 3599,
      oldPrice: 5200,
      discount: "31%",
      rating: 5,
    },
    {
      id: 47,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-rucksack/a/k/p/travel-backpack-rucksack-hikking-backpack-unisex-3-main-large-original-imahezp3eyzsgdrj.jpeg?q=70",
      title: "Wildcraft",
      desc: "Unisex Rucksack Backpack",
      price: 2899,
      oldPrice: 4200,
      discount: "31%",
      rating: 4,
    },
    {
      id: 48,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/q/h/l/women-stylish-shoulder-bag-28-balt-1beige-shoulder-bag-ark-original-imahbpyfqv9gftyn.jpeg?q=70",
      title: "Baggit",
      desc: "Women Solid Shoulder Bag",
      price: 1199,
      oldPrice: 1899,
      discount: "37%",
      rating: 4,
    },
    {
      id: 49,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/f/d/r/premium-leather-16-inch-laptop-bag-for-men-16-0-whbg9001-original-imaheechvedfz2gj.jpeg?q=70",
      title: "Hidesign",
      desc: "Men Genuine Leather Messenger Bag",
      price: 5499,
      oldPrice: 7499,
      discount: "26%",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);
  const visibleCards = 5; // screen par ek baar me dikhne wale products

  const nextSlide = () => {
    if (index < products.length - visibleCards) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="product-section">
      <h2>Bags</h2>
      <p>Do not miss the current offers until the end of March.</p>

      <div className="product-slider">
        <button className="prev" onClick={prevSlide} disabled={index === 0}>
          ❮
        </button>

        <div className="slider-window">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 270}px)` }}
          >
            {products.map((item) => (
              <div className="product-card" key={item.id}>
                <span className="discount">{item.discount}</span>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="rating">{"⭐".repeat(item.rating)}</div>
                <div className="price">
                  <span className="old">₹{item.oldPrice}</span>
                  <span className="new">₹{item.price}</span>
                </div>
                <button className="cart-btn" onClick={() => addToCart(item)}>
                  🛒 ADD TO CART
                </button>
                <button className="wish-btn" onClick={() => addToWishlist(item)}>❤️</button>
              </div>
            ))}
          </div>
        </div>

        <button
          className="next"
          onClick={nextSlide}
          disabled={index >= products.length - visibleCards}
        >
          ❯
        </button>
      </div>
    </div>);
};

export default ProductSlider;

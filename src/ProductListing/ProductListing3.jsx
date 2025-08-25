import React, { useState, useContext } from "react";
import { CartContext, } from "../Context/CartContext"; // import context
import { WishlistContext } from "../Context/WishlistContext";
import "./ProductListing.css";

const ProductSlider = () => {
  const { addToCart } = useContext(CartContext); // use cart context
  const { addToWishlist } = useContext(WishlistContext);
  const products = [
    {
      id: 31,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/l/z/7-asgo1366a-ice-green-r-blue-abros-ice-green-r-blue-original-imagz7xff9zkmvyt.jpeg?q=70",
      title: "Nike Air Max",
      desc: "Men's Running Shoes",
      price: 4999,
      oldPrice: 5999,
      discount: "17%",
      rating: 5,
    },
    {
      id: 32,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/x/r/9-loc00028g-9-aqualite-light-grey-dark-grey-original-imahec3dsnqhzjtf.jpeg?q=70",
      title: "Adidas Ultraboost",
      desc: "Performance Sports Shoes",
      price: 6999,
      oldPrice: 8999,
      discount: "22%",
      rating: 5,
    },
    {
      id: 33,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/2/5/9/8-kl-402-grey-8-8-killer-grey-original-imahf58yp8eg7nek.jpeg?q=70",
      title: "Puma Smash",
      desc: "Casual Sneakers for Men",
      price: 2999,
      oldPrice: 3999,
      discount: "25%",
      rating: 4,
    },
    {
      id: 34,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/j/n/8/-original-imahd2zmtrdytbgb.jpeg?q=70",
      title: "Skechers Go Walk",
      desc: "Comfort Walking Shoes",
      price: 3799,
      oldPrice: 4999,
      discount: "24%",
      rating: 5,
    },
    {
      id: 35,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/b/q/-original-imagg5vymgzearxq.jpeg?q=70",
      title: "Woodland",
      desc: "Leather Outdoor Boots",
      price: 4499,
      oldPrice: 5999,
      discount: "25%",
      rating: 4,
    },
    {
      id: 36,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/i/l/m/7-8216472-7-bata-jet-black-original-imah45txqduudyts.jpeg?q=70",
      title: "Bata",
      desc: "Formal Leather Shoes",
      price: 2599,
      oldPrice: 3299,
      discount: "21%",
      rating: 4,
    },
    {
      id: 37,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/a/5/u/-original-imahesyawgzggu6e.jpeg?q=70",
      title: "Red Tape",
      desc: "Casual Sneakers",
      price: 2199,
      oldPrice: 2999,
      discount: "27%",
      rating: 4,
    },
    {
      id: 38,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/m/8/8-comfort-8-sega-grey-original-imaghuc3xjqpehj6.jpeg?q=70",
      title: "Campus",
      desc: "Men's Running Sneakers",
      price: 1799,
      oldPrice: 2499,
      discount: "28%",
      rating: 4,
    },
    {
      id: 39,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/a/c/10-killerwh0001-10-killer-white-original-imahbzvvxgtfzbve.jpeg?q=70",
      title: "Reebok Classic",
      desc: "Unisex Retro Shoes",
      price: 3299,
      oldPrice: 4499,
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
      <h2>Footwear</h2>
      
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

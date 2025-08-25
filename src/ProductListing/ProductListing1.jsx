import React, { useState, useContext } from "react";
import { CartContext, } from "../Context/CartContext"; // import context
import { WishlistContext } from "../Context/WishlistContext";
import "./ProductListing.css";

const ProductSlider = () => {
  const { addToCart } = useContext(CartContext); // use cart context
  const { addToWishlist } = useContext(WishlistContext);
 const products = [
  {
    id: 11,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/n/d/a/30-kttladiesjeans1003-kotty-original-imahfftf967ag4eg.jpeg?q=70",
    title: "Flying Machine",
    desc: "Women Wide Leg High-Rise Jeans",
    price: 999,
    oldPrice: 1200,
    discount: "17%",
    rating: 5,
  },
  {
    id: 12,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/r/2/h/xxl-vf-ku-2674-skd-r-vbuyz-original-imahd9bwqpwztqbm.jpeg?q=70",
    title: "Anouk",
    desc: "Printed Cotton Kurta Set",
    price: 785,
    oldPrice: 899,
    discount: "13%",
    rating: 4.5,
  },
  {
    id: 13,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/u/d/6/m-black-cotton-vaaaddo-original-imahbygh8xqwzy4u.jpeg?q=70",
    title: "Louis Philippe",
    desc: "Men Formal Cotton Shirt",
    price: 1450,
    oldPrice: 1650,
    discount: "12%",
    rating: 4.5,
  },
  {
    id: 14,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/3/i/p/4xl-shirt01-wine-colorchakra-original-imaherrfvjg2hhzc.jpeg?q=70",
    title: "Campus Sutra",
    desc: "Men Comfort Cuban Collar Shirt",
    price: 1850,
    oldPrice: 2200,
    discount: "16%",
    rating: 4,
  },
  {
    id: 15,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/n/h/t/xl-horizontal-stripes-shivalik-textiles-original-imahbycw4jgzckwh.jpeg?q=70",
    title: "HERE&NOW",
    desc: "Men Pure Cotton Striped T-shirt",
    price: 699,
    oldPrice: 899,
    discount: "22%",
    rating: 4.2,
  },
  {
    id: 16,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/g/q/e/free-anisha-k-5-fashion-unstitched-original-imah4gxrfqa9p6qz.jpeg?q=70",
    title: "W for Woman",
    desc: "Georgette Pink Saree with Blouse",
    price: 1999,
    oldPrice: 2599,
    discount: "23%",
    rating: 4.6,
  },
  {
    id: 17,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/m/b/7/m-trending-checked-shirts-aadi-original-imah6em5dbures8f.jpeg?q=70",
    title: "Roadster",
    desc: "Checked Casual Cotton Shirt",
    price: 1199,
    oldPrice: 1499,
    discount: "20%",
    rating: 4.3,
  },
  {
    id: 18,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/7/q/3/xl-1121-shpo131-01-the-indian-garage-co-original-imagg22jhg9fmbfj.jpeg?q=70",
    title: "Highlander",
    desc: "Slim Fit Casual Shirt",
    price: 899,
    oldPrice: 1199,
    discount: "25%",
    rating: 4.1,
  },
  {
    id: 19,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/d/m/b/38-mdkn1bd014amidblue-spykar-original-imaheyenwgb9yuch.jpeg?q=70",
    title: "Levi's",
    desc: "Men Slim Fit Blue Jeans",
    price: 2399,
    oldPrice: 2999,
    discount: "20%",
    rating: 4.7,
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
      <h2>Popular Products</h2>
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

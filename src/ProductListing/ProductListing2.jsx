import React, { useState, useContext } from "react";
import { CartContext, } from "../Context/CartContext"; // import context
import { WishlistContext } from "../Context/WishlistContext";
import "./ProductListing.css";

const ProductSlider = () => {
  const { addToCart } = useContext(CartContext); // use cart context
  const { addToWishlist } = useContext(WishlistContext);
  const products = [
    {
      id: 21,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/d/8/n/na-na-5-101jw63sd386c-sdr-original-imah2gteppy3gqs9.jpeg?q=70",
      title: "Tanishq",
      desc: "Gold Plated Necklace Set",
      price: 4999,
      oldPrice: 6500,
      discount: "23%",
      rating: 5,
    },
    {
      id: 22,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/earring/0/i/x/na-gf-221469563524-gargish-fashion-original-imagtuse5ngypvhc.jpeg?q=70",
      title: "Malabar Gold",
      desc: "Diamond Stud Earrings",
      price: 8999,
      oldPrice: 12000,
      discount: "25%",
      rating: 5,
    },
    {
      id: 23,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/p/d/i/2-4-2-4-na-chura-101-ugs-original-imagpybb5zyy5bwe.jpeg?q=70",
      title: "PC Jeweller",
      desc: "Traditional Bridal Bangles",
      price: 7499,
      oldPrice: 9999,
      discount: "25%",
      rating: 4,
    },
    {
      id: 24,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/y/a/n/na-na-3-multistrand-pearl-and-meenakari-pendant-necklace-set-zms-original-imah6s5ztcxawgh3.jpeg?q=70",
      title: "Kalyan Jewellers",
      desc: "Pearl Drop Pendant Set",
      price: 3299,
      oldPrice: 4500,
      discount: "27%",
      rating: 5,
    },
    {
      id: 25,
      img: "https://rukminim2.flixcart.com/image/612/612/j0vb3bk0/jewellery-set/t/s/5/nc-32-navya-original-imaesgtjvycgfs93.jpeg?q=70",
      title: "CaratLane",
      desc: "Rose Gold Engagement Ring",
      price: 5999,
      oldPrice: 8500,
      discount: "30%",
      rating: 5,
    },
    {
      id: 26,
      img: "https://rukminim2.flixcart.com/image/612/612/k8ddoy80/anklet/j/d/q/2-dc-ank-10054-s-prita-original-imafqesmggyzy88a.jpeg?q=70",
      title: "Voylla",
      desc: "Oxidised Silver Anklets",
      price: 1599,
      oldPrice: 2200,
      discount: "27%",
      rating: 4,
    },
    {
      id: 27,
      img: "",
      title: "Senco Gold",
      desc: "Emerald Gemstone Pendant",
      price: 4499,
      oldPrice: 6200,
      discount: "28%",
      rating: 4,
    },
    {
      id: 28,
      img: "https://rukminim2.flixcart.com/image/612/612/kgsb1jk0/pendant-locket/z/e/5/gems2724-kundli-gems-original-imafwxdy8aknv4sh.jpeg?q=70",
      title: "BlueStone",
      desc: "Diamond Nose Pin",
      price: 2999,
      oldPrice: 4000,
      discount: "25%",
      rating: 4,
    },
    {
      id: 29,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/pendant-locket/g/l/c/na-na-new-di-nill1734-divastri-original-imah9hng25fjgx83.jpeg?q=70",
      title: "Joyalukkas",
      desc: "Gold Chain with Locket",
      price: 9999,
      oldPrice: 13000,
      discount: "23%",
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
      <h2>Jewellery</h2>
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

import React, { useState, useEffect } from "react";
import "./Home.css";

import ProductListing2 from "../ProductListing/ProductListing2"
import ProductListing1 from "../ProductListing/ProductListing1"
import ProductListing3 from "../ProductListing/ProductListing3"
import ProductListing4 from "../ProductListing/ProductListing4Bag";
import { FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const slides = [
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/c74bac2c-e09d-484f-8e25-c07747c867241649530728935-Tops---Tees_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/f1874a9d-c423-44d3-a529-6c63521d6f991650181498608-Sarees_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/38f37101-f335-44be-af8f-5d53de15c75e1649530843725-Casual---Sports-Shoes_Desk--1-.jpg"
  ];

  const [current, setCurrent] = useState(0);

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Next & Prev button
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const categories = [
    {
      name: "Fashion",
      img: "https://thumbs.dreamstime.com/b/portrait-shopping-bags-happy-woman-jumping-fashion-isolated-transparent-png-background-discount-celebration-sales-deals-277086642.jpg"
    },
    {
      name: "Electronics",
      img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5"
    },
    {
      name: "Bags",
      img: "https://images.unsplash.com/photo-1591561954557-26941169b49e"
    },
    {
      name: "Footwear",
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    {
      name: "Groceries",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e"
    },
    {
      name: "Beauty",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    },
    {
      name: "Wellness",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
    },
    {
      name: "Jewellery",
      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
    }
  ];


  const blogPosts = [
    {
      id: 1,
      title: "Sustainable living through cutting-edge prefabricated homes",
      desc: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by...",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      date: "2025-03-12",
    },
    {
      id: 2,
      title: "Explore sustainable living through cutting-edge prefabricated homes",
      desc: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by...",
      img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
      date: "2025-03-12",
    },
    {
      id: 3,
      title: "This prefabricated passive house is highly sustainable",
      desc: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by...",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      date: "2025-03-12",
    },
    {
      id: 4,
      title: "This prefabricated passive house is memorable highly sustainable",
      desc: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by...",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      date: "2025-03-12",
    },
  ];
  //  ------------------------------------------------------------
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));






  //  ------------------------------------------------------------
  return (
    <>

      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img} alt={`slide-${index}`} />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>


      <div className="categories-container">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.img} alt={cat.name} className="category-icon" />
            <p className="category-name">{cat.name}</p>
          </div>
        ))}
      </div>



      <ProductListing1 />


      <div className="offer-section">
        {/* Free Shipping Banner */}
        <div className="banner">
          <span className="icon">🚚</span>
          <span className="text">FREE SHIPPING</span>
          <span className="subtext">
            Free Delivery Now On Your First Order and over $200
          </span>
          <span className="price">- Only $200*</span>
        </div>

        {/* Products Row */}


      </div>
      <ProductListing2 />



      <div className="con_deals">
        <img src="https://img.freepik.com/premium-photo/sale-ad-sale-with-laptop-headphones_913495-5603.jpg" />
        <img src="https://www.shutterstock.com/image-vector/banner-big-sale-blue-podium-260nw-2493210727.jpg" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWm3i4x3IwvJGSItFKJ5LerDvdLqUnyw3-og&s" />
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/601/839/small/online-shopping-background-design-free-vector.jpg" />
      </div>
      <ProductListing3 />
      <ProductListing4 />


      <div className="blog-container">
        <h2 className="blog-heading">From The Blog</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-img">
                <img src={post.img} alt={post.title} />
                <span className="blog-date">
                  <FaRegClock /> {post.date}
                </span>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <a href="/" className="read-more">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <p>{msg} {user?.name && `Hi, ${user.name}`}</p> */}


    </>
  );
};

export default Home;

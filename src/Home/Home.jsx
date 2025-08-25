import React, { useState, useEffect } from "react";
import "./Home.css";

import ProductListing2 from "../ProductListing/ProductListing2"
import ProductListing1 from "../ProductListing/ProductListing1"
import ProductListing3 from "../ProductListing/ProductListing3"
import ProductListing4 from "../ProductListing/ProductListing4Bag";
import { FaRegClock } from "react-icons/fa";


const Home = () => {
  const slides = [
    "https://serviceapi.spicezgold.com/download/1755503418386_NewProject(12).jpg",
    "https://serviceapi.spicezgold.com/download/1755503364377_1721277298204_banner.jpg",
    "https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg",
    "https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg"
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
    { name: "Fashion", img: "https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" },
    { name: "Electronics", img: "https://serviceapi.spicezgold.com/download/1741660988059_ele.png" },
    { name: "Bags", img: "https://serviceapi.spicezgold.com/download/1741661045887_bag.png" },
    { name: "Footwear", img: "https://serviceapi.spicezgold.com/download/1741661061379_foot.png" },
    { name: "Groceries", img: "https://serviceapi.spicezgold.com/download/1741661077633_gro.png" },
    { name: "Beauty", img: "https://serviceapi.spicezgold.com/download/1741661092792_beauty.png" },
    { name: "Wellness", img: "https://serviceapi.spicezgold.com/download/1741661105893_well.png" },
    { name: "Jewellery", img: "https://serviceapi.spicezgold.com/download/1749273446706_jw.png" },
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
        <img src="https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp" />
        <img src="https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp" />
        <img src="https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp" />
        <img src="https://serviceapi.spicezgold.com/download/1742453755529_1741669087880_banner6.webp" />
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


    </>
  );
};

export default Home;

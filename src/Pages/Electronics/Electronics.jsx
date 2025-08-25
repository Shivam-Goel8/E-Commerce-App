import React, { useState, useContext } from "react";
import "../Fashion/Fashion.css";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";

function Electronics() {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(200000);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const products = [
    {
      id: 101,
      name: "iPhone 14 Pro",
      desc: "Apple iPhone 14 Pro with A16 Bionic chip",
      price: 120000,
      discount: 10,
      category: "Mobile",
      rating: 5,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/f/p/-original-imaghxenhnpyhn5u.jpeg?q=70",
    },
    {
      id: 102,
      name: "Samsung Galaxy S23",
      desc: "Samsung flagship smartphone with great performance",
      price: 95000,
      discount: 12,
      category: "Mobile",
      rating: 5,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/h/f/-original-imahbk7pzzgc58gw.jpeg?q=70",
    },
    {
      id: 103,
      name: "MacBook Air M2",
      desc: "Apple MacBook Air with M2 Chip",
      price: 145000,
      discount: 15,
      category: "Laptop",
      rating: 5,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70",
    },
    {
      id: 104,
      name: "Dell XPS 13",
      desc: "High-performance Dell ultrabook laptop",
      price: 110000,
      discount: 18,
      category: "Laptop",
      rating: 4,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/i/4/s/inspiron-3530-thin-and-light-laptop-dell-original-imahyg9grkcfbnmm.jpeg?q=70",
    },
    {
      id: 105,
      name: "Sony WH-1000XM5",
      desc: "Noise-cancelling wireless headphones",
      price: 30000,
      discount: 20,
      category: "Headphones",
      rating: 5,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/z/a/j/wireless-running-premium-deep-bass-noise-cancelling-stereo-original-imahdqck5uqaykyz.jpeg?q=70",
    },
    {
      id: 106,
      name: "AirPods Pro 2",
      desc: "Apple AirPods Pro with ANC",
      price: 25000,
      discount: 15,
      category: "Earbuds",
      rating: 4,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/f/g/z/-original-imaghzfpykshtyn2.jpeg?q=70",
    },
    {
      id: 107,
      name: "Apple Watch Series 8",
      desc: "Latest Apple Watch with health tracking",
      price: 45000,
      discount: 12,
      category: "Smartwatch",
      rating: 5,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/l/0/k/-original-imaghxg9vjgmyv9v.jpeg?q=70",
    },
    {
      id: 108,
      name: "Samsung Galaxy Watch 5",
      desc: "Smartwatch with AMOLED display",
      price: 30000,
      discount: 18,
      category: "Smartwatch",
      rating: 4,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/v/1/-original-imah6s6pq7wxa4u6.jpeg?q=70",
    },
    {
      id: 109,
      name: "iPad Pro",
      desc: "Apple iPad Pro with M2 Chip",
      price: 120000,
      discount: 15,
      category: "Tablet",
      rating: 5,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/o/c/q/-original-imagj72vyhczg7ww.jpeg?q=70",
    },
    {
      id: 110,
      name: "Samsung Galaxy Tab S8",
      desc: "Samsung flagship tablet",
      price: 85000,
      discount: 20,
      category: "Tablet",
      rating: 4,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/2/h/u/-original-imah5vxu9neqhuvf.jpeg?q=70",
    },
  ];

  // Filter products
  let filteredProducts = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      p.price <= price &&
      (category === "All" || p.category === category)
    );
  });

  // Sorting
  if (sort === "az") filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "za") filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  if (sort === "low-high") filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === "high-low") filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <div className="fashion-container">
      {/* -------- LEFT FILTER -------- */}
      <aside className="filter-section">
        <h2>Filters</h2>

        <div className="filter-item">
          <label>Search by Name</label>
          <input
            type="text"
            placeholder="Enter product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-item">
          <label>Price Range: ₹{price}</label>
          <input
            type="range"
            min="0"
            max="200000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div className="filter-item">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            <option>Mobile</option>
            <option>Laptop</option>
            <option>Tablet</option>
            <option>Headphones</option>
            <option>Smartwatch</option>
            <option>Earbuds</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Sort By</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Default</option>
            <option value="az">Name: A → Z</option>
            <option value="za">Name: Z → A</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
          </select>
        </div>
      </aside>

      {/* -------- RIGHT PRODUCTS -------- */}
      <main className="products-section">
        <h2>Electronics Collection</h2>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => {
              const discountedPrice = p.price - (p.price * p.discount) / 100;
              return (
                <div className="card" key={p.id}>
                  <span className="discount-badge">-{p.discount}%</span>
                  <img src={p.img} alt={p.name} />
                  <h4 className="brand">{p.name}</h4>
                  <p className="desc">{p.desc}</p>
                  <div className="rating">
                    {"★".repeat(p.rating)}{"☆".repeat(5 - p.rating)}
                  </div>
                  <div className="price">
                    <span className="old">₹{p.price}</span>
                    <span className="new">₹{discountedPrice}</span>
                  </div>

                  {/* Buttons */}
                  <div className="btn-group">
                    <button className="cart-btn" onClick={() => addToCart(p)}>🛒 Add to Cart</button>
                    <button className="wishlist-btn" onClick={() => addToWishlist(p)}>❤️</button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No products found 😢</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Electronics;

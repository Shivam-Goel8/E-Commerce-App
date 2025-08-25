import React, { useState, useContext } from "react";
import "./Fashion.css";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";
const products = [
  {
    id: 51,
    name: "Denim Jacket", desc: "Stylish Blue Denim Jacket", price: 1200, discount: 15, category: "Jacket", rating: 5, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
  },
  {
    id: 52,
    name: "White T-Shirt", desc: "Cotton Round Neck Tee", price: 600, discount: 10, category: "T-Shirt", rating: 4, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
  },
  {
    id: 53,
    name: "Blue Jeans", desc: "Slim Fit Denim Jeans", price: 1500, discount: 20, category: "Jeans", rating: 5, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-jean/b/s/z/26-shopsy-wd-6pkt-iceblue0ax-nucouths-original-imahyg5fumhxhwms.jpeg?q=70"
  },
  {
    id: 54,
    name: "Leather Shoes", desc: "Classic Brown Shoes", price: 2000, discount: 18, category: "Shoes", rating: 4, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/h/o/u/-original-imagudcehhhpqrjn.jpeg?q=70"
  },
  {
    id: 55,
    name: "Red Dress", desc: "Party Wear Dress", price: 2500, discount: 25, category: "Dress", rating: 5, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/j/p/a/-original-imahf759j4rzedj3.jpeg?q=70"
  },
  {
    id: 56,
    name: "Black Hoodie", desc: "Comfortable Winter Hoodie", price: 1100, discount: 12, category: "Hoodie", rating: 4, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/5/0/f/xxl-ss19-p11-bck-alan-jones-original-imahdwp4h7e9dmrd.jpeg?q=70"
  },
  {
    id: 57,
    name: "Sneakers", desc: "Trendy White Sneakers", price: 1800, discount: 20, category: "Shoes", rating: 5, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/a/5/u/-original-imahesyawgzggu6e.jpeg?q=70"
  },
  {
    id: 58,
    name: "Formal Shirt", desc: "Classic Blue Office Shirt", price: 900, discount: 15, category: "Shirt", rating: 4, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/g/c/w/m-hoc-ready-houseofcommon-original-imah62kyfdsy2hdh.jpeg?q=70"
  },
  {
    id: 59,
    name: "Maxi Dress", desc: "Elegant Long Dress", price: 2800, discount: 22, category: "Dress", rating: 5, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/c/b/1/xs-aa-0158-aayu-original-imahdvgjqfmvr9gs.jpeg?q=70"
  },
  {
    id: 50,
    name: "Winter Jacket", desc: "Warm and Stylish Coat", price: 3200, discount: 30, category: "Jacket", rating: 5, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/coat/7/z/b/xl-lct-3726-hallinton-original-imah5zhkd6bsaqfs.jpeg?q=70"
  },
];

function Fashion() {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(3000);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

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
            max="3000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div className="filter-item">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            <option>T-Shirt</option>
            <option>Jeans</option>
            <option>Jacket</option>
            <option>Hoodie</option>
            <option>Shoes</option>
            <option>Dress</option>
            <option>Bag</option>
            <option>Accessories</option>
            <option>Shirt</option>
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
        <h2>Fashion Collection</h2>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => {
              const discountedPrice = p.price - (p.price * p.discount) / 100;
              return (
                <div className="card" key={p.id}>
                  <span className="discount-badge">-{p.discount}%</span>
                  <img src={p.image} alt={p.name} />
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

export default Fashion;

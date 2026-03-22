import React, { useState, useContext } from "react";
import "../Fashion/Fashion.css";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";

const products = [
  {
    id: 41,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/r/k/y/korean-style-trendy-tote-bag-30-canvas-tote-flipkart-tote-original-imah2wy9brtfqgbu.jpeg?q=70",
    title: "Lavie",
    desc: "Women Solid Tote Bag",
    price: 1599,
    oldPrice: 2499,
    discount: 36,
    rating: 5,
    category: "Bag",
  },
  {
    id: 42,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sling-bag/g/d/h/trendy-sling-bags-for-women-long-handle-sling-bag-haveglam-original-imahavnybwk6kmqf.jpeg?q=70",
    title: "Caprese",
    desc: "Textured Sling Bag",
    price: 1299,
    oldPrice: 1999,
    discount: 35,
    rating: 4,
    category: "Bag",
  },
  {
    id: 43,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/w/b/c/-original-imagy5w8mzc9reh9.jpeg?q=70",
    title: "Allen Solly",
    desc: "Men Leather Laptop Backpack",
    price: 2499,
    oldPrice: 3499,
    discount: 28,
    rating: 5,
    category: "Bag",
  },
  {
    id: 44,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/p/q/f/-original-imah46hhzvrtyzjz.jpeg?q=70",
    title: "Skybags",
    desc: "Unisex Casual Backpack",
    price: 1999,
    oldPrice: 2999,
    discount: 33,
    rating: 4,
    category: "Bag",
  },
  {
    id: 45,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/5/i/v/-original-imah2c4ysun7hbeb.jpeg?q=70",
    title: "American Tourister",
    desc: "Medium Trolley Bag",
    price: 4499,
    oldPrice: 6500,
    discount: 30,
    rating: 5,
    category: "Bag",
  },
  {
    id: 46,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/duffel-bag/m/f/y/9-wrn-70l-24-inch-wheel-duffle-traveling-travel-duffel-original-imahfngw9qghxg2d.jpeg?q=70",
    title: "Tommy Hilfiger",
    desc: "Men Solid Duffle Bag",
    price: 3599,
    oldPrice: 5200,
    discount: 31,
    rating: 5,
    category: "Bag",
  },
  {
    id: 47,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-rucksack/a/k/p/travel-backpack-rucksack-hikking-backpack-unisex-3-main-large-original-imahezp3eyzsgdrj.jpeg?q=70",
    title: "Wildcraft",
    desc: "Unisex Rucksack Backpack",
    price: 2899,
    oldPrice: 4200,
    discount: 31,
    rating: 4,
    category: "Bag",
  },
  {
    id: 48,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/q/h/l/women-stylish-shoulder-bag-28-balt-1beige-shoulder-bag-ark-original-imahbpyfqv9gftyn.jpeg?q=70",
    title: "Baggit",
    desc: "Women Solid Shoulder Bag",
    price: 1199,
    oldPrice: 1899,
    discount: 37,
    rating: 4,
    category: "Bag",
  },
  {
    id: 49,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/f/d/r/premium-leather-16-inch-laptop-bag-for-men-16-0-whbg9001-original-imaheechvedfz2gj.jpeg?q=70",
    title: "Hidesign",
    desc: "Men Genuine Leather Messenger Bag",
    price: 5499,
    oldPrice: 7499,
    discount: 26,
    rating: 5,
    category: "Bag",
  },
];

function Bags() {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(6000);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  // Filter products
  let filteredProducts = products.filter((p) => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      p.price <= price &&
      (category === "All" || p.category === category)
    );
  });

  // Sorting
  if (sort === "az") filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "za") filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
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
            max="6000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div className="filter-item">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            <option>Bag</option>
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
        <h2>Bag Collection</h2>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => {
              const discountedPrice = p.oldPrice; // already included discount in price
              return (
                <div className="card" key={p.id}>
                  <span className="discount-badge">-{p.discount}%</span>
                  <img src={p.img} alt={p.title} />
                  <h4 className="brand">{p.title}</h4>
                  <p className="desc">{p.desc}</p>
                  <div className="rating">
                    {"★".repeat(p.rating)}{"☆".repeat(5 - p.rating)}
                  </div>
                  <div className="price">
                    <span className="old">₹{p.oldPrice}</span>
                    <span className="new">₹{p.price}</span>
                  </div>

                  {/* Buttons */}
                  <div className="btn-group">
                    <button className="cart-btn" onClick={() => addToCart(p)}>
                      🛒 Add to Cart
                    </button>
                    <button className="wishlist-btn" onClick={() => addToWishlist(p)}>
                      ❤️
                    </button>
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

export default Bags;

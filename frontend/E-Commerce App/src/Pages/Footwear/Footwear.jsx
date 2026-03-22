import React, { useState, useContext } from "react";
import "../Fashion/Fashion.css";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";

const products = [
  {
    id: 31,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/l/z/7-asgo1366a-ice-green-r-blue-abros-ice-green-r-blue-original-imagz7xff9zkmvyt.jpeg?q=70",
    title: "Nike Air Max",
    desc: "Men's Running Shoes",
    price: 4999,
    oldPrice: 5999,
    discount: 17,
    rating: 5,
  },
  {
    id: 32,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/x/r/9-loc00028g-9-aqualite-light-grey-dark-grey-original-imahec3dsnqhzjtf.jpeg?q=70",
    title: "Adidas Ultraboost",
    desc: "Performance Sports Shoes",
    price: 6999,
    oldPrice: 8999,
    discount: 22,
    rating: 5,
  },
  {
    id: 33,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/2/5/9/8-kl-402-grey-8-8-killer-grey-original-imahf58yp8eg7nek.jpeg?q=70",
    title: "Puma Smash",
    desc: "Casual Sneakers for Men",
    price: 2999,
    oldPrice: 3999,
    discount: 25,
    rating: 4,
  },
  {
    id: 34,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/j/n/8/-original-imahd2zmtrdytbgb.jpeg?q=70",
    title: "Skechers Go Walk",
    desc: "Comfort Walking Shoes",
    price: 3799,
    oldPrice: 4999,
    discount: 24,
    rating: 5,
  },
  {
    id: 35,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/b/q/-original-imagg5vymgzearxq.jpeg?q=70",
    title: "Woodland",
    desc: "Leather Outdoor Boots",
    price: 4499,
    oldPrice: 5999,
    discount: 25,
    rating: 4,
  },
  {
    id: 36,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/i/l/m/7-8216472-7-bata-jet-black-original-imah45txqduudyts.jpeg?q=70",
    title: "Bata",
    desc: "Formal Leather Shoes",
    price: 2599,
    oldPrice: 3299,
    discount: 21,
    rating: 4,
  },
  {
    id: 37,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/a/5/u/-original-imahesyawgzggu6e.jpeg?q=70",
    title: "Red Tape",
    desc: "Casual Sneakers",
    price: 2199,
    oldPrice: 2999,
    discount: 27,
    rating: 4,
  },
  {
    id: 38,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/m/8/8-comfort-8-sega-grey-original-imaghuc3xjqpehj6.jpeg?q=70",
    title: "Campus",
    desc: "Men's Running Sneakers",
    price: 1799,
    oldPrice: 2499,
    discount: 28,
    rating: 4,
  },
  {
    id: 39,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/a/c/10-killerwh0001-10-killer-white-original-imahbzvvxgtfzbve.jpeg?q=70",
    title: "Reebok Classic",
    desc: "Unisex Retro Shoes",
    price: 3299,
    oldPrice: 4499,
    discount: 26,
    rating: 5,
  },
];

function Footwear() {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(8000); // increased max so higher shoes show
  const [sort, setSort] = useState("default");

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  // Filter products
  let filteredProducts = products.filter((p) => {
    return p.title.toLowerCase().includes(search.toLowerCase()) && p.price <= price;
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
            max="8000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
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
        <h2>Footwear Collection</h2>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => {
              const discountedPrice = Math.round(p.price - (p.price * p.discount) / 100);
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

export default Footwear;

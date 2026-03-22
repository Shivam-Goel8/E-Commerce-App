import React, { useState, useContext } from "react";
import "../Fashion/Fashion";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";

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
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/pendant-locket/d/v/z/na-g-pannas-33302-jemsprime-original-imahdcjcxezxghyf.jpeg?q=70",
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


function Jewellery() {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(30000);
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
            max="30000"
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
        <h2>Jewellery Collection</h2>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => {
              const discountValue = parseInt(p.discount.replace("%", ""), 10) || 0;
              const discountedPrice = Math.round(p.price - (p.price * discountValue) / 100);

              return (
                <div className="card" key={p.id}>
                  <span className="discount-badge">-{p.discount}</span>
                  <img src={p.img} alt={p.title} />
                  <h4 className="brand">{p.title}</h4>
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

export default Jewellery;

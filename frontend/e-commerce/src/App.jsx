import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./Context/WishlistContext";
import { CartProvider } from "./Context/CartContext"; // ✅ Import CartProvider
import Nav from "./Nav/Nav";
import Fotter from "./Fotter/Fotter";
import Home from "./Home/Home";
import Fashion from "./Pages/Fashion/Fashion"
import Login from "./Authancation/Login/Login"
import Wishlist from "./Wishlist/Wishlist"
import Cart from "./Cart/Cart"
import Electronics from "./Pages/Electronics/Electronics";
import Bags from "./Pages/Bags/Bags";
import Footwear from "./Pages/Footwear/Footwear";
import Jewellery from "./Pages/Jewellery/Jewellery";
import Register from "./Authancation/Registar/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./Orders/Order";
function App() {
  return (

    <CartProvider>
      <ToastContainer position="top-right" autoClose={2000} />
      <WishlistProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/bags" element={<Bags />} />
            <Route path="/footwear" element={<Footwear />} />
            <Route path="/jewellery" element={<Jewellery />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/orders" element={<Orders />} /> 
          </Routes>
          <Fotter />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;

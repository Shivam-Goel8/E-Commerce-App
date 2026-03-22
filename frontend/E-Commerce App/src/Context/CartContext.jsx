import React, { createContext, useState, useEffect } from "react";
import API from "../utils";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  // ✅ GET CART GLOBAL
  const getCart = async () => {
    try {
      const res = await API.get("/cart");

      if (res.data.success) {
        setCart(res.data.cart.products || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart(); // 🔥 load cart on app start
  }, []);

  // ✅ ADD TO CART
  const addToCart = async (product) => {
    try {
      const res = await API.post("/cart/add", {
        productId: product._id || product.id,
        name: product.name || product.title, // 🔥 fix (you use title)
        price: product.price,
        img: product.img,
      });

      if (res.data.success) {
        toast.success("Product added ✅");
        getCart();
      } else {
        toast.error(res.data.msg);
      }

    } catch (error) {
      console.log(error);

      // ✅ MAIN LOGIN CHECK
      if (error.response?.status === 401) {
        toast.error("Please login first ❌");
        return;
      }

      toast.error("Server error ❌");
    }
  };
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, getCart }}>
      {children}
    </CartContext.Provider>
  );
};
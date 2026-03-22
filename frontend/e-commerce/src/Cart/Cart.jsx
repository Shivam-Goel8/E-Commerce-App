import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import "./Cart.css";
import API from "../utils";
import { toast } from "react-toastify";
import { useState } from "react";

function Cart() {
  const { cart, getCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getCart();
  }, []);

  // ✅ REMOVE
  const handleRemove = async (productId) => {
    try {
      const res = await API.post("/cart/remove", { productId });

      if (res.data.success) {
        toast.success("Item removed ✅");
        getCart();
      }
    } catch (error) {
      toast.error("Error ❌");
    }
  };

  // ✅ UPDATE
  const handleQty = async (productId, qty) => {
    try {
      const res = await API.post("/cart/update", {
        productId,
        quantity: qty,
      });

      if (res.data.success) {
        toast.success("Updated ✅");
        getCart();
      }
    } catch (error) {
      toast.error("Error ❌");
    }
  };

  // ✅ PLACE ORDER
  const handleOrder = async () => {
    try {
      setLoading(true);

      const res = await API.post("/order/place");

      if (res.data.success) {
        toast.success("Order placed 🎉");
        getCart([]); // clear UI
      } else {
        toast.error(res.data.msg || "Order failed ❌");
      }
    } catch (error) {
      toast.error("Server error  ❌");
    } finally {
      setLoading(false);
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">

      {/* LEFT SIDE */}
      <div className="cart-left">
        <h2>Shopping Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <p className="empty">🛒 Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">

              <img src={item.img} alt="" className="cart-img" />

              <div className="cart-details">
                <h4>{item.name}</h4>

                {/* <div className="price"> */}
                <span className="new">₹{item.price}</span>
                {/* </div> */}

                <div className="actions">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQty(item.productId, parseInt(e.target.value))
                    }
                    className="cart_quantity"
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        Qty: {q}
                      </option>
                    ))}
                  </select>

                  <button
                    className="remove_cart"
                    onClick={() => handleRemove(item.productId)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE (BILLING) */}
      <div className="cart-right">
        <h3>PRICE DETAILS</h3>

        <div className="price-box">
          <p>
            Price ({cart.length} items)
            <span>₹{subtotal}</span>
          </p>

          <p>
            Discount
            <span className="green">- ₹100</span>
          </p>

          <p>
            Delivery Charges
            <span className="green">FREE</span>
          </p>

          <hr />

          <p className="total">
            Total Amount
            <span>₹{subtotal - 100}</span>
          </p>

          <p className="save">You will save ₹100 on this order</p>
        </div>

        <button
          className="checkout-btn"
          onClick={handleOrder}
          disabled={loading || cart.length === 0}
        >
          {loading ? "Placing Order..." : "PLACE ORDER"}
        </button>
      </div>
    </div>
  );

}

export default Cart;
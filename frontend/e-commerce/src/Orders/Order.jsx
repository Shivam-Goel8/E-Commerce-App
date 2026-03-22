import React, { useEffect, useState } from "react";
import API from "../utils";
import { toast } from "react-toastify";
import "../Orders/Order.css";

function Orders() {
    const [orders, setOrders] = useState([]);

    // ✅ GET ORDERS
    const getOrders = async () => {
        try {
            const res = await API.get("/order");

            if (res.data.success) {
                setOrders(res.data.orders);
            } else {
                toast.error("Failed to load orders ❌");
            }
        } catch (error) {
            console.log(error);
            toast.error("Server error ❌");
        }
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className="orders-container">
            <h2>My Orders</h2>

            {orders.length === 0 ? (
                <p>📦 No orders yet</p>
            ) : (
                orders.map((order, index) => (
                    <div key={index} className="order-card">

                        {/* 🔥 Order Info */}
                        <div className="order-header">
                            <h4>Order #{index + 1}</h4>
                            <p>Total: ₹{order.totalAmount}</p>
                        </div>

                        {/* 🔥 Products */}
                        <div className="order-products">
                            {order.products.map((item, i) => (
                                <div key={i} className="order-item">
                                    <img src={item.img} alt="" width="60" />

                                    <div>
                                        <h5>{item.name}</h5>
                                        <p>Qty: {item.quantity}</p>
                                        <p>₹{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))
            )}
        </div>
    );
}

export default Orders;
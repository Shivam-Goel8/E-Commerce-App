const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Auth = require("../models/Authmodel");
const PrivateRoutes = require("../middleware/Authmiddleware");
const Cart = require("../models/Cartschema");
const Wishlist = require("../models/Wishlistmodel");
const Order = require("../models/Orderhistory");


// ================= AUTH ================= //

// SIGNUP
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await Auth.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, msg: "User already exists" });
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const newUser = new Auth({ name, email, password: hashpassword });
        await newUser.save();

        const token = jwt.sign(
            { id: newUser._id, email },
            "secret",
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
        });

        res.json({
            success: true,
            msg: "Signup successful",
            user: { name, email }
        });

    } catch (error) {
        res.json({ success: false, msg: error.message });
    }
});


// LOGIN
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Auth.findOne({ email });
        if (!user) {
            return res.json({ success: false, msg: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, msg: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, email },
            "secret",
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
        });

        res.json({
            success: true,
            msg: "Login successful",
            user: { name: user.name, email }
        });

    } catch (error) {
        res.json({ success: false, msg: error.message });
    }
});


// PROFILE
router.get("/profile", PrivateRoutes, (req, res) => {
    res.json({
        success: true,
        msg: "Welcome to dashboard",
        user: req.user
    });
});


// LOGOUT
router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ success: true, msg: "Logged out" });
});



// ================= CART ================= //

// ADD TO CART
// GET CART
router.get("/cart", PrivateRoutes, async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.user.id });

        if (!cart) {
            cart = { products: [] };
        }

        res.json({ success: true, cart });
    } catch (error) {
        console.log("GET CART ERROR:", error);
        res.json({ success: false });
    }
});


router.post("/cart/add", PrivateRoutes, async (req, res) => {
    try {
        const { productId, name, price, img } = req.body;
        const userId = req.user.id;

        // 🔥 VALIDATION (important)
        if (!productId || !name || !price) {
            return res.json({
                success: false,
                msg: "All fields are required",
            });
        }

        let cart = await Cart.findOne({ userId });

        // ✅ CREATE NEW CART
        if (!cart) {
            cart = new Cart({
                userId,
                products: [
                    {
                        productId,
                        name,
                        price,
                        img,
                        quantity: 1,
                    },
                ],
            });
        } else {
            // 🔍 FIND PRODUCT
            const index = cart.products.findIndex(
                (p) =>
                    p &&
                    p.productId &&
                    p.productId.toString() === productId.toString()
            );

            if (index > -1) {
                // ✅ Increase quantity
                cart.products[index].quantity += 1;
            } else {
                // ✅ Add new product
                cart.products.push({
                    productId,
                    name,
                    price,
                    img,
                    quantity: 1,
                });
            }
        }

        await cart.save();

        res.json({
            success: true,
            msg: "Product added to cart",
            cart,
        });
    } catch (error) {
        console.log("ADD TO CART ERROR:", error);
        res.json({
            success: false,
            msg: error.message,
        });
    }
});


// REMOVE ITEM
router.post("/cart/remove", PrivateRoutes, async (req, res) => {
    try {
        const { productId } = req.body;

        const cart = await Cart.findOne({ userId: req.user.id });

        if (!cart) {
            return res.json({ success: true });
        }

        cart.products = cart.products.filter((p) => {
            // 🔥 SAFETY CHECK
            if (!p || !p.productId) {
                console.log("Invalid product found:", p);
                return false; // remove broken item
            }

            return p.productId.toString() !== productId.toString();
        });

        await cart.save();

        res.json({ success: true });
    } catch (error) {
        console.log("REMOVE ERROR:", error);
        res.json({ success: false });
    }
});


// ✅ UPDATE QTY
router.post("/cart/update", PrivateRoutes, async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        const cart = await Cart.findOne({ userId: req.user.id });

        if (cart) {
            const item = cart.products.find(
                (p) => p.productId.toString() === productId
            );

            if (item) {
                item.quantity = quantity;
            }

            await cart.save();
        }

        res.json({ success: true });
    } catch (error) {
        res.json({ success: false });
    }
});


// ================= WISHLIST ================= //

// ADD
router.post("/wishlist/add", PrivateRoutes, async (req, res) => {
    const { productId, name, price, img } = req.body;
    const userId = req.user.id;

    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
        wishlist = new Wishlist({
            userId,
            products: [{ productId, name, price, img }]
        });
    } else {
        const exists = wishlist.products.find(p => p.productId === productId);

        if (!exists) {
            wishlist.products.push({ productId, name, price, img });
        }
    }

    await wishlist.save();
    res.json({ success: true, wishlist });
});


// GET WISHLIST
router.get("/wishlist", PrivateRoutes, async (req, res) => {
    const wishlist = await Wishlist.findOne({ userId: req.user.id });
    res.json({ success: true, wishlist });
});


// COUNT
router.get("/wishlist/count", PrivateRoutes, async (req, res) => {
    const wishlist = await Wishlist.findOne({ userId: req.user.id });
    const count = wishlist ? wishlist.products.length : 0;

    res.json({ success: true, count });
});


// REMOVE
router.post("/wishlist/remove", PrivateRoutes, async (req, res) => {
    const { productId } = req.body;

    const wishlist = await Wishlist.findOne({ userId: req.user.id });

    if (wishlist) {
        wishlist.products = wishlist.products.filter(p => p.productId !== productId);
        await wishlist.save();
    }

    res.json({ success: true });
});



// ================= ORDER ================= //

// PLACE ORDER
router.post("/order/place", PrivateRoutes, async (req, res) => {
    const userId = req.user.id;

    const cart = await Cart.findOne({ userId });

    if (!cart || cart.products.length === 0) {
        return res.json({ success: false, msg: "Cart empty" });
    }

    const totalAmount = cart.products.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const order = new Order({
        userId,
        products: cart.products,
        totalAmount
    });

    await order.save();

    // clear cart
    await Cart.findOneAndDelete({ userId });

    res.json({ success: true, order });
});


// GET ORDER HISTORY
router.get("/order", PrivateRoutes, async (req, res) => {
    const orders = await Order.find({ userId: req.user.id });
    res.json({ success: true, orders });
});


module.exports = router;
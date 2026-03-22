const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auth",
        required: true
    },
    products: [
        {
            productId: String,
            name: String,
            price: Number
        }
    ]
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
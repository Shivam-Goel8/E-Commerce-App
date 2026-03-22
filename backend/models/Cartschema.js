const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
  products: [
    {
      productId: String,
      name: String,
      price: Number,
      img: String, // ✅ FIXED
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

module.exports = mongoose.model("Cart", CartSchema);
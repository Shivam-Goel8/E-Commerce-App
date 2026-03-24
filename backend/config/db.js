require("dotenv").config();
const mongoose = require("mongoose")
// const MONGO = process.env.MONGO;

mongoose.connect("mongodb+srv://shivamgoel8383:c6r6L1sA6VLmYsau@cluster0.id7132s.mongodb.net/ECommerce")
    .then(() => console.log("Mongo connect At Ecommerce"))
    .catch((err) => console.log("Error", err))


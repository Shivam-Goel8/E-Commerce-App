const mongoose = require("mongoose")
require("dotenv").config();
const MONGO = process.env.MONGO;

mongoose.connect(`${MONGO}`)
    .then(() => console.log("Mongo connect At Ecommerce"))
    .catch((err) => console.log("Error", err))


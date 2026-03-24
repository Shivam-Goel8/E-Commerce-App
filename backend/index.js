const express = require("express")
const app = express()
require("./config/db")
require("dotenv").config();
const Routes = require("./routes/Authroutes")
const cookieParser = require("cookie-parser");
const cors = require("cors")

const PORT = process.env.PORT || 5000;

// const VITE_API_URL = process.env.VITE_API_URL

// middleware
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: "https://e-commerce-app-frontend-5gkb.onrender.com",
    credentials: true,
}));


app.use("/", Routes)
// app.use("/", Routes);
// app.use("/wishlist", Routes);
// app.use("/order", Routes);

app.listen(PORT, () => console.log("Server started"))
const express = require("express")
const app = express()
require("./config/db")
const Routes = require("./routes/Authroutes")
const cookieParser = require("cookie-parser");
const cors = require("cors")
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const URL  =process.env.URL

// middleware
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: URL
    ,credentials: true,
}));


app.use("/", Routes)
// app.use("/", Routes);
// app.use("/wishlist", Routes);
// app.use("/order", Routes);

app.listen(PORT, () => console.log("Server started"))
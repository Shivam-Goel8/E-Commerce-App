const express = require("express")
const app = express()
require("./config/db")
const Routes = require("./routes/Authroutes")
const cookieParser = require("cookie-parser");
const cors = require("cors")


// middleware
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", // React dev server origin
    credentials: true,
}));


app.use("/", Routes)
// app.use("/", Routes);
// app.use("/wishlist", Routes);
// app.use("/order", Routes);

app.listen(5000, () => console.log("Server started"))
const jwt = require("jsonwebtoken");

const ProtectRoute = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ msg: "No token, access denied" });
    }

    try {
        const decoded = jwt.verify(token, "secret");
        req.user = decoded;
        next(); // allow user to access protected route
    } catch (error) {
        return res.status(401).json({ msg: "Invalid token" });
    }
};

module.exports = ProtectRoute
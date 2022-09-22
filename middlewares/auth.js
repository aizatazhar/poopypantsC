const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    let jwtToken;
    try {
        // is in format "Bearer <jwtToken>"
        jwtToken = req.headers.authorization.split(" ")[1];
    } catch (e) {
        return res.status(401).send({ message: "No token provided" });
    }

    try {
        const authenticatedUser = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        if (!authenticatedUser.roles.includes("admin")) {
            return res.status(403).json({ message: "Not authorised" });
        } else if (Date.now() > authenticatedUser.exp * 1000) {
            // jwt expiry is in seconds
            return res.status(401).json({ message: "Token expired" });
        }
    } catch (e) {
        return res.status(400).json(e);
    }

    next();
};

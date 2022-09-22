const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    let jwtToken;
    try {
        // is in format "Bearer <jwtToken>"
        jwtToken = req.headers.authorization.split(" ")[1];
        const authenticatedUser = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        if (Date.now() > authenticatedUser.exp * 1000) {
            // jwt expiry is in seconds
            return res.status(401).json({ message: "Token expired" });
        }

        // set the roles for authorise middleware
        req.roles = authenticatedUser.roles;
    } catch (e) {
        return res.status(401).send(e);
    }

    next();
};

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// only "admin" roles should be able to get these sensitive data
const employees = [
    { name: "John Doe", gender: "male", age: 60, pay: 4000 },
    { name: "Jane Smith", gender: "female", age: 18, pay: 8900 },
    { name: "Nicki Minaj", gender: "female", age: 39, pay: 1000000 },
];

router.get("/", async (req, res) => {
    let jwtToken;
    try {
        // is in format "Bearer <jwtToken>"
        jwtToken = req.headers.authorization.split(" ")[1];
    } catch (e) {
        return res.status(401).send({ message: "No token provided" });
    }

    try {
        const authenticatedUser = jwt.verify(
            jwtToken,
            "some private key that shouldn't be visible 💩"
        );
        
        if (!authenticatedUser.roles.includes("admin")) {
            return res.status(403).json({ message: "No authorisation role to view employee data" });
        } else if (Date.now() > authenticatedUser.exp * 1000) { // jwt expiry is in seconds
            return res.status(401).json({ message: "Token expired" });
        }

        res.json(employees);
    } catch (e) {
        return res.status(400).json(e);
    }
});

module.exports = router;

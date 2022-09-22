const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

const users = [
    {
        email: "sundar@google.com",
        password: "ilovegoogle123",
        roles: ["admin"],
    },
];

router.post("/", async (req, res) => {
    const user = users.find((u) => u.email === req.body.email);
    if (!user || user.password !== req.body.password) {
        return res.send({ status: 400, message: "invalid email or password" });
    }

    const token = jwt.sign(user, "some private key that shouldn't be visible 💩", {
        expiresIn: "15m",
    });

    res.send({ status: 200, message: "success", token: token });
});

module.exports = router;

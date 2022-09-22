const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

const users = [
    {
        email: "sundar@google.com",
        password: "ilovegoogle123",
        roles: ["viewer"],
    },
    {
        email: "robot@google.com",
        password: "helloworld123",
        roles: ["admin", "viewer"],
    },
];

router.post("/", async (req, res) => {
    const user = users.find((u) => u.email === req.body.email);
    if (!user || user.password !== req.body.password) {
        return res.status(400).send({ message: "invalid email or password" });
    }

    const token = jwt.sign(user, "some private key that shouldn't be visible 💩", {
        expiresIn: "15m",
    });

    res.send({ message: "success", token: token });
});

module.exports = router;

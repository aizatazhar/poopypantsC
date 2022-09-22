const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const { admin } = require("../middlewares/authorise");

// only "admin" roles should be able authorised to get these sensitive data
const employees = [
    { name: "John Doe", gender: "male", age: 60, pay: 4000 },
    { name: "Jane Smith", gender: "female", age: 18, pay: 8900 },
    { name: "Nicki Minaj", gender: "female", age: 39, pay: 1000000 },
];

router.use(authenticate, admin);

router.get("/", async (req, res) => {
    res.json(employees);
});

module.exports = router;

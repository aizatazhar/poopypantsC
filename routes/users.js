const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.json([
        { name: "John Doe", gender: "male", age: "60", location: "Texas" },
        { name: "Jane Smith", gender: "female", age: "18", location: "California" },
    ]);
});

module.exports = router;

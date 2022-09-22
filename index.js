const express = require("express");

const port = 8000;
const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("Authentication & Authorisation with Express"));
app.use("/api/users", async (req, res) => {
    res.json([
        { name: "John Doe", gender: "male", age: "60", location: "Texas" },
        { name: "Jane Smith", gender: "female", age: "18", location: "California" },
    ]);
});

module.exports = app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

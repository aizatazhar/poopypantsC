const express = require("express");
const app = express();
const authenticateRoute = require("./routes/authenticate");
const usersRoute = require("./routes/users");

app.use(express.json());
app.get("/", (req, res) => res.send("Authentication & Authorisation with Express"));
app.use("/api/users", usersRoute);
app.use("/api/auth", authenticateRoute);

const port = 8000;
module.exports = app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

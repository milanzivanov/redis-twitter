const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Worls");
});

app.listen(3000, (req, res) => {
    console.log("Server ready");
});
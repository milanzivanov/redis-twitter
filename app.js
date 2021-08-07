const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


// get
app.get("/", (req, res) => {
    res.render("index");
});

//  post
app.post("/", (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
        res.render("error", {
            message: "Please set both username and password",
        })
        return
    }
  
    console.log(req.body, username, password);
    res.end();
});

app.listen(3000, (req, res) => {
    console.log("Server ready");
});
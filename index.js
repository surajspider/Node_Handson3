const express = require("express");
const Categoryrouter = require("./CategoryRouter/CategoryRouter");
const app = express();
const PORT = 4500;


const appmiddleware = (req, res, next) => {
    console.log("This is Application middleware!");
    next();
}

app.use(appmiddleware);

app.use("/api", Categoryrouter);

app.get("/", (req, res) => {
    res.send("<h1>This is Home Page</h1><h3>Try to hit route api '/api/middleware' to know the routing middleware!</h1>");
    console.log("Home Page!");
})

app.listen(PORT, () => {
    try {
        console.log("Application is running on PORT ", PORT);
    }
    catch (err) {
        console.log("Error Occurred", err);
    }
})
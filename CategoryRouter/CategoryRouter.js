const { middlewarecon, datacon } = require("../CategoryController/CategoryController");
const { auth, auth2 } = require("../Middleware/Auth");

const Categoryrouter = require("express").Router();
Categoryrouter.get("/middleware", auth, middlewarecon);
Categoryrouter.get("/data", auth2, datacon);

module.exports = Categoryrouter;
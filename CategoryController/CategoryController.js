const { data, middleware } = require("../apidata");

const middlewarecon = (req, res) => {
    return res.send(middleware);
}

const datacon = (req, res) => {
    return res.send(data);
}

module.exports = { middlewarecon, datacon };
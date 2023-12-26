const express = require("express")
const routes = express.Router()

const { InserirDados } = require("../controllers/crud")

routes.get("/", function (req, res) {
    res.send("salve")
})

routes.post("/criar/livro", InserirDados)

module.exports = routes
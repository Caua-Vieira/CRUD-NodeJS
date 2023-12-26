const express = require("express") //função que cria um servidor express
const app = express() //criou uma aplicação express e colocou na constante app
const rotas = require("./Router/livro")

app.use(express.json())

app.use("/livros", rotas)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
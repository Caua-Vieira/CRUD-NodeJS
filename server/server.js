const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))

const routes = require("./routes/routes")

const port = 8000
app.listen(port, function () {
    console.log("SERVIDOR RODANDO NA PORTA: http://localhost:" + port)
})

app.use(routes)


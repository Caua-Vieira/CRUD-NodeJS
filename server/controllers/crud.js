const connection = require("../database/mysql");

function InserirDados(req, res) {
    const { livro, ano } = req.body
    console.log(req.bod)

    if (livro.length > 2 || ano.length < 5) {
        connection.query(`insert into livros (nome, ano) values('${livro}', '${ano}')`, function (erro) {
            if (erro) {
                res.send({
                    codigo: 400,
                    message: "Nome com menos de duas letras ou ano de lançamento inválido",
                    erro: erro.message
                })
            }
            else {
                res.send({
                    codigo: 200,
                    message: "Livro Inserido no banco com sucesso",
                })
            }
        })
    }
    else {
        console.log("erro aqui")
        res.send({
            codigo: 400,
            message: "Nome com menos de duas letras ou ano de lançamento inválido"
        })
    }


}

module.exports = { InserirDados }

const database = require("../mysql")

function getLivros(req, res) {
    database.query(`select * from livros`, function (erro, results) {
        if (!erro) {
            res.send(results)
        } else {
            res.status(500)
            res.send(erro.message)
        }
    })
}

function getLivroPorId(req, res) {
    const id = req.params.id

    database.query(`select * from livros where id = '${id}'`, function (erro, results) {
        if (id && Number(id) && !erro) {
            res.send(results)
        } else {
            res.status(422)
            res.send(erro.message)
        }
    })
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body

        database.query(`insert into livros (nome) values('${livroNovo}')`, function (erro) {
            if (!erro) {
                res.send({
                    codigo: 200,
                    message: "inserido no banco com sucesso"
                })
            }
            else {
                res.send({
                    codigo: 400,
                    message: "Erro ao inserir no banco",
                    erro: erro.message
                })
            }
        })
    } catch (error) {
        res.status(500)
        error.message
    }
}

function patchLivro(req, res) {
    const id = req.params.id
    const body = req.body

    database.query(`UPDATE Livros set nome = '${body}' where id = '${id}'`, function (erro) {
        if (id && Number(id)) {
            res.send({
                codigo: 200,
                message: "Livro modificado com sucesso"
            })
        } else {
            res.send(422)
            res.send(erro)
            res.send("Livro não encontrado")
        }
    })
}


function deleteLivro(req, res) {
    const id = req.params.id

    database.query(`delete from Livros where id = '${id}'`, function (erro) {
        if (id && Number(id) && !erro) {
            res.send({
                codigo: 200,
                message: "Livro deletado com sucesso"
            })
        } else {
            res.send(422)
            res.send("Livro não encontrado")
        }
    })
}

module.exports = {
    getLivros,
    getLivroPorId,
    postLivro,
    patchLivro,
    deleteLivro
}
const express = require('express');
const router = express.Router();
const { getLivros, getLivroPorId, postLivro, patchLivro, deleteLivro } = require("../controladores/livro");

router.get('/', getLivros)


router.get('/:id', getLivroPorId)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)


router.delete('/', function (req, res) {
    res.send("Requisição do tipo delete")
})


module.exports = router


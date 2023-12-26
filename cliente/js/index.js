const xhr = new XMLHttpRequest()


xhr.open("POST", "http://localhost:8000/criar/livro", true)
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

//xmlhttprequest, se minha requisição for feita com sucesso, faça o que estiver na function.
xhr.onload = function () {

    console.log(xhr.response)
    const respostaJson = JSON.parse(xhr.response)
    console.log(respostaJson)
    console.log(respostaJson.codigo)

    if (respostaJson.codigo == 200) {
        alert(respostaJson.message)
    }
    else {
        alert(respostaJson.message)
    }

}

xhr.send("livro=TesteLivro&ano=2023")

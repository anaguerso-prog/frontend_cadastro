const { json } = require("body-parser")

let resposta = document.getElementById('resposta')
let principal = document.getElementById('principal')

principal.addEventListener('click', (e)=>{
    e.preventDefault()
    
    const altura = Number(document.getElementById('altura').value)
    const peso = Number(document.getElementById('peso').value)
    const nome = document.getElementById('nome').value

    let valores = { // empacotando os dados (atributo: vaor)
        nome: nome,
        altura: altura,
        peso: peso
    }
    fetch(`http://localhost:3000`,{ //endereço do servidor
        method: 'POST', //significa que vamos gravar os dados 
        headers: {'Content-Type':'application/json'}, //formato dos dados Java Script Object Notation (json)
        body: JSON.stringify(valores) //convertendo os dados do js para string (letras)
    })
    .then(res => res.json()) //traduzindo o js da resposta do backend para string (letras)
    .then(dados =>{
        resposta.innerHTML = '' //apagando o que tinha antes
        resposta.innerHTML += dados //codigo incompleto
    })
    .catch((err)=>{
        console.erros('erro ao cadastrar os dados do usuario', err)
        resp0osta.innerHTML = 'erro ao cadastrar os dados do usuario'
    })

})
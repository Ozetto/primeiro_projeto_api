const express = require("express")

const app = express()
const porta = 3333

function mostrarPorta(){
 console.log("servidor criado e rodando na porta", porta)
}

app.listen(porta, mostrarPorta)
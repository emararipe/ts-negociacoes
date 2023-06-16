import { NegociacaoController } from "./controllers/negociacao-controller.js"

const controller = new NegociacaoController
const form = document.querySelector('.form')
  if(form){
    form.addEventListener( 'submit', event => {
      event.preventDefault()
      controller.adiciona()
    })
  } else {
    throw new Error('Não foi possível iniciar a aplicação, verifique se o elemento form existe.')
  } 

const botaoImporta = document.querySelector('#botao-importa') 
  if(botaoImporta){
    form.addEventListener( 'click', event => {
      controller.importaDados()
    })
  } else {
    throw new Error('Botão importa não foi encontrado.')
  } 


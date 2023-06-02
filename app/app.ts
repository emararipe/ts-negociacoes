import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController
const form = document.querySelector('.form')
form.addEventListener( 'submit', event => {
  event.preventDefault()// para evitar que a página seja recarregada após o submit
  controller.adiciona()
})


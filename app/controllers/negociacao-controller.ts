import { listaNegociacoes } from "../models/lista-negociacoes.js"
import { Negociacao } from "../models/negociacao.js"


export class NegociacaoController{
  private inputData: HTMLInputElement
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement
  private negociacoes = new listaNegociacoes()
  
  constructor(){
    this.inputData = document.querySelector('#data') 
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao()
    this.negociacoes.adiciona(negociacao)
    console.log(this.negociacoes)
    this.limpaFormulario()
  }

  criaNegociacao(): Negociacao {
    const quantidade = parseInt(this.inputQuantidade.value)

    return new Negociacao (
      this.inputData.valueAsDate,
      quantidade,
      this.inputValor.valueAsNumber
    )
  }

  limpaFormulario(): void {
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''

    this.inputData.focus()
  }
}



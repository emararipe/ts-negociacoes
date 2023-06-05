import { ListaNegociacoes } from "../models/lista-negociacoes.js"
import { Negociacao } from "../models/negociacao.js"
import { NegociacoesView } from "../views/negociacoes-view.js"


export class NegociacaoController{
  private inputData: HTMLInputElement
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement
  private negociacoes = new ListaNegociacoes()
  private negociacoesView = new NegociacoesView('#negociacoesView')
  
  constructor(){
    this.inputData = document.querySelector('#data') 
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')
    this.negociacoesView.update(this.negociacoes)
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao()
    this.negociacoes.adiciona(negociacao)
    this.negociacoesView.update(this.negociacoes)
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



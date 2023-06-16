import { ListaNegociacoes } from "../models/lista-negociacoes.js"
import { Negociacao } from "../models/negociacao.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"
import { DiasDaSemana } from "../enums/dias-semana.js"
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js"
import { inspecionar } from "../decorators/inspecionar.js"
import { escapar } from "../decorators/escapar.js"


export class NegociacaoController{
  private inputData: HTMLInputElement
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement
  private negociacoes = new ListaNegociacoes()
  private negociacoesView = new NegociacoesView('#negociacoesView')
  private mensagemView = new MensagemView('#mensagemView')
  
  constructor(){
    this.inputData = document.querySelector('#data') as HTMLInputElement
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement
    this.inputValor = document.querySelector('#valor') as HTMLInputElement
    this.negociacoesView.update(this.negociacoes)
    
  }

  
  @logarTempoExecucao(true)
  adiciona(): void {
    const quantidade = this.inputQuantidade.value
    const valor = this.inputValor.value
    const data = this.inputData.value

    const negociacao = Negociacao.criaDe(quantidade, valor, data)
    if(!this.ehDiautil(negociacao.data)){
      this.mensagemView.update('Apenas negociações em dias úteis são aceitas.')
      return
    }

    this.negociacoes.adiciona(negociacao)
    this.atualizaView()
    this.limpaFormulario()
  }

  importaDados(): void {
    fetch('http://localhost:8080/dados')
    .then( res => res.json())
    .then((dados: any[]) => {
      return dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))  
    })
    .then(negociacoesHoje => {
      for(let negociacao of negociacoesHoje){
        this.negociacoes.adiciona(negociacao)
      }
      this.negociacoesView.update(this.negociacoes)
    })
  }

  private ehDiautil(data: Date){
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
  }

  private limpaFormulario(): void {
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''

    this.inputData.focus()
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes)
    this.mensagemView.update('Negociação feita com sucesso.')
  }
}



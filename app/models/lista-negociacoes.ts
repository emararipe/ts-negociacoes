import { Negociacao } from "./negociacao.js";

export class listaNegociacoes {
  private negociacoes: Array<Negociacao> = []

  adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao)
  }

  lista(){
    return this.negociacoes
  }
}


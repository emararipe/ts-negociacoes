import { Comparavel } from "../interfaces/comparavel.js";
import { Negociacao } from "./negociacao.js";

export class ListaNegociacoes implements Comparavel<ListaNegociacoes> {
  private negociacoes: Negociacao[] = []

  adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao)
  }

  lista(): readonly Negociacao[]{
    return this.negociacoes
  }

  paraTexto(): string{
    return JSON.stringify(this.negociacoes, null, 2)
  }

  ehIgual(negociacoesLista: ListaNegociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoesLista)
  }
}


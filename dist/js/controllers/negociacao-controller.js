import { listaNegociacoes } from "../models/lista-negociacoes.js";
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new listaNegociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes);
        this.limpaFormulario();
    }
    criaNegociacao() {
        const quantidade = parseInt(this.inputQuantidade.value);
        return new Negociacao(this.inputData.valueAsDate, quantidade, this.inputValor.valueAsNumber);
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}

import { Comparavel } from "../interfaces/comparavel.js"

export class Negociacao implements Comparavel<Negociacao> {

  constructor(
    private _data: Date, 
    public readonly quantidade: number,
    public readonly valor: number
  ){
  }

  get volume(): Number {
    return this.quantidade * this.valor
  }

  get data(): Date {
    const data = new Date(this._data.getTime())
    return data
  }

  static criaDe(quantidadeTemp: string, valorTemp: string, dataTemp: string): Negociacao{
    const quantidade = parseInt(quantidadeTemp)
    const valor = parseFloat(valorTemp)
    const exp = /-/g
    const data = new Date(dataTemp.replace(exp, ','))

    return new Negociacao (
      data,
      quantidade,
      valor
    )
  }

  paraTexto():string {
    return `
      Data:${this.data},
      Quanidade: ${this.quantidade},
      Valor: ${this.valor}
    `
  }

  ehIgual(negociacao: Negociacao) {
    return this.data.getDate() === negociacao.data.getDate() &&
    this.data.getMonth() === negociacao.data.getMonth() &&
    this.data.getFullYear() === negociacao.data.getFullYear()
  }
}


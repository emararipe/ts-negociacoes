import { ListaNegociacoes } from "../models/lista-negociacoes.js"

export class NegociacoesView{

  private elemento: HTMLElement

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor)
  }

  template(model: ListaNegociacoes): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th> DATA </th>
          <th> QUANTIDADE </th>
          <th> VALOR </th>
        </tr>
      </thead>

      <tbody>
        ${model.lista().map(negociacao => {
          return `
          <tr>
            <td>${negociacao.data.toLocaleDateString()}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
          </tr>
          `
        })}
      </tbody>
    </table>
    `
  }

  update(modelo: ListaNegociacoes): void{
      this.elemento.innerHTML = this.template(modelo)
  }
}


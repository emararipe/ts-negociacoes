import { View } from "./view.js";
export class NegociacoesView extends View {
    template(modelo) {
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
        ${modelo.lista().map(negociacao => {
            return `
          <tr>
            <td>${negociacao.data.toLocaleDateString()}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
          </tr>
          `;
        })}
      </tbody>
    </table>
    `;
    }
    update(modelo) {
        this.elemento.innerHTML = this.template(modelo);
    }
}

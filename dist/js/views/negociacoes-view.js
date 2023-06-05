export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
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

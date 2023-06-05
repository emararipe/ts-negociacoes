import { View } from "./view.js"

export class MensagemView extends View<string> {

  template(modelo: string): string{
    return `
      <p class="alert alert-info">${modelo}</p>
    `
  }

  update(modelo: string): void{
    this.elemento.innerHTML = this.template(modelo)
  }

}


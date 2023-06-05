export abstract class View<T> {
  protected elemento: HTMLElement

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor)
  }

  abstract template(modelo: T): string

  update(modelo: T){
    this.elemento.innerHTML = this.template(modelo)
  }
}


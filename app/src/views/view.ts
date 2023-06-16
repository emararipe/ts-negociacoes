import { inspecionar } from "../decorators/inspecionar.js"
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js"

export abstract class View<T> {
  protected elemento: HTMLInputElement

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor) 
    if(elemento){
      this.elemento = elemento as HTMLInputElement
    } else {
      throw new Error(`Seletor ${seletor} não encontrado.`)
    }
  }

  protected abstract template(modelo: T): string
  
  // @logarTempoExecucao()
  // @inspecionar
  update(modelo: T): void{
    let template = this.template(modelo)
    this.elemento.innerHTML = template
  }
  
}


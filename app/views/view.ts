export abstract class View<T> {
  protected elemento: HTMLInputElement
  private escapar = false

  constructor(seletor: string, escapar?:boolean) {
    const elemento = document.querySelector(seletor) 
    if(elemento){
      this.elemento = elemento as HTMLInputElement
    } else {
      throw new Error(`Seletor ${seletor} não encontrado.`)
    }

    if(escapar){
      this.escapar = escapar
    }
  }

  protected abstract template(modelo: T): string

  update(modelo: T){  
    const exp = /<script>[\s\S]*?<\/script>/
    let template = this.template(modelo)

    if(this.escapar){
      template = template.replace(exp, '')
    }
    this.elemento.innerHTML = template
  }
}

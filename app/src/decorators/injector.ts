export function DOMInjector(selector: string){
  return function(target: any, propertyKey: string){
    console.log(`Modificando o prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`)
    let elemento:HTMLElement  

    const getter = function(){
    if(!elemento){
      const elemento = <HTMLElement>document.querySelector(selector)
      console.log(`Buscando elemento DOM com seletor ${selector} para injetar em ${propertyKey}`)
      }
      return elemento
    } 

    Object.defineProperty(target, propertyKey, { get: getter })
  }
}
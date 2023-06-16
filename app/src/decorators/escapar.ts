export function escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const metodoOriginal = descriptor.value
    descriptor.value = function(...args: any[]) {
      let retorno = metodoOriginal.apply(this, args)
      const exp = /<script>[\s\S]*?<\/script>/
      console.log(`Escape em ação no método ${propertyKey} da classe ${this.constructor.name} `)
      if(retorno === 'string'){
        retorno = retorno.replace(exp, '')
      return retorno
    }
    return descriptor
    }
}

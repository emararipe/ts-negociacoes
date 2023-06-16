export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        const exp = /<script>[\s\S]*?<\/script>/;
        console.log(`Escape em ação no método ${propertyKey} da classe ${this.constructor.name} `);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(exp, '');
            return retorno;
        }
        return descriptor;
    };
}

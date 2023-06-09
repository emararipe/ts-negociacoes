export function inspecionar() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Método: ${propertyKey}`);
            console.log(`------ Parâmetros ${args}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------ Retorno ${retorno}`);
            return retorno;
        };
        return descriptor;
    };
}

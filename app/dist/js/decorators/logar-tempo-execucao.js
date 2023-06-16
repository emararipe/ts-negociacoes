export function logarTempoExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        let divisor = 1;
        let unidade = 'milissegundos';
        if (emSegundos) {
            divisor = 1000;
            unidade = 'segundos';
        }
        descriptor.value = function (...args) {
            const t1 = performance.now();
            console.log(`Inicio log de excecução`);
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}: executado em ${(t2 - t1) / divisor} ${unidade}`);
            retorno;
        };
        return descriptor;
    };
}

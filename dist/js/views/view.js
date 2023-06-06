export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`Seletor ${seletor} não encontrado.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(modelo) {
        const exp = /<script>[\s\S]*?<\/script>/;
        let template = this.template(modelo);
        if (this.escapar) {
            template = template.replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }
}

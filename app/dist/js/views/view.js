export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`Seletor ${seletor} não encontrado.`);
        }
    }
    update(modelo) {
        let template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}

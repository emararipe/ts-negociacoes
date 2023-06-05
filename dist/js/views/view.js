export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(modelo) {
        throw new Error('Deve-se definir um template próprio para as classes filhas.');
    }
    update(modelo) {
        this.elemento.innerHTML = this.template(modelo);
    }
}

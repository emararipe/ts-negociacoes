export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(quantidadeTemp, valorTemp, dataTemp) {
        const quantidade = parseInt(quantidadeTemp);
        const valor = parseFloat(valorTemp);
        const exp = /-/g;
        const data = new Date(dataTemp.replace(exp, ','));
        return new Negociacao(data, quantidade, valor);
    }
}

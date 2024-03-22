import { Cliente } from "./Client.js";

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(newValue) {
        if (newValue instanceof Cliente) {
            this._cliente = newValue;
        }
    }

    get cliente() {
        return this._cliente;
    }

    // #saldo = 0;
    _saldo = 0;

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const sacado = this.sacar(valor);
        conta.depositar(sacado);
    }
}
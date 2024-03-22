import { Cliente } from "./Client.js";

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(newValue) {
        if (newValue instanceof Cliente) {
            this._cliente = newValue;
        }
    }

    // #saldo = 0;
    _saldo = 0;

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this.agencia = agencia;
        this.cliente = cliente;
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
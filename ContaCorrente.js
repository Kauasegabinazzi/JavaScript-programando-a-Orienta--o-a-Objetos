export class ContaCorrente {
    agencia;
    cliente;
    // #saldo = 0;
    _saldo = 0;

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
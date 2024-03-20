class cliente {
    name;
    cpf;
}

class contaC {
    agencia;
    // #saldo = 0;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }
}

const client = new cliente();
const client2 = new cliente();
client.name = 'marcus';
client.cpf = 2321323213;

client2.name = 'alice';
client2.cpf = 4324324;

const contaMateus = new contaC();
contaMateus.agencia = 1001;

contaMateus.depositar(100);
contaMateus.depositar(200);
contaMateus.depositar(300);

contaMateus.sacar(8);
console.log(contaMateus);
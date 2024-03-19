class cliente {
    name;
    cpf;
}

class contaC {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
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
contaMateus.saldo = 0;

console.log(client);
console.log(client2);
console.log(contaMateus);
contaMateus.saldo = 100;
contaMateus.sacar(50);
console.log(contaMateus.saldo);
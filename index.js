import { Cliente } from './Client.js';
import { ContaCorrente } from './ContaCorrente.js';

const client = new Cliente();
client.name = 'marcus';
client.cpf = 2321323213;

const contaMateus = new ContaCorrente();
contaMateus.agencia = 1001;
contaMateus.cliente = client;

contaMateus.depositar(600);

// const sacado = contaMateus.sacar(8);
// console.log(sacado);
// console.log(contaMateus);


const contaAlice = new ContaCorrente();
contaAlice.cliente = client;
// contaAlice.cliente = null;
// contaAlice.cliente.name = 'alice';
// contaAlice.cliente.cpf = 4234324;
contaAlice.agencia = 1002;

let valor = 150;
// contaMateus.tranferir(valor, contaAlice);z
console.log(contaAlice.saldo);

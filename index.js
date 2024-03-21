import { Cliente } from './Client.js';
import { ContaCorrente } from './ContaCorrente.js';

const client = new Cliente();
const client2 = new Cliente();
client.name = 'marcus';
client.cpf = 2321323213;

client2.name = 'alice';
client2.cpf = 4324324;

const contaMateus = new ContaCorrente();
contaMateus.agencia = 1001;

contaMateus.depositar(100);
contaMateus.depositar(200);
contaMateus.depositar(300);

const sacado = contaMateus.sacar(8);
console.log(sacado);
console.log(contaMateus);
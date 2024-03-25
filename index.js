import { Cliente } from './Client.js';
import { ContaCorrente } from './ContaCorrente.js';

const client = new Cliente('marcus', 2321323213);
const client2 = new Cliente('alice', 213232);

const contaMateus = new ContaCorrente(client, 1001);

contaMateus.depositar(600);

const contaAlice = new ContaCorrente(client2, 1002);

let valor = 150;
contaMateus.tranferir(valor, contaAlice);

console.log(ContaCorrente.numberCount);

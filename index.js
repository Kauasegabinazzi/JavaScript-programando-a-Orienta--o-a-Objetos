class cliente {
    name;
    cpf;
    agencia;
    saldo;
    rg;
}

const client = new cliente();
const client2 = new cliente();
client.name = 'marcus';
client.cpf = 2321323213;
client.agencia = 1001;
client.saldo = 0;
client.rg = 3232434;

client2.name = 'alice';
client2.cpf = 4324324;
client2.agencia = 1001;
client2.saldo = 0;
client2.rg = 2343242;

console.log(client, client2);
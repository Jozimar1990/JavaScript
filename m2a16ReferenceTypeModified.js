const cartao1 = {
    nome: "Jozimar;",
    saldo: 10000
};

const cartao2 = cartao1;
console.log(cartao1);
console.log(cartao2);

cartao2.saldo -= 200000;
/**
 * cartao2 = { // Não permite pois o objeto carta2 é uma constante
    nome: "Joao Lira",
    saldo: 150000
}
 */

console.log(cartao1);
console.log(cartao2);

console.log(cartao1);

const listaAlunos = ['Rozi', 'Elivane', 'Juliana'];
listaAlunos[3] = 'Fernanda';
// listaAlunos = ['Amanda', 'Kemilly']; //Não permite, pois a array listaAlunos é contante
console.log(listaAlunos);
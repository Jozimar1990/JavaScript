/*2 - Escreva um programa executandos os próximos passos:    

    -Crie uma variável com valor inicial de um objeto que represente um pokemon (nome, estamina, defesa, ataque, habilidade).

    -Imprima na tela os textos "Meu objeto pokemon possui "chave" e $valor", substituindo os termos com $ pelos valores correspondentes ao conjunto chave/valor.
 */

const pokemon = {
    nome: "Pikachu",
    estamina: 2500,
    defesa: 4500,
    ataque: 12540,
    habilidade: "Choque do trovão"
};
console.log(`Meu objeto pokemon possui habilidade: e ${pokemon.habilidade}`)
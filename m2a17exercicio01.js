/* 1 - Escreva um programa executando os seguintes passos:

    -Crie uma variável com o valor inicial igual a uma lista de número de 1 a 5. Esse valor não deve ser alterado.

    -Imprima na tela: A primeira variável. 

    -Imprima na tela a seguinte mensagem: "O valor do elemento X da minha lista é $valor", substituindo o termo iniciado em $ pelo valor abrigado na sua variável. X é a posição do elemento na lista. */


//-Crie uma variável com o valor inicial igual a uma lista de número de 1 a 5. Esse valor não deve ser alterado.
const numeros = [1 , 2 , 3 , 4 , 5];
console.log(numeros);

//-Imprima na tela: A primeira variável. 
console.log(numeros[0])

//-Imprima na tela a seguinte mensagem: "O valor do elemento X da minha lista é $valor", substituindo o termo iniciado em $ pelo valor abrigado na sua variável. X é a posição do elemento na lista. */
x = 2
console.log(`O valor do elemento ${x} da minha lista é ${numeros[x]}`)
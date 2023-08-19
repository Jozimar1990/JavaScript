const primeiraVariavel = "Essa variável vai funcionar";
console.log(primeiraVariavel)
function printToConsole(){
    const primeiraVariavel = "Assim como esta também vai funcionar, pois está num escopo diferente da primeira";
    console.log(primeiraVariavel);
    function secondConsole(){
        const primeiraVariavel = "Do mesmo jeito aqui, pois essa função já abre um outro escopo."
    }
    secondConsole();
}

printToConsole();
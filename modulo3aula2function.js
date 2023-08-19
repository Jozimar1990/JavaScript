function calcQuadrado(numero){
    console.log(`O número da vez é ${numero}`);
    console.log(`O quadrado de ${numero} é ${numero**2}`);
}

calcQuadrado(4);

for(i = 0; i < 10; i++){
    calcQuadrado(i);
}


let numero = 36, raiz = 0;
let cont = numero/(numero*1000000);
let resultado = cont;
console.log(resultado);
while(raiz <= numero){
    raiz = resultado*resultado;
    if(raiz == numero){
    }else{
        resultado += cont;
    }
}
console.log(resultado);
console.log(resultado*resultado);
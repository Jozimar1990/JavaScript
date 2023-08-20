function resolveBaskhara(a, b, c){
    const delta = (b**2 - 4*a*c);
    const x1 = (-b + calculaRaizQuadrada(delta))/(2*a);
    const x2 = (-b - calculaRaizQuadrada(delta))/(2*a);
    console.log(`Os valores de x1 e x2 que cruzam os pontos da parábola, são, resptecitivamente ${x1} e ${x2}`);
}
function calculaRaizQuadrada(base){
    return base**(1/2);
}

resolveBaskhara(2, 3, -2);
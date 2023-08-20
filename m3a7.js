let casa = {
    cor: "branco",
    sala: 15, //m²
    cozinha: 10, //m²
    banheiro: 8, //m²
    quarto: 20,//m² 
    calcularTamanhoTotalCasa2: function(){
        const tamTotal = this.banheiro + this.quarto + this.cozinha + this.sala;
    console.log(`O tamanho total da casa em m² é ${tamTotal}`)
    return tamTotal
    }
};
/**
 * function calcularTamanhoTotalCasa(
    tamSala,
    tamCozinha,
    tamBanheiro,
    tamQuarto
){
    const tamTotal = tamSala + tamQuarto + tamCozinha + tamBanheiro;
    console.log(`O tamanho total da casa em m² é ${tamTotal}`)
    return tamTotal
}
 */


//console.log(calcularTamanhoTotalCasa(casa.sala, casa.cozinha, casa.banheiro, casa.quarto))
console.log(casa.calcularTamanhoTotalCasa2())
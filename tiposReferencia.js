const documento = {
    nome: 'Daniel',
    sobrenome: 'Porto',
    rg: '22.333.444-5',
    cpf: '111.222.333-45',
    idade: 29,
    time: 'Fluminense',
    brasileiro: true
}
console.log(documento.nome);
console.log(documento);
console.log(documento['sobrenome']);
documento.nome = 'Daniele';
console.log(documento.nome);
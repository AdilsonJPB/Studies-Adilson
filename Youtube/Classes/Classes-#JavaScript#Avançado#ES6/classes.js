class carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}

const carro1 = new carro("Audi", 2020);
const carro2 = new carro("Ferrari", 2010);

console.log(carro1, carro2);
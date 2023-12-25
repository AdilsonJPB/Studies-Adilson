// programa principal
// POO = PROGRAMAÇÂO ORIENTADA A OBJETOS

// classes = são modelos ou moldes de objetos
// objetos = são abstrações ou representações de 'coisas' que existem no mundo
// objeto = instâncias ou objetos do tipo | objeto é um tipo de dado

class Pessoa
{   
    // atributos = variáveis ou caractrísticas
    // "_" indicação que deve ser privado
    // "#" indicação que é privado
    _nome // tipo string
    _idade // tipo integer
    _peso  // tipo float ou real
    _altura // tipo float ou real

    // metodos = funções ou comportamentos
    // método construtor, "this" se refere ao valor que vai ser passado ao constructor
    constructor (nome, idade, peso, altura) {
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
    }
}

// criar novo objeto a partir da class, instanciar
const pessoa1 = new Pessoa("Adilson", 18, 66.5, 1.75);
const pessoa2 = new Pessoa("Maria", 54, 65.2, 1.65);


// atribuir valores para as atribuições de um objeto
/*pessoa1._nome = "Adilson";
pessoa1._idade = "18";
pessoa1._peso = 66.5;
pessoa1._altura = 1.75;*/

/*pessoa2._nome = "Maria";
pessoa2._idade = "38";
pessoa2._peso = 56;
pessoa2._altura = 1.69;*/

console.log(pessoa1);
console.log(pessoa2)
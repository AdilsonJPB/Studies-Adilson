// programa principal
// POO = PROGRAMAÇÃO ORIENTADA A OBJETOS

// classes = são modelos ou moldes de objetos
// objetos = são abstrações ou representações de 'coisas' que existem ou não no mundo
// objeto = instância ou objeto | objeto é um tipo de dado

class Pessoa
{
    // atributos = variáveis ou características
    // "_" indicação que deve ser um atributo privado
    // "#" indicação que é um atributo privado de fato
    _nome // tipo string
    _idade // tipo integer
    _peso // tipo float
    _altura // tipo float
}

// criar novo objeto a partir da class, instanciar
let pessoa1 = new Pessoa();
let pessoa2 = new Pessoa();

// atribuir valores para os atributos de um objeto
pessoa1._nome = "Adilson";
pessoa1._idade = 15;
pessoa1._peso = 34.2;
pessoa1._altura = 1.54;

pessoa2._nome = "Maria";
pessoa2._idade = 43;
pessoa2._peso = 43.2;
pessoa2._altura = 1.87;

console.log(pessoa1);
console.log(pessoa2);

console.log(pessoa1._nome);
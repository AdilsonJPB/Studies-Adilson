// progrma principal
// POO = PROGRAMAÇÃO ORIENTADA A OBJETOS

// classes = são modelos ou moldes de objetos
// objetos = são abstrações ou representações de 'coisas' que existem no mundo
// objeto = instância ou objeto do tipo | objesto é um tipo de dado

class Pessoa
{
    // atributos = variáveis ou características do objeto
    nome // tipo string
    idade // tipo integer
    peso // tipo Float ou Real


    // métodos = funções ou comportamentos
}

// criar novo objeto a partir da classe, instanciar
let pessoa1 = new Pessoa()
let pessoa2 = new Pessoa()

// atribuir valores para os atributos de um objeto
pessoa1.nome = 'Edson';
pessoa1.idade = 40;
pessoa1.peso = 84.2;

pessoa2.nome = 'Maria';
pessoa2.idade = 88;
pessoa2.peso = 44.2;

console.log(pessoa1);
console.log(pessoa2);
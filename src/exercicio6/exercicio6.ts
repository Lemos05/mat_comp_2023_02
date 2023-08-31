enum Mes {
    JANEIRO = 1,
    FEVEREIRO = 2,
    MARCO = 3,
    ABRIL = 4,
    MAIO = 5,
    JUNHO = 6,
    JULHO = 7,
    AGOSTO = 8,
    SETEMBRO = 9,
    OUTUBRO = 10,
    NOVEMBRO = 11,
    DEZEMBRO = 12
}

enum DiaSemana {
    DOMINGO = 1,
    SEGUNDA = 2,
    TERCA = 3,
    QUARTA = 4,
    QUINTA = 5,
    SEXTA = 6,
    SABADO = 7
}

function fatorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

class Pessoa {
    nome: string;
    idade: number;
    genero: string;

    constructor(nome: string, idade: number, genero: string) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
}

class Estudante extends Pessoa {
    curso: string;

    constructor(nome: string, idade: number, genero: string, curso: string) {
        super(nome, idade, genero);
        this.curso = curso;
    }
}

const estudante = new Estudante("Nicolas", 18, "Masculino", "Desenvolvimento de Software Multiplataforma");
console.log(`${estudante.nome} é um estudante de ${estudante.curso}.`);
class ColegaDeClasse {
    nome: string;
    idade: number;
    curso: string;
    interesses: string[];

    constructor(nome: string, idade: number, curso: string, interesses: string[]) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.interesses = interesses;
    }

    apresentacao(): string {
        return `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e estou cursando ${this.curso}. 
        Meus principais interesses incluem ${this.interesses.join(', ')}.`;
    }
}

const nicolas: ColegaDeClasse = new ColegaDeClasse("Nicolas Lemos", 18, "Desenvolvimento de Software Multiplataforma", ["Programação", "Inteligência Artificial", "Futebol"]);

console.log(nicolas.apresentacao());

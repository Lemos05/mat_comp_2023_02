class Pessoa {
    nome: string;
    pais: Pessoa[];
    irmaos: Pessoa[];
    filhos: Pessoa[];

    constructor(nome: string) {
        this.nome = nome;
        this.pais = [];
        this.irmaos = [];
        this.filhos = [];
    }
}

const avo1 = new Pessoa("Avo1");
const avo2 = new Pessoa("Avo2");
const pai = new Pessoa("Pai");
const mae = new Pessoa("Mae");
const usuario = new Pessoa("Usuario");
const irmao = new Pessoa("Irmao");
const filho = new Pessoa("Filho");

avo1.pais.push(undefined);
avo2.pais.push(undefined);
pai.pais = [avo1, avo2];
mae.pais.push(undefined);
usuario.pais = [pai, mae];
irmao.pais = [pai, mae];
filho.pais = [usuario];

usuario.irmaos.push(irmao);
usuario.filhos.push(filho);

const familia: Pessoa[] = [avo1, avo2, pai, mae, usuario, irmao, filho];
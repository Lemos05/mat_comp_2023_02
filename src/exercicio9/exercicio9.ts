class ProgressaoGeometrica {
    primeiroTermo: number;
    constante: number;

    constructor(primeiroTermo: number, constante: number) {
        this.primeiroTermo = primeiroTermo;
        this.constante = constante;
    }

    gerarTermos(quantidade: number): number[] {
        const termos: number[] = [this.primeiroTermo];
        let atual = this.primeiroTermo;

        for (let i = 0; i < quantidade - 1; i++) {
            const proximoTermo = atual * this.constante;
            termos.push(proximoTermo);
            atual = proximoTermo;
        }

        return termos;
    }
}

const primeiroTermo = 2;   // Primeiro termo da progressão
const constante = 3;       // Constante de multiplicação
const quantidade = 50;     // Número de termos a gerar

const progressao = new ProgressaoGeometrica(primeiroTermo, constante);
const termos = progressao.gerarTermos(quantidade);

console.log("Primeiros 50 termos da progressão geométrica:");
console.log(termos);
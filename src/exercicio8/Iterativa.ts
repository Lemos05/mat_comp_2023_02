function somaProgressaoIterativa(n: number, a: number, r: number): number {
    let soma: number = 0;
    for (let i = 0; i < n; i++) {
        soma += a;
        a += r;
    }
    return soma;
}

const n: number = 5;  // Número de termos
const a: number = 2;  // Primeiro termo
const r: number = 3;  // Razão
const resultadoIterativo: number = somaProgressaoIterativa(n, a, r);
console.log("Resultado iterativo:", resultadoIterativo);
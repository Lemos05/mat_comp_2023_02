function somaProgressaoRecursiva(n: number, a: number, r: number): number {
    if (n === 1) {
        return a;
    } else {
        return a + somaProgressaoRecursiva(n - 1, a + r, r);
    }
}

const n: number = 5;  // Número de termos
const a: number = 2;  // Primeiro termo
const r: number = 3;  // Razão
const resultadoRecursivo: number = somaProgressaoRecursiva(n, a, r);
console.log("Resultado recursivo:", resultadoRecursivo);

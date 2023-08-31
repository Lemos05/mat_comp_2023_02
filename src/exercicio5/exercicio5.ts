function sequenciaRecursiva(n: number): number {
    if (n === 1) {
        return 2;
    }
    return sequenciaRecursiva(n - 1) * 3;
}

for (let i = 1; i <= 10; i++) {
    console.log(`Elemento ${i}: ${sequenciaRecursiva(i)}`);
}
class Fibonacci {
    memoization: { [key: number]: number } = {};

    calcularTermoRecursivo(n: number): number {
        if (n <= 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            if (this.memoization.hasOwnProperty(n)) {
                return this.memoization[n];
            } else {
                const resultado = this.calcularTermoRecursivo(n - 1) + this.calcularTermoRecursivo(n - 2);
                this.memoization[n] = resultado;
                return resultado;
            }
        }
    }

    gerarSequencia(quantidade: number): number[] {
        const sequencia: number[] = [];
        for (let i = 0; i < quantidade; i++) {
            sequencia.push(this.calcularTermoRecursivo(i));
        }
        return sequencia;
    }
}

const fibonacci = new Fibonacci();

// Exemplo de cálculo de alguns termos
const termo10 = fibonacci.calcularTermoRecursivo(10);
console.log("Termo 10:", termo10);

const termo15 = fibonacci.calcularTermoRecursivo(15);
console.log("Termo 15:", termo15);

// Exemplo de geração de uma sequência com 20 termos
const sequencia20 = fibonacci.gerarSequencia(20);
console.log("Sequência de Fibonacci (20 primeiros termos):");
console.log(sequencia20);

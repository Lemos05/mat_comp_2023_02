function getPrimeNumbers(): number[] {
    const primeNumbers: number[] = [];
    
    for (let number = 2; number <= 100; number++) {
        let isPrime = true;
        
        for (let divisor = 2; divisor < number; divisor++) {
            if (number % divisor === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primeNumbers.push(number);
        }
    }
    
    return primeNumbers;
}

const primes: number[] = getPrimeNumbers();
console.log(primes);
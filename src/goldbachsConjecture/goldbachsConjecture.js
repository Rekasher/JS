function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


const  checkGoldbach = function(number) {
    if (number <= 2 || number % 2 !== 0) {
        return [];
    }

    for(let i = 2; i <= number/2; i++)
        if (isPrime(i) && isPrime(number-i))
            return [i, number - i];

    return [];
};

console.log(checkGoldbach(2)); // []
console.log(checkGoldbach(5)); // []
console.log(checkGoldbach(4)); // [2, 2]
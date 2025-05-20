const allNines = (x) => {
    if (x % 2n === 0n || x > 4000n || x % 10n === 5n) return -1n
    let nine = 9n;

    while(true){
        if (nine % x === 0n) return nine / x;
        nine = (nine * 10n) + 9n
    }
}

console.log(allNines(393n)) //1 3 7 9

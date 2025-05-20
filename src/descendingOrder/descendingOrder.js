'use strict';

const descendingOrder = (n) => {
    return Number(
        n.toString()
            .split('')
            .sort()
            .reverse()
            .join('')
    );
}

console.log(descendingOrder(0)); // 0
console.log(descendingOrder(1)); // 0
console.log(descendingOrder(111)); // 0
console.log(descendingOrder(15)); // 0
console.log(descendingOrder(1021)); // 0
console.log(descendingOrder(123456789)); // 0

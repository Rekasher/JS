'use strict';

// function findOdd(A) {
//
//     const numberOfEl = {};
//     for(let el of A) {
//         numberOfEl[el] = numberOfEl[el] + 1 || 1;
//     }
//
//     return Number(Object.keys(numberOfEl).filter((key) => numberOfEl[key] % 2 === 1)[0]);
// }

function findOdd(A) {

    const numberOfEl = new Map();
    for(let el of A) {
        numberOfEl.set(el, numberOfEl.get(el) + 1 || 1);
    }

    return Array.from(numberOfEl.keys()).filter(key => numberOfEl.get(key) % 2 === 1)[0];
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1,1,2]));
console.log(findOdd([0,1,0,1,0]));

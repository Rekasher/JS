'use strict';

function nextBigger(n) {
    const digits = n.toString().split('');

    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }

    if (i < 0) return -1;

    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }

    [digits[i], digits[j]] = [digits[j], digits[i]];
    const right = digits.splice(i + 1).reverse();
    digits.push(...right);

    return parseInt(digits.join(''), 10);
}
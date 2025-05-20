'use strict';

const UNITS = {
    "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
    "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9
};

const TEENS = {
    "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13,
    "fourteen": 14, "fifteen": 15, "sixteen": 16,
    "seventeen": 17, "eighteen": 18, "nineteen": 19
};

const TENS = {
    "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50,
    "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90
};

const MULTIPLIERS = {
    "hundred": 100,
    "thousand": 1000,
    "million": 1000000
};

function parseInt(string) {


    let result = 0;
    let data = string.split(' ');

    for (let digit of data) {
        digit.split('-').forEach(char => {
            result += UNITS[char] || TEENS[char] || TENS[char] || 0;
            result *= MULTIPLIERS[char] ? MULTIPLIERS[char] : 1;
        })
    }

    return result;
}

console.log(parseInt('one')); // 1
console.log(parseInt('twenty-six')); // 20
console.log(parseInt(' two hundred thousand and 5 hundred forty-five')); // 246

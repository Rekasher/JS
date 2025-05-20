'use strict';

function invertedRanges(ranges) {
    const result = [];
    let lowerBound = 0;
    let upperBound = 100;

    for (let [start, end] of ranges) {
        if (start > lowerBound) {
            result.push([lowerBound, start - 1]);
        }
        lowerBound = end + 1;
    }

    if (lowerBound <= upperBound) {
        result.push([lowerBound, upperBound]);
    }

    return result;
}

console.log(invertedRanges([[0, 100]])); // []
console.log(invertedRanges([[0, 50], [51, 100]])); // []
console.log(invertedRanges([[25, 50]])); // [[0, 24], [51, 100]]
console.log(invertedRanges([[0, 25], [51, 75]])); // [[26, 50], [76, 100]]
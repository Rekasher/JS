// function solution(number) {
//     if (number <= 3) return 0;
//
//     return  Array(number-1)
//         .fill(0)
//         .map((_, i) => i + 1)
//         .filter((item) => item % 3 === 0 || item % 5 === 0)
//         .reduce((sum, item) => sum + item);
// }

// function solution(number) {
//     if (number <= 3) return 0;
//
//     let sum = 0;
//     for (let i = 3; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) sum += i;
//     }
//     return sum;
// }

console.log(solution(10)); // 23
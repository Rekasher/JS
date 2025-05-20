// const solution = function(firstArray, secondArray) {
//
//     if (firstArray.length !== secondArray.length){
//         return null;
//     }
//
//     if (firstArray.length === 0) {
//         return 0;
//     }
//
//     const value = firstArray.reduce((acc, item, index, arr) => {
//         acc += Math.abs(Math.pow(firstArray[index] - secondArray[index], 2));
//         return acc;
//     }, 0);
//
//     return value / firstArray.length;
//
// }

const solution = function (firstArr, secondArr) {
    return firstArr
            .reduce((acc, item, index) =>
                acc +
                Math.pow(firstArr[index] - secondArr[index], 2)
            , 0) /
        firstArr.length;
}

console.log(solution([1, 2, 3], [4, 5, 6])); // 9
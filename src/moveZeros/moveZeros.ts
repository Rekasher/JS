const moveZeros = (arr: number[]) => {

    const arrWithZeroes = arr.filter(item => item === 0);

    return arrWithZeroes.length ?
        arr.filter(item => item !== 0).concat(arrWithZeroes)
        :
        'No zeroes found';
}


const arr = [1, 2, 9, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(moveZeros(arr));

const arr2 = [1, 2, 9, 30, 0, 0, 0, 0, 10];

console.log(moveZeros(arr2));

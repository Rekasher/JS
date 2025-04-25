const moveZeros = (arr: number[]) => {

    const arrWithZeroes = arr.filter(item => item === 0);

    return arrWithZeroes.length ?
        arr.filter(item => item !== 0).concat(arrWithZeroes)
        :
        'No zeroes found';
}
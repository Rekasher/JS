function moveZeros(arr) {
    const arrWithZeroes = arr.filter(item => item === 0)

    return arrWithZeroes.length ?
        arr.filter(item => item !== 0).concat(arrWithZeroes)
        :
        'no zeros found';
}

module.exports = {moveZeros};



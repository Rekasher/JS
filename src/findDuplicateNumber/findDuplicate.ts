const duplicateOrUnique = (arr: number[]) => {
    const numbersData = arr.reduce<Record<number, number>>((obj, item) => {
        obj[item] = (obj[item] || 0) + 1;
        return obj
    }, {});

    const dupUnique = arr.length - Object.keys(numbersData).length === 1 ? 2 : 1;

    for (const key in numbersData) {
        if (numbersData[key] === dupUnique) {
            return Number(key);
        }
    }

    return null;
}

console.log('Unique', duplicateOrUnique([21, 21, 31, 31, 4, 12, 33, 12, 33, 1, 1, 2, 2, 3, 3]));
console.log('Dup', duplicateOrUnique([1, 2, 3, 4, 6, 2, 8, 12]));

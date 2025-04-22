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

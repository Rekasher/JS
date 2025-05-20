const duplicateOrUnique = (arr) => {
    const numbersData = arr.reduce((obj, item) => {
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

export {duplicateOrUnique};
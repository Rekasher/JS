const duplicateOrUnique = (arr) => {
    const numbersData = {};

    for (let i = 0; i < arr.length; i++) {
        numbersData[arr[i]] = (numbersData[arr[i]] || 0) + 1;
    }

    const isUnique = arr.length - Object.keys(numbersData).length === 1;

    for (const key in numbersData) {
        if (isUnique && numbersData[key] === 2) {
            return Number(key);
        }

        if (!isUnique && numbersData[key] === 1) {
            return Number(key);
        }
    }

    return null;
}

export {duplicateOrUnique};
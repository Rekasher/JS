function greatestProduct(input) {

    let largestProduct = [];

    for (let i = 0; i <= input.length-5; i++) {
        largestProduct.push(input.split('').slice(i, i + 5).reduce((acc, item) => acc * item,1));
    }

    return Math.max(...largestProduct);
}
const reverseSeq = n => {
    return Array(n).fill(0).map((_, i) => n-i);
};

console.log(reverseSeq(5));
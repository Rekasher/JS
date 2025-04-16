const testLogs = (duplicateOrUnique) => {
    console.log('1:  1:  ',duplicateOrUnique([1,2,3,6,5,4,1])); // 1+2+3+4+5+6+1 = 22       (1 + 4) * 4 - 22 = -2       <0      res = 22-7*(7-1)/2 = 1
    console.log('2:  4:  ',duplicateOrUnique([1,2,3,1,2,3,4] )); // 1+2+3+1+2+3+4 = 16      (1 + 4) * 4 - 16 = 4        >0      res = 4
    console.log('3:  8:  ',duplicateOrUnique([3,6,9,2,5,8,1,4,8,7] ));
    console.log('4:  8:  ',duplicateOrUnique([9,8,7,1,2,3,9,7,1,2,3,4,4,5,5,6,6]));
    console.log('5:  40:  ',duplicateOrUnique([1000,300,2,40,40]));
}

export default testLogs;
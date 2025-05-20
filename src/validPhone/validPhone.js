'use strict'

function validPhoneNumber(phoneNumber){
    return !(
        phoneNumber.length !== 14 ||
        phoneNumber.match(/\d/g).length !== 10 ||
        phoneNumber[9] !== '-' ||
        phoneNumber[5] !== ' '
    );
}

console.log(validPhoneNumber('(123)456-7890')); // true
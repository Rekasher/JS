'use strict';

const genfib = () =>{
    const arr = [0,1];
    let i = 0;

    return function fib(){
        if (i === arr.length) {
            arr.push(arr[i-1] + arr[i-2]);
        }
        i++;
        return arr[i-1];
    }
}

let fib = genfib();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());


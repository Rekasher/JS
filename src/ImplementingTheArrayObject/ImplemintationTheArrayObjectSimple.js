'use strict';

import check from "./testLogs.js";

class List extends Array {
    constructor(...args) {
        super(...args);
    }
}

let list = new List(1000, 22,[2,1,3,[1,2,[1]],21], 1, 3);

function compareFn(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

console.log(list.sort(compareFn));





// check(list);
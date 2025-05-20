'use strict';

function disemvowel(str) {
    return str.match(/[^aeuio]/gi).join('');
}

console.log(disemvowel("No offense but,\\nYour writing is among the worst I've ever read")); // "Ths wbst s fr lsrs LL!"
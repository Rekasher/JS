const check = (list) => {
    logs(list);
    tests(list);
    console.log('\n\n----------------------afterTest---------------------------\n\n')
    logs(list);
}

const logs = (list) => {
    console.log('2: ', list[2]);
    console.log('3: ', list[3]);
    console.log('1: ', list[1]);
    console.log('0: ', list[0]);
    console.log('length: ', list.length);
    console.log(list);
}

const tests = (list) => {
    list.push(10,11,12);
    list.shift();
    list.unshift(4,5,10,32);
    list.pop();
    list.filter(value => value < 10);
}

export default check;
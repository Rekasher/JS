function solution(list) {

    let start, end = 0;
    let str = '';

    for (let i = 0; i < list.length; i++) {
        if (Math.abs(list[i+1] - list[i])===1) {
            end = i + 1;
        }else {
            if (start === end) {
                str += `,${list[start]}`;
            }
            else {
                str += `,${list[start]}-${list[end]}`;
            }
            start = i+1;
        }Th
    }
    return str
}


console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
export {solution};
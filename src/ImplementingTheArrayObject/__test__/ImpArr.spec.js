import {List} from "../ImpArrHard.js";

describe('Work with array method without instance of array', () => {

    describe('Simple operations (push, pop, shift, unshift)', () => {
        it('push one value', () => {
            const list = new List(1, 2, 3);
            const pushed = list.push(10);
            expect(list.list).toEqual([1, 2, 3, 10]);
            expect(pushed).toEqual(4);
        });

        it('push more then one value', () => {
            const list = new List(1, 2, 3);
            const pushed = list.push(10, 11, 12);
            expect(list.list).toEqual([1, 2, 3, 10, 11, 12]);
            expect(pushed).toEqual(6);
        });

        it('pop one value', () => {
            const list = new List(1, 2, 3);
            const pop = list.pop();
            expect(list.list).toEqual([1, 2]);
            expect(pop).toEqual(3);
        });

        it('shift one value', () => {
            const list = new List(1, 2, 3);
            const shift = list.shift();
            expect(list.list).toEqual([2, 3]);
            expect(shift).toEqual(1);
        });

        it('unshift one value', () => {
            const list = new List(1, 2, 3);
            const unshift = list.unshift(10);
            expect(list.list).toEqual([10, 1, 2, 3]);
            expect(unshift).toEqual(4);
        });

        it('unshift more then one value', () => {
            const list = new List(1, 2, 3);
            const unshift = list.unshift(10, 11, 12);
            expect(list.list).toEqual([10, 11, 12, 1, 2, 3]);
            expect(unshift).toEqual(6);
        });

        it('return the length of List dynamic', () => {
            const list = new List(1, 2, 3);
            let length = list.length;
            expect(length).toEqual(3);
            list.push(10, 2, 4);
            length = list.length;
            expect(length).toEqual(6);

        });

        it('return the value by the number that we call', () => {
            const list = new List(1, 2, 3);
            const element = list[2];
            expect(element).toEqual(3);
        });

    });

    describe('Custom operations (filter, sort, findDuplicate, removeDuplicate, flat, sameWith)', () => {
        it('filter', () => {
            const list = new List(1, 23, 322, 122121, 123212, 3223221, 221232, 1213221, 123212);
            const filter = list.filter(value => value < 100);
            expect(filter).toEqual([1, 23]);
        });

        it('filter', () => {
            const list = new List(1, 23, '322', 1, 1, '2', 3, '12', '2');
            const filter = list.filter(value => Number.isFinite(value));
            expect(filter).toEqual([1, 23, 1, 1, 3]);
        });

        it('filter with error type callback', () => {
            const list = new List(1, 23, '322', 1, 1, '2', 3, '12', '2');
            const filter = list.filter(2);
            expect(filter).toEqual([1, 23, '322', 1, 1, '2', 3, '12', '2']);
        });

        it('sort', () => {
            const list = new List('a', 'd', 'abs', 'jj', 'z', 'az');
            const sort = list.sort();
            expect(sort).toEqual(['a', 'abs', 'az', 'd', 'jj', 'z']);
            expect(list.list).toEqual(['a', 'abs', 'az', 'd', 'jj', 'z']);
        });

        it('sort with callback typeError', () => {
            const list = new List('a', 'd', 'abs', 'jj', 'z', 'az');
            const sort = list.sort(2);
            expect(sort).toEqual('error callback should be a function');
            expect(list.list).toEqual(['a', 'd', 'abs', 'jj', 'z', 'az']);
        });

        it('sort', () => {
            const list = new List(1, 23, 12, 8, 7, 11, 2, 0, 1);
            const sort = list.sort((a, b) => {
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                }
                return 0;
            });
            expect(sort).toEqual([0, 1, 1, 2, 7, 8, 11, 12, 23]);
            expect(list.list).toEqual([0, 1, 1, 2, 7, 8, 11, 12, 23]);
        });

        it('findDuplicate: return first duplicate', () => {
            const list = new List(1, 2, 3, 3, 2, 2, 1);
            const find = list.findDuplicate();
            expect(find).toEqual(1);
        });

        it('findDuplicate: return false', () => {
            const list = new List(1, 2, 3);
            const find = list.findDuplicate();
            expect(find).toEqual(false);
        });

        it('removeDuplicate: remove all of the duplicates', () => {
            const list = new List(1, 2, 3, 3, 2, 2, 1);
            const remove = list.removeDuplicate();
            expect(remove).toEqual([1, 2, 3]);
        });

        it('sameWithArr', () => {
            const list = new List(1, 2, 3, 3, 2, 2, 1);
            const sameWithArr = list.sameWithArr([1, 2, 32, 11]);
            expect(sameWithArr).toEqual([1, 2]);
        });

        it('flat', () => {
            const list = new List(1, [2, 2, [11, 22, [23], 3]], [[3]], 2, [213], 2, 1);
            const flat = list.flat();
            expect(flat).toEqual([1, 2, 2, [11, 22, [23], 3], [3], 2, 213, 2, 1]);
        });

        it('flat on depth', () => {
            const list = new List(1, [2, 2, [11, 22, [23], 3]], [[3]], 2, [213], 2, 1);
            const flat = list.flat(2);
            expect(flat).toEqual([1, 2, 2, 11, 22, [23], 3, 3, 2, 213, 2, 1]);
        });

        it('flat on Infinity', () => {
            const list = new List(1, [2, 2, [11, 22, [23], 3]], [[3]], 2, [213], 2, 1);
            const flat = list.flat(Infinity);
            expect(flat).toEqual([1, 2, 2, 11, 22, 23, 3, 3, 2, 213, 2, 1]);
        });
    });
});
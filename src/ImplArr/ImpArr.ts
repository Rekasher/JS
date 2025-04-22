class List {
    private list: any[];

    constructor(...args: any[]) {
        this.list = args;

        return new Proxy(this, {
            get(target: List, prop: string | symbol) {
                if (typeof prop === 'string' && /^\d+$/.test(prop)) {
                    return target.list[+prop];
                }

                if (prop in target) {
                    const value = (target as any)[prop];
                    return typeof value === 'function' ? value.bind(target) : value;
                }

                return undefined;
            },
            set(target: List, prop: string | symbol, value: any) {
                if (typeof prop === 'string' && /^\d+$/.test(prop)) {
                    target.list[+prop] = value;
                    return true;
                }

                return false;
            }
        });
    }

    push(...values: any[]) {
        values.forEach(value => {
            this.list[this.list.length] = value;
        });

        return this.list.length;
    }

    unshift(...values: any[]) {
        this.list.forEach(listValue => {
            values[values.length] = listValue;
        });

        this.list = values;

        return this.list.length;
    }

    pop() {
        return +this.list.splice(this.list.length - 1)[0];
    }

    shift() {
        return +this.list.splice(0, 1)[0];
    }

    filter(callback: Function): List {
        const filtered = this.list.reduce((filterArr: any[], item: any, pos: number) => {
            if (callback(item)) {
                filterArr.push(item);
            }
            return filterArr;
        }, []);

        return new List(...filtered);
    }

    sort(callback: Function | undefined): List {

        for (let j = this.list.length - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                if (callback ? callback(this.list[i], this.list[i + 1]) === 1 : String(this.list[i]) > String(this.list[i + 1])) {
                    let temp = this.list[i];
                    this.list[i] = this.list[i + 1];
                    this.list[i + 1] = temp;
                }
            }
        }
        return this
    }

    findDuplicate() {
        const numbersCountData = this.list.reduce((obj, item) => {
            obj[item] = (obj[item] || 0) + 1;
            return obj
        }, {});

        const duplicate = Object
            .keys(numbersCountData)
            .find(key => numbersCountData[key] === 2);
        return duplicate !== undefined ? Number(duplicate) : false;
    }

    removeDuplicates(): List {
        const unique = this.list.filter((item, index) => {
            return this.list.indexOf(item) === index;
        });
        return new List(...unique);
    }

    sameWithList(arr: List): List {
        const sameArr = this.list.filter((item, pos) => {
            return arr.list.indexOf(item) !== -1 && this.list.indexOf(item) === pos;
        });
        return new List(...sameArr);
    }

    flat(depth = 1): List {

        let tempList = new List();
        const result = this.list.reduce((arr: any[], value) => {
            if (Array.isArray(value) && depth > 0) {
                tempList = new List(...value);
                arr.push(...tempList.flat(depth - 1).list);
            } else {
                arr.push(value);
            }
            return arr
        }, []);
        return new List(...result);
    }

    get length(): number {
        let count = 0
        for (let element of this.list) {
            count++;
        }
        return count;
    }

}


let list: List = new List(1, 2, 3);

// list.pop();
// list.push(1,[1,[[22]],33],[2],[35],21,21,3,[3]);
// list.unshift(22222222,222222,"2222222");
// list = list.filter((value: any) => value > 0);
// list.sort((a: any, b: any) => {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     }
//     return 0;
// });
// list = list.removeDuplicates();
// console.log(list.findDuplicate());
// list = list.flat(Infinity);

console.log(list);


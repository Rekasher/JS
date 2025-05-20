class List {
    constructor(...args) {
        this.list = args;

        return new Proxy(this, {
            get(target, prop, receiver) {
                if (typeof prop === "string" && /^\d+$/.test(prop)) {
                    return target.list[prop];
                }

                if (prop in target) {
                    const value = target[prop];
                    return typeof value === 'function' ? value.bind(target) : value;
                }

                return undefined;
            },
            set(target, prop, value) {
                if (!isNaN(+prop)) {
                    target.list[prop] = value;
                    return true;
                }
            }
        });
    }

    push(...values) {
        values.forEach((value) => {
            this.list[this.list.length] = value;
        })

        return this.list.length;
    }

    unshift(...values) {
        this.list.forEach((value) => {
            values[values.length] = value;
        });

        this.list = values;
        return this.list.length;
    }

    pop() {
       return +this.list.splice(this.list.length - 1).join('');
    }

    shift() {
        return +this.list.splice(0,1).join('');
    }

    // +++
    filter(callback) {
        if (!callback || typeof callback !== "function") {
            return this.list
        }

        return this.list.reduce((filterArr, item, pos) => {
            if (callback(item)) {
                filterArr.push(item);
            }
            return filterArr
        },[])
    }

    // +++
    sort(callback = undefined) {
        if (callback !== undefined && typeof callback !== "function") {
            return 'error callback should be a function';
        }

        for (let j = this.list.length - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                if (callback ? callback(this.list[i], this.list[i + 1]) === 1 : String(this.list[i]) > String(this.list[i + 1])) {
                    let temp = this.list[i];
                    this.list[i] = this.list[i + 1];
                    this.list[i + 1] = temp;
                }
            }
        }
        return this.list
    }

    // +
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

    //+
    removeDuplicate() {
        return this.list.filter((item, pos) => {
            return this.list.indexOf(item) === pos;
        });
    }

    //+
    sameWithArr(arr) {
        if (!Array.isArray(arr))
            return 'Error'

        return this.list.filter((item, pos) => {
            return arr.indexOf(item) !== -1 && this.list.indexOf(item) === pos;
        });
    }

    //+++
    flat(depth = 1) {
        if(typeof depth !== "number" || Number.isNaN(depth)) {
            return 'Error'
        }

        let tempList = new List();
        return this.list.reduce((arr, value) => {
            if (Array.isArray(value) && depth > 0) {
                tempList = value;
                arr.push(...tempList.flat(depth - 1));
            } else {
                arr.push(value);
            }
            return arr
        }, []);
    }

    //+++
    get length() {
        let count = 0
        for (let element of this.list) {
            count++;
        }
        return count;
    }
}

let list = new List(1,2,3,'1', false, false)

list = list.filter(2)

console.log(list);

export {List}
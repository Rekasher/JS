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
        let pushList = [];

        for (let i = 0; i < this.list.length; i++) {
            pushList[i] = this.list[i];
        }

        for (let i = 0; i < values.length; i++) {
            pushList[i + this.list.length] = values[i];
        }

        this.list = pushList;

        return this.list.length;
    }

    unshift(...values) {
        let unshiftList = [];

        for (let i = 0; i < values.length; i++) {
            unshiftList[i] = values[i];
        }

        for (let i = 0; i < this.list.length; i++) {
            unshiftList[i + values.length] = this.list[i];
        }

        this.list = unshiftList;

        return this.list.length;
    }

    pop() {
        let popList = [];
        const popeElement = this.list[this.list.length - 1];

        for (let i = 0; i < this.list.length - 1; i++) {
            popList[i] = this.list[i];
        }

        this.list = popList;

        return popeElement;
    }

    shift() {
        let shiftList = [];
        const shiftElement = this.list[0];

        for (let i = 0; i < this.list.length - 1; i++) {
            shiftList[i] = this.list[i + 1];
        }

        this.list = shiftList;

        return shiftElement;
    }

    filter(callback) {

        if (!callback || typeof callback !== "function") {
            return this.list
        }

        const filteredList = []
        let j = 0;

        for (let i = 0; i < this.list.length; i++) {
            if (callback(this.list[i])) {
                filteredList[j] = this.list[i];
                j++;
            }
        }

        return filteredList;
    }

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

    findDuplicate() {
        const listData = {}

        for (let i = 0; i < this.list.length; i++) {
            listData[this.list[i]] = (listData[this.list[i]] || 0) + 1;
        }

        for (let key in listData) {
            if (listData[key] === 2) {
                return Number(key);
            }
        }

        return false;
    }

    removeDuplicate() {
        return this.list.filter((item, pos) => {
            return this.list.indexOf(item) === pos;
        });
    }

    sameWithArr(arr) {
        if (!Array.isArray(arr))
            return 'Error'

        return this.list.filter((item, pos) => {
            return arr.indexOf(item) !== -1 && this.list.indexOf(item) === pos;
        })
    }

    flat(depth = 1) {
        const flatList = [];
        let tempList = new List();

        for (let i = 0; i < this.list.length; i++) {
            if (Array.isArray(this.list[i]) && depth > 0) {
                tempList = this.list[i];
                flatList.push(...tempList.flat(depth - 1));
            } else {
                flatList.push(this.list[i]);
            }
        }

        return flatList;
    }

    get length() {
        let count = 0
        for (let element of this.list) {
            count++;
        }

        return count;
    }
}


export {List}
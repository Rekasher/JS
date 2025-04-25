class List<T = any> {
    list: T[];

    [index: number]: T; // 👈 Add this line

    constructor(...args: T[]) {
        this.list = args;

        return new Proxy(this, {
            get(target: List<T>, prop: string | symbol) {
                if (typeof prop === 'string' && /^\d+$/.test(prop)) {
                    return target.list[+prop];
                }

                if (prop in target) {
                    const value = (target as any)[prop];
                    return typeof value === 'function' ? value.bind(target) : value;
                }

                return undefined;
            },
            set(target: List<T>, prop: string | symbol, value: any) {
                if (typeof prop === 'string' && /^\d+$/.test(prop)) {
                    target.list[+prop] = value;
                    return true;
                }

                return false;
            }
        });
    }


    push(...values: T[]): number {
        values.forEach(value => {
            this.list.push(value);
        });

        return this.list.length;
    }

    unshift(...values: T[]): number {
        this.list.forEach(listValue => {
            values[values.length] = listValue;
        });

        this.list = values;

        return this.list.length;
    }

    pop(): T {
        return this.list.splice(this.list.length - 1)[0];
    }

    shift(): T {
        return this.list.splice(0, 1)[0];
    }

    filter(callback: (item?: T, pos?: number, list?: T[]) => boolean): List {
        const filtered = this.list.reduce((filterArr: any[], item: T) => {
            if (callback(item)) {
                filterArr.push(item);
            }
            return filterArr;
        }, []);

        return new List(...filtered);
    }


    sort(callback: ((a: T, B: T) => (1 | -1 | 0)) | undefined = undefined): List<T> {
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

    findDuplicate(): T | false {
        const counts = new Map<T, number>();
        for (const item of this.list) {
            const count = counts.get(item) ?? 0;
            counts.set(item, count + 1);
        }
        for (const [item, count] of counts) {
            if (count === 2) return item;
        }
        return false;
    }


    removeDuplicates(): List<T> {
        const unique = this.list.filter((item, index) => {
            return this.list.indexOf(item) === index;
        });
        return new List(...unique);
    }

    sameWithList(arr: List): List<T> {
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
        for (let {} of this.list) {
            count++;
        }
        return count;
    }
}
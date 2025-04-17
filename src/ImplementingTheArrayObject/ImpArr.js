'use strict';

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
        this.list.push(...values);

        return this.list.length;
    }

    pop() {
        return this.list.pop();
    }

    shift() {
        return this.list.shift();
    }

    unshift(...values) {
        this.list.unshift(...values);

        return this.list.length;
    }

    filter(callback) {
        return this.list.filter(callback);
    }

    get length() {
        return this.list.length;
    }
}

export {List}
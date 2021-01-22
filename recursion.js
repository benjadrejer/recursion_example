const state = require('./state');

// Understanding the call stack - No recursion
const func2 = () => {
    console.log('Func 2, starting!');
    const test = 2 * 3;
    console.log('Func 2 Returning');
    return test;
}

function func1(x) {
    console.log('Func1 started');
    const result = func2();
    console.log('Func1 ending');
    return result;
}

/**
 * Return power of a number
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
**/ 
function power(base, exponent) {
    if (exponent == 0) return 1; // Base case
    return base * power(base, exponent - 1);
}

/**
 * Return factorial of a number
 * @param {number} x
 * @returns {number}
**/ 
function factorial(x) {
    if (x < 0) return; // Termination condition
    if (x === 0) return 1; // Base case
    return x * factorial(x - 1); // Recursive call
}

/**
 * Recursively find objects based on a specific property value
 * @param {Object} object
 * @param {any} value
 * @param {string} identifier
 * @returns {Array}
**/
const findProperty = (object={}, value='', identifier='id') => {
    let property = [];
    if (typeof(object) !== 'object') return property; // Base case
    if (object[identifier] === value) property.push(object);
    Object.keys(object).forEach((key) => {
        let hit = findProperty(object[key], value, identifier);
        if (hit && hit.length > 0) {
            property = property.concat(hit);
        };
    });

    return property;
}

console.log('FINAL RESULTS: ');
// console.log(func1());
// console.log(power(2, 3));
// console.log(factorial(3));
console.log(findProperty(state, 'abcd', 'value'));
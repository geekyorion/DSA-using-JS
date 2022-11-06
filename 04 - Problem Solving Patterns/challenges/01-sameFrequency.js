// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

const sameFrequency = (num1, num2) => {
    const counter = {};

    while (num1) {
        const remainder = num1 % 10;
        num1 = ~~(num1 / 10);
        counter[remainder] = ++counter[remainder] || 1;
    }

    while (num2) {
        const remainder = num2 % 10;

        if (!(remainder in counter)) return false;

        num2 = ~~(num2 / 10);
        counter[remainder] -= 1;
        if (counter[remainder] === 0) {
            delete counter[remainder];
        }
    }

    return Object.keys(counter).length === 0;
};

sameFrequency(123, 321); // true
sameFrequency(123, 234); // false
sameFrequency(123, 1123); // false

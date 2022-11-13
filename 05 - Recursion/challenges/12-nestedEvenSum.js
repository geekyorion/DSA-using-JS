// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

const nestedEvenSum = obj => {
    let sum = 0;
    for (let key in obj) {
        const currentValue = obj[key];
        if (typeof currentValue === 'object') {
            sum += nestedEvenSum(currentValue);
        } else {
            if (!isNaN(currentValue) && currentValue % 2 === 0) {
                sum += currentValue;
            }
        }
    }
    return sum;
};

const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

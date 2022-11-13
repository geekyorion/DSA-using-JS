# Recursion challenges

### 01-power.js

```js
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent){
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
};

power(2, 0);    // 1
power(2, 2);    // 4
power(2, 4);    // 16
```

### 02-factorial.js

```js
const factorial = num => {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
};

factorial(1);   // 1
factorial(2);   // 2
factorial(4);   // 24
factorial(7);   // 5040
```

### 03-productOfArray.js

```js
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = arr => {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
};

productOfArray([1,2,3]);    // 6
productOfArray([1,2,3,10]); // 60
```

### 04-recursiveRange.js

```js
// Write a function called recursiveRange which accepts a number
// and adds up all the numbers from 0 to the number passed to the function

const recursiveRange = num => {
    if (num <= 1) return 1;
    return num + recursiveRange(num - 1);
};

recursiveRange(6);  // 21
recursiveRange(10); // 55
```

### 05-fibPureRecursive.js

```js
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

const fib = num => {
    if (num <= 2) return 1;
    if (num === 3) return 2;
    return fib(num - 1) + fib(num - 2);
};

fib(4);     // 3
fib(10);    // 55
fib(28);    // 317811
fib(35);    // 9227465
```

### 06-fibWithObject.js

```js
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

const fib = num => {
    // object can enhance the performance cause we save every number once we go for (n - 1)
    // so once the same number needs to be called recursively for (n - 2), we can look up in the memory
    const memory = {
        1: 1,
        2: 1,
        3: 2
    };

    const calculateFib = n => {
        if (n in memory) return memory[n];
        memory[n] = calculateFib(n - 1) + calculateFib(n - 2);
        return memory[n];
    };

    return calculateFib(num);
};

fib(4);     // 3
fib(10);    // 55
fib(28);    // 317811
fib(35);    // 9227465
```
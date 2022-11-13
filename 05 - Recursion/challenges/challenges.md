# Recursion challenges

- [01-power.js](#01-powerjs):
  Write a function called power which accepts a base and an exponent.
  The function should return the power of the base to the exponent
- [02-factorial.js](#02-factorialjs):
  Write a function factorial which accepts a number and returns the factorial of that number
- [03-productOfArray.js](#03-productofarrayjs):
  Write a function called productOfArray which takes in an array of numbers and returns the product of them all
- [04-recursiveRange.js](#04-recursiverangejs):
  Write a function called recursiveRange which accepts a number
  and adds up all the numbers from 0 to the number passed to the function
- [05-fibPureRecursive.js](#05-fibpurerecursivejs):
  [*Less performant*] -
  Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence
- [06-fibWithObject.js](#06-fibwithobjectjs):
  [*High performant*] -
  Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence
- [07-reverse.js](#07-reversejs):
  Write a recursive function called reverse which accepts a string and returns a new string in reverse
- [08-isPalindrome.js](#08-ispalindromejs):
  Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome;
  Otherwise it returns false
- [09-someRecursive.js](#09-somerecursivejs):
  Write a recursive function called someRecursive which accepts an array and a callback.
  The function returns true if a single value in the array returns true when passed to the callback.
  Otherwise it returns false
- [10-flatten.js](#10-flattenjs):
  Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
- [11-capitalizeFirst.js](#11-capitalizefirstjs):
  Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array
- [12-nestedEvenSum.js](#12-nestedevensumjs):
  Write a recursive function called nestedEvenSum.
  Return the sum of all even numbers in an object which may contain nested objects.
- [13-capitalizeWords.js](#13-capitalizewordsjs):
  Write a recursive function called capitalizeWords.
  Given an array of words, return a new array containing each word capitalized
- [14-stringifyNumbers.js](#14-stringifynumbersjs):
  Write a function called stringifyNumbers which takes in an object and
  finds all of the values which are numbers and converts them to strings.
  It should not modify the current object
- [15-collectStrings.js](#15-collectstringsjs):
  Write a function called collectStrings which accepts an object and
  returns an array of all the values in the object that have a typeof string

---

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
// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

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

### 07-reverse.js

```js
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const reverse = str => {
    if (!str.length) return '';
    return reverse(str.substring(1)) + str.substring(0, 1);
};
  
reverse('awesome');     // 'emosewa'
reverse('rithmschool'); // 'loohcsmhtir'
```

### 08-isPalindrome.js

```js
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise it returns false.

const isPalindrome = str => {
    const currentLength = str.length;
    if (str[0] !== str[currentLength - 1]) return false;
    return true && isPalindrome(str.substring(1, currentLength - 1));
}

isPalindrome('awesome');    // false
isPalindrome('foobar');     // false
isPalindrome('tacocat');    // true
isPalindrome('amanaplanacanalpanama');      // true
isPalindrome('amanaplanacanalpandemonium'); // false
```

### 09-someRecursive.js

```js
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

// example callback
const isOdd = val => val % 2 !== 0;

const someRecursive = (arr, cb) => {
    if (!arr.length) return false;
    return cb(arr[0]) || someRecursive(arr.slice(1), cb);
};

someRecursive([1, 2, 3, 4], isOdd);         // true
someRecursive([4, 6, 8, 9], isOdd);         // true
someRecursive([4, 6, 8], isOdd);            // false
someRecursive([4, 6, 8], val => val > 10);  // false
```

### 10-flatten.js

```js
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

const flatten = arr => {
    if (!arr.length) return [];
    const newArr = [];
    if (Array.isArray(arr[0])) {
        newArr.push(...flatten(arr[0]));
    } else {
        newArr.push(arr[0]);
    }
    return [...newArr, ...flatten(arr.slice(1))];
};

flatten([1, 2, 3, [4, 5]]);         // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]);   // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]);             // [1, 2, 3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);   // [1, 2, 3]
```

### 11-capitalizeFirst.js

```js
// Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array

const capitalizeFirst = arr => {
    if (!arr.length) return [];
    const currStr = arr[0];
    return [
        currStr[0].toUpperCase() + currStr.substring(1),
        ...capitalizeFirst(arr.slice(1))
    ];
};

capitalizeFirst(['car', 'taco', 'banana']); // ['Car', 'Taco', 'Banana']
```

### 12-nestedEvenSum.js

```js
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

nestedEvenSum(obj1);  // 6
nestedEvenSum(obj2);  // 10
```

### 13-capitalizeWords.js

```js
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

const capitalizeWords = arr => {
    if (!arr.length) return [];
    return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
};

const words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
```

### 14-stringifyNumbers.js

```js
// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// It should not modify the current object.

const stringifyNumbers = obj => {
    const newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        const currentValue = obj[key];
        if (typeof currentValue === 'object') {
            newObj[key] = stringifyNumbers(currentValue);
        } else {
            if (typeof currentValue === 'number') {
                newObj[key] = currentValue.toString();
            } else {
                newObj[key] = currentValue;
            }
        }
    }
    return newObj;
};

const obj = {
    num: 1,
    test: [{
        name: 'geekyorion',
        roll: 12
    }],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

stringifyNumbers(obj);

/*
output: {
    num: '1',
    test: [{
        name: 'geekyorion',
        roll: '12'
    }],
    data: {
        val: '4',
        info: {
            isRight: true,
            random: '66'
        }
    }
}
*/
```

### 15-collectStrings.js

```js
// Write a function called collectStrings which accepts an object
// and returns an array of all the values in the object that have a typeof string

const collectStrings = obj => {
    const strings = [];
    for (let key in obj) {
        const currentValue = obj[key];
        if (typeof currentValue === 'object') {
            strings.push(...collectStrings(currentValue));
        } else {
            if (typeof currentValue === 'string') {
                strings.push(currentValue);
            }
        }
    }
    return strings;
};

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

collectStrings(obj);    // ["foo", "bar", "baz"]
```

# Big O section examples:

- [01-compare-functions.js](#01-compare-functionsjs):
  Write a function to get the sum up to N numbers
- [02-space-complexity.js](#02-space-complexityjs):
  Write a function to calculate the sum of the array numbers

---

### 01-compare-functions.js

```js
// Write a function to get the sum upto N numbers

// Solution 1 - using loop - O(n)
const getSumTillN = n => {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

const sumUpto50 = getSumTillN(50);
console.log(sumUpto50);


// Solution 2 - using formula - O(1)
const getSumTill = n => {
    return n * (n + 1) / 2;
}

const sumUpto100 = getSumTill(100);
console.log(sumUpto100);
```

### 02-space-complexity.js

```js
// Sums up the array items - Space - O(1)
const sumOfArray = arr => {
    let total = 0;          // <---- 1 space
    for (let i = 0; i < arr.length; i++) {  // <---- 1 space for i
        total += i;
    }
    return total;
}

// no matter what the size of this array, it will be O(1) as we are using only two variables (total and i)
const sum = sumOfArray([1, 2, 3, 4]); // 10

// doubles an array (pure function) - Space - O(n)
const doublesOfArr = arr => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

// this will impact as pure function creates a new array and that depends on the size of array that is being passed as an argument
const double = doublesOfArr([1, 2, 3]); // [2, 4, 6]
```

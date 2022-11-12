# Recursion examples

### 01-countDown.js

```js
// Write a function to print the countdown using recursion approach

const countDown = num => {
    if (num <= 0) return;
    console.log(num);
    countDown(--num);
};

countDown(5);

/* Output:
5
4
3
2
1
*/
```

### 02-sumRange.js

```js
// Write a function sumRange which accept a positive integer
// and returns the sum from 1 to given number

const sumRange = num => {
    if (num <= 0) return 0;
    if (num === 1) return 1;
    return num + sumRange(--num);
}

sumRange(10);   // 55
sumRange(0);    // 0
sumRange(5);    // 15
sumRange(2);    // 3
sumRange(1);    // 1

// visualize it for sumRange(3)
// -> return 3 + sumRange(2)
// ->            |--> return 2 + sumRange(1)
// ->                            |--> return 1 (base case)
// ->               return 2 + 1 (returned by sumRange(1))
// -> return 3 + 3 (returned by sumRange(2))
// -> 6 returned by sumRange(3)
```

### 03-factorial.js

```js
// Write a recursive function to calculate factorial or a positive integer

// Iterative approach
const factorialIterative = (num) => {
    let factorial = 1;
    for (let i = num; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
}

factorialIterative(5);      // 120
factorialIterative(1);      // 1
factorialIterative(10);     // 3628800


// Recursive approach
const factorialRecursively = (num) => {
    if (num <= 1) return 1;
    return num * factorialRecursively(--num);
}

factorialRecursively(5);      // 120
factorialRecursively(1);      // 1
factorialRecursively(10);     // 3628800
```

### 04-helperFunction.js

```js
// this program is just a format for helper function
// and contains errors

const outerFunction = (...args) => {
    const outerLevelScopedVariable = [];

    const helperFunction = (...helperArguments) => {
        // base case with return
        if (/* some condition */) return /* a value or terminate */;
        
        // helper function calls itself and can modify the outer level scoped variables
        outerLevelScopedVariable.push(/* something */);

        // calls helper function again with different input
        const modifiedArgs = args /* modify args for new call */
        helperFunction(...modifiedArgs /* different every time */ );
    };

    const ans = helperFunction(...args);

    // can return the ans or outerLevelScopedVariable
    // return ans;
    return outerLevelScopedVariable;
};

outerFunction(/* some arguments */);
```

### 05-collectOddsHelper.js

```js
// write a function to collect odds number from an array using recursion helper function

const collectOddsHelper = nums => {
    const odds = [];

    const helper = arr => {
        if (arr.length === 0) return;
        if (arr[0] % 2) odds.push(arr[0]);

        helper(arr.slice(1));
    }

    helper(nums);
    return odds;
}

collectOddsHelper([1, 2, 3, 4, 5]);   // [1, 3, 5]
collectOddsHelper([2, 4, 6, 8, 10]);  // []
collectOddsHelper([1, 3, 5, 7, 1]);   // [1, 3, 5, 7, 1]
```

### 06-collectOddsPureRecursion.js

```js
// write a function to collect odds number from an array using pure recursion

const collectOddsPureRecursion = arr => {
    const odds = [];

    if (arr.length === 0) return odds;
    if (arr[0] % 2) odds.push(arr[0]);

    return [...odds, ...collectOddsPureRecursion(arr.slice(1))];
};

collectOddsPureRecursion([1, 2, 3, 4, 5]);      // [1, 3, 5]
collectOddsPureRecursion([2, 4, 6, 8, 10]);     // []
collectOddsPureRecursion([1, 3, 5, 7, 1]);      // [1, 3, 5, 7, 1]
```

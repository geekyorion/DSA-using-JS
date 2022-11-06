# Problem solving patterns examples:

### 01-sameSquareArray.js

```js
// write a function to check whether both of the arrays are same or not
// squares array can be jumbled up with the numbers and both array can have duplicates
// make sure for every entry we have its square in the squares array

const sameSquareFrequency = (integers, squares) => {
    if (integers.length !== squares.length) return false;
    
    const integersFrequency = {};
    const squaresFrequency = {};

    for (let integer of integers) {
        integersFrequency[integer] = (integersFrequency[integer] || 0) + 1;
    }
    
    for (let square of squares) {
        squaresFrequency[square] = (squaresFrequency[square] || 0) + 1;
    }

    for (let num in integersFrequency) {
        if (integersFrequency[num] !== squaresFrequency[num * num]) return false;
    }

    return true;
}

sameSquareFrequency([1, 2, 3, 4], [9, 16, 1, 4]);       // true
sameSquareFrequency([1, 2, 3, 4], [9, 16, 1, 1]);       // false
sameSquareFrequency([1, 1, 1, 4], [1, 1, 16, 16]);      // false
```

### 02-validAnagram.js

```js
// write a function to check whether two words are anagrams or not
// using frequency counter pattern

const validAnagram = (word1, word2) => {
    if (word1.length !== word2.length) return false;

    const hash = {};

    for (let letter of word1) {
        hash[letter] = (hash[letter] || 0) + 1;
    }

    for (let letter of word2) {
        if (!(letter in hash)) return false;

        hash[letter] -= 1;
        // if (!hash[letter]) delete hash[letter];
    }

    return Object.keys(hash).length === 0;
}

validAnagram('', '');  // true
validAnagram('aaz', 'zza');  // false
validAnagram('anagram', 'nagaram');  // true
validAnagram("rat","car");  // false
validAnagram('awesome', 'awesom');  // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana');  // false
validAnagram('qwerty', 'qeywrt');  // true
validAnagram('texttwisttime', 'timetwisttext');  // true
```

### 03-sumZero.js

```js
// Write a function to get a pair whose sum is zero
// using multiple pointer pattern

const sumZero = numbers => {
    let start = 0;
    let end = numbers.length - 1;

    while(start < end) {
        const sum = numbers[start] + numbers[end];
        if (sum === 0) return [numbers[start], numbers[end]];
        else if (sum > 0) end--;
        else start++;
    }
}

sumZero([-3, -1, 0, 1, 3, 4]); // [-3, 3]
sumZero([1, 2, 3]); // undefined
```

### 04-countUniqueValues.js

```js
// count all the unique numbers that are present in a sorted array
// using multiple pointer pattern
// [NOTE]: if the array is not sorted then we can use frequency counter approach

 const countUniqueValues = arr => {
    if (arr.length === 1) return 1;

    let first = -1;
    let second = 0;
    let ans = 0;
    while(second < arr.length) {
        if (arr[first] !== arr[second]) {
            ans++;
        }
        first++;
        second++;
    }
    return ans;
}

countUniqueValues([1,1,1,1,1,2]);   // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);  // 7
countUniqueValues([]);  // 0
countUniqueValues([-2,-1,-1,0,1]);  // 4

// if we can modify the array then
const _countUniqueValues = arr => {
    if (arr.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

_countUniqueValues([1,1,1,1,1,2]);   // 2
_countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);  // 7
_countUniqueValues([]);  // 0
_countUniqueValues([-2,-1,-1,0,1]);  // 4
```

### 05-maxSum.js

```js
// write a function to return the max subarray sum of specified length
// using sliding window pattern

const maxSubarraySum = (arr, num) => {
    if (arr.length === 0 || arr.length < num) return null;
    
    let maxSum = 0;
    
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    let currentSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        currentSum = currentSum - arr[i - num] + arr[i];
        maxSum = Math.max(currentSum, maxSum); 
    }

    return maxSum;
};

maxSubarraySum([], 2);  // null
maxSubarraySum([1, 2, 3, 4], 4);  // 10
maxSubarraySum([1, 1, 1, 2], 3);  // 4
maxSubarraySum([1], 2);  // null
maxSubarraySum([3, 2, 5, 6, 3, 4, 5], 4);  // 18
maxSubarraySum([-9, -7, -3, -1, -10, -1, -3], 3);  // -11
```

### 06-binarySearch.js

```js
// return the index of the given number in the sorted array if exist otherwise -1
// using diving and conquer approach (binary search)

const binarySearch = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = ~~((left + right) / 2);
        const currNum = arr[middle];

        if (currNum === num) return middle;
        else if (currNum < num) left = middle + 1;
        else right = middle - 1;
    }

    return -1;
}

const arr = [1, 3, 4, 6, 7, 9, 12, 34, 56, 78, 123, 1000];
binarySearch(arr, 4);  // 2
binarySearch(arr, 9);  // 5
binarySearch(arr, 56);  // 8
binarySearch(arr, 123);  // 10
binarySearch(arr, 1000);  // 11
binarySearch(arr, 1);  // 0
binarySearch(arr, 0);  // -1
```

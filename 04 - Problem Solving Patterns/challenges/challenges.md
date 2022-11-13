# Problem solving patterns challenges:

- [01-sameFrequency.js](#01-samefrequencyjs):
  Write a function to find out if the two numbers have the same frequency of digits.
- [02-checkForDuplicates.js](#02-checkforduplicatesjs):
  Implement a function called, areThereDuplicates which accepts a variable number of arguments,
  and checks whether there are any duplicates among the arguments passed in.
- [03-averagePair.js](#03-averagepairjs):
  Write a function called averagePair. Given a sorted array of integers and a target average,
  determine if there is a pair of values in the array where the average of the pair equals the target average
- [04-isSubsequence.js](#04-issubsequencejs):
  Write a function called isSubsequence which takes in two strings and
  checks whether the characters in the first string form a subsequence of the characters in the second string
- [05-maxSubarraySum.js](#05-maxsubarraysumjs):
  Given an array of integers and a number, write a function called maxSubarraySum,
  which finds the maximum sum of a subarray with the length of the number passed to the function
- [06-minSubArrayLen.js](#06-minsubarraylenjs):
  Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
  This function should return the minimal length of a contiguous subarray of
  which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead
- [07-findLongestSubstring.js](#07-findlongestsubstringjs):
  Write a function called findLongestSubstring, which accepts a string and
  returns the length of the longest substring with all distinct characters

---

### 01-sameFrequency.js

```js
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
```

### 02-checkForDuplicates.js

```js
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// can be solved this using the frequency counter pattern OR the multiple pointers pattern.

const areThereDuplicates = (...args) => {
    const hash = {};

    for (let char of args) {
        if (args in hash) return true;
        hash[char] = undefined;
    }
    return false;
}

areThereDuplicates([1, 2, 3, 1]);       // true
areThereDuplicates([1, 2, 3, 10]);      // false
areThereDuplicates(['a', 'b', 'a']);    // true
```

### 03-averagePair.js

```js
// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

const averagePair = (arr, avg) => {
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        const currentAvg = (arr[start] + arr[end]) / 2;
        
        if (currentAvg === avg) return true;
        else if (currentAvg < avg) start++;
        else end--;
    }

    return false;
}

averagePair([1, 2, 3], 2.5);                        // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);     // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1);              // false
averagePair([], 4);                                 // false
```

### 04-isSubsequence.js

```js
// Write a function called isSubsequence which takes in two strings and
// checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the
// first string appear somewhere in the second string, without their order changing.

const isSubsequence = (subString, mainString) => {
    let subPointer = 0;
    let mainPointer = 0;

    while(subPointer < subString.length && mainPointer < mainString.length) {
        if (mainString[mainPointer] === subString[subPointer]) subPointer++;
        mainPointer++;
    }

    return subPointer === subString.length;
}

isSubsequence('hello', 'hello world');      // true
isSubsequence('sing', 'sting');             // true
isSubsequence('abc', 'abracadabra');        // true
```

### 05-maxSubarraySum.js

```js
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

const maxSubarraySum = (arr, length) => {
    if ((arr.length < length) || length === 0 || arr.length === 0) return null;

    let maxSum = arr[0];
    for (let i = 1; i < length; i++) maxSum += arr[i];
    
    let tempSum = maxSum;
    for (let i = length; i < arr.length; i++) {
        tempSum = tempSum - arr[i - length] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }

    return maxSum;
}

maxSubarraySum([100, 200, 300, 400], 2);  // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);  // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);  // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);  // 5
maxSubarraySum([2, 3], 3);  // null
```

### 06-minSubArrayLen.js

```js
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of
// which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

const minSubArrayLen = (arr, sum) => {
    const length = arr.length;
    let currSum = 0;
    let ans = Infinity;

    let leftPointer = 0;
    let currPointer = 0;

    while(leftPointer < length) {
        if (currSum < sum && currPointer < length) {
            currSum += arr[currPointer];
            currPointer++;
        } else if (currSum >= sum) {
            ans = Math.min(ans, currPointer - leftPointer);
            currSum -= arr[leftPointer];
            leftPointer++;
        } else {
            break; // break the loop in case currPointer reaches the arr length
        }
    }

    return ans === Infinity ? 0 : ans;
};

minSubArrayLen([2, 3, 1, 2, 4, 3], 7);  // 2 -> because [4, 3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9);  // 2 -> because [5, 4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);  // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);  // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);  // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);  // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);  // 0
```

### 07-findLongestSubstring.js

```js
// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

const findLongestSubstring = str => {
    const length = str.length;
    if (!length) return 0;

    let currPointer = 0;
    let leftPointer = -1;
    let ans = 0;
    const hash = {};

    while (currPointer < length) {
        const char = str[currPointer];
        if (char in hash) {
            leftPointer = Math.max(leftPointer, hash[char]);
        }
        hash[char] = currPointer;
        ans = Math.max(ans, currPointer - leftPointer);
        currPointer++;
    }
    return ans;
}

findLongestSubstring('');                   // 0
findLongestSubstring('rithmschool');        // 7
findLongestSubstring('thisisawesome');      // 6
findLongestSubstring('thecatinthehat');     // 7
findLongestSubstring('bbbbbb');             // 1
findLongestSubstring('longestsubstring');   // 8
findLongestSubstring('thisishowwedoit');    // 6
```
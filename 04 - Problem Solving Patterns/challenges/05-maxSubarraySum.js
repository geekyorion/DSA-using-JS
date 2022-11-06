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

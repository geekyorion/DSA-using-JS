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

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
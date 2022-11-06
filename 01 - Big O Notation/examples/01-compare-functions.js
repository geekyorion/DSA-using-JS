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

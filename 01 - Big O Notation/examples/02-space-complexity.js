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
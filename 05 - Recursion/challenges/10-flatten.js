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

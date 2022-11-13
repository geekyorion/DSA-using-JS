// Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array

const capitalizeFirst = arr => {
    if (!arr.length) return [];
    const currStr = arr[0];
    return [
        currStr[0].toUpperCase() + currStr.substring(1),
        ...capitalizeFirst(arr.slice(1))
    ];
};

capitalizeFirst(['car', 'taco', 'banana']); // ['Car', 'Taco', 'Banana']

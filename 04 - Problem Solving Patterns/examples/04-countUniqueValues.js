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

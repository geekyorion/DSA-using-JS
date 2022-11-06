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

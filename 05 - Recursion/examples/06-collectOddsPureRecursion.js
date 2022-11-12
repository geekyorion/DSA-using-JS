// write a function to collect odds number from an array using pure recursion

const collectOddsPureRecursion = arr => {
    const odds = [];

    if (arr.length === 0) return odds;
    if (arr[0] % 2) odds.push(arr[0]);

    return [...odds, ...collectOddsPureRecursion(arr.slice(1))];
};

collectOddsPureRecursion([1, 2, 3, 4, 5]);      // [1, 3, 5]
collectOddsPureRecursion([2, 4, 6, 8, 10]);     // []
collectOddsPureRecursion([1, 3, 5, 7, 1]);      // [1, 3, 5, 7, 1]

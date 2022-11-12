// write a function to collect odds number from an array using recursion helper function

const collectOddsHelper = nums => {
    const odds = [];

    const helper = arr => {
        if (arr.length === 0) return;
        if (arr[0] % 2) odds.push(arr[0]);

        helper(arr.slice(1));
    }

    helper(nums);
    return odds;
}

collectOddsHelper([1, 2, 3, 4, 5]);   // [1, 3, 5]
collectOddsHelper([2, 4, 6, 8, 10]);  // []
collectOddsHelper([1, 3, 5, 7, 1]);   // [1, 3, 5, 7, 1]

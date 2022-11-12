// Write a function sumRange which accept a positive integer
// and returns the sum from 1 to given number

const sumRange = num => {
    if (num <= 0) return 0;
    if (num === 1) return 1;
    return num + sumRange(--num);
}

sumRange(10);   // 55
sumRange(0);    // 0
sumRange(5);    // 15
sumRange(2);    // 3
sumRange(1);    // 1

// visualize it for sumRange(3)
// -> return 3 + sumRange(2)
// ->            |--> return 2 + sumRange(1)
// ->                            |--> return 1 (base case)
// ->               return 2 + 1 (returned by sumRange(1))
// -> return 3 + 3 (returned by sumRange(2))
// -> 6 returned by sumRange(3)

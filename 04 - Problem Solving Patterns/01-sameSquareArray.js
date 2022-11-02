// write a function to check whether both of the arrays are same or not
// squares array can be jumbled up with the numbers and both array can have duplicates
// make sure for every entry we have its square in the squares array

const sameSquareFrequency = (integers, squares) => {
    if (integers.length !== squares.length) return false;
    
    const integersFrequency = {};
    const squaresFrequency = {};

    for (let integer of integers) {
        integersFrequency[integer] = (integersFrequency[integer] || 0) + 1;
    }
    
    for (let square of squares) {
        squaresFrequency[square] = (squaresFrequency[square] || 0) + 1;
    }

    for (let num in integersFrequency) {
        if (integersFrequency[num] !== squaresFrequency[num * num]) return false;
    }

    return true;
}

sameSquareFrequency([1, 2, 3, 4], [9, 16, 1, 4]);       // true
sameSquareFrequency([1, 2, 3, 4], [9, 16, 1, 1]);       // false
sameSquareFrequency([1, 1, 1, 4], [1, 1, 16, 16]);      // false

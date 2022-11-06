// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// can be solved this using the frequency counter pattern OR the multiple pointers pattern.

const areThereDuplicates = (...args) => {
    const hash = {};

    for (let char of args) {
        if (args in hash) return true;
        hash[char] = undefined;
    }
    return false;
}

areThereDuplicates([1, 2, 3, 1]);       // true
areThereDuplicates([1, 2, 3, 10]);      // false
areThereDuplicates(['a', 'b', 'a']);    // true

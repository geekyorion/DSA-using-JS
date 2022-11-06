// Write a function called isSubsequence which takes in two strings and
// checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the
// first string appear somewhere in the second string, without their order changing.

const isSubsequence = (subString, mainString) => {
    let subPointer = 0;
    let mainPointer = 0;

    while(subPointer < subString.length && mainPointer < mainString.length) {
        if (mainString[mainPointer] === subString[subPointer]) subPointer++;
        mainPointer++;
    }

    return subPointer === subString.length;
}

isSubsequence('hello', 'hello world');      // true
isSubsequence('sing', 'sting');             // true
isSubsequence('abc', 'abracadabra');        // true

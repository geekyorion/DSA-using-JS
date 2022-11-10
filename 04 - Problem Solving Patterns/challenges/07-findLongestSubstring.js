// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

const findLongestSubstring = str => {
    const length = str.length;
    if (!length) return 0;

    let currPointer = 0;
    let leftPointer = -1;
    let ans = 0;
    const hash = {};

    while (currPointer < length) {
        const char = str[currPointer];
        if (char in hash) {
            leftPointer = Math.max(leftPointer, hash[char]);
        }
        hash[char] = currPointer;
        ans = Math.max(ans, currPointer - leftPointer);
        currPointer++;
    }
    return ans;
}

findLongestSubstring('');                   // 0
findLongestSubstring('rithmschool');        // 7
findLongestSubstring('thisisawesome');      // 6
findLongestSubstring('thecatinthehat');     // 7
findLongestSubstring('bbbbbb');             // 1
findLongestSubstring('longestsubstring');   // 8
findLongestSubstring('thisishowwedoit');    // 6

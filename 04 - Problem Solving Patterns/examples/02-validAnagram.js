// write a function to check whether two words are anagrams or not
// using frequency counter pattern

const validAnagram = (word1, word2) => {
    if (word1.length !== word2.length) return false;

    const hash = {};

    for (let letter of word1) {
        hash[letter] = (hash[letter] || 0) + 1;
    }

    for (let letter of word2) {
        if (!(letter in hash)) return false;

        hash[letter] -= 1;
        // if (!hash[letter]) delete hash[letter];
    }

    return Object.keys(hash).length === 0;
}

validAnagram('', '');  // true
validAnagram('aaz', 'zza');  // false
validAnagram('anagram', 'nagaram');  // true
validAnagram("rat","car");  // false
validAnagram('awesome', 'awesom');  // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana');  // false
validAnagram('qwerty', 'qeywrt');  // true
validAnagram('texttwisttime', 'timetwisttext');  // true

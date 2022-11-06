# Problem solving approach examples:

### 01-count-chars.js

```js
// Write a function to get the character counts
// condition =>/ it is case insensitive and it should only count alphanumeric characters

const isAlphanumeric = char => {
    const charCode = char.charCodeAt(0);

    return (
        (charCode >= 48 && charCode <= 57) // for digits
        || (charCode >= 65 && charCode <= 90)
        || (charCode >= 97 && charCode <= 122)
    );
}

const getCharCount = string => {
    const answer = {};

    for (let char of string) {
        if (isAlphanumeric(char)) {
            char = char.toLowerCase();
            answer[char] = ++answer[char] || 1;
        }
    }

    return answer;
}

const counter = getCharCount('Hello, Hey There!');
console.log(counter);

// expected output for 'Hello, Hey There!' => { h: 3, e: 4, l: 2, o: 1, y: 1, t: 1, e: 1 }

```

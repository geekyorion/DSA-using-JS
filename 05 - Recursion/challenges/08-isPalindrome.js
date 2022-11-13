// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise it returns false.

const isPalindrome = str => {
    const currentLength = str.length;
    if (str[0] !== str[currentLength - 1]) return false;
    return true && isPalindrome(str.substring(1, currentLength - 1));
}

isPalindrome('awesome');    // false
isPalindrome('foobar');     // false
isPalindrome('tacocat');    // true
isPalindrome('amanaplanacanalpanama');      // true
isPalindrome('amanaplanacanalpandemonium'); // false

# Patterns

Patterns are useful to solve the problems of a kind in an easier way

## Frequency Counter Pattern

This pattern is useful when we need to collect the values or frequencies of the values using objects or sets.

- It can help us to avoid O(n<sup>2</sup>)
- It is used when we want to search or iterate through an array (iterator) and it depends on an another array so to avoid nested loops, it can be used
- examples
  - 01-sameSquareArray.js
  - 02-validAnagram.js


## Multiple Pointer Pattern

This pattern is useful when we need to traverse an array towards beginning, end or middle on a certain condition

- It can be applied when array is sorted _(not necessarily)_
- examples
  - 03-sumZero.js
  - 04-countUniqueValues.js


## Sliding Window

This pattern is useful when we need to perform certain actions on a range (window) of an array/iterator.
As per the action this window can be reduced or closed or shifted.

- very useful in a case where subsets are involved
- example
  - 05-maxSum.js


## Divide and Conquer

Divide the data in smaller chunk and keeps on dividing until the unit subset is solvable and the merge it back to get the answer

- it tremendously __decrease the time complexity__
- example:
  - 06-binarySearch.js
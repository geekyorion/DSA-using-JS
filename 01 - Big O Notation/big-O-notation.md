# Big O Notation
- We us this to predict the performance of an algorithm
    - to evaluate how much time does a code takes to run
    - to know the tradeoffs between various approach
        - the code should be efficient
        - it should take less
            - time (higher priority)
              - example: [01-compare-function.js](./exmaples.html#01-compare-functionsjs)
            - memory (lower priority)
              - example: [02-space-complexity.js](./exmaples.html#02-space-complexityjs)
    - help us to identify the pin point of the overall application
- basically count the operations as we can not rely on the time as every machine is different
- it is the way to formalize fuzzy counting
- it tells us about how the runtime of an algo grows when input grows
- __definition__: an algorithm is O(f(n)) if the number of operations performed by computer is less than a constant time f(n) as n increases.
    - it can be linear if f(n) = n
    - it can be quadratic if f(n) = n²
    - it can be constant if f(n) = 1
    - it can be anything as per the written algorithm

## Rules
- constant doesn't matter
    - O(2n) is O(n)
    - O(500) is O(1)
    - O(10000000n²) is O(n²)
- smaller terms doesn't matter as well
    - O(n² + 20) is O(n²)
    - O(100n + n) is O(n)
    - O(200n² + 500n) is O(n²)
- Arithmetic operations are constant
- variable assignment is constant
- accessing elements in an array (by index) or object (by key) is constant
- for the loop, the complexity is the length of the loop times the complexity what happens inside of that loop

## types of complexity
- __time complexity__: it deals with the time
- __space complexity__: it deals with the space (memory)
- __auxiliary space complexity__: space required by the algorithm excluding input memory
- __space required by__:
    - the primitives like boolean, number, etc are constants
    - a string is O(n) where n is the length of the string
    - a reference type is generally O(n), where n is the number of items/keys in that reference (array/object)

### extras
- log<sub>base</sub>(value) = exponent <===> base<sup>exponent</sup> = value
    - example: log<sub>2</sub>8 = 3 <===> 2<sup>3</sup> = 8
- we often see _log_ while working with complexity

---

### All section (examples) codes and challenges
- examples_code: [click here](./examples.html)
- challenges: NA

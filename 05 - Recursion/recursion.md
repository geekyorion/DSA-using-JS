# Recursion

It is an alternative approach of iterative way in which function calls itself again and again until it founds the solution **(base case)** and returns from there.

- *definition*: a process (a function) which call itself
- It is the cleaner alternative to iterative approach (sometimes preferably)
- *base case*: this is the case where the recursion stops otherwise it will try to call itself infinitely
- in-built functions which are using recursion:
  - JSON
    - `JSON.parse`
    - `JSON.stringify`
  - DOM traversal
    - ex: `document.getElementById('id')`
  - Object traversal
  - Tree
  - Graph
  - Custom data structures, etc.

## Call stack

- A recursive function uses the call stack
<!-- TODO: link the stack section once it is done -->
- a stack is an another data structure and will cover in later section
  - when the function call itself then it is pushed to the stack on top
  - when we hit the base case or edge case then we `return` the output .
    at that time it pops from the top of the stack
- so when we write a recursive function then that function call itself
  and add its new call to the top of the stack with its local scope of variables

## Important parts of a recursive function

- Base case to exit from recursion
- Different scope input for the called recursive function
- example:
  - simple countdown example where we hit the base case and exit the recursion
    - [01-countDown.js](./examples/examples.html#01-countdownjs)
  - Sometimes we want to use the return value from the base case to get the answer
    - [02-sumRange.js]('./../examples/examples.html#02-sumrangejs)
  - we can use recursion as an alternative of the iterative approach
    - [03-factorial.js](./examples/examples.html#03-factorialjs)

## Recursion pitfalls

- no base case can cause `RangeError: Maximum call stack size exceeded`
- forget to return or return the wrong thing
  - example: if we return 0 in [factorial program](./examples/examples.html#03-factorialjs)
    then it will always return 0 as an answer
- stack overflow i.e. `RangeError: Maximum call stack size exceeded` caused by
  - no base case
  - instead of returning we put console
  - wrong base case

## Helper recursive function

- we can write a function which internally uses a recursive function to get the result
- an internal function can consume the outer level scoped variables to generate the output
- format:
  - [04-helperFunction.js](./examples/examples.html#04-helperfunctionjs)
- example:
  - [05-collectOddsHelper.js](./examples/examples.html#05-collectoddshelperjs)

## pure recursive function

- instead of using helper function, we can write the whole logic in a pure recursive way
- it may become complex
- example:
  - [06-collectOddsPureRecursion.js](./examples/examples.html#06-collectoddspurerecursionjs)

---

### All section examples code and challenges code
- examples: [click here](./examples/examples.html)
- challenges: [click here](./challenges/challenges.html)

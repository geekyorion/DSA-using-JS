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
  - [01-countDown.js](./examples/examples.html#01-countdownjs)
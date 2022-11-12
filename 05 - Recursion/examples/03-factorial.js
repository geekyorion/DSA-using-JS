// Write a recursive function to calculate factorial or a positive integer

// Iterative approach
const factorialIterative = (num) => {
    let factorial = 1;
    for (let i = num; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
}

factorialIterative(5);      // 120
factorialIterative(1);      // 1
factorialIterative(10);     // 3628800


// Recursive approach
const factorialRecursively = (num) => {
    if (num <= 1) return 1;
    return num * factorialRecursively(--num);
}

factorialRecursively(5);      // 120
factorialRecursively(1);      // 1
factorialRecursively(10);     // 3628800

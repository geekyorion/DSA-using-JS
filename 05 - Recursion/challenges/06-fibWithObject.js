// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

const fib = num => {
    // object can enhance the performance cause we save every number once we go for (n - 1)
    // so once the same number needs to be called recursively for (n - 2), we can look up in the memory
    const memory = {
        1: 1,
        2: 1,
        3: 2
    };

    const calculateFib = n => {
        if (n in memory) return memory[n];
        memory[n] = calculateFib(n - 1) + calculateFib(n - 2);
        return memory[n];
    };

    return calculateFib(num);
};

fib(4);     // 3
fib(10);    // 55
fib(28);    // 317811
fib(35);    // 9227465

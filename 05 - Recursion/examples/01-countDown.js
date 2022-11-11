// Write a function to print the countdown using recursion approach

const countDown = num => {
    if (num <= 0) return;
    console.log(num);
    countDown(--num);
};

countDown(5);

/* Output:
5
4
3
2
1
*/

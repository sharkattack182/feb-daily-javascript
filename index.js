// Multiplying numbers in a string
// Given a string of numbers separated by a comma and space, return the product of the numbers.
// Date: Feb 1 2021
// Solve Time: 4 min

function multiplyNums(string) {
    var arr = string.split(", ");
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum *= element;
    }
    console.log(sum)
    return sum;
}

multiplyNums("2, 3");
multiplyNums("1, 2, 3, 4");
multiplyNums("54, 75, 453, 0");
multiplyNums("10, -2");
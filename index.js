// Multiplying numbers in a string
// Given a string of numbers separated by a comma and space, return the product of the numbers.
// Difficulty: Medium
// Date: Feb 1 2021
// Solve Time: 4 min

// function multiplyNums(string) {
//     var arr = string.split(", ");
//     let sum = 1;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         sum *= element;
//     }
//     console.log(sum)
//     return sum;
// }

// multiplyNums("2, 3");
// multiplyNums("1, 2, 3, 4");
// multiplyNums("54, 75, 453, 0");
// multiplyNums("10, -2");

// Seven Boom
// Create a function that takes in an array of numbers and returns "BOOM!" if the digit 7 appears.
// Difficulty: Hard
// Date: Feb 2 2021
// Solve Time: 7 minutes

// function sevenBoom(array) {
//   let boom = false;
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let elm = element.toString().split("");
//     for (let j = 0; j < elm.length; j++) {
//       const e = elm[j];
//       if (e == 7) {
//         boom = true;
//       }
//     }
//   }
//   if (boom === true) {
//     console.log("BOOM!");
//   } else {
//     console.log("No sevens in here");
//   }
// }

// sevenBoom([1, 2, 3, 4, 5, 6, 7]);
// sevenBoom([8, 6, 33, 100]);
// sevenBoom([2, 55, 60, 97, 86]);


// Check if the brick fits
// Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).
// Difficulty: Hard
// Date: Feb 3 2021
// Solve Time: 
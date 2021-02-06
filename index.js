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
// Solve Time: 7 min

// function doesBrickFit(a,b,c,w,h) {
//     let brickHeight = a;
//     let brickWidth = b;
//     let brickDepth = c;
//     let holeHeight = h;
//     let holeWidth = w;

//     let fits = 0;

//     if(brickHeight <= holeHeight || brickHeight <= holeWidth) {
//         fits ++;
//         }

//     if(brickWidth <= holeHeight || brickWidth <= holeWidth) {
//         fits ++;
//     }
//     if(brickDepth <= holeHeight || brickDepth <= holeWidth) {
//         fits ++;
//     }


//     if(fits >= 2) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }


// doesBrickFit(1, 1, 1, 1, 1);
// doesBrickFit(1, 2, 1, 1, 1);
// doesBrickFit(1, 2, 2, 1, 1);



// Reverse the odd length words
// Given a string, reverse all the words which have odd length. The even length words are not changed.
// Difficulty: Hard
// Date: Feb 4 2021
// Solve Time: 17 min

// function reverseOdd(string) {
//     var returnArray = [];
//     var array = string.split(" ");
//     for (let i = 0; i < array.length; i++) {
//         let item = array[i]
//         if(item.length % 2 == 0) {
//             returnArray.push(item);
//         } else {
//             var normArr = item.split("");
//             let newArr = []
//             for (let j = normArr.length -1; j >= 0; j--) {
//                 newArr.push(normArr[j]);
                
//             }
//             var rev = newArr.join("");
//             returnArray.push(rev)
//         }
        
//     }
//     console.log(returnArray.join(" "))
// }

// reverseOdd("Bananas");
// reverseOdd("One two three four");
// reverseOdd("Make sure uoy only esrever sdrow of ddo length");


// Temperature Converter
// Create a function that converts Celcius to Fahrenheit and vice versa.
// Difficulty: Hard
// Date: Feb 5 2021
// Solve Time: 16 min


// function convert(string) {
//     if(string.includes("F")) {
//     var degreesF = parseFloat(string);
//     var tempCelcius = (degreesF - 32) * 5/9;
//     console.log(Math.round(tempCelcius) + " °C");
//     } else if(string.includes("C")) {
//      var degreesC = parseFloat(string);
//      var tempFaren = (degreesC * 9/5) + 32;
//      console.log(Math.round(tempFaren) + " °F")   
//     } else {
//         console.log("Not a temp")
//     }
// } 


// convert("35°C");
// convert("19°F");
// convert("33");


// Find First Character that Repeats
// Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".
// Difficulty: Hard
// Date: Feb 6 2021
// Solve Time: 





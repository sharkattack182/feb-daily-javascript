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
// Solve Time: 6 min

// function firstRepeat(string) {
//     var newString ="";
//     var repeatLetter = "";
//     var arr = string.split("");
//     for (let i = 0; i < arr.length; i++) {
//         const letter = arr[i];
//         if(newString.includes(letter)) {
//             repeatLetter = letter;
//         } else {
//             newString += letter;
//         }
//     }

//     if(repeatLetter === "") {
//         console.log("-1")
//     } else {
//         console.log(repeatLetter);
//     }
// }

// firstRepeat("legolas");
// firstRepeat("Gandalf");
// firstRepeat("Balrog");
// firstRepeat("Isildur");

// Length of a nested array
// Write a function that returns the total number of non-nested items in a nested array.
// Difficulty: Hard
// Date: Feb 7 2021
// Solve Time:

// function getLength(array) {
//     console.log(array.flat(Infinity).length)
// }

// getLength([1, [2, 3]]);
// getLength([1, [2, [3, 4]]]);
// getLength([1, [2, [3, [4, [5, 6]]]]]);
// getLength([1, [2], 1, [2], 1]);

// Oddish vs Evenish
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// Difficulty: Hard
// Date: Feb 8 2021
// Solve Time: 4 min

// function oddishOrEvenish(num) {
//     let sum = 0;
//     var arr = num.toString().split("");
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         sum += parseInt(element);
//     }

//     if(sum % 2 === 0) {
//         console.log("Evenish")
//     } else {
//         console.log("Oddish")
//     }
// }

// oddishOrEvenish(43);
// oddishOrEvenish(373);
// oddishOrEvenish(4433);

// Changing a string into camelCase
// Create a function that takes a string and returns it back in camelCase.
// Difficulty: Hard
// Date: Feb 9 2021
// Solve Time: 23 min

// function camelCasing(string) {
//     if(string.includes("_")) {
//         noUnder = string.replace("_"," ")
//     } else{
//         noUnder = string;
//     }
//     var lower = noUnder.toLowerCase();
//     var arr = lower.split(" ");

//     let camCase = arr[0].toString();
//     for (let i = 1; i < arr.length; i++) {
//         const element = arr[i];
//         let upper = element.charAt(0).toUpperCase() + element.slice(1);
//         camCase += upper;
//     }
//     console.log(camCase);
// }

// camelCasing("Hello World");
// camelCasing("snake_case");
// camelCasing("low high_HIGH");

// Combinations
// Create a function that takes a variable number of arguments, each argument representing the number of items in a group, and returns the number of permutations (combinations) of items that you could get by taking one item from each group.
// Difficulty: Hard
// Date: Feb 10 2021
// Solve Time: 10 min

// function combinations(...nums) {
//     let combos = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if(nums[i] !== 0) {
//             combos *= nums[i];
//         }
//     }

//     console.log(combos);
// }

// combinations(2, 3);
// combinations(3, 7, 4);
// combinations(2, 3, 4, 5);

// Scoring a field goal
// In (American) Football, a team can score if they manage to kick a ball through the goal (i.e. above the crossbar and between the uprights). Create a function that returns true if the ball 0 goes through the goal. You will be given an array of arrays.
// Difficulty: Hard
// Date: Feb 11 2021
// Solve Time: 18 min

// function isGoalScored(...arrays) {
//   var mainArr = arrays[0];
//   var fieldGoal = false;
//   for (let i = 0; i < 3; i++) {
//     const element = mainArr[i];
//     for (let j = 0; j < element.length; j++) {
//       const smallArr = element[j];
//       if (smallArr.includes(0)) {
//         for (let r = 3; r < 7; r++) {
//           const element = smallArr[r];
//           if (element === "0") {
//             fieldGoal = true;
//           }
//         }
//       }
//     }
//   }
//   console.log(fieldGoal);
// }

// isGoalScored([
//   ["  #     #  "],
//   ["  #  0  #  "],
//   ["  #     #  "],
//   ["  #######  "],
//   ["     #     "],
//   ["     #     "],
//   ["     #     "],
// ]);
// isGoalScored([
//   ["  #0    #  "],
//   ["  #     #  "],
//   ["  #     #  "],
//   ["  #######  "],
//   ["     #     "],
//   ["     #     "],
//   ["     #     "],
// ]);

// isGoalScored([
//   ["  #     #  "],
//   ["  #     #  "],
//   ["  #     # 0"],
//   ["  #######  "],
//   ["     #     "],
//   ["     #     "],
//   ["     #     "],
// ]);


// Anti Array
// Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.
// Difficulty: Hard
// Date: Feb 12 2021
// Solve Time: 

function isAntiArray(arr1, arr2) {

  const stringify = arr => JSON.stringify(Array.from(new Set([...arr].sort())))
	if(stringify(arr1) === stringify(arr2) && arr1.every((e, i) => e !== arr2)) {
    console.log(true);
  } else {
    console.log(false)
  }


}

isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]);
isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]);
isAntiArray([3.14, "True", 3.14], [3.14, "False", 3.14]);
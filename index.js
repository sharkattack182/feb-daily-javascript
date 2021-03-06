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

// function isAntiArray(arr1, arr2) {

//   const stringify = arr => JSON.stringify(Array.from(new Set([...arr].sort())))
// 	if(stringify(arr1) === stringify(arr2) && arr1.every((e, i) => e !== arr2)) {
//     console.log(true);
//   } else {
//     console.log(false)
//   }


// }

// isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]);
// isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]);
// isAntiArray([3.14, "True", 3.14], [3.14, "False", 3.14]);



// Get Real Type
// Create a function that takes a value as an argument and returns the type of this value. You should get the real type of a value (JavaScript typeof doesn't return the real object type of values and you need to fix that).
// Difficulty: Hard
// Date: Feb 13 2021
// Solve Time: 20 min


// function realType(data) {
//   var dataType;
//   if(typeof data !== "object") {
//     dataType = typeof data
//   }
//   else if(Object.prototype.toString.call(data) === '[object Array]') {
//   dataType = "array"
//   } else {
//     dataType = null;
//   }

//   console.log(dataType)
// }

// realType(1) ;
// // "number"

// realType("a") ;
// // "string"

// realType(true) ;
// // "boolean"

// realType([]) ;
// // "array"

// realType(null);
// // "null"


// Xs and Os Nobody Knows
// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
// Difficulty: Hard
// Date: Feb 14 2021
// Solve Time: 7 minutes

// function XO(string) {
//   let workingStr = string.toLowerCase();
//   let workingArr = workingStr.split("");
//   let x = 0;
//   let o = 0;
//   let equal = true;
//   workingArr.forEach(letter => {
//     if(letter === "x") {
//       x++;
//     } else if (letter === "o") {
//       o++;
//     }
//   });

//   if(x !== o) {
//     equal = false;
//   }

//   console.log(equal)
// }


// XO("ooxx");

// XO("xooxx");

// XO("ooxXm");
// // Case insensitive.

// XO("zpzpzpp");
// // Returns true if no x and o.

// XO("zzoo");


// Return the Middle Characters of a string
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
// Difficulty: Medium
// Date: Feb 15 2021
// Solve Time: 14 minutes

// function getMiddle(string) {
//   if(string.length % 2 == 0) {
//     let returnString = "";
//     let mid = string.length / 2;
//     returnString += string.charAt(mid - 1);
//     returnString += string.charAt(mid);
//     console.log(returnString)
//   } else {
//     console.log(string.charAt(string.length / 2))
//   }
// }

// getMiddle("test");
// getMiddle("testing");
// getMiddle("middle");
// getMiddle("A");
// getMiddle("Cytoskeleton")



// Remove the letters ABC
// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
// Difficulty: Medium
// Date: Feb 16 2021
// Solve Time: 10 minutes

// function removeABC(string) {
//   if(!string.includes("a") || !string.includes("b") || !string.includes("b")) {
//     console.log(null)
//   }
//   else {
//     var array = string.split("");
//     var newString = ""
//     console.log(array)
//     for (let i = 0; i < array.length; i++) {
//       const element = array[i];
//       if(element !== "a" && element !== "b" && element !== "c") {
//         newString += element
        
//       }
//     }
//     console.log(newString)
//   }
// }

// removeABC("This might be a bit hard");
// removeABC("hello world!");
// removeABC("");


// Check if string is a Palindrome
// Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).
// Difficulty: Medium
// Date: Feb 17 2021
// Solve Time: 


// function isPalindrome(string) {
//   str = string.toLowerCase();
//   arr = str.split("");
//   let compareStr = ""
//  for (let i = arr.length - 1; i > -1; i--) {
//    const element = arr[i];
//    compareStr += element
//  }
  
//  if(string.toLowerCase() === compareStr) {
//    console.log(true)
//  } else {
//   console.log(false)
//  }
// }

// isPalindrome("Neuquen");
// isPalindrome("Not a palindrome");


// Lets Sort this Array
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
// Difficulty: Medium
// Date: Feb 18 2021
// Solve Time: 7 min

// function ascDesNone(array, string) {
  
//   switch(string) {
//     case "Asc":
//       console.log(array.sort(function(a,b) {
//         return a - b;
//       }))
//       break;
//     case "Des":
//       console.log(array.sort(function(a,b) {
//         return b - a;
//       }))
//       break;
//     case "None":
//       console.log(array);
//       break;
//   }
// }

// ascDesNone([4, 3, 2, 1], "Asc" );
// ascDesNone([7, 8, 11, 66], "Des");
// ascDesNone([1, 2, 3, 4], "None");




// Oddish vs. Evenish
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// Difficulty: Medium
// Date: Feb 19 2021
// Solve Time: 4 minutes

// function oddishOrEvenish(num) {
//   var arr = JSON.stringify(num).split("");
//   var sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += parseInt(arr[i]);
//   }
//   if(sum % 2 === 0) {
//     console.log("Evenish")
//   } else {
//     console.log("Oddish")
//   }
// }

// oddishOrEvenish(43);
// oddishOrEvenish(373);
// oddishOrEvenish(4433);


// Square every Digit
// Create a function that squares every digit of a number.
// Difficulty: Medium
// Date: Feb 20 2021
// Solve Time: 6 min

// function squareDigits(num) {
//   var arr = JSON.stringify(num).split("");
//   var numString = "";
//   arr.forEach(number => {
//     number = parseInt(number);
//     var sum = number * number;
//     numString += sum;
//   });

//   console.log(numString)
// }

// squareDigits(9119);
// squareDigits(2483);
// squareDigits(3212);


// Multiply the numbers in a string
// Given a string of numbers separated by a comma and space, return the product of the numbers.
// Difficulty: Medium
// Date: Feb 21 2021
// Solve Time: 5 min

// function multiplyNums(string) {
//   var arr = string.split(", ");
//   let base = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     const element = arr[i];
//     base = base * element;
//   }

//   console.log(base)
// }

// multiplyNums("2, 3");
// multiplyNums("1, 2, 3, 4");
// multiplyNums("54, 75, 453, 0");
// multiplyNums("10, -2");



// GEt sum of people budgets
// Create the function that takes an array with objects and returns the sum of people's budgets.
// Difficulty: Medium
// Date: Feb 22 2021
// Solve Time: 3 min

// function getBudgets(object) {
//   const budget = object.reduce((currentTotal, person) => {
//     return person.budget  + currentTotal
//   }, 0)

//   console.log(budget)
// }


// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]);

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]);



// Even or Odd number of Factors
// Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.
// Difficulty: Medium
// Date: Feb 23 2021
// Solve Time: 

// function factorGroup(num) {
//   if(num % Math.sqrt(num) === 0) {
//     console.log("odd")
//   } else {
//     console.log("even")
//   }
// }

// factorGroup(33);
// factorGroup(36);
// factorGroup(7);



// Capitalize the First Letter of Each Word
// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
// Difficulty: Medium
// Date: Feb 24 2021
// Solve Time: 6 minutes

// function makeTitle(string) {
//   var arr = string.split(" ");
//   var returnArr = []
//   arr.forEach(word => {
//     var wordCap = word.charAt(0).toUpperCase() + word.slice(1)
//     returnArr.push(wordCap)
//   });

//   var returnString = returnArr.join(" ");
//   console.log(returnString)
// }

// makeTitle("This is a title");
// makeTitle("capitalize every word");
// makeTitle("I Like Pizza");
// makeTitle("PIZZA PIZZA PIZZA");



// Find the Discount
// Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.
// Difficulty: Medium
// Date: Feb 25 2021
// Solve Time: 4 minutes

// function dis(total, disc) {
//   var discPerc = disc / 100;
//   var discount = total * discPerc;
//   console.log(total - discount)
// }


// dis(1500, 50);
// dis(89, 20);
// dis(100, 75);



// A long long time
// Create a function that takes three values: h hours, m minutes, s seconds Return the value that's the longest duration.
// Difficulty: Medium
// Date: Feb 26 2021
// Solve Time: 7 minutes

// function longestTime(h,m,s) {
//   let minutes = m / 60;
//   let seconds = s / 60 / 60;
//   if(Math.max(h, minutes, seconds) === minutes) {
//     console.log(m)
//   } else if(Math.max(h, minutes, seconds) === seconds) {
//     console.log(s)
//   } else {
//     console.log(h)
//   }
// } 


// longestTime(1, 59, 3598);
// longestTime(2, 300, 15000);
// longestTime(15, 955, 59400);



// Find the volume of a cone
// Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.
// Difficulty: Medium
// Date: Feb 27 2021
// Solve Time: 8 minutes

// function coneVolume(height, radius) {
//   var baseArea = Math.PI * radius ** 2;
//   var cylVol = baseArea * height;
//   console.log(Math.round(1/3 * cylVol * 10) / 10)
// }


// coneVolume(3, 2);
// coneVolume(15, 6);
// coneVolume(18, 0);


// Match the last item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.
// Difficulty: Medium
// Date: Feb 28 2021
// Solve Time: 5 minutes

function matchLastItem(array) {
  const lastItem = array[array.length - 1];
  let compareStr = "";
  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    compareStr += element
  }

  if(lastItem === compareStr) {
    console.log(true)
  } else {
    console.log(false)
  }
}

matchLastItem(["rsq", "6hi", "g", "rsq6hig"]);
matchLastItem([1, 1, 1, "11"]);
matchLastItem([8, "thunder", true, "8thundertrue"]);
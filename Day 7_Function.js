// : function learning and practise the exercise :
// function can be declared or created in couple of ways :

// 1) normal function declaration :
function showMessage() {
  console.log("Helllo everyone!");
}
function showMessage(parameter1, parameter2, ...parameterN) {
  // Body
}
showMessage();
// ==================================================
let userName = "jhon";

function name() {
  userName = "Bob";
  console.log("hello" + " " + userName);
}
console.log(userName);
name();
console.log(userName);

// difference between parameter and argument :
// a parameter is the variable listen inside the parenthesses function declartion : (it's declaration time)
// but when value passed to function it's called arguments (it's call time)

// task :
function checkAge(age) {
  //1 way:   // let ans=age>18?true:false;
  // return ans||"did parents allow you";
  //2 way:   return age > 18 ? true : "Did parents allow you."
  //3 way :
  return age > 18 || "Did parents allow you.";
}
console.log(checkAge(19));

// write a min function :
function min(a, b) {
  // if(a<b){
  //     return a;
  // }
  // return b;
  return a < b ? a : b;
}
console.log(min(1, 1));

// write a function pow:
function pow(a, b) {
  if (b < 1) {
    console.log(`power ${b} is not supported , use positive integer.`);
  }
  let ans = 1;
  for (let i = 0; i < b; i++) {
    ans = ans * a;
  }
  return ans;
}
console.log(pow(3, 2));

// abhi tak jo bhee function hain vo sare normal function declaration and calling hain :
// * function expression :
let sayHi = function () {
  return "hi";
};
console.log(sayHi());
//* defination : create a function and put it into the variable sayHi;

// sayHi function copy to hi variable :
let hi = sayHi;
console.log(hi());
console.log(sayHi());
// when i write like let hi=sayHi() it means sayhi() value it's assing to hi : but when we write like let hi=sayHi means function copy to hi :

// ======================================

// * Arrow function :
function numbers() {
  console.log(arguments);
}
numbers(1, 2, 3);
// regular function scoped argument like object :
// but in arrow function don't have the functin scoped arguments object.

let nums = (...argument) => {
  // console.log(argument)
  let sum = 0;
  for (let args of argument) {
    sum += args;
  }

  return sum;
};
console.log(nums(1, 2, 3));
// ===================================

//*  anonymous function
const sum = function (a, b) {
  return a + b;
};
// =====================================

//* self invoking function :
(function () {
  console.log("hello");
})();

//* function with default parameters :
function Age(age = 21) {
  return age;
}
console.log(Age(18));

//* ==> exercise and question practise of function :
function Name() {
  return "satyam" + " " + "pawar";
}
console.log(Name());

// ===================================

let firstName = "satyam",
  lastName = "pawar";
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName(firstName, lastName));

// ====================================
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(2, 3));

// ======================================
function getAreaOfRectangle(length, width) {
  return length * width;
}
console.log(getAreaOfRectangle(2, 3));

// ======================================
function getPerimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
console.log(getPerimeterOfRectangle(2, 3));

// ==============================================
function getVolumeOfRectanglePrism(length, width, height) {
  return length * width * height;
}
console.log(getVolumeOfRectanglePrism(2, 3, 4));

// ==============================================
function areaOfCircle(radius) {
  return 3.14 * radius * radius;
}
console.log(areaOfCircle(2));

// ==========================================
function circumOfCircle(radius) {
  return 2 * Math.PI * radius;
}
console.log(circumOfCircle(2));
// =============================================
function density(mass, volume) {
  return mass / volume;
}
console.log(density(2, 3));
// ==========================================

function getSpeed(total_distance, total_time) {
  let speed = total_distance / total_time;
  return speed.toFixed(2);
}
console.log(getSpeed(200.5, 8));

// =========================================

function weight(mass, gravity) {
  return mass * gravity;
}
// mass is the mass of object is in kilograms:
// gravity is 9.8:

//============================================
// celsius to fahrenheit : (celsius*(9/5))+32;
function celToFahren(celsius) {
  return celsius * (9 / 5) + 32;
}
console.log(celToFahren(32));
// ==============================================
function getBmi(weight, height) {
  return weight / ((height * height) / 10000);
}
console.log(getBmi(60, 176));

// ==============================================
let spring = ["March", "April", "May"];
let summer = ["June", "July", "August"];
let autumn = ["September", "Ocotober", "November"];
let winter = ["December", "January", "February"];

function checkSeason(month) {
  if (spring.includes(month)) {
    return "spring";
  } else if (summer.includes(month)) {
    return "summer";
  } else if (autumn.includes(month)) {
    return "autumn";
  } else if (winter.includes(month)) {
    return "winter";
  } else {
    return "Invalid Month";
  }
}
console.log(checkSeason("February"));

// find max in three argument "
function findMax(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else if (c >= a && c >= b) {
    return c;
  }
}
console.log(findMax(1, 2, -2));

// level 2 exercise :

// calculate the value of linear equation of the form ax+by+c=-;
function linearEquation(a, b, c, x, y) {
  return a * x + b * y + c;
}
console.log(linearEquation(2, -3, 1, 3, 4));

// Quadratic equation ax2+bx+c=0;
function sovleQuadratic(a, b, c) {
  let root = b * b - 4 * a * c;
  if (root == 0) {
    return -b / (2 * a);
  } else if (root > 0) {
    let root1 = (-b + Math.sqrt(root)) / (2 * a);
    let root2 = (-b - Math.sqrt(root)) / (2 * a);
    return root1 + " " + root2;
  } else {
    let realPart = -b / (2 * a);
    let imaginaryPart = Math.sqrt(Math.abs(root)) / (2 * a);
    return realPart + imaginaryPart, realPart - imaginaryPart;
  }
}
console.log(sovleQuadratic(1, -1, -2));

// ===========================================================
function printArray(Array) {
  for (let item of Array) {
    console.log(item);
  }
}
let num = [1, 2, 3];
printArray(num);

// =========================================================
function showDateTime() {
  let date = new Date();
  let Day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();
  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  return Day + "/" + month + "/" + year + " " + hour + ":" + minutes;
}
console.log(showDateTime());

// ===============================================
function swapValue(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return a + " " + b;
}
console.log(swapValue(2, 3));

// ==============================================
function reverseArray(Array) {
  return Array.reverse();
}
console.log(reverseArray(["A", "B", "C"]));

// =========================================

function addItem(item, Array) {
  if (Array.includes(item)) {
    return Array;
  } else {
    Array.push(item);
    return Array;
  }
}
console.log(addItem(2, [1, 2, 3, 4]));

// remove item :
function removeItem(item, Array) {
  let index = Array.indexOf(item);
  if (Array.includes(item)) {
    Array.splice(index, 1);
    return Array;
  }

  return Array;
}
console.log(removeItem(3, [1, 3, 4]));

// sum of number:
function sumOfNumber(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumber(10));

// sum of odd number ;
function sumOfOdds(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(10));

// sum of even number:
function sumOfEven(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(10));

// even and odds :
function evenAndOdd(number) {
  let countOfEven = 0;
  let countOfOdd = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      countOfEven++;
    } else {
      countOfOdd++;
    }
  }
  return countOfEven + " " + countOfOdd;
}
console.log(evenAndOdd(100));

// sum of argument :
function sumOfArgument(...args) {
  let sum = 0;
  for (let num of args) {
    sum += num;
  }
  return sum;
}
console.log(sumOfArgument(1, 2, 3));

// write a function which generates a randomUserIp :
// function randomUserIp() {
//   let array1 = "";
//   let array2 = "";
//   let digit3;
//   let digit4;
//   let random;
//   for (let i = 0; i < 3; i++) {
//     random = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
//     array1+=random
//     if(array1.includes(random)){
//       array2+=random;
//     }
//   }
//   return array2+"."+array1+"."+random+"."+random;
// }
// console.log(randomUserIp());

function randomUserIp() {
  let string = "";
  for (let i = 0; i < 4; i++) {
    let segment = Math.floor(Math.random() * 256);
    string += `${segment}.`;
  }
  return string.slice(0, -1);
}

console.log(randomUserIp());

// generate mac address :
function randomMacAddress() {
  let decimals = "0123456789ABCDEF";
  let random = Math.floor(Math.random() * decimals.length);
  return decimals[random];
}
function random() {
  let ans = "";

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 2; j++) {
      ans += randomMacAddress();
    }
    if (i !== 5) {
      ans += ":";
    }
  }
  return ans;
}

console.log(random());

//declare a function name randomHexaNumberGenerator.
function random() {
  const range = "0132456789abcdef";
  let randomNumber = Math.floor(Math.random() * range.length);
  return range[randomNumber];
}
function hexadecimal() {
  let string = "#";
  for (let i = 0; i < 6; i++) {
    string += random();
  }
  return string;
}
console.log(hexadecimal());

// declare a function name userIdGenerator. return seven character id :
function userIdGenerator() {
  const range =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let temp = "";
  for (let i = 0; i < 7; i++) {
    temp += range[Math.floor(Math.random() * range.length)];
  }
  return temp;
}
console.log(userIdGenerator());

// level of exercise 3:

// generate rgb color :
function rgb() {
  let random = Math.floor(Math.random() * 255);
  return random;
}
console.log(`rgb(${rgb()},${rgb()},${rgb()})`);

//* ======================================================================================

// create a function of arrayOfHexaColors return any number colors in array ;
// generate random character :
function randomCharacter() {
  const char = "abcdef0123456789";
  let random = Math.floor(Math.random() * char.length);
  return char[random];
}
// generate color of string of hexadecimal number :
function randomString() {
  let temp = "#";
  for (let i = 0; i < 6; i++) {
    temp += randomCharacter();
  }
  return temp;
}
// here add the size of hexadecimal colors , you can prmopt also :
function arrayOfHexaColors() {
  let array = [];
  for (let i = 0; i < 3; i++) {
    array.push(randomString());
  }
  return array;
}
console.log(arrayOfHexaColors());

//* ======================================================================================

// create a function arrayOfRgbColors :
function getRgbNumber() {
  let random = Math.floor(Math.random() * 255);
  return random;
}
// create a function of array of rgb color:
function arrayOfRgbColors() {
  let array = [];
  for (let i = 0; i < 3; i++) {
    array.push(`rgb(${getRgbNumber()},${getRgbNumber()},${getRgbNumber()})`);
  }
  return array;
}
for (let i = 0; i < arrayOfHexaColors().length; i++) {
  console.log(arrayOfRgbColors()[i]);
}

//* =====================================================================================

// convert hexa color to rgb color :
function hexaToRgb(hexacolor) {
  hexacolor = hexacolor.replace("#", "");
  let red = parseInt(hexacolor.substring(0, 2), 16);
  let green = parseInt(hexacolor.substring(2, 4), 16);
  let blue = parseInt(hexacolor.substring(4, 6), 16);

  return `RGB(${red},${green},${blue})`;
}
console.log(hexaToRgb("#FF0690"));

//* ===================================================================================

//  convert rgb to hexa :
// our input :
let red = 255,
  green = 0,
  blue = 0;

function item(hexa) {
  hexa = hexa.toString(16).toUpperCase();
  return hexa.length == 1 ? "0" + hexa : hexa;
}

function rgbToHexa(a, b, c) {
  a = item(a);
  b = item(b);
  c = item(c);
  return `#${a}${b}${c}`;
}
console.log(rgbToHexa(255, 0, 0));

//*==========================================================================================

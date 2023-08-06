//* Higher order fuction :
// higher order functions are function which take other function as a parameter or return a functin as a value.
// function passed as a parameter is called callback.

//?======================================================================

//* callback:
// callback is a function which can be passed as a parameter to other function:
const callback = (n) => {
  {
    return n * 2;
  }
};

// function that takes other function as a parameter:
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));

//?======================================================================

//* Returning function :
// higher order function return function as value:
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

//?======================================================================

// forEach method uses call back :
const number = [1, 2, 3, 4, 5];

// create a arrow function
const sumArray = (array) => {
  let sum = 0;
  const total = function (element) {
    sum += element;
  };
  array.forEach(total);
  return sum;
};
console.log(sumArray(number));

//?======================================================================

//* Setting time :
//  in js we can execute some acitivies in a certai interval of time or we can schedule (wait) for some time to execute some activities.

//* setting interval using a setinterval function :
// in js we can use setinterval higher order function to do some activity continuously with in some interval of time.
// setinterval method take callback function and duration as a parameter.
// the duration is in millisecounds and the callback will be always called in that interval of time.

/*
//todo > syntax:
function callBack() {
  // code
}
setInterval(callBack, duration);
*/
// example:
function sayHello() {
  console.log("hello");
}
// setInterval(sayHello,1000) // it print hello every secounds...

//* setting a time using a setTimeout:
// we use setTimout higher order function to execute some action at some time in the future.
// setTimeout method take callback function and a duration as a parameter.
// the duration is in millisecounds and the callback wait for that amount of time.

// setTimeout(sayHello, 2000);

//?======================================================================

//* Functional Programming :
// writing regular loop, latest version of js introduced lots of built in methods.
// methods take callback function

//* forEach :
// iterate an array elements:
// we use forEach only with arrays:
// it take callback function with elements.index,array itself
// index and array itself are optional:

//=> example :
let nums = [1, 2, 3, 4, 5];
let total = 0;

// using arrow call back function:
nums.forEach((element) => {
  console.log(element);
});

// using normal function:
nums.forEach(function (element) {
  console.log(element);
});

// using arrow function and explicit return :
nums.forEach((element) => console.log(element));

//=> exmaple:
const desh = ["finland", "india", "nepal", "rusia"];
desh.forEach((e) => console.log(e.toUpperCase()));

//?======================================================================

//* Map:
// Iterate an array elements and "modify" the array elements:
// it take callback function with elements, index, array parameter
// return a new array.

//=> example:
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// when you want modifying array then you use map:
const namesUpperCase = names.map((e) => e.toUpperCase());
console.log(namesUpperCase);

//=>example:
const country = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

// extract all countries with  only  first three characters:
const countryFirstThreeChar = country.map((e) => e.substring(0, 3));
console.log(countryFirstThreeChar);

//?======================================================================

//* Filter:
// filter out items which full fill conditions and return a new array:

// filter countries containing land:
const countryWithLand = country.filter((desh) => desh.includes("LAND"));
console.log(countryWithLand);

// filter country end with ia:
const countryEndWithIa = country.filter((e) => e.endsWith("IA"));
console.log(countryEndWithIa);

// get values has more than 80 score:
const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const morethan80 = scores.filter((e) => e.score > 80);
console.log(morethan80);

//?======================================================================

//* reduce:
// take call back function
// reduce(accumulator,current,index,arrat):

// accumulator: is the result of the previous function call:
// current : current array item:
// index : is it's position
// array : is the array.

// callback function takes accumulator, current, and optional initial value as a parameter and "return a single value."
// if we do not specity this parameter, by default accumulator will get array first value.
// if our array is an empty array, then js will throw an error:

const even = [2, 4, 6, 8, 10];
const sum = even.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

//?======================================================================

//* every :
// checking if all the elements are similar in one aspect:
// it returns boolean value:

const newNames = ["Asabeneh", "Mathias", "Elias", "Brook"];
// check all values are string form:
const checkingStringOrNot = newNames.every((e) => typeof e === "string");
console.log(checkingStringOrNot);

// checking all values are boolean:
const bools = [true, true, true, true];
const checkBools = bools.every((e) => e == true);
console.log(checkBools);

//?======================================================================

//* find:
//  return the first element which satisfies the condition :
const ages = [24, 22, 25, 32, 35, 18];

// if age<20 return a age:
const twentyLess = ages.find((E) => E < 20);
console.log(twentyLess);

// obser it return first element:
const marks = [
  { name: "Asabeneh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];
//   condition data scores>80 : more than one people but it return first element:
const morethanEighty = marks.find((e) => e.score > 80);
console.log(morethanEighty);

//?======================================================================

//* findIndex :
// return the position of the first element which satisfies the condtion :
const indexofages = ages.findIndex((e) => e < 20);
console.log(indexofages);

//?======================================================================

//* some:
// checking if some of the  elements are similar in one aspect :
// it returns boolean:

const Englishnames = ["Asabeneh", "Mathias", "Elias", "Brook"];
const trueValues = [true, true, true, true];

// in englishnames some values are string form
const chekingEnglishNames = Englishnames.some((e) => typeof e === !"string");
console.log(chekingEnglishNames);

//?======================================================================

//* sort :
// sort methods arranges the array elements either acending or descending order.
// by default, sort() methdos sorts values as string.
// this work for well for string array  elements:
// but not for numbers.
// if number values are sorted as string and it give us wrong result.
// sort methods modify the original array
// it's recommended to copy the original data before you start using sort method:

// sorting string values:
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
const newProducts = [...products];
newProducts.sort();
newProducts.push("hello");
// print old array:
console.log(products);
// print copy array;
console.log(newProducts);

// sorting numeric values:
let unique = [];
for (let i = 1; i <= 10; i++) {
  let random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  if (!unique.includes(random)) {
    unique.push(random);
  } else {
    i--;
  }
}
unique.sort((a, b) => {
  return a - b;
});
// unique.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// });
console.log(unique);

// sorting obejct arrays:
// whenever we sort object in array
// we use the object key to compare.:
const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
});
console.log(users);

//?======================================================================
//?======================================================================
 

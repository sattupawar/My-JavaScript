//* Object :

// in real life:
// everything can be an object
// object do have properties
// properties have values
// so an object is key value pair.

// real life example :
// car : car is obejct :
// properties : weight, color, company, launching date, price,speed,seater
// this properties have values : so car is an object.

// let's work with object:

//* creating empty obejct :
const person = {};

//* creating object with values :
person.firstName = "satyam";
person.lastName = "pawar";
console.log(person);

let dog = {
  name: "golly",
  legs: 4,
  gender: "male",
  barkOrNot: function () {
    return `${this.name} is barking`;
  },
};
console.log(dog);

//* getting values from an object :
// 1 using. and [] bracket:

let dogLegs = dog.legs;
console.log(dogLegs);
let dogName = dog["name"];
console.log(dogName);
console.log(dog.barkOrNot());

//* object methods:
// create a function inside object, it's called methods:
// in function this keyword refers to the object itself.
// we can use the word this to access the values of different properties of the object.
// but we can not use arrow function as object methods.
//

//* setting new key or add a new key in object :
// we have person obejct : in person obejct add age and gender key :
person.age = 21;
person.marridge = false;
console.log(person);

//* add a method in object:
person.getFullName = function () {
  return `${this.firstName} is 21 years old male, and he is not marridge.`;
};
console.log(person.getFullName())

//* copy object without modifying original object :
console.log(person);
// now person as obejct copy to satyam data object :
let satyamData=Object.assign({},person)
console.log(satyamData)

//* getting object key: you want only key not their values : access keys from object :
// using object.keys() access keys of an object as array.

console.log(Object.keys(person))
person.address={
    area:"godadara",
    society:"kesharbhavani",
    city:"surat",
}
console.log(Object.keys(person.address))

//* getting object values, when you want object values or extract values from objet "
// using object.values() as an array;
console.log(Object.values(person))
console.log(Object.values(person.address))

//* when you want to extract both keys and values ,
// using object.entries()
console.log(Object.entries(person))

//* when you want check property exit or not in obejct :
// by using hasOwnProperty()
console.log(person.hasOwnProperty("firstName"))
console.log(person.hasOwnProperty("address"))

// complete basics of object :
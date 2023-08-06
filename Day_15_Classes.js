//* Classes :
/*
-> javascript is an object oriented programming language :
-> everythin in js is an object, with it's properties and methods;
-> we create class to create an object
-> A class is like an object constructor or a "blueprint" for creating objects.
-> the class defines attributes and the behaviour of the object
-> while the object, on the other hand, represents the class
-> once we create a class we can create object from it , whenever we want.
-> creating an object from a class is called instantiation
-> In the object section, we saw how to create an object literal.
-> object literal is a singleton
-> if we want to get a similar object, we have to write it
-> class allow to create many object, this helps to reduce amount of code and repetition of code.
*/

//* Defining a classes :
// to define a class in js we need to use the keyword class
// name of the class in CamelCase and block code {}

// syntax:
class className {}
class Person {
  // code goes here
}

// * class instantiation ;
// means creating object from a class
// we need the keyword new and we call the name of the class after the word new.

let dog = new Person();
console.log(dog);

// here see we create dog object, since the class did not have any properties yet the object is also empty ;
// now pass the different properties for the class.

//* class constructor :
// is a builtin function, which allows us to create a blueprint for our object:
class newPerson {
  // code goes here
  //   here we set default values so when i not passed the argument it will print default values
  constructor(
    firstName = "sattu",
    lastName = "pawar",
    age = 21,
    country = "india",
    city = "surat",
    score,
    skills
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    // here we add properties, its start initial score like level or score in game :
    this.score = 0;
    this.skills = [];
  }
  //   let's create class methods :
  get getfullName() {
    let fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  get getAge() {
    return this.age;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  set setScore(score) {
    this.score += score;
  }

  //   create regular method of getPersonInfo();
  get getPersonInfo() {
    let fullName = this.getfullName;
    let skills = this.getSkills;
    let formattedSkill =
      skills.slice(0, skills.length - 1).join(", ") +
      ` and ${skills[skills.length - 1]}`;

    formattedSkill = skills.length > 0 ? `He knows ${formattedSkill}` : "";
    let info = `${fullName} is ${this.getAge}. He lives in ${this.city},${this.country}. ${formattedSkill}`;
    return info;
  }

  //   create a showDateTime as static method :
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let fullTime =
      date + "/" + month + "/" + year + " " + hours + ":" + minutes;
    return fullTime;
  }
}
dog = new newPerson();
console.log(dog);

// as you can see all the properties or key of object is undefined
// now pass the value of ther properties :

dog = new newPerson("satyam", "pawar");
console.log(dog);

// first we create a class
// we can create many object using the class
// create many person objects using the person class ;

let person1 = new newPerson("krunal", "patil");
let person2 = new newPerson("yash", "patil");
let person3 = new newPerson("swapnil", "patil");

console.log(person1);

// add more properties of newPerson class  :

let person4 = new newPerson("satyam", "pawar", 21, "india", "surat");
console.log(person4);

// here we not pass the value so it print default value of newperson class :
let person5 = new newPerson();
console.log(person5);

//? =================================================================================

//* Class Methods :
// in class we can create class methods
// methods are javascript functions inside the class

let person6 = new newPerson("shraddha", "pawar");
console.log(person6.getfullName);

//? ==================================================================================

//* properties with initial value :
// when we create a class for some properties we may have an initial value :
// if you are playing game,you starting score will be zero, so we may have a starting score or score which is zero.
// in other way, we may have an initial skills and we will acquire some skill after some time.
console.log(person1.score, person1.skills);

//? =================================================================================

// A method could be regular method or getter or a setter.

//* getter ;
// the get method allow us to access value from the object.
// we write a get method using keyword get followed by a function.
// instead of accessing properties directly from the object we use getter to get the value :

//* by using getter you access the value from object:
console.log(person1.getSkills);
console.log(person5.getAge);

//? ================================================================================

//* setter :
// it helps to modify the value of certain properties .
// using set keyword set followed by a function.. :

// add the value in person1 obejct setScore and setSkill :

person1.setSkill = "html";
person1.setSkill = "js";
person1.setSkill = "css";
person1.setScore = 2;

console.log(person1.getSkills);

console.log(person1.getPersonInfo);

//? ==================================================================================

//* static methods :
// static keyword defined a static method for a class ;
// static methods are not called on instances of the class :
// instead, they are called on the class itself :
// These are often utility functions, such as functions to create or clone objects :
// example of static method is Date.now():
// the now method is called directly from the class :

// above newPerson add the static methods name is showDateTime() :

// access the showDateTime static method :

console.log(newPerson.showDateTime());
// note : the static methods are methods which can be used as utility functions :
// utlity function : provides common,resuable functions :

//? =====================================================================================

//* Inheritance :
// using inheritance we can access all the properties and the mehtods of the parent class :
// if you remember, we have a person parent class and we will create children from it, out children class could be student,teach etc :

// Inheritance allow subclass to access and use the members(properties and methods) defined in the superclass

// let's create a student child class from person parent class :
class student extends newPerson {
  saySomething() {
    return "i am a child of the person class.";
  }
}
let student1 = new student("kundan", "sahu");

console.log(student1.getPersonInfo);
console.log(student1.saySomething());
console.log(student1.getfullName);

//? ==============================================================================

// Overriding methods :
// we manage to access all the methods in the person class and we used it in the student child class :
// we can customize the parent methods, we can add additional properties to a child class
// if we want to customize, the methods and if we want to add extra properties , we need to use the constructor function the child class too.
// inside the constructor function we call the super() function to access all the properties from the parent class.
// the person class did'nt have gender but now let us give gender property for the child class,student
// if the same method name used in the childclass, the parent method will be overridden

class Student extends newPerson {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }
  saySomething() {
    console.log("I am a child of the person class");
  }
  get getPersonInfo() {
    let fullName = this.getfullName;
    let skills = this.getSkills;
    let formattedSkill =
      skills.slice(0, skills.length - 1).join(", ") +
      ` and ${skills[skills.length - 1]}`;

    formattedSkill = skills.length > 0 ? `He knows ${formattedSkill}` : "";
    let pronoun = this.gender == "Male" ? "He" : "She";
    let info = `${fullName} is ${this.getAge}. ${pronoun} lives in ${this.city},${this.country}. ${formattedSkill}`;
    return info;
  }
}

let student2 = new student(
  "Asabeneh",
  "Yetayeh",
  250,
  "Finland",
  "Helsinki",
  "Male"
);
console.log(student2.getPersonInfo);
student2.setSkill = "planning";

student2.setSkill = "planning";
console.log(student2.getPersonInfo);


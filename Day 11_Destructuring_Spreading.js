//* Destructuring and Spread:
// Destructuring is a way to unpack arrays,and objects and assigning to a distinct variable ;

//* Destructing Array :
// have simple array :
let number = [1, 2, 3];
let [one, two, three] = number;
console.log(one, two, three);

let names = ["Asabeneh", "Brook", "David", "Jhon"];
let [firstName, secoundName, thirdName, fourthName] = names;
console.log(firstName, secoundName, thirdName, fourthName);

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

// 2d array ;
const fullStack = [
  ["html", "css", "javascript", "react"],
  ["Node", "Express", "MongoDB"],
];
let [fronted, backend] = fullStack;
console.log(fronted);
console.log(backend);

//* if we like to skip on of the values in the array we use additional comma.
//* the comma helps to omit the value at that specific index

console.log(number);
let [first, , third] = number;
console.log(third);

//* we can use default value in case the value of array for that index is undefined:
const values = [undefined, "brook", "david"];
let [
  firstPerson = "krunal",
  secoundPerson,
  thirdPerson,
  forthPerson = "sattu",
] = values;
console.log(forthPerson, firstPerson);

//* we can not assign variable to all elements:
//* we can destructure few of the first and we can get the remaining as array using spread operator(...)

let even = [2, 4, 6, 8, 10];
let [firstEven, secoundEven, ...allEven] = even;
console.log(firstEven);
console.log(secoundEven);
console.log(allEven);

//* Destructuring during iteration :
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
for (let [country, city] of countries) {
  console.log(city);
}

const fullStackTech = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (let [tech1, tech2, tech3] of fullStackTech) {
  console.log(tech1, tech2);
}

//?====================================================================

//* Destructuring Object:
let rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area } = rectangle;
console.log(width, height, area);

//* Renaming during structuring :

let { width: w, height: h, area: a } = rectangle;
console.log(w);

//* if the key is not found in the object the varible will be assigned to undefined.
// sometimes the key of might not be in the object, in that case we can give a default value during declaration.
let { parameter = 80 } = rectangle;
console.log(parameter);

console.log(rectangle);

//* we has function that calculate parameter of rectangle :
// we can take rectangle object as parameter in functin and calculate:
let rect = {
  width: 20,
  height: 10,
};
let rectParameter = (rect) => {
  return 2 * (rect.width + rect.height);
};
console.log(rectParameter(rect));

//*Example :
let person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

//* create a function which give information about the person object wihtout destructuring :

let infoPerson = (person) => {
  let skills = person.skills;
  let formattedSkills = skills.slice(0, -1).join(", ");
  let lang = person.languages;
  let formattedLang = lang.slice(0, -1).join(", ");

  let personInfo = `${person.firstName} ${person.lastName} lives in ${
    person.country
  }. He is ${person.age} years old.He is an ${
    person.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }.He speaks ${formattedLang} and a little bit of ${[lang[lang.length - 1]]}.`;
  return personInfo;
};

console.log(infoPerson(person));

//* create a funtion which give information about the person object with destructuring:
let circle = {
  radius: 20,
};
let calculateAreaOfCircle = ({ radius }) => {
  return 2 * 3.14 * radius;
};
console.log(calculateAreaOfCircle(circle));

let newPerson = Object.assign({}, person);
// console.log(newPerson)

let getInforNewPerson = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  let formattedSkills = skills.slice(0, -1).join(", ");
  let formattedLang = languages.slice(0, -1).join(", ");

  let personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old.He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }.He speaks ${formattedLang} and a little bit of ${
    languages[languages.length - 1]
  }.`;
  return personInfo;
};
console.log(getInforNewPerson(newPerson));

//* Destructuring object during iteration :
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (let { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

//?===================================================================================

//* Spread or Rest Operator:

//* Spread operator to get the rest of array elements ;
let stringNums = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "Ten",
];

let [...rest] = stringNums;
console.log(rest);

//* spread operator to copy array :
let odd = [1, 2, 3, 4, 5, 6, 7];
let newOdd = [...odd];
newOdd.push(10);
console.log(odd); // not affect original array:

//* spread operator to copy object :
let user = {
  name: "value1",
  title: "title1",
  country: "country1",
  city: "city1",
};

let copyUser = { ...user };
console.log(copyUser);

//* modifying or changing the value of key from object
copyUser = { ...user, title: "title2" };
console.log(copyUser);

//* spread operator with arrow functions:
// takes unlimited number of arguments :
let sumOfAllNums = (...args) => {
  //   console.log(args);
  let sum = 0;
  for (let temp of args) {
    sum += temp;
  }
  return sum;
};
console.log(sumOfAllNums(1, 2, 3, 4, 5));

//?====================================================================================

//* Exercise :

//* Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.:

//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(e)

//Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
let [fin, est, sw, den, nor] = countries;
// console.log(fin)

//Destructure the rectangle object by its properties or keys.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
let { width, height, area, perimeter } = rectangle;
// console.log(width,perimeter)

//?===================================================================================
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// iterate through the users array:
for (let { name, scores, skills, age } of users) {
  //   console.log(name, scores, skills, age);
}

// get all the keys of the object
for (let temp of users) {
  console.log(Object.keys(temp));
}

// find person who has less than two skilss :
for (let { name, scores, skills, age } of users) {
  if (skills.length < 2) {
    console.log(name);
  }
}

//?================================================================================

const countriesData = [
  {
    country: "United States",
    population: 331002651,
    capital: "Washington, D.C.",
    languages: ["English"],
  },
  {
    country: "China",
    population: 1439323776,
    capital: "Beijing",
    languages: ["Mandarin", "Standard Chinese"],
  },
  {
    country: "India",
    population: 1380004385,
    capital: "New Delhi",
    languages: ["Hindi", "English"],
  },
  {
    country: "Russia",
    population: 145934462,
    capital: "Moscow",
    languages: ["Russian"],
  },
  {
    country: "Brazil",
    population: 212559417,
    capital: "Brasília",
    languages: ["Portuguese"],
  },
  // Add more countries here as needed with their respective languages
];

for (let { country, population, capital, languages } of countriesData) {
  console.log(
    `name : ${country}, capital : ${capital}, population : ${population}, languages : ${languages}`
  );
}

//A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

let [name, skills, [htmlScore, cssScore, javascriptScore, reactScore]] =
  student;

console.log(name, skills, javascriptScore, reactScore);

// Write a function called convertArrayToObject which can convert the array to a structure object :
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
let convertArrayToObject = (array) => {
  let empty = [];
  for (let [...rest] of array) {
    empty.push({ ...rest });
  }
  return empty;
};

console.log(convertArrayToObject(students));

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
const student1 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

// copy the object:
// console.log(student1.skills.frontEnd);
let student2 = { ...student1 };
student2.skills.frontEnd.push({ skill: "bootstrap", level: 8 });
student2.skills.backEnd.push({ skill: "Express", level: 9 });
student2.skills.dataBase.push({ skill: "sql", level: 8 });
student2.skills.dataScience.push("sql");
console.log(student2);

// iterate a object:

 
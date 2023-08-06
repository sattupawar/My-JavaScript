//* JSON stand for javascript object notation
// JSON format is text or string only.
// json is a light weight data fromat for storing and transporting.
// json mostly used when data is send from a server to a client.
// json is an easier to use alternative to xml

let usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`;
// above file is json :
// Mostly we fetch json data from http reponse or from a file,
// we store json as a string :

//* How to convert json to javascript object ;
console.log(typeof usersText);
let userObject = JSON.parse(usersText, undefined, 4);
console.log(typeof userObject);

usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`;

//* convert the firstname,lastname,age to uppercase  using a reviver function with json parse():
// first we convert the json to js object :
//
userObject = JSON.parse(usersText, (key, value) => {
  let ans =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return ans;
});
console.log(userObject);

//* Converting Object to json :
// we use json.stringfy() :
// json.stringfy() takes three parameter :
// 1. object file
// 2. replacer : is used as filter
// 3. space : is an indentations :
// note : we do not  want to filter out any of the keys from the object we can just pass undefined :

let users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
};

//* convert the object to json :
let jsonText = JSON.stringify(users, undefined, 4);
console.log(typeof jsonText);

//*  using a filter array with json.stringify :
// use the replcer as filter :
// when you want only few items and their values use filter :

user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

jsonText = JSON.stringify(user, ["firstName", "lastName"], 4);
console.log(jsonText);

//* Exercise :

//* change skills array to json
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
console.log(typeof skills);
let skills_json = JSON.stringify(skills, undefined, 4);
console.log(typeof skills_json);

//* stringify the age variable :
let age = 21;
console.log(typeof age);
let age_json = JSON.stringify(age);
console.log(typeof age_json);

//* Stringify the isMarried variable :
let isMarried = true;
console.log(typeof isMarried);
let isMarried_json = JSON.stringify(isMarried);
console.log(typeof isMarried_json);

//* stringigy the student object :
let student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
console.log(typeof student);
let student_json = JSON.stringify(student);
console.log(typeof student_json);

student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

//* stringify the students object with only firstName,lastName and skills properties :
let student_filter = JSON.stringify(student, [
  "firstName",
  "lastName",
  "skills",
]);
console.log(student_filter);

//* parse the txt json to object :
let txt = `{
  "Alex": {
      "email": "alex@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 30
  },
  "Asab": {
      "email": "asab@asab.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Redux",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 25,
      "isLoggedIn": false,
      "points": 50
  },
  "Brook": {
      "email": "daniel@daniel.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux"
      ],
      "age": 30,
      "isLoggedIn": true,
      "points": 50
  },
  "Daniel": {
      "email": "daniel@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Python"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "John": {
      "email": "john@john.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux",
          "Node.js"
      ],
      "age": 20,
      "isLoggedIn": true,
      "points": 50
  },
  "Thomas": {
      "email": "thomas@thomas.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "Paul": {
      "email": "paul@paul.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  }
}
`;
//* convert txt json to object:
let txtObj = JSON.parse(txt, undefined, 4);
console.log(txtObj);

//* find the person who has many skills from the variable stored intxt :
let who = JSON.parse(txt);
console.log(who);
let max = 0,person;
let ans={}
for (let temp in who) {
  if (who[temp].skills.length > max) {
    max=who[temp].skills.length;
    person=temp
    ans[person]=max
  }
  ans[temp]=who[temp].skills.length;
}
console.log(person,max)
console.log(ans)
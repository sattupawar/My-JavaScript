//* Regular Expressions :
// a small programming language:
// helps to find pattern in data.
// check is some pattern exists in a different data types :

//* To use RegExp in javascript either :
// 1. RegExp constructor : RegExp(pattern,flag).
// 2. RegExp pattern : / / followed by flag.

//* RegExp take two parameter (pattern,flag);
//1) pattern : a pattern could be a text or anyform of pattern which sort of similarity.
//2) flag : g-global,i-case insensitive flag :

//? RegExpp Object methods:

//* Testing for a match :
// tests for a match in a string, it returns true or false:
let str = "I love javascript";
let pattern = new RegExp("javascript", "gi");

// let ans =pattern.test(pattern,flag);

let ans = pattern.test(str);
console.log(ans);

//? Array containing all of the match :

//* 1) match() :
// if we do not use a global flag, match() returns an array containing the pattern,index,input and group:
// if we do use global flag return all value;

str = "I love love javascript";
ans = str.match(/love/gi);
console.log(ans);

//* 2) search() :
// tests for a match in string:
// it return the index of the match or -1 if the search fails :

str = "i love javascript javascript and python.";
ans = str.search(/javascript/gi);
console.log(ans);
// note : it return first element index :

//? Replacing a substring :
// question : replace python value to javascript :
let txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";
// replace python to java :
ans = txt.replace(/python/gi, "Java");
console.log(ans);

//todo  [] : a set of characters :
txt =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
pattern = /[Aa]pple/;
console.log(txt.match(pattern));
// without global it return first element :
pattern = /[A]pple/gi;
console.log(txt.match(pattern));
// it return array of matching values :
pattern = /apple|banana/gi;
console.log(txt.match(pattern));

//todo \ : uses to escape special characters :
// \d : match where the string contains digits : (numbers from 0-9);
// \D : match where the string does contain digits :

// collect only digits from string : uses /\d/g
txt = "This regular expression example was made in January 12,  2020.";
ans = txt.match(/\d+/g);
console.log(ans);

// collect only whole string except digits : uses /\D/g
ans = txt.match(/\D+/g);
console.log(ans);

txt = "Apple and banana are fruits";
ans = txt.match(/a./gi);
console.log(ans);

ans = txt.match(/[a].+/gi);
console.log(ans);

ans = txt.match(/[a].*/gi);
console.log(ans);

txt =
  "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";

ans = txt.match(/[Ee]-?mail/g);
console.log(ans);
// jisko optional rakhna ho tab (value?)

//? Quantifier in regular expression :

// find the substring that lenght is 4 it may be string or digits :
txt = "This regular expression example was made in December 6,  2019.";
console.log(txt.match(/\b\w{4}\b/gi));

// find the substring that length is 4, and i want only find digits :
console.log(txt.match(/\d{4}/g));

// find the substring that lenghtis 4, and i want only find string without digits :
console.log(txt.match(/\b\w\D{4}\b/g));

// only digits
console.log(txt.match(/\d{4}/g));

// find digits values that length it may be 1,2,3,4 :
console.log(txt.match(/\d{1,4}/g));

txt = "This regular expression example was made in December 6,  2019.";
console.log(txt.match(/^This/g));
ans = txt.match(/[^A-Za-z,.]+/g);
console.log(ans);

// ^ indicate starting and $ ending :
pattern = /^[A-Z][a-z]{3,12}$/;
let name = "Asabeneh";
console.log(pattern.test(name));

//? ================================================================
//* Exercise :

text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

//   extract 3 numberic values from text with one word :
// calculate total income of person :
let digits = text.match(/\d+/g);
// console.log(digits)
let [salaryPerMonth, annualBonus, coursesPerMonth] = digits;
salaryPerMonth = parseInt(salaryPerMonth * 12);
coursesPerMonth = parseInt(coursesPerMonth * 12);

let totalIncome = salaryPerMonth + coursesPerMonth + parseInt(annualBonus);
console.log(totalIncome);

//* write a pattern which indentify if a string is a valid javascript variable :
let isValidVariableName = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

console.log(isValidVariableName.test("validName"));
// in pattern it return true when you declare true conditions in pattern/^values$/
// values daalo in pattern jo nahi hoga vo automatic false hoga and match hoga to vo automatic true ho jayega :

//* find distance :
let points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
let sortedPoints = [];
// convert each value string to int
for (let temp of points) {
  sortedPoints.push(parseInt(temp));
}
// console.log(sortedPoints)
sortedPoints.sort((a, b) => {
  return a - b;
});
// after sorting :
console.log(sortedPoints);
// find distance of range :
let min = sortedPoints[0];
let max = sortedPoints[sortedPoints.length - 1];
console.log(`distance between ${max - min}`);

//*  question is find out tenMostFrequentWords from a string :
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
// remove . in paragraph :
paragraph = paragraph.replace(/[^a-z]+/gi, " ");
paragraph = paragraph.replace(/\./g, "");
paragraph = paragraph.split(" ");
let frequency = {};

// after finding value :
paragraph.forEach((word) => {
  frequency[word] = (frequency[word] || 0) + 1;
});
console.log(frequency);

ans = Object.entries(frequency).sort((a, b) => {
  return b[1] - a[1];
});
for (let i = 0; i < 10; i++) {
  console.log(ans[i]);
}

//? ==============================================================

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

// clean the text :
sentence = sentence.replace(/[%$@&#;?!.,]/g, "");
sentence = sentence.split(" ");
// count three mmost frequent word in string :
frequency = {};
// count whole word :
sentence.forEach((a) => {
  frequency[a] = (frequency[a] || 0) + 1;
});
console.log(frequency);

// sort the descending order :
ans = Object.entries(frequency).sort((a, b) => {
  return b[1] - a[1];
});

// find most three frequent word :
for(let i=0;i<3;i++){
    console.log(ans[i])
}

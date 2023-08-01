// // in this article we practise the looping question and concept :
// // Normal for loops :
// // while loops:
// // do while loops :
// // for of loops :
// // break :
// // continue :

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// const mernStack = ["MongoDB", "Express", "React", "Node"];

// //0 to 10 iterate
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// // 10 to 0 iterate
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 10);

// // 0 to n :
// let n = 12;
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

// // write a pattern  :
// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

// // write a pattern of table :
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} X ${i} = ${i * i}`);
// }

// // write a pattern :
// console.log("i    i^2    i^3");
// console.log("------------------");
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}    ${i ** 2}    ${i ** 3}`);
// }

// // access even number between 0 to 100 :
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// // access odd number between 0 to 100 :
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// // access prime number 0 to 100 :
// // what is prime number :
// // divisable by 1 and it self other wise no divisable any number it's called prime number :
// // logic :

// // if given number is prime number or not :
// function isprime(num) {
//   if (num <= 1) {
//     return false;
//     // prime number only have in positive number and greather than 1 :
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isprime());

// // iterate 0 to 100 and print only prime number :
// let prime = [];
// for (let i = 0; i <= 100; i++) {
//   if (isprime(i)) {
//     prime.push(i);
//   }
// }
// console.log(prime);

// // sum of number between 0 to 100 :
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// // sum of even number :
// let even = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     even += i;
//   }
// }
// console.log(even);

// // sum of odd number :
// let odd = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     odd += i;
//   }
// }
// console.log(odd);
// let evenOdd = [even, odd];
// console.log(evenOdd);

// // generat array of 5 random number :
// let random = [];
// for (let i = 0; i <= 5; i++) {
//   random.push(Math.floor(Math.random() * (100 - 0 + 1) + 0));
// }
// console.log(random);

// // generate the array of 5 numbers but number is unique not reapeat :
// let uniqueRandom = [];
// for (let i = 0; i <= 5; i++) {
//    let random=(Math.floor(Math.random() * (100 - 0 + 1) + 0));
//    if(!uniqueRandom.includes(random)){
//     uniqueRandom.push(random)
//    }
// }
// console.log(uniqueRandom);

// // develop a small script whih generate a six characters ranodm id ;
// let characters=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// console.log(characters.length)
// let min=0,max=characters.length;
// let empty=""
// for(let i=0;i<6;i++){
//   let random=(Math.floor(Math.random()*(characters.length-1-0+1))+0)
//   empty+=characters[random];
// }
// console.log(empty)

// //  solve this question using string  not using array :
// let aToZ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// let khali=""
// let sizeOfForLoop=20
// // here sizeOfForLoop koi bhee ho sakti hain kitne bhee usko function me create kar sakte hain :
// for(let i=0;i<sizeOfForLoop;i++){
//   let random=(Math.floor(Math.random()*(aToZ.length-1-0+1))+0)
//   khali+=aToZ.charAt(random);
// }
// console.log(khali)

// // now solveing question is length means character kitne bhee generate karne hain ;
// let length=20;
// // baki ka pura code copy to copy uppar but change the length of for loop : how many times it's run :
// // ===============================================================================

// // write a script which generates a random hexadecimal number :
// let withoutCapital="abcdefABCDEF0123456789";
// let hexadecimal="#"
// let size=6;
// for(let i=0;i<6;i++){
//   let random=(Math.floor(Math.random()*(((withoutCapital.length-1)-0)+1))+0);
//   hexadecimal+=withoutCapital.charAt(random)
// }
// console.log("'"+hexadecimal+"'")

// // =================================================================================

// // write a script which generates a random rgb color number  :
// let rgb=[]
// for(let i=0;i<3;i++){
//   let random=(Math.floor(Math.random()*((255-0)+1)))+0;
//   rgb.push(random)
// }
// console.log(rgb)
// console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)

// // ==================================================================
// // write a code to get all string to uppercase :
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// console.log(countries)
// // just print by using console.log:
// // but i want to operation on to uppercase so perform by using loop ;
// for(let i=0;i<countries.length;i++){
//   console.log(countries[i].toUpperCase())

// }

// //==========================================================================
// // using the above countries array and create an array for countries length :
// let deshLength=[]
// for(let i=0;i<countries.length;i++){
//    deshLength.push(countries[i].length)
// }
// console.log(deshLength)

//===========================================================================
// let pattern=[]
// for(let i=0;i<countries.length;i++){
//   pattern.push([countries[i],countries[i].slice(0,3).toUpperCase(),countries[i].length])
// }
// console.log(pattern)

// // =============================================================================
// countries.push("Iceland")
// // countries.sort()
// let land=[]
// for(let i=0;i<countries.length;i++){
//   if(countries[i].includes("land")){
//     land.push(countries[i])
//   }
// }
// console.log(land)

// // =============================================================================
// let ia=[]
// for(let i=0;i<countries.length;i++){
//   if(countries[i].endsWith("ia")){
//     ia.push(countries[i])
//   }
// }
// console.log(ia)

// // =============================================================================
// // find biggest number of characters ;
// let max=""
// for(let i=0;i<countries.length;i++){
//   if(countries[i].length>max.length){
//     max=countries[i];
//   }
// }
// console.log(max)

// // display the country that containing only five characters :
// for(let i=0;i<countries.length;i++){
//   if(countries[i].length==5){
//     console.log(countries[i])
//   }
// }

// =================================================
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
// // find the longest word in the webTechs array :
// let max=""
// for(let i=0;i<webTechs.length;i++){
//   if(webTechs[i].length > max.length){
//     max=webTechs[i];
//   }
// }
// console.log(max)

// // ==================================================
// let pattern2=[]
// for(let i=0;i<webTechs.length;i++){
//   pattern2.push([webTechs[i],webTechs[i].length])
// }
// console.log(pattern2)

// ==================================================
// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// const lang=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// for(let name of lang){
//   console.log(name)
// }
// using for loop : it's easy :

// ===============================================================
// let mern=["MongoDB","Express","React","Node"]
// // return mern;
// let mernName=""
// for(let name of mern){
//   mernName=mernName.concat(name[0])
// }
// console.log(mernName)

// // ================================================================

// let fruit=['banana', 'orange', 'mango', 'lemon'];
// for(let i=fruit.length-1;i>=0;i--){
//   console.log(fruit[i])
// }
// =====================================================================
// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// for (let i = 0; i < fullStack.length; i++) {
//   for (let j = 0; j < fullStack[i].length; j++) {
//     console.log(fullStack[i][j]);
//   }
// }

// =============================================================

let desh = [...countries];
desh = Array.from(countries);
desh = [].concat(countries);

console.log(desh);

// ===============================================================
let sortedCountries = desh.sort();
//
webTechs.sort();
let mern = ["MongoDB", "Express", "React", "Node"];
mern.sort();

// ===============================================================

const world = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
// extract all country that containing land :
let land = [];
for (let i = 0; i < world.length; i++) {
  if (world[i].includes("land")) {
    land.push(world[i]);
  }
}
console.log(land);

// find the country containing the highest number of characters in the world array :
let max = "";
let index=0;
for (let i = 0; i < world.length; i++) {
  if (world[i].length > max.length) {
    max = world[i];
    index=i;
  }
}
console.log(max,index)
console.log(world[32])

// extract all the countries containing only four characters from the world array :
let four=[]
for(let i=0;i<world.length;i++){
  if(world[i].length==4){
    four.push(world[i])
  }
}
console.log(four)

// extract all countries tow or more words containing :
let twoOrMore=[]
for(let i=0;i<world.length;i++){
  if(world[i].length>=2){
    twoOrMore.push(world[i])
  }
}
console.log(twoOrMore)
console.log(twoOrMore.length)

// reverse the world array and capitalize each country and stored it as anarryay ;:
let reverseNcapitalize=[]
for(let i=world.length-1;i>=0;i--){
  reverseNcapitalize.push(world[i].toUpperCase())
}
console.log(reverseNcapitalize)

// i complete all the lessons and Exercise of looop  ;


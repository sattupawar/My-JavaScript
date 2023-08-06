// we human give or receive a promise to do some activity at some point in time
// A promise is a way to handle asynchronous operations in javascript :
// asynchronous methods returns a  promise to supply the value at some point in the future

//* A promise is in one of these states :
// pending : initial state,neither fulfilled nor rejected
// fulfilled : operations completed successfully
// rejected : operations is failed :

// a pending promise can either successfully fulfilled or rejected with a reason or error :

// Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained :

//? ==================================================

//* Callbacks :
// to understand promise very well, let use understand callback first
// callbacks function take two parameter
// err and result :
// if err parameter is false, there will not be error otherwise it will return an error :

//exercise :
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// fetch(countriesAPI)
//   .then((Response) => Response.json())
//   .then((data) => {
//     data.forEach((country) => {
//       console.log(`country Name :${country.name}`);
//       console.log(`capital :${country.capital}`);
//       console.log(`population :${country.population}`)
//       console.log(`Area :${country.area}`)
//     });
//   })
//   .catch((error) => console.error(error));

// fetch(catsAPI)
//   .then((Respons) => Respons.json())
//   .then((data) => {
//     let names = [];
//     data.forEach((value) => {
//       names.push(value);
//     });
//     console.log(names.length)
//   })
//   .catch((Error) => console.error(Error));

// baki hain :
//   fetch(catsAPI)
//   .then((Respons) => Respons.json())
//   .then((data) => {
//     let avgWeight = [];
//     data.forEach((value) => {
//       avgWeight.push(value.weight);
//     });
//     console.log(avgWeight)
//   })
//   .catch((Error) => console.error(Error));

//*concepts :

// promise:

// callbacks:
// promise constructor :
//? fetch api : ok
// async and await :

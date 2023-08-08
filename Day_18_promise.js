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

//===============================================================
//*concepts :

//todo : promise:

// call api,if it respone execute .then or it error it execute .catch()
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let data = { message: "Data feteched successfully!" };
//     resolve(data);
//   }, 3000);
// });
// promise.then((data) => {
//   console.log(data);
// });

// //=============================================================

// let promiseOne = new Promise(function (resolve, reject) {
//   // Do an async task:
//   // DB calls , cryptography, netowrk :

//   setTimeout(function () {
//     console.log("Async tak is complete");
//     resolve();
//   }, 2000);
// });
// promiseOne.then(function () {
//   console.log("promise consume");
// });
// promiseOne.catch(() => {
//   console.log("it's not consume");
// });
// // here we store the value in promiseOne:

// // see secound example :
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2");
//     resolve();
//   }, 3000);
// }).then(() => {
//   console.log("Async task resolve");
// });

// // see third example :

// let promiseThird = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Chai" });
//   }, 3000);
// });
// promiseThird.then((data) => {
//   console.log(data);
// });

// see four example :

// let promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (error) {
//       resolve({ username: "hitesh", password: 123 });
//     } else {
//       reject("ERROR : something went wrong.");
//     }
//   }, 1000);
// });
// promiseFour.then((data) => {
//   console.log(data);
//   return data.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((data) => {
//   console.log(data);
// }).finally(()=>{
//     console.log("The promise is either resolve or rejected")
// })

// // here note finally is default work , promise either resolve or reject but finally execute each time after task completion ;

// see fifth example :

// let promiseFifth = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "hitesh", password: 123 });
//     } else {
//       reject("ERROR : something went wrong.");
//     }
//   }, 1000);
// });

// // promise is an object :
// // async wait for answer :
// async function consumePromise() {
//   try {
//     let response = await promiseFifth;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromise();
// the problme in async is not handle error
// but .then and .catch handle value and error :
// but if you handle the error : use in async try and catch to handle the error

// see sixth example ;
// fetch the countriesAPI ;
// async function fetchCountry() {
//   try {
//     let response = await fetch("https://restcountries.com/v2/all");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("something went wrrong", error);
//   }
// }
// fetchCountry();

// using above function using .then .catch

// let promiseSeven = new Promise((resolve, reject) => {
//   let data = fetch("https://restcountries.com/v2/all");
//   resolve(data);
// });
// promiseSeven
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("some thing went wrong", error);
//   });

// above code alternative :
fetch("https://restcountries.com/v2/all")
  .then((respone) => {
    return respone.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("something  went wrong :", error);
  });

  

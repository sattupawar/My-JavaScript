// what is scope :
// we declare a variable to store different data types.
// a variable can be declared at different scope.
// how work socpe in this code file :
// variable can declare locally and globally.

//* Anything declared wihtout var,let or const is scoped at global level. let's understand  through code :
a = "Javascript";
b = "python";
// here a and b variable is global scope because they declare without let const and var.
// use a and b in function :
function accessAandBValue() {
  if (true) {
    console.log(`${a} and ${b}`);
  }
}
accessAandBValue();
// here you see function access a and b :
// global variable we can use everywhere in file :

// example 2 :
let food = "Mango"; // food is global variable
let vagetables = "tomato"; // vagetables is also global variable

function foodAndVagetables() {
  if (true) {
    console.log(food + " " + vagetables);
  }
}
foodAndVagetables();
// here food and vagetable it's global variable so it's accessible.

//* A variable declared as local can be accessed only in certain block of code.
//* we can not acces globally in any function or any block of code:
// whenver you declared a variable in function, so that variable we can't access outside function.
// let's understand how work:

let bike = "passionPro";
let car = "bmw";
// here bike and car is global variable, we can acces everywher in this file:

// function scope :
function bikeAndCar() {
  console.log(bike + " " + car);
  let value = false; // focus, here declare a local variable so we can access only within this function.

  // block scope :
  if (true) {
    // if we declare a variable in block scope or if block
    // we can not access this variable outside if block
    // let's see how work :
    let a = "python";
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
    // access local variable :
    console.log(a, b, c, d);
  }
  //   we cant access a,b,c,d variable values here let'see:
  //   console.log(a, b, c, d);
  //   so here program given me error : c is not defined
  // so local variable or block scope variable we can't access out of block or function:
}
bikeAndCar();
// remember we declare global variable : bike and car :
// we can access because it's global variable , it's not decalred any function or scope:
console.log(bike + " " + car);
// Now you understand scope.
// you know about function and block scope :
// function == normal function:
// block scope = if block,loop block, or any code block within curly braces {}.

//* A variable declared with var -> only scoped to function ,not access outside function, let's see following code.
function check() {
  var pi = 21;
  console.log(pi);
}
check();

// so when you declare variable within block using with var , u access this variable globally.
// checkout following code and understand :
if (true) {
  var dog = "jarmen suffer";
  console.log(dog);
}
console.log(dog);

// console.log(pi);
// above code , return a error: pi is not defined.
// because pi defined within function not outside function.

//* varibled declared with let or const is block scope ( function ,if,loop,within curly braces{}).

// in local and global scope , let and const are the same.
// diff between only reassignning.
// we can not change : const 
// let changable.


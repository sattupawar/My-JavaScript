//* exercise ;

// create an animal class
class Animal {
  // class have name ,age,color,legs properties,
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  // create different methods :
  AnimalInfo() {
    let info = ` Name : ${this.name}\n Age : ${this.age},\n Color : ${this.color},\n Legs : ${this.legs},\n Gender : ${this.gender}`;
    return info;
  }
}

// create a Dog and Cat child class from the Animal class :

class Dog extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }
}
class Cat extends Animal {}

let dog1 = new Dog("tonny", 10, "black", 4);
dog1.gender = "he";
console.log(dog1.AnimalInfo());

// override the method you create in animal class :
// dog1=new Dog("tonny",10,"black",4,'He')
// console.log(dog1.AnimalInfo())

//?=============================================================================

class stat {
  constructor(ages) {
    this.ages = ages;
  }
  //   methods count to the how many elements contain ages array :
  count() {
    return this.ages.length;
  }

  //   return sum of ages array :
  sum() {
    let count = 0;
    this.ages.forEach((e) => {
      count += e;
    });
    return count;
  }

  //   get min value :
  min() {
    return this.ages[0];
  }

  //   get max value in ages array ;
  max() {
    return this.ages[this.ages.length - 1];
  }

  //   range in ages :
  range() {
    return this.max() - this.min();
  }

  //   calculate mean :
  mean() {
    return Math.round(this.sum() / this.count());
  }

  //   calulate median :
  median() {
    let first = this.ages[Math.floor((this.count() - 1) / 2)];
    let secound = this.ages[Math.ceil((this.count() - 1) / 2)];
    let ans =
      this.count() % 2 != 0
        ? this.ages[Math.floor(this.count() / 2)]
        : (first + secound) / 2;

    return ans;
  }

  //   calcualte mode :
  mode() {
    let empty = {};
    this.ages.forEach((a) => {
      empty[a] = (empty[a] || 0) + 1;
    });
    let array = Object.entries(empty);
    array.sort((a, b) => {
      return b[1] - a[1];
    });

    return `(${array[0][0]},${array[0][1]})`;
  }

  //   calculate variance :
  variance() {
    // first ge the mean :
    let myMean = this.mean();
    let tempArray = [...this.ages];
    let subtract = [];
    // subtract each value by means
    tempArray.forEach((a) => {
      subtract.push(a - myMean);
    });
    // squre of subtract values :
    let squre = [];
    subtract.forEach((a) => {
      squre.push(a * a);
    });
    // calculate the mean of square
    let temp = new stat(squre);
    return Math.round(temp.sum() / temp.count());
  }

  //   calculate standard daviation :
  standardDeviation() {
    return Math.sqrt(this.variance()).toFixed(1);
  }
}
let ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
ages.sort((a, b) => {
  return a - b;
});
let statistics = new stat(ages);
console.log(statistics.count());
console.log(statistics.sum());
console.log(statistics.min());
console.log(statistics.max());
console.log(statistics.range());
console.log(statistics.mean());
console.log(statistics.median());
let median = [75, 78, 85, 88, 90, 92, 92];
let check = new stat(median);
console.log(check.median());
console.log(check.count());
console.log(check.mode());
console.log(statistics.mode());
console.log(statistics.variance());
console.log(check.variance());
console.log(statistics.standardDeviation());

// ?========================================================================================

class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.incomes = incomes),
      (this.expenses = expenses);
  }
  totalIncome() {
    return this.incomes;
  }
  totalExpenses() {
    return this.expenses;
  }
  accountInfo() {
    return `${this.firstName} ${this.lastName}`;
  }
  addIncome(description, income) {
    return (this.incomes += income);
  }
  addExpenses(description, expenses) {
    return (this.expenses += expenses);
  }
  accountBalance() {
    return this.totalIncome() - this.totalExpenses();
  }
}
let student = new PersonAccount("satyam", "pawar", 1000, 500);
student.addIncome("salary", 300);
student.addExpenses("normalExpenses", 100);

console.log(student.accountBalance());

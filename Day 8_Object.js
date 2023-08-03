<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
  <script>
    //* Object :

    // in real life:
    // everything can be an object
    // object do have properties
    // properties have values
    // so an object is key value pair.

    // real life example :
    // car : car is obejct :
    // properties : weight, color, company, launching date, price,speed,seater
    // this properties have values : so car is an object.

    // let's work with object:

    //* creating empty obejct :
    const person = {};

    //* creating object with values :
    person.firstName = "satyam";
    person.lastName = "pawar";
    console.log(person);

    let dog = {
      name: "golly",
      legs: 4,
      gender: "male",
      barkOrNot: function () {
        return `${this.name} is barking`;
      },
    };
    console.log(dog);

    //* getting values from an object :
    // 1 using. and [] bracket:

    let dogLegs = dog.legs;
    console.log(dogLegs);
    let dogName = dog["name"];
    console.log(dogName);
    console.log(dog.barkOrNot());

    //* object methods:
    // create a function inside object, it's called methods:
    // in function this keyword refers to the object itself.
    // we can use the word this to access the values of different properties of the object.
    // but we can not use arrow function as object methods.
    //

    //* setting new key or add a new key in object :
    // we have person obejct : in person obejct add age and gender key :
    person.age = 21;
    person.marridge = false;
    console.log(person);

    //* add a method in object:
    person.getFullName = function () {
      return `${this.firstName} is 21 years old male, and he is not marridge.`;
    };
    console.log(person.getFullName());

    //* copy object without modifying original object :
    console.log(person);
    // now person as obejct copy to satyam data object :
    let satyamData = Object.assign({}, person);
    console.log(satyamData);

    //* getting object key: you want only key not their values : access keys from object :
    // using object.keys() access keys of an object as array.

    console.log(Object.keys(person));
    person.address = {
      area: "godadara",
      society: "kesharbhavani",
      city: "surat",
    };
    console.log(Object.keys(person.address));

    //* getting object values, when you want object values or extract values from objet "
    // using object.values() as an array;
    console.log(Object.values(person));
    console.log(Object.values(person.address));

    //* when you want to extract both keys and values ,
    // using object.entries()
    console.log(Object.entries(person));

    //* when you want check property exit or not in obejct :
    // by using hasOwnProperty()
    console.log(person.hasOwnProperty("firstName"));
    console.log(person.hasOwnProperty("address"));

    // complete basics of object :
    //todo : Exercises :
    // ==================================================================================

    // 1:ocreate an empty object calle dog:
    let horse = {};
    console.log(horse);
    horse.name = "tonny";
    horse.legs = 4;
    horse.color = "brown";
    horse.age = 21;
    horse.run = "very fast";
    horse.bark = function () {
      return `woof woof`;
    };
    console.log(horse.name);
    console.log(horse.legs);
    console.log(horse.color);
    console.log(horse.age);
    console.log(horse.bark());

    horse.breed = "breed";
    horse.geDogInfo = function () {
      return `${this.name} is fast runner.`;
    };
    // ==================================================================================

    // 2. find the perso who has many skills in the user object :
    const users = {
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
      Brook: {
        email: "daniel@daniel.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50,
      },
      Daniel: {
        email: "daniel@alex.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40,
      },
      John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50,
      },
      Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40,
      },
      Paul: {
        email: "paul@paul.com",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "MongoDB",
          "Express",
          "React",
          "Node",
        ],
        age: 20,
        isLoggedIn: false,
        points: 40,
      },
    };

    //* find person who has many skills in the user object:
    let who = "";
    let max = 0;

    for (let person in users) {
      let skills = users[person].skills;
      if (skills.length > max) {
        who = person;
        max = skills.length;
      }
    }
    console.log(who);
    // ==================================================================================

    //* count users having greater than equal to 50 points :
    let count = 0;
    for (let perosn in users) {
      if (users[perosn].points >= 50) {
        count++;
      }
    }
    console.log(count);
    // ==================================================================================

    //* find people who are MERN stack developer from the users object :
    for (let person in users) {
      if (
        users[person].skills.includes("MongoDB", "Express", "React", "Node")
      ) {
        console.log(person);
      }
    }

    // ==================================================================================

    //* set your name in the suers object without modifying the original users object :
    // copyt the object .
    let copy = Object.assign({}, users);
    copy.sattu = {
      email: "satyampawar0070@gmail.com",
      skills: ["html", "css"],
      age: 21,
      isLoggedIn: true,
      points: 90,
    };
    // console.log(users)
    console.log(copy);
    console.log(users);

    //* get all keys or properties of users object :
    console.log(Object.keys(users));
    console.log(Object.keys(copy));

    console.log(Object.keys(users));
    console.log(Object.entries(users));

    //* get all valeus of users obejct :
    console.log(Object.values(users));

    // ==================================================================================

    //* user the countries obejct to print a country naem , capital, populations and languages:
    let country = {
      name: "India",
      capital: "delhi",
      populations: "130 billions",
      language: "hindi",
    };

    let values = Object.values(country);
    for (let desh of values) {
      console.log(desh);
    }
    // ==================================================================================

    let personAccount = {
      firstName: "sattu",
      lastName: "pawar",
      incomes: [],
      expenses: [],
      totalIncome: function () {
        let sum = 0;
        for (let earn of this.incomes) {
          sum += earn;
        }
        return sum;
      },
      totalExpense: function () {
        let sum = 0;
        for (let pay of this.expenses) {
          sum += pay;
        }
        return sum;
      },
      accountInfo: function () {
        return `${this.firstName} ${
          this.lastName
        } has money ${this.accountBalance()} rupees.`;
      },
      addIncome: function (values) {
        return this.incomes.push(values);
      },
      addExpense: function (values) {
        return this.expenses.push(values);
      },
      accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
      },
    };

    personAccount.addIncome(500);
    personAccount.addExpense(200);
    personAccount.addIncome(2000);
    console.log(personAccount.accountInfo());
    // ==================================================================================
    // Questions :
    const customers = [
      {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
      },
      {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
      },
      {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
      },
      {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
      },
      {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
      },
    ];

    const products = [
      {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
          { userId: "fg12cy", rate: 5 },
          { userId: "zwf8md", rate: 4.5 },
        ],
        likes: [],
      },
      {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
      },
      {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
      },
    ];
    // create a function called SignUp which allows user to add to the collection. if user exist inform the user that he was already an account.

    function signUp(user) {
      for (let i = 0; i < customers.length; i++) {
        if (customers[i].username == user) {
          return `${user} has already account.`;
        }
      }
      return `${user} don't have account if you want need to sign in your account.`;
    }
    console.log(signUp("Alex"));

    // baki hain : create a function called sign in allow to sing in to the application:

    // ================================================================================

    // create a function called rateProduct,which rates the product:
    // rate the product :
    function rateProduct(product, userId, rate) {
      for (let i = 0; i < products.length; i++) {
        if (products[i].name == product) {
          products[i].ratings.push({ userId, rate });
        }
      }
    }
    console.log(products);
    rateProduct("TV", "sattu137", 5);
    console.log(products);

    // create a function called averageRating which calculate the average rating of a product:
    function averageRating(product) {
      let total = 0;
      let j = 0;
      let i = 0;
      let length = 0;
      for (; i < products.length; i++) {
        if (products[i].name == product) {
          for (; j < products[i].ratings.length; j++) {
            length = products[i].ratings.length;
            total += products[i].ratings[j].rate;
          }
        }
      }
      return `average rating of ${product} is ${total / length}.`;
    }
    console.log(averageRating("mobile phone"));

    // create a function called likeProduct.
    // this function will helps to like to the product:
    // if it is not liked
    // remove like if it was liked:

    function likeProduct(userid, product) {
      for (let i = 0; i < products.length; i++) {
        if (products[i].name == product) {
          if (!products[i].likes.includes(userid)) {
            products[i].likes.push(userid);
          } else {
            let index = products[i].likes.indexOf(userid);
            products[i].likes.splice(index, 1);
          }
        }
      }
    }

    likeProduct("krunal", "TV"); // first time like because don't like product
    likeProduct("krunal", "TV"); // already like so remove like;
    console.log(products);
  </script>
</html>

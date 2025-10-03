// const container = document.querySelector("body");

// // para
// const para = document.createElement("p");
// para.style.color = "red";
// para.textContent = "Hey I'm red!";
// container.appendChild(para);

// // h3
// const h3 = document.createElement("h3");
// h3.style.color = "blue";
// h3.textContent = "I'm a blue h3!";
// container.appendChild(h3);

// // div
// const div = document.createElement("div");
// div.style.backgroundColor = "pink";
// div.style.border = "2px solid black";

// const h1 = document.createElement("h1");
// h1.textContent = "I'm in a div";
// const para2 = document.createElement("p");
// para2.textContent = "ME TOO!";
// container.appendChild(div);
// div.appendChild(h1);
// div.appendChild(para2);

// function Book(title, author, pages, read) {
//     if (!new.target) {
//         throw Error("ERROR! Use the new operator.");
//     }
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//         return `${title} by ${author}, ${pages} pages, ${read}`;
//     };
// }

// const book = new Book("The Hobbit", "J.K.K Tolkien", 295, "not read yet");

// const module = (() => {
//     console.log("module says");

//     const test = () => {
//         console.log("test");
//     }
//     return {
//         test,
//     }
// })();

// const start = (() => {
//     console.log("start");
//     module.test();
// })();

// class Person {
//     constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }
//     get details() {
//         return `${this.name} is ${this.age} years old, and from ${this.country}`;
//     }
// }

// p1 = new Person("Jerry", 21, "USA");
// p2 = new Person("James", 17, "MEXICO");

// class Rectangle {
//     static #PERIMETER_MULTIPLIER = 2;

//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     get area() {
//         return this.width * this.height;
//     }
//     get perimeter() {
//         return (this.width + this.height) * Rectangle.#PERIMETER_MULTIPLIER;
//     }
// }

// r1 = new Rectangle(2, 5);

// class Vehicle {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     showDetails() {
//         console.log(this.make);
//         console.log(this.model);
//         console.log(this.year);
//     }
// }

// class Car extends Vehicle {
//     constructor(make, model, year, doors) {
//         super(make, model, year);
//         this.doors = doors;
//     }
//     showDetails() {
//         super.showDetails();
//         console.log(this.doors);
//     }
// }

// car = new Car("Honda", "v8", 2023, 5);

class BankAccount {
    #amt = null;
    constructor(amt) {
        this.#amt = amt;
    }
    deposit(amt) {
        this.#amt += amt;
    }
    withdraw(amt) {
        this.#amt -= amt;
    }
}

b = new BankAccount(200);
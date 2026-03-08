// Variables
const name = "Nanni";
age = 24;

console.log("My name is " + name + "i am " + age);

console.log(`My name is 4 ${name} i am ${age}`);

console.log("Length", name.length);
console.log("Upper Case", name.toUpperCase());
console.log("divide Case", name.substring(0, 3));
console.log("Split", name.split(""));

// Array
const users = ["Nanni", "Nanni1", "Nanni 2"];

users.push("nanni");

users.unshift("nanni0");

users.pop();
console.log('users.indexOf("nanni"): ', users.indexOf("nanni0"));
console.log(users);

// Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  skills: ["HTML", "CSS", "JS", "React JS"],
  address: {
    no: 3,
    street: "AV Coloney, Thannerkulam",
    district: "Thiruvallur",
  },
};

console.log(person.address.district);
const {
  firstName,
  lastName,
  age: userAge,
  skills,
  address: { no, street, district },
} = person;

console.log(street);
console.log(JSON.stringify(person));

// Loops

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

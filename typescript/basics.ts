console.log("Hello");
let userName: string;

userName = "Nanni";

// let users: (string | number)[];
let users: Array<string | number>;

users = ["Nanni", 10];

let tubles: [number, number];
tubles = [5, 10];

const value: {} = {};

let data: Record<string, string | number>; // Record => {} 1st value is key trype 2nd is value type

data = {
  user: "Nanni",
  age: 24,
};

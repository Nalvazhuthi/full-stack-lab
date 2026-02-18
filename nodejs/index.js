// Common Js
// const { generateRandom, celsiusToFahrenheit } = require("./utils.js")

// console.log("Random Number", generateRandom())
// console.log("Celsius To Fahrenheit", celsiusToFahrenheit(20))


// Module
import { getPosts, getPostsLength } from "./postController.js";

console.log('Posts: ', getPosts());
console.log('Post Length: ', getPostsLength());
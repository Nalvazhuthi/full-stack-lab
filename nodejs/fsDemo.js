import fs from 'fs/promises'

// fs.readFile("./docs/textFile1.txt", 'utf-8', (err, data) => {
//     console.log(data);
// })

// readFileSync -> Synchronous version
// const data = fs.readFileSync("./docs/textFile1.txt", 'utf-8')
// console.log(data);

// readFile() -> promise.then
fs.readFile("./docs/textFile1.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

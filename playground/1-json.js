const fs = require("fs");

// const book = {
//     title : "Ego is the Enemy",
//     author:  "Ryan Holiday"
// }

// const bookJson = JSON.stringify(book);

// // console.log(bookJson);

// // const parsedData = JSON.parse(bookJson);

// // console.log(parsedData);

// fs.writeFileSync("1-json.json", bookJson);

// const dataBuffer = fs.readFileSync("1-json.json");

// const dataJSON = dataBuffer.toString();

// const data = JSON.parse(dataJSON);

// console.log(data.title);

const name = fs.readFileSync("./1-json.json");
const name_buffer = name.toString();
const dataMe = JSON.parse(name_buffer);

dataMe.name = "Gisi";

dataMe.age = 23;

const data_string = JSON.stringify(dataMe);

fs.writeFileSync("./1-json.json", data_string);
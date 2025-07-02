// fs.js
const fs = require("fs");

console.log("start");
// 1. 비동기방식.
// fs.readFile("./sample/output.log", "utf8", () => {
//   if(err){
//      throw error;
//  }
//  console.log(data);
// }); //
//2. 동기방식.
// let data = fs.readFileSync("./sample/output.log", "utf-8");
// console.log(data);
// console.log("end");

fs.writeFile("./smaple/write.txt", "글쓰기..", "utf8", (err) => {
  if (err) {
    throw err;
  }
  console.log("쓰기완료");
});
console.log("end");

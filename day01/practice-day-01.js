// // const fs = require("fs");

// // // blocking
// // console.log("before blocking code");
// // const data = fs.readFileSync("data.txt", "utf8");
// // console.log(data);
// // console.log("after blocking code");

// // //non-blocking code

// // console.log("before none blocking code ");
// // fs.readFile("data.txt", "utf8", (err, data) => {
// //   console.log(data);
// // });
// // console.log("after none blocking code");

// // // modern style with async

// // const rs = require("fs/promises");

// // console.log("before modern style");

// // async function run() {
// //   const data = await rs.readFile("data.txt", "utf8");
// //   console.log(data);
// // }

// // run();

// // console.log("after modern style");

// // Core Modules fs, path, http in Node.js

// // fs Module (File System)

// const fs = require("fs");

// const fn = () => {
//   return "this is function into a bordam";
// };

// fs.writeFile("data1.txt", fn(), () => {
//   console.log("hell0");
// });

// fs.readFile("data.txt", "utf8", (err, data) => {
//   console.log("data:::::::===>", data);
// });

// const dataForAppend = () => {
//   return "\nthis is append wors";
// };

// const prakash = () => {
//   console.log("file append");
// };

// fs.appendFile("data.txt", dataForAppend(), prakash);

// path Module

// const path = require("path");

// const filePath = path.join(__dirname, "data.txt");

// console.log("filePath::::", filePath);

// const dirName = path.dirname(
//   "C:\Users\Windows 10\OneDrive\Desktop\Preprations\NodeJs-Pratice\data.file",
// );

// console.log("dirName:::===>", dirName);

// // reading file content of inside a file

// const fs = require("fs");

// fs.readFile(
//   "C:\\Users\\Windows 10\\OneDrive\\Desktop\\electricity bill.pdf",
//   "utf8",
//   (data, err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     console.log(data);
//   },
// );

// fs.appendFile(
//   "C:\\Users\\Windows 10\\OneDrive\\Desktop\\hdfce Ci.txt",
//   "\nName:Prakash Deep Sharma",
//   () => {},
// );

// console.log(process.env.BRO);
// console.log(process.cwd());
// console.log(process.exit(1));
console.log(process.pid);
console.log(process.platform);

console.log(process.memoryUsage());

process.on("exit", () => {
  console.log("App closed");
});

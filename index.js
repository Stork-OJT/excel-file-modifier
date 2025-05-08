import xlsx from "node-xlsx";
import fs from "fs";

const fileURL = new URL("./empty.xlsx", import.meta.url);
const worksheet = xlsx.parse(fs.readFileSync(fileURL));
console.log(fileURL);
const sheet = worksheet[0].name;
console.log(sheet);
const data = [
  ["Yrvihn Bargola", 20],
  ["Powpow", 19],
];

const buffer = xlsx.build([{ name: sheet, data: data }]);

console.log(data);

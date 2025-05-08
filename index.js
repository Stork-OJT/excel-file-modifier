import xlsx from "node-xlsx";
import fs from "fs";

const fileURL = new URL("./empty.xlsx", import.meta.url);
const worksheet = xlsx.parse(fs.readFileSync(fileURL));

const sheet = worksheet[0].name;

const data = [
  ["Name", "Age"],
  ["Yrvihn Bargola", 20],
  ["Vinnn", 19],
];

const buffer = xlsx.build([{ name: sheet, data: data }]);

console.log(sheet);

fs.writeFileSync(fileURL, buffer);

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

const sheetOptions = {
  "!cols": [{ wch: 20 }, { wch: 7 }, { wch: 10 }, { wch: 20 }],
};
const buffer = xlsx.build([{ name: sheet, data: data }], { sheetOptions });

//console.log();

fs.writeFileSync(fileURL, buffer);

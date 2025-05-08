import fs from "node:fs/promises";

const fileURL = new URL("../../Tinamad.xlsx", import.meta.url);
const buffer = await fs.readFile(fileURL);

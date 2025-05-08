How to Read files in Node.js:

```javascript
// CommonJS (CJS)
const fs = require("fs");
const path = requrie("path");

const filePath = path.resolve(__dirname, "./filename.extension");
const buffer = fs.readFileSync(filePath); // Synchronously reads a file
```

Use .. to go up a directory. e.g.: '../../filename.extension'

```javascript
// ES Module (ESM)
import fs from "node:fs/promises";

const fileURL = new URL("./filename.extensiom", import.meta.url);
const buffer = await fs.readFile(fileURL); // Asynchronously reads a file
```

const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'sedot-wc-bekasi');
const dest = __dirname;

const items = fs.readdirSync(src);
for (const item of items) {
  fs.cpSync(path.join(src, item), path.join(dest, item), { recursive: true, force: true });
}
fs.rmSync(src, { recursive: true, force: true });

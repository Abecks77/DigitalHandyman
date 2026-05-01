const fs = require('fs');
const { acrmSection } = require('./acrmSource.js');

let code = fs.readFileSync('src/App.tsx', 'utf8');
const searchString = '      {/* Website Pricing Section */}';
code = code.replace(searchString, acrmSection);
fs.writeFileSync('src/App.tsx', code);
console.log('Appended ACRM Section successfully');

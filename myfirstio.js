var fs = require('fs')
var fileToBeRead = fs.readFileSync(process.argv[2]).toString();
var fileToBeRead = fileToBeRead.split('\n');
console.log(fileToBeRead.length - 1);
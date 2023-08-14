const myLib = require('./index');

// Create a file
myLib.createFile('./myFolder/example.txt', 'This is the updated content of the file.');

// Create a folder
myLib.createFolder('myFolder/childfolder');

console.log('File and folder created successfully.');

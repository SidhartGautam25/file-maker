const fs = require('fs');
const path = require('path');
const expressapp=require('./expressserver.js')

function createfile(filePath, content = '') {
    const resolvedPath = path.resolve(filePath);
    const folderPath = path.dirname(resolvedPath);
  
    if (!fs.existsSync(folderPath)) {
      // Create the folder if it doesn't exist
      fs.mkdirSync(folderPath, { recursive: true });
    }
    else if (!fs.statSync(folderPath).isDirectory()) {
        throw new Error(`${folderPath} is not a directory`);
      }
    
  
    fs.writeFileSync(resolvedPath, content, 'utf-8');
}

function createfolder(folderPath) {
  const resolvedPath = path.resolve(folderPath);
  if (!fs.existsSync(resolvedPath)) {
    fs.mkdirSync(resolvedPath);
  }
}


module.exports = {
  createfile,
  createfolder,
  expressapp,
};
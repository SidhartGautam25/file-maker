const fs = require('fs');
const path = require('path');

function expressapp(address="./",port=3000,starter="hello,how are you??") {
  const add = path.resolve(address);

  
  if (!fs.existsSync(add)) {
    fs.mkdirSync(add);
  }

  
  const code = `
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
      res.send("${starter}");
    });

    const PORT = process.env.PORT || ${port};
    app.listen(PORT, () => {
      console.log(\`Server is running on http://localhost:\${PORT}\`);
    });
  `;
  fs.writeFileSync(path.join(add, 'server.js'),code, 'utf-8');
}

module.exports = expressapp

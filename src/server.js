require('@babel/register')();

const express = require('express');
const app = express();

const render = require('./render').default;

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>first_app</title>
</head>
<body>
    <div id="root">${render()}</div>
</body>
</html>
  `)
});

app.listen(3000, () => console.log('Server is ready on 3000'));

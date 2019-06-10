const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Ola, tudo bem?');
});

app.listen(8080, () => {
  console.log('Conectado na porta 8080');
});

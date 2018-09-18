const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const messages = require('./messages.js');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/helloworld', (req, res) => {
 return res.json('Hello world!');
});

app.get('/api/messages', (req, res) => {
  return res.send({ success: true, messages });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

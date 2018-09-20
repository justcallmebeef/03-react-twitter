const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const helloController = require('./controllers/hello');
const { getMessagesController } = require('./controllers/messages');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/hello', helloController);
app.get('/api/messages', getMessagesController);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

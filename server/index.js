const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const { getMessagesController } = require('./controllers/messages');
const {
  loginController,
  signupController
} = require('./controllers/users')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/messages', getMessagesController);

app.post('/api/users/login', loginController);
app.post('/api/users/signup', signupController);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('*', (req, res, next) => {
  if (res.err) res.status(500).send({ error: res.err });
  else res.send({ data: res.data });
});

app.listen(process.env.PORT || 8080);

module.exports = app;

const knex = require('../knex');
const validator = require('validator');
const bcrypt = require('bcrypt');
// ERRORS
const ERROR_500 = 'Internal Server Error';
const INV_REQ = 'Bad Handle or Password';

const loginController = async (req, res, next) => {
  try {
    if (!req.body || !req.body.handle || !req.body.password) {
      res.err = INV_REQ;
      return next();
    }
    let user = await knex('users').where('handle', req.body.handle).then(res => res[0]);
    if (!user) {
      res.err = INV_REQ;
      return next();
    }
    let userInfo = await bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) {
        res.err = INV_REQ;
        return next();
      }
      return result;
    })

    let { handle, email, name, avatar } = user;
    res.data = { handle, email, name, avatar };
    return next();
  } catch (err) {
    return res.err = ERROR_500;
    next();
  }
};

const signupController = (req, res) => {
  res.send({ succes: true });

  //res.end()
}

module.exports = {
  loginController,
  signupController
}

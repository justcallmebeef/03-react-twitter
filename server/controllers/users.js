const knex = require('../knex');
const _ = require('lodash');
const validator = require('validator');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
// ERRORS
const ERROR_500 = 'Internal Server Error';
const INV_REQ = 'Bad Handle or Password';

const loginController = async (req, res, next) => {
  try {
    const { handle, password } = req.body;
    if (!handle || !password) return handleError(res, next, INV_REQ);

    let user = await findUserByHandle(handle);
    if (!user)  return handleError(res, next, INV_REQ);

    let passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return handleError(res, next, INV_REQ);

    delete user.password;
    res.data = user;
    return next();
  } catch (err) {
    return handleError(res, next);
  }
};

const signupController = async(req, res, next) => {
  try {
    const { handle, name, email, avatar, password } = req.body;
    if (!handle || !password || !name || !email || !validator.isEmail(email)) return handleError(res, next, INV_REQ);

    let dbUser = await Promise.all([findUserByEmail(email), findUserByHandle(handle)]);
    if (dbUser[0]) return handleError(res, next, 'Email is already in use.');
    if (dbUser[1]) return handleError(res, next, 'Handle is already in use.');

    let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    if (!hashedPassword) return handleError(res, next, INV_REQ);

    let userInfo = {
      name,
      handle,
      email,
      password: hashedPassword
    }
    if (avatar && validator.isBase64(avatar)) userInfo.avatar = avatar;

    let insertedUser = _.head(await knex('users').insert(userInfo).returning(['id', 'name', 'handle', 'email', 'avatar']));
    res.data = { user: insertedUser };
    return next();
  } catch (err) {
    return handleError(res, next);
  }
}

const handleError = (res, next, err) => {
  res.err = err || ERROR_500;
  return next();
}

const findUserByEmail = async(email) => {
  return _.head(await knex('users').where('email', email));
}

const findUserByHandle = async(handle) => {
  return _.head(await knex('users').where('handle', handle));
}

module.exports = {
  loginController,
  signupController,
  handleError,
  findUserByEmail,
  findUserByHandle
}

const knex = require('../knex');
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

    let user = await knex('users').where('handle', handle).then(res => res[0]);
    if (!user)  return handleError(res, next, INV_REQ);

    let passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return handleError(res, next, INV_REQ);

    res.data = {
      user: user.handle,
      email: user.email,
      name: user.name,
      avatar: user.avatar };
    return next();
  } catch (err) {
    return handleError(res, next);
  }
};

const signupController = async(req, res, next) => {
  try {
    const { handle, name, email, avatar, password } = req.body;
    if (!handle || !password || !name || !email || !validator.isEmail(email)) return handleError(res, next, INV_REQ);

    let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    if (!hashedPassword) return handleError(res, next, INV_REQ);

    let userInfo = {
      name,
      handle,
      email,
      password: hashedPassword
    }
    if (avatar && validator.isBase64(avatar)) userInfo.avatar = avatar;

    let insertedUser = await knex('users').insert(userInfo).returning(['name', 'handle', 'email', 'avatar']);
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

module.exports = {
  loginController,
  signupController
}

const knex = require('../knex');
const _ = require('lodash');
const { handleError, INV_REQ } = require('./utilities');

const getAllMessages = async(req, res, next) => {
  try { 
    let messages = await knex('messages')
      .join('users', 'messages.user_id', 'users.id')
      .select(['messages.id', 'messages.text', 'messages.stars', 'users.handle', 'users.id']);
    res.data = messages;
    return next();
  } catch (err) {
    return handleError(res, next);
  }
}

const getMessagesByUser = async(req, res, next) => {
  try {
    let userId = req.params.userId;
    if (!userId || isNaN(userId)) return handleError(res, next, INV_REQ);
    let messages = await knex('messages').where('user_id', userId).select(['id', 'text', 'stars']);
    res.data = messages;
    return next();
  } catch (err) {
    return handleError(res, next);
  }
}

const createMessage = async(req, res, next) => {
  try {
    let { userId, text } = req.body;
    console.log('req', req.body)
    if (!userId || !text) return handleError(res, next, INV_REQ);
    let message = _.head(await knex('messages').insert({ user_id: userId, text }).returning(['id', 'user_id', 'text']));
    res.data = message;
    return next();
  } catch (err) {
    return handleError(res, next);
  }
}

module.exports = {
    getAllMessages,
    getMessagesByUser,
    createMessage
};

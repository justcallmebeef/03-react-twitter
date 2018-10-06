const knex = require('../knex');
const _ = require('lodash');
const { handleError, INV_REQ } = require('./utilities');

const createReply = async(req, res, next) => {
  try {
    let reply = {
        user_id: req.body.userId,
        text: req.body.text, 
        message_id: req.body.message_id 
    } = req.body;
    if (req.body.reply_id) reply.replyId = req.body.reply_id;
    if (!reply.userId || !reply.text || !reply.messageId) return handleError(res, next, INV_REQ);
    
    let insertedReply = _.head(
        await knex('replies')
        .insert({ reply })
        .returning(['id', 'user_id', 'text', 'message_id', 'reply_id']));
    res.data = insertedReply;
    return next();
  } catch (err) {
      return handleError(res, next);
  }
}

module.exports = {
    createReply
}

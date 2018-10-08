const _ = require('lodash');
const knex = require('../knex');
const { handleError, INV_REQ } = require('./utilities');

const createReply = async (req, res, next) => {
  try {
    const reply = {
      user_id: req.body.userId,
      text: req.body.text,
      message_id: req.body.messageId
    };
    if (req.body.replyId) reply.reply_id = req.body.replyId;
    if (!reply.user_id || !reply.text || !reply.message_id) return handleError(res, next, INV_REQ);

    const insertedReply = _.head(
      await knex('replies')
        .insert(reply)
        .returning(['id', 'user_id', 'text', 'message_id', 'reply_id'])
    );
    res.data = insertedReply;
    return next();
  } catch (err) {
    return handleError(res, next);
  }
};

module.exports = {
  createReply
};

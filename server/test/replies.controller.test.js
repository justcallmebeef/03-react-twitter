const { assert, expect } = require('chai');
const knex = require('../knex');

const { createReply } = require('../controllers/replies');
const { INV_REQ } = require('../controllers/utilities');

const repliesToDelete = [];

const runRepliesControllerUnitTests = () => {
  describe('createReply()', () => {
    const next = () => {};
    const req = { body: {} };
    let res = {};
    let replyId;

    it('Handles missing req.body', async () => {
      await createReply(req, res, next);
      assert.equal(res.err, INV_REQ);
    });

    it('Inserts reply with userId, messageId, and text', async () => {
      req.body = {
        userId: 1,
        messageId: 1,
        text: 'Test Reply'
      };
      res = {};
      await createReply(req, res, next);
      replyId = res.data.id;
      assert.exists(replyId);
      repliesToDelete.push(replyId);
      expect(res.data).to.have.all.keys('id', 'user_id', 'message_id', 'reply_id', 'text');
      /* eslint-disable no-unused-expressions */
      expect(res.data.reply_id).to.be.null;
    });

    it('Inserts reply with userId, messageId, text, and replyId', async () => {
      req.body.replyId = replyId;
      res = {};
      await createReply(req, res, next);
      assert.exists(res.data.id);
      repliesToDelete.push(res.data.id);
      expect(res.data).to.have.all.keys('id', 'user_id', 'message_id', 'reply_id', 'text');
      expect(res.data.reply_id).equal(replyId);
    });
  });

  after(async () => {
    try {
      await knex('replies').whereIn('id', repliesToDelete).del();
    } catch (err) {
      throw new Error(`Couldn't delete test replies: ${err}`);
    }
  });
};

describe('Replies Controller Unit Tests', runRepliesControllerUnitTests);

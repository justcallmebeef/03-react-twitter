const { assert, expect } = require('chai');
const knex = require('../knex');


const { loginUser } = require('../controllers/users');
// const { createUser } = require('../controllers/users');
// const { findUserByEmail } = require('../controllers/users');
// const { findUserByHandle } = require('../controllers/users');
const { INV_REQ } = require('../controllers/utilities');

let usersToDelete = [];

const runUsersControllerUnitTests = () => {
  describe('loginUser()', () => {

    it('Handles missing req.body', async() => {
      const next = () => {};
      const req = { body: {} };
      let res = {};
      await loginUser(req, res, next);
      assert.equal(res.err, INV_REQ)
    });
  });
};


describe('Users Controller Unit Tests', runUsersControllerUnitTests);

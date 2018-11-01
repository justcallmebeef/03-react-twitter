const { assert, expect } = require('chai');
const knex = require('../knex');


const { loginUser } = require('../controllers/users');
const { createUser } = require('../controllers/users');
// const { findUserByEmail } = require('../controllers/users');
// const { findUserByHandle } = require('../controllers/users');
const { INV_REQ } = require('../controllers/utilities');

const runUsersControllerUnitTests = () => {
  describe('loginUser()', () => {

    it('Handles missing req.body', async() => {
      const next = () => {};
      const req = { body: {} };
      let res = {};
      await loginUser(req, res, next);
      assert.equal(res.err, INV_REQ)
    });

    it('doe not Log in with incorect handle and password', async() => {
      const next = () => {};
      const req = { body: {
        handle : 'janedoe',
        password : 'qwertyuiop'
      } };
      let res = {};
      let things = await loginUser(req, res, next);
      assert.equal(res.err, INV_REQ)
    });

  });

  describe('createUser()', () => {
    let usersToDelete = [];
    it('Inserts user with name, handle, email, password, bio, location, and birthday', async() => {
      const next = () => {};
      const req = { body:
        {
          name: 'Jay Doe',
          handle: 'jayedoe',
          email: 'jaydoe@gmail.com',
          password: 'drink water',
          bio: 'I do stuff and things.',
          location: 'Boulder, CO',
          birthday: '01/01/1990'
        }
      };
      let res = {};
      const usersEmail = req.body.email;
      await createUser(req, res, next);
      usersToDelete.push(res.data.id);
      expect(res.data).to.have.all.keys('id', 'name', 'handle', 'email', 'avatar', 'bio', 'location', 'birthday')
      expect(res.data.email).equal(usersEmail);
    });

    after(async() => {
      try {
        await knex('users').whereIn('id', usersToDelete).del()
      } catch (err) {
        console.log('Couldn\'t delete test users: ' + err);
      }
    });

  });
};


describe('Users Controller Unit Tests', runUsersControllerUnitTests);

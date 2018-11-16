const { assert, expect } = require('chai');
const knex = require('../knex');


const { loginUser } = require('../controllers/users');
const { createUser } = require('../controllers/users');
const { findUserByEmail } = require('../controllers/users');
const { findUserByHandle } = require('../controllers/users');
const { INV_REQ } = require('../controllers/utilities');

const runUsersControllerUnitTests = () => {

  let usersToDelete = [];

  before( async() => {
    const next = () => {};
    const req = {
      body: {
        name: 'Hay Doe',
        handle: 'hayedoe',
        email: 'haydoe@gmail.com',
        password: 'drink water',
        bio: 'I do stuff and things.',
        location: 'KANSAS CITY, MO',
        birthday: '01/01/1990'
      }
    };
    const res = {};
    try {
      await createUser(req, res, next);
      usersToDelete.push(res.data.handle);
    } catch (err) {
      console.log('Couldn\'t create test users: ' + err);
    }
  });

  describe('loginUser()', () => {

    it('Handles missing req.body', async() => {
      const next = () => {};
      const req = { body: {} };
      let res = {};
      await loginUser(req, res, next);
      assert.equal(res.err, INV_REQ)
    });

    it('Handles incorect password', async() => {
      const next = () => {};
      const req = {
        body:{
          handle : 'janedoe',
          password : 'qwertyuiop'
        }
      };
      let res = {};
      await loginUser(req, res, next);
      assert.equal(res.err, INV_REQ)
    });

    it('Logs in with handle and password', async() => {
      const next = () => {};
      const req = {
        body: {
          handle: 'hayedoe',
          password: 'drink water'
        }
      }
      let res = {};
      const exptedUserHandle = req.body.handle;
      await loginUser(req, res, next);
      expect(res.data).to.have.all.keys('id', 'name', 'handle', 'email', 'avatar', 'bio', 'location', 'birthday', 'created_at', 'updated_at')
      expect(res.data.handle).equal(exptedUserHandle);
    });

  });

  describe('createUser()', () => {

    it('Handles missing req.body', async() => {
      const next = () => {};
      const req = { body: {} };
      let res = {};
      await createUser(req, res, next);
      assert.equal(res.err, INV_REQ)
    });

    it('Handles existing handle', async() => {
      const next = () => {};
      const req = {
        body: {
          name: 'Hay Doe',
          handle: 'hayedoe',
          email: 'add@gmail.com',
          password: 'drink water',
          bio: 'I do stuff and things.',
          location: 'KANSAS CITY, MO',
          birthday: '01/01/1990'
        }
      };
      const res = {};
      await createUser(req, res, next);
      assert.equal(res.err, 'Handle is already in use.');
    });

    it('Handles existing email', async() => {
      const next = () => {};
      const req = {
        body: {
          name: 'Hay Doe',
          handle: 'yupyupyup',
          email: 'haydoe@gmail.com',
          password: 'drink water',
          bio: 'I do stuff and things.',
          location: 'KANSAS CITY, MO',
          birthday: '01/01/1990'
        }
      };
      const res = {};
      await createUser(req, res, next);
      assert.equal(res.err, 'Email is already in use.');
    });

    it('Inserts user with name, handle, email, password, bio, location, and birthday', async() => {
      const next = () => {};
      const req = {
        body: {
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
      usersToDelete.push(res.data.handle);
      expect(res.data).to.have.all.keys('id', 'name', 'handle', 'email', 'avatar', 'bio', 'location', 'birthday')
      expect(res.data.email).equal(usersEmail);
    });

  });

  describe('findUserByEmail', () => {

    it('Handles existing email', async() => {
      const email = 'haydoe@gmail.com';
      const foundUser = await findUserByEmail(email);
      expect(foundUser).to.have.all.keys('id', 'name', 'handle', 'email', 'avatar', 'bio', 'location', 'birthday', "created_at", "updated_at", "password")
      expect(foundUser.email).equal(email);
    });

  });

  describe('findUserByHandle', async() => {
    it('Handles existing hanndle', async() => {
      const handle = 'hayedoe';
      const foundUser = await findUserByHandle(handle);
      expect(foundUser).to.have.all.keys('id', 'name', 'handle', 'email', 'avatar', 'bio', 'location', 'birthday', "created_at", "updated_at", "password")
      expect(foundUser.handle).equal(handle);
    });
  });

  after( async() => {
    try {
      await knex('users').whereIn('handle', usersToDelete).del()
    } catch (err) {
      console.log('Couldn\'t delete test users: ' + err);
    }
  });
};


describe('Users Controller Unit Tests', runUsersControllerUnitTests);

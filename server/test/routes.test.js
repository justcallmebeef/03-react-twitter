
const request = require('supertest');
const app = require('../index.js');
const knex = require('../knex');
const { assert } = require('chai');

let usersToDelete = [];

describe('POST /api/users/signup', () => {
  it('handle successful signup', (done) => {
    let user = {
      name: 'Test User',
      handle: 'testUser',
      email: 'testUser@gmail.com',
      password: 'password'
    };

    request(app)
      .post('/api/users/signup')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        assert.exists(res.body.data);
        assert.isUndefined(res.body.error);
        usersToDelete.push(res.body.data.user.id);
        done();
      });
  });

  it('handle unsuccessful signup', (done) => {
    request(app)
      .post('/api/users/signup')
      .send({})
      .set('Accept', 'application/json')
      .expect(500)
      .end((err, res) => {
        assert.exists(res.body.error);
        assert.isUndefined(res.body.data);
        done();
      });
  });
});

describe('POST /api/users/login', () => {
  let loginInfo = {
    handle: 'testUser',
    password: 'password'
  };

  it('handle successful login', (done) => {
    request(app)
      .post('/api/users/login')
      .send(loginInfo)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        assert.exists(res.body.data);
        assert.isUndefined(res.body.error);
        done();
      });
  });

  it('handle unsuccessful login', (done) => {
    loginInfo.password = 'badPassword';
    request(app)
      .post('/api/users/login')
      .send(loginInfo)
      .set('Accept', 'application/json')
      .expect(500)
      .end((err, res) => {
        assert.exists(res.body.error);
        assert.isUndefined(res.body.data);
        done();
      });
  });
});

after(async() => {
  try {
    await knex('users').whereIn('id', usersToDelete).del();
  } catch (err) {
    console.log('Couldn\'t delete test user');
  }
})

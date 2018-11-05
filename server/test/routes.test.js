const { assert } = require('chai');
const request = require('supertest');
const app = require('../index.js');
const knex = require('../knex');

const usersToDelete = [];
const messagesToDelete = [];
const repliesToDelete = [];

describe('POST /api/users/signup', () => {
  it('Handles successful signup', (done) => {
    const user = {
      name: 'Test User',
      handle: 'testUser',
      email: 'testUser@gmail.com',
      password: 'password',
      bio: 'Test Bio',
      location: 'Test, Location',
      birthday: '01/01/1991'
    };

    request(app)
      .post('/api/users/signup')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        usersToDelete.push(res.body.data.id);
        assert.exists(res.body.data);
        assert.isUndefined(res.body.error);
        done();
      });
  });

  it('Handles unsuccessful signup', (done) => {
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
  const loginInfo = {
    handle: 'testUser',
    password: 'password'
  };

  it('Handles successful login', (done) => {
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

  it('Handles unsuccessful login', (done) => {
    loginInfo.password = 'badPassword';
    request(app)
      .post('/api/users/login')
      .send(loginInfo)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err, res) => {
        assert.exists(res.body.error);
        assert.isUndefined(res.body.data);
        done();
      });
  });
});

describe('GET /api/messages', () => {
  it('Handles successful get messages', (done) => {
    request(app)
      .get('/api/messages')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        assert.exists(res.body.data);
        assert.isUndefined(res.body.error);
        done();
      });
  });
});

describe('GET /api/messages/users/:userId', () => {
  it('Handles successful get messages by user', (done) => {
    request(app)
      .get('/api/messages/user/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        assert.exists(res.body.data);
        assert.isUndefined(res.body.error);
        done();
      });
  });

  it('Handles unsuccessful get messages by user', (done) => {
    request(app)
      .get('/api/messages/user/abc')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err, res) => {
        assert.exists(res.body.error);
        assert.isUndefined(res.body.data);
        done();
      });
  });
});

describe('POST /api/messages', () => {
  it('Handles successful create message', (done) => {
    request(app)
      .post('/api/messages')
      .send({ userId: 1, text: 'Here is a successful message' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        messagesToDelete.push(res.body.data.id);
        assert.exists(res.body.data);
        assert.isUndefined(res.body.error);
        done();
      });
  });

  it('handle unsuccessful create message', (done) => {
    request(app)
      .post('/api/messages')
      .send({ text: 'Here is a message missing a userId' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err, res) => {
        assert.exists(res.body.error);
        assert.isUndefined(res.body.data);
        done();
      });
  });
});

describe('POST /api/replies', () => {
  it('Handles successful create reply', (done) => {
    request(app)
      .post('/api/replies')
      .send({ userId: 1, text: 'Here is a successful reply', messageId: 1 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        repliesToDelete.push(res.body.data.id);
        assert.exists(res.body.data);
        assert.isUndefined(res.body.error);
        done();
      });
  });

  it('handle unsuccessful create reply', (done) => {
    request(app)
      .post('/api/replies')
      .send({ text: 'Here is a text missing a userId and messageId' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err, res) => {
        assert.exists(res.body.error);
        assert.isUndefined(res.body.data);
        done();
      });
  });
});

after(async () => {
  try {
    await Promise.all([
      knex('users').whereIn('id', usersToDelete).del(),
      knex('messages').whereIn('id', messagesToDelete).del(),
      knex('replies').whereIn('id', repliesToDelete).del()
    ]);
  } catch (err) {
    throw new Error('Couldn\'t delete test user and/or message');
  }
});

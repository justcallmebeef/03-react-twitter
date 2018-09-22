
const request = require('supertest');
const app = require('../index.js');
const { expect } = require('chai');

describe('POST /api/users/login', () => {
  it('respond with json', (done) => {
    request(app)
      .post('/api/users/login')
      .set('Accept', 'application/json')
      .expect('data', true)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

after(() => {

})

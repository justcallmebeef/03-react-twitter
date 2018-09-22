
const request = require('supertest');
//const express = require('express');
//
//const app = express();
const app = require('../index.js');
const { expect } = require('chai');

describe('GET /api/users/login', function() {
  it('respond with json', function(done) {
    request(app)
      .post('/api/users/login')
      .set('Accept', 'application/json')
      .expect('data', true)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

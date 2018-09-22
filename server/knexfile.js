'use strict'

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/react_twitter'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/react_twitter'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}

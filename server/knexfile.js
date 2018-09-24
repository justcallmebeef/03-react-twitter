module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/react_twitter_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/react_twitter_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

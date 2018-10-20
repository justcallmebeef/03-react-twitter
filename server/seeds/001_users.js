exports.seed = knex => knex('users').del()
  .then(() => knex('users')
    .insert([
      {
        id: 1,
        name: 'Jane Doe',
        handle: 'janedoe',
        email: 'janedoe@gmail.com',
        password: '$2b$10$M1hRH0FE1AJcqo4tT0uwkOWlnmxF6ewmWsmXW1lNhn/L7McVYnsHq', // password,
        bio: 'Artist. Juggler. React web developer.',
        location: 'Boulder, CO',
        birthday: '01/01/1990'
      },
      {
        id: 2,
        name: 'John Doe',
        handle: 'johndoe',
        email: 'johndoe@gmail.com',
        password: '$2b$10$M1hRH0FE1AJcqo4tT0uwkOWlnmxF6ewmWsmXW1lNhn/L7McVYnsHq', // password
        bio: 'I am an airline pilot who loves to visit the ends of the earth.',
        location: 'Oakland, CA',
        birthday: '12/31/1989'
      }
    ]))
  .then(() => knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users));'));

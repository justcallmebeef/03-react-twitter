
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1,
          name: 'Jane Doe',
          handle: 'janedoe',
          email: 'janedoe@gmail.com',
          password: '$2b$10$M1hRH0FE1AJcqo4tT0uwkOWlnmxF6ewmWsmXW1lNhn/L7McVYnsHq' //password
        },
        { id: 2,
          name: 'John Doe',
          handle: 'johndoe',
          email: 'johndoe@gmail.com',
          password: '$2b$10$M1hRH0FE1AJcqo4tT0uwkOWlnmxF6ewmWsmXW1lNhn/L7McVYnsHq' //password
        }
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('replies').del()
    .then(function () {
      // Inserts seed entries
      return knex('replies').insert([
          { text: 'Great tweet!', user_id: 2, message_id: 1 },
          { text: 'Powerful quote. Thanks for sharing', user_id: 2, message_id: 2 }
      ]);
    })
    .then(() => {
      return knex.raw('SELECT setval(\'replies_id_seq\', (SELECT MAX(id) FROM replies));');
    });
};

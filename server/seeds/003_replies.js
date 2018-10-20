exports.seed = knex => knex('replies').del()
  .then(() => knex('replies')
    .insert([
      {
        text: 'Great tweet!', user_id: 2, message_id: 1
      },
      {
        text: 'Powerful quote. Thanks for sharing', user_id: 2, message_id: 2
      },
      {
        text: 'What a great reply!', user_id: 1, message_id: 2, reply_id: 1
      }
    ]))
  .then(() => knex.raw('SELECT setval(\'replies_id_seq\', (SELECT MAX(id) FROM replies));'));

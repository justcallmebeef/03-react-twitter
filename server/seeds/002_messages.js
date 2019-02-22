exports.seed = knex => knex('messages').del()
  .then(() => knex('messages')
    .insert([
      {
        id: 1, user_id: 1, text: 'I would rather be optimistic and wrong than pessimistic and right.', stars: 5, created_at: '2019-02-21 18:33:10'
      },
      {
        id: 2, user_id: 1, text: 'Nearly all men can stand adversity, but if you want to test a mans character, give him power.', stars: 4, created_at: '2019-02-21 18:33:11'
      },
      {
        id: 3, user_id: 2, text: 'You must unlearn what you have learned.', stars: 3, created_at: '2019-02-21 18:33:12'
      },
      {
        id: 4, user_id: 2, text: 'Forget the past. No one becomes successful in the past.', stars: 2, created_at: '2019-02-21 18:33:13'
      },
      {
        id: 5, user_id: 2, text: 'A census taker tried to quantify me once...', stars: 1, created_at: '2019-02-21 18:33:14'
      }
    ]))
  .then(() => knex.raw('SELECT setval(\'messages_id_seq\', (SELECT MAX(id) FROM messages));'));

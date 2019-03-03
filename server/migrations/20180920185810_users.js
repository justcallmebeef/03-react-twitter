exports.up = knex => knex.schema
  .createTable('users', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('handle').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.text('avatar');
    table.string('bio');
    table.string('location');
    table.date('birthday');
    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTable('users');

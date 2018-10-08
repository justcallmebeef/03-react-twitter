exports.up = knex => knex.schema
  .createTable('messages', (table) => {
    table.increments();
    table.string('text').notNullable();
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
    table.integer('stars').defaultTo(0);
    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTable('messages');

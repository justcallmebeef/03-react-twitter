exports.up = (knex) => knex.schema.createTable('replies', (table) => {
    table.increments();
    table.string('text').notNullable();
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
    table.integer('message_id').notNullable().references('messages.id').onDelete('CASCADE');
    table.integer('reply_id').references('replies.id').onDelete('CASCADE');
    table.timestamps(true, true);
  });
  
  exports.down = (knex) => knex.schema.dropTable('replies');

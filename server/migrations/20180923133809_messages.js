exports.up = function(knex) {
    return knex.schema.createTable('messages', (table) => {
      table.increments();
      table.string('text').notNullable();
      table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
      table.integer('stars').defaultTo(0);
      table.timestamps(true, true);
    });
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('messages');
  }
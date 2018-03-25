
exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments('id').notNullable().primary();
  table.string('name', 50);
  table.string('email', 100).unique();
  table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
});

exports.down = knex => knex.schema.dropTable('users');

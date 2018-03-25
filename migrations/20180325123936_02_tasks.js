
exports.up = knex => knex.schema.createTable('tasks', (table) => {
  table.increments('id').notNullable().primary();
  table.string('name', 50);
  table.string('description', 100).unique();
  table.integer('userid').unsigned().notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();

  table.foreign('userid').references('id').inTable('users');
});

exports.down = knex => knex.schema.dropTable('tasks');

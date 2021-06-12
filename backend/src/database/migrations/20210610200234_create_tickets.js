
exports.up = function (knex) {
  return knex.schema.createTable('tickets', table => {
    table.increments('id').primary()
    table.string('name').notNullable();
    table.string('subject').notNullable();
    table.string('description').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('tickets')
};
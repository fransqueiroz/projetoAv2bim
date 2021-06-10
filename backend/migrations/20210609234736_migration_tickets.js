
exports.up = function(knex) {
    return knex.schema.createTable('tickets', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('subject')
        table.string('description')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tickets')
};

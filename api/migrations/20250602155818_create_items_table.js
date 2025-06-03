/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments('item_id');
    table.integer('user_id');
    table.foreign('user_id').references('user_id').inTable('users');
    table.string('item_name');
    table.string('description');
    table.integer('quantity');
    table.string('img_url')
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table('items', table => {
    table.dropForeign('user_id')
  })
  .then(function() {
    return knex.schema.dropTableIfExists('items')
  });

};

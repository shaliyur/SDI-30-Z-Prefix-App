/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {user_id: 1, first_name: 'John', last_name: 'Doe', username: 'jdoe1', password: '1234'},
  ]);
};

//  return knex.schema.createTable('users', (table) => {
//     table.increments('user_id');
//     table.string('first_name');
//     table.string('last_name');
//     table.string('username');
//     table.string('password');
//   })
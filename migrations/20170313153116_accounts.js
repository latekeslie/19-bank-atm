
exports.up = function(knex, Promise) {
  //make a new table called accounts
  return knex.schema.createTable('accounts', (table) => {
    //auto incrementing id interger field
    table.increments('id');

    table.string('first_name');
    table.string('last_name');
    table.float('balance');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accounts');
};

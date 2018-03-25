const Knex = require('../db');
const Bookshelf = require('bookshelf')(Knex);

Bookshelf.plugin('registry');
Bookshelf.plugin('visibility');

const Users = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
});

export default Users;

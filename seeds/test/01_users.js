
exports.seed = knex =>
  // Deletes ALL existing entries
  knex('users').del()
    .then(() =>
    // Inserts seed entries
      knex('users').insert([
        { name: 'User01', email: 'user@email.com' },
        { name: 'User 02', email: 'user2@email.com' },
      ]));

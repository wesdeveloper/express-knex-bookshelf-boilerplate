
exports.seed = knex =>
  // Deletes ALL existing entries
  knex('tasks').del()
    .then(() =>
    // Inserts seed entries
      knex('tasks').insert([
        { name: 'Create repository', description: 'Just create a new repository in github.', userid: 1 },
        { name: 'Delete repository', description: 'Just delete a repository in github.', userid: 1 },
      ]));

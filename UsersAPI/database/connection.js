var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'node',
      password : 'node',
      database : 'nodetest'
    }
  });

module.exports = knex
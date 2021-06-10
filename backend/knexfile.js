// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/tickets.sqlite'
    }
  },
  migrations: {
		tableName: 'knex_migrations'
	},
  useNullAsDefault: true,
};

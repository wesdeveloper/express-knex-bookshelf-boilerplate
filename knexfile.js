const dotenv = require('dotenv');

dotenv.config();
const config = require('config');

module.exports = {
  production: {
    client: 'pg',
    connection: {
      host: config.get(process.env.NODE_ENV).DB_HOST,
      port: config.get(process.env.NODE_ENV).DB_PORT,
      user: config.get(process.env.NODE_ENV).DB_USER,
      database: config.get(process.env.NODE_ENV).DB_NAME,
      password: config.get(process.env.NODE_ENV).DB_PASS,
    },
    migrations: {
      tableName: 'migrations',
    },
    seeds: {
      directory: `${__dirname}/seeds/production`,
    },
    pool: {
      min: 1,
      max: 20,
    },
  },
  development: {
    client: 'pg',
    connection: {
      host: config.get(process.env.NODE_ENV).DB_HOST,
      port: config.get(process.env.NODE_ENV).DB_PORT,
      user: config.get(process.env.NODE_ENV).DB_USER,
      database: config.get(process.env.NODE_ENV).DB_NAME,
      password: config.get(process.env.NODE_ENV).DB_PASS,
    },
    migrations: {
      tableName: 'migrations',
    },
    seeds: {
      directory: `${__dirname}/seeds/development`,
    },
    pool: {
      min: 1,
      max: 20,
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: config.get(process.env.NODE_ENV).DB_HOST,
      port: config.get(process.env.NODE_ENV).DB_PORT,
      user: config.get(process.env.NODE_ENV).DB_USER,
      database: config.get(process.env.NODE_ENV).DB_NAME,
      password: config.get(process.env.NODE_ENV).DB_PASS,
    },
    migrations: {
      tableName: 'migrations',
    },
    seeds: {
      directory: `${__dirname}/seeds/test`,
    },
    pool: {
      min: 1,
      max: 20,
    },
  },
};

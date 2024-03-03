require('dotenv').config();

const config = {
  username: process.env.POSTGRES_USER,
  port: process.env.POSTGRES_PORT,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
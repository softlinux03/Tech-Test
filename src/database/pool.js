const { Pool } = require('pg');
const { database: dbConfig } = require("../config");
const databaseConfig = { connectionString: `postgres://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.db}` };

const pool = new Pool(databaseConfig);

module.exports = pool;
const pool = require('./pool');

pool.on('connect', () => {
  console.log('connected to the db');
});

const createOrdersDataTable = () => {
  const query = `CREATE TABLE IF NOT EXISTS orders_data
  (id SERIAL PRIMARY KEY, 
  order_id varchar(200) NULL,
  order_details TEXT NULL,
  status int4 DEFAULT 0 NOT NULL
  )`;
  pool.query(query)

};


const createAllTables = () => {
  createOrdersDataTable();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = createAllTables

require('make-runnable');
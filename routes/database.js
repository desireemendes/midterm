// // const menus = require('./json/menus.json');
// // const customers = require('./json/customers.json');

// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'labber',
//   password: 'labber',
//   host: 'localhost',
//   database: 'midterm'
// });


// const getAllMenus = function (options, limit = 5) {
//   // 1
//   //const queryParams = [];
//   // 2

//   let queryString = `select * from menus;`;

//   //console.log(queryString);

//   // 6
//   console.log(pool.query(queryString));
//   return pool
//   .query(queryString)
//   .then((res) => res.rows);
// };

// exports.getAllMenus = getAllMenus;

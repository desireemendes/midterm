// const menus = require('./json/menus.json');
// const customers = require('./json/customers.json');

const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

/// Customers

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */

const getCustomerWithEmail = (email) => {
  return pool
    .query(`
      SELECT * FROM customers
      WHERE email = $1;
    `, [email])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getCustomerWithEmail = getCustomerWithEmail;

/**
 * Get a single customer from the database given their id.
 * @param {string} id The id of the customer.
 * @return {Promise<{}>} A promise to the customer.
 */

const getCustomerWithId = (id) => {
  return pool
    .query(`
      SELECT * FROM customers
      WHERE id = $1;
    `, [id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getCustomerWithId = getCustomerWithId;


/**
 * Add a new customer to the database.
 * @param {{name: string, password: string, email: string}} customer
 * @return {Promise<{}>} A promise to the customer.
 */

const addCustomer = ({name, email, password, phone}) => {
  return pool
    .query(`
      INSERT INTO customers (name, email, password, phone)
      VALUES($1, $2, $3, $4);
    `, [name, email, password, phone])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.addCustomer = addCustomer;

// /// Orders

// /**
//  * Get all reservations for a single user.
//  * @param {string} guest_id The id of the user.
//  * @return {Promise<[{}]>} A promise to the reservations.
//  */
// // const getAllReservations = function(guest_id, limit = 10) {
// //   console.log(guest_id);
// //   return getAllProperties(null, 2);
// // }

// const getAllReservations = (guest_id, limit = 10) => {
//   return pool
//     .query(`
//       SELECT * FROM reservations
//       WHERE guest_id = $1
//       LIMIT $2;
//     `, [guest_id, limit])
//     .then((result) => {
//       return result.rows[0];
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };
// exports.getAllReservations = getAllReservations;

// /// Properties

// /**
//  * Get all properties.
//  * @param {{}} options An object containing query options.
//  * @param {*} limit The number of results to return.
//  * @return {Promise<[{}]>}  A promise to the properties.
//  */
// // const getAllProperties = function(options, limit = 10) {

// //   const limitedProperties = {};
// //   for (let i = 1; i <= limit; i++) {
// //     limitedProperties[i] = properties[i];
// //   }
// //   return Promise.resolve(limitedProperties);
// // }

// const getAllProperties = function (options, limit = 10) {
//   // 1
//   const queryParams = [];
//   // 2

//   let queryString = `
//   SELECT properties.*, avg(property_reviews.rating) as average_rating
//   FROM properties
//   JOIN property_reviews ON properties.id = property_id
//   `;

//   // 3
//   if (options.city) {
//     queryParams.push(`%${options.city}%`);
//     queryString += `WHERE city LIKE $${queryParams.length} `;
//   }

//   if(options.minimum_price_per_night){
//     queryParams.push(`${options.minimum_price_per_night}`);
//     const hasFirstWhereAlready = queryParams.length > 0
//     queryString += `${hasFirstWhereAlready ? ' AND ' : ' WHERE '} cost_per_night > $${queryParams.length} `;
//   }

//   if(options.maximum_price_per_night){
//     queryParams.push(`${options.maximum_price_per_night}`);
//     const hasFirstWhereAlready = queryParams.length > 0
//     queryString += `${hasFirstWhereAlready ? ' AND ' : ' WHERE '} cost_per_night < $${queryParams.length} `;
//   }

//   if(options.minimum_rating){
//     queryParams.push(`${options.minimum_rating}`);
//     const hasFirstWhereAlready = queryParams.length > 0
//     queryString += `${hasFirstWhereAlready ? ' AND ' : ' WHERE '} minimum_rating > $${queryParams.length} `;
//   }

//   if(options.owner_id){
//     queryParams.push(`${options.owner_id}`);
//     const hasFirstWhereAlready = queryParams.length > 0
//     queryString += `${hasFirstWhereAlready ? ' AND ' : ' WHERE '} owner_id = $${queryParams.length} `;
//   }

//   // 4
//   queryParams.push(limit);
//   queryString += `
//   GROUP BY properties.id
//   ORDER BY cost_per_night
//   LIMIT $${queryParams.length};
//   `;

//   // 5
//   console.log(queryString, queryParams);

//   // 6
//   return pool.query(queryString, queryParams).then((res) => res.rows);
// };

// exports.getAllProperties = getAllProperties;


// /**
//  * Add a property to the database
//  * @param {{}} property An object containing all of the property details.
//  * @return {Promise<{}>} A promise to the property.
//  */
// // const addProperty = function(property) {
// //   const propertyId = Object.keys(properties).length + 1;
// //   property.id = propertyId;
// //   properties[propertyId] = property;
// //   return Promise.resolve(property);
// // }

// const addProperty = function(property) {
//   const queryParams = [];
//   const queryParamsNums = [];

//   let numOfKeys = 1;
//   for (const key in property) {
//     queryParams.push(property[key]);
//     queryParamsNums.push(`$${numOfKeys}`);
//     numOfKeys++;
//   }

//   let queryString =  `
//   INSERT INTO properties (${Object.keys(property).join()})
//   VALUES(${queryParamsNums.join()})
//   RETURNING *;
//   `;

//   return pool.query(queryString, queryParams)
//   .then(result => {
//     return result.rows[0];
//   })
//   .catch(err => console.log(err.message));
// }

// exports.addProperty = addProperty;

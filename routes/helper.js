// Get the Customer by their Email
const getCustomerByEmail = (email, customers) => {
  for (let id in customers) {
    if (customers[id].email === email) {
      return customers[id];
    }
  }
  return false;
};

// Check if The Customer Exist
const customerAlreadyExist = (email, customerDB) => {
  for (let customer in customerDB) {
    if (customerDB[customer]["email"] === email) return { error: "Email Exists" };
  }
  return { error: null };
};


// authenticate the Customer Information
const authenticateCustomerInfo = (email, password, customerDB) => {
  if (!email || email.trim() === "") return { error: "Invalid Email" };
  if (!password || password.trim() === "") return { error: "Invalid pasword" };
  const { error } = customerAlreadyExist(email, customerDB);
  if (error) return { error: error };
  return { error: null };
};


module.exports = {
  getCustomerByEmail,
  customerAlreadyExist,
  authenticateCustomerInfo,
};

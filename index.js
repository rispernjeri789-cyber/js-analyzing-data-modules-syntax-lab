

// combineUsers.js
require('datejs'); // load datejs globally

function combineUsers(...args) {
  // Initialize return object
  const combinedObject = {
    users: []
  };

  // Loop through args and merge arrays into users
  for (const arr of args) {
    combinedObject.users.push(...arr);
  }

  // Add today's date in M/d/yyyy format
  const today = new Date().toString("M/d/yyyy");
  combinedObject.merge_date = today;

  // Return the combined object
  return combinedObject;
}

module.exports = combineUsers;




// index.js
const combineUsers = require('./combineUsers');

// Example usage
const arr1 = ['alice', 'bob'];
const arr2 = ['charlie', 'diana'];
const arr3 = ['eve'];

console.log(combineUsers(arr1, arr2, arr3));



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

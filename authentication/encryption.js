const bcrypt = require('bcryptjs');

const saltRounds = 10;

// await will not wait for bcrypt.hash because bcrypt.hash does not return a promise.
// Wrap bcrypt in a promise to use await:

exports.hashPassword = async (plaintextPass) => {
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(plaintextPass, saltRounds, function(err, hash) {
      if(err) reject(err)
      resolve(hash)
    })
  })
  return hashedPassword;
}

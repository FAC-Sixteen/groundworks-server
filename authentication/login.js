

// const Joi = require('@hapi/joi');
//
// const registerValidation = (data) => {
//   console.log("Inside registerValidation")
//   const schema = {
//     userName: Joi.string().min(2).required(),
//     email: Joi.string().min(6).required().email(),
//     password: Joi.string().min(6).required()
//   };
//   return Joi.validate(data, schema);
// }

exports.signup = ({ email }, res) => {
  findUser(email, (callback) => {
    if (callback !== null || callback !== undefined) {
      res.json({ success: false, msg: "Email already taken" })
    }
  })
}

module.exports.registerValidation = registerValidation;

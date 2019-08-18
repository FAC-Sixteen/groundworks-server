const bcrypt = require('bcryptjs');

const Students = require('../database/schemas/GWStudent');

const findUser = async (userEmail, res) => {
  try {
    const profile = await Students.findOne({ email: userEmail });
    res(profile);
  } catch (err) {
    console.log(err);
  }
};

exports.validator = ({ email, password}, res) => {
  findUser(email, (callback) => {
    if (callback === null || callback === undefined) {
      res.json({ success: false, msg: "User doesn't exist"});
    } else {
      bcrypt.compare(password, callback.password, (err, success) => {
        if (err) res.json({ success: false, msg: 'Please try again later'});
        else if (!success) res.json({ success: false, msg: 'Username/password is invalid'});
        else {
          res.cookie('id', callback._id.toString());
          res.json({success: true, msg: 'Logged in successfully'})
        }
      })
    }
  })
}

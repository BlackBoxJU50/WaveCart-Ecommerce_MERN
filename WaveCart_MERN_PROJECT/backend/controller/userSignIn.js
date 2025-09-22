const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
async function userSignInController(req,res) {
  try {
    const { email, password } = req.body || {}

    if (!email) {
      throw new Error('Email is required');
    }

    if (!password) {
      throw new Error('Password is required'); // fixed duplicate message
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error('User not found with this email');
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      throw new Error('Invalid password');
    }

    console.log("Check Password", checkPassword);

    

  } catch (err) {
    console.error('[SIGNIN ERROR]', err); // helpful for server logs
    res.status(500).json({
      message: err.message || 'Internal Server Error',
      success: false,
      error: true,
    });
  }
}

module.exports = userSignInController;
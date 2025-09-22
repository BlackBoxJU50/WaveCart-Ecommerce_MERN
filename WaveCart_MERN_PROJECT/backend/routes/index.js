const express = require("express");



const router = express.Router();


const userSignUpController = require("../controller/userSignUp");



router.post('/signup', userSignUpController);

router.get('/test', (req, res) => {
  res.send('Test route working');
});



module.exports = router;
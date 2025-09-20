const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

async function UserSignUpController(req, res) {
    try {


        const { name, email, password } = req.body;
        if (!name) {
            throw new Error('Name is required');

        }

        if (!email) {
            throw new Error('Email is required');

        }
        if (!password) {
            throw new Error('Password is required');

        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        if (!hashedPassword) {
            throw new Error('Password hashing failed');
        }
        const payload = {
            ...req.body,
            password: hashedPassword

        }



        const userData = new userModel(payload);
        const savedUser = userData.save();

        res.status(201).json({
            message: 'User registered successfully',
            success: true,
            error: false,
            data: savedUser,
        });
        




    } catch (err) {
        res.json({

            message: err,
            errir: true,
            success: false,
        }



        )


    }
}

module.exports = UserSignUpController;
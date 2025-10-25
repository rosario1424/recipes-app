const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerUser = async (req, res) => {
    try {
      // get the name, email, password from the request body
      const { name, email, password } = req.body;
      
      //check if the user already registered
      const existingUser = await User.findOne({ email });

      // if the user already exists, return an error
      if(existingUser) {
        return res.status(400).json ({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      
      // create a new server
      const newUser = new User({
         name: name, 
         email: email, 
         password: hashedPassword
         });

      // save the user to the database
      await newUser.save();

      // return sucess response
      res.status(201).json ({ message: 'User registered sucessfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

const loginUser = async (req, res) => {
    try {
      // get the email and password from request body
      const { email, password } = req.body;

      // check if the user exists
      const user = await User.findOne({ email });

      // if the user does not exist, return an error
      if (!user) {
        return res.status(400).json({ message: 'Invalid User' });
      }

      // check if the password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);

      // if the password id incorrect, return an error
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Incorrect Password' });
      }

      // generate a JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // return sucess response
      res.status(200).json({ message: 'Login sucessful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}
module.exports = {
    registerUser,
    loginUser
};
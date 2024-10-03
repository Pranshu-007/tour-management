import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register function
export const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);  // Await the bcrypt salt generation
    const hashPassword = await bcrypt.hash(req.body.password, salt);  // Await hash generation

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,  // Store hashed password, not plain text
    });

    await newUser.save();
    res.status(200).json({ success: true, message: 'Successfully Registered' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Registration Failed' });
    console.log('Registration error:', error);
  }
};

// Login function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;  // Extract email and password from request body
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(404).json({ message: 'User not Found' });  // 404 for user not found
    }

    const isPasswordCorrect = await bcrypt.compare(password, userExist.password);  // Compare hashed password

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Email or Password is Incorrect' });  // 401 for incorrect credentials
    }

    const { password: pwd, role, ...rest } = userExist._doc;  // Destructure to exclude password and role

    // Generate JWT
    const token = jwt.sign(
      { id: userExist._id, role: userExist.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '15d' }
    );

    console.log(token);
    

    // Set token in cookie
    res.cookie('accesstoken', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),  // Expiry set for 15 days
    }).status(200).json({
      success: true,
      message: 'Successfully Logged-In',
      data: { ...rest },
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to login' });
    console.log('Login error:', error);
  }
};

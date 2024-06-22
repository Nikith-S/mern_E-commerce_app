import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';

// Register Controller
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name) {
      return res.send({ error: 'Name is required' });
    }
    if (!email) {
      return res.send({ error: 'Email is required' });
    }
    if (!password) {
      return res.send({ error: 'Password is required' });
    }
    if (!phone) {
      return res.send({ error: 'Phone is required' });
    }
    if (!address) {
      return res.send({ error: 'Address is required' });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists, please provide another email" });
    }

    const hashedPassword = await hashPassword(password);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address
    });

    await user.save();

    res.status(201).send({
      success: true,
      message: 'User registered successfully',
      user,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email and password are required"
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered"
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).send({
        success: false,
        message: "Incorrect password"
      });
    }

    // Ensure JWT_SECRET is set
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined in environment variables');
      return res.status(500).send({
        success: false,
        message: "Internal Server Error"
      });
    }

    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.status(200).send({
      success: true,
      message: 'Login Successful',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address
      },
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}



export const testController = (req,res) => {
res.send('protected route')


}
import { Op, or } from "sequelize"
import bcrypt from 'bcrypt'
import users from "../model/user.model.js"


export const signup = async (req, res) => {
    try {
      const { email, password, username } = req.body;
  
      // Check if the user with the given email or username already exists
      const checkUserDetails = await users.findOne({
        where: { [Op.or]: [{ email }, { username }] },
      });
  
      if (checkUserDetails) {
        return res.send({
          status: false,
          message: 'User Already Exists!',
          data: null,
        });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const create = await users.create({
        email,  password: hashedPassword,  username,
      });
      res.send({  status: true, msg: 'User created successfully', data: create,  });

    } catch (error) {
      console.error(error);
      res.status(500).send({status: false, msg: 'Something went wrong', data: error,  });
    }
  };
  export const loginUser = async (req, res) => {
    console.log("api");
    try {
      const { email, password } = req.body;
  
      const user = await users.findOne({ where: { email } });
  
      if (!user) {
        return res.send({ status: false, msg: 'User not found' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (passwordMatch) {
        res.send({ status: true, msg: 'Login successful', data: user });
      } else {
        res.send({ status: false, msg: 'Incorrect password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: false, msg: 'Something went wrong', data: error });
    }
  };
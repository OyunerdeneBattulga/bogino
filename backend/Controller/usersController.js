const { request , response } = require("express");
const UserModel = require('../Model/userModel');
const jwt = require("jsonwebtoken")
const SECRET_KEY = 'placeholder_secret'
const bcrypt = require("bcrypt")

exports.signup = async (request, response, next) => {
    try {
        const {password, email} = request.body;
        const existingUser = await UserModel.findOne({ email:email });
        if(existingUser) { 
            return response.status(409).json({message:"butgeltei hereglegch baina"});
        }
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        if (email==="adm" && password==="3") {
          const result = await UserModel.create({
              email:email,
              password:hashedPassword,
              role:"admin"
          });
          const token = jwt.sign({email:result.email, id: result._id}, SECRET_KEY);
          response.status(201).json({user:result, token:token});
        } else {
          const result = await UserModel.create({
              email:email,
              password:hashedPassword,
              role:"user"
          });
          const token = jwt.sign({email:result.email, id: result._id}, SECRET_KEY);
          response.status(201).json({user:result, token:token});
        }
    } catch(error){
        response.status(500).json({message:"ymar negenzuil buruu baina"});
        console.log(error);
    }
}

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await UserModel.findOne({
      email,
    });
    if (!existingUser) { 
      return res
        .status(404)
        .json({ message: "email buruu baina" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res
        .status(404)
        .json({ message: "nuuts ug buruu baina" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id , message: "nevterlee"},
      SECRET_KEY
    );
    console.log(existingUser)
    if (existingUser.role.enum === "admin") {
      const admin = jwt.verify({ email: existingUser.email, id: existingUser._id , message: "admin nevterlee"},SECRET_KEY);
      res.status(200).json({ user: admin, token });
    } else {
      const user = jwt.verify({ email: existingUser.email, id: existingUser._id , message: "user nevterlee"},SECRET_KEY);
      res.status(200).json({ user: user, token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ymar negen zuil buruu baina" });
  }
  };

exports.getUser = async (request,response,next) => {
    const { id } = request.params;
    try{
        const user = await UserModel.findById(id);
        response.status(200).json({
            message:true , 
            data:user
        })
    }catch(error){
        console.log(error)
        return response.status(400).json({message:error , data:null})
    }
}

exports.getUsers = async (request,response,next) => {
  try{
      const users = await UserModel.find();
      response.status(200).json({
          message:true,
          data:users,
      })
  }catch(error){
      return response.status(400).json({message:error , data:null})
  }
}
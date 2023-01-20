const { request , response } = require("express");
const UserModel = require('../Model/userModel');
const jwt = require("jsonwebtoken")
const SECRET_KEY = 'placeholder_secret'
const bcrypt = require("bcrypt")

exports.signup = async (request, response, next) => {
    try {
        const {password, email} = request.body;
        const existingUser = await UserModel.findOne({ email:email});
        if(existingUser) { 
            return res.status(409).json({message:"butgeltei hereglegch baina"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await UserModel.create({
            email:email,
            password:hashedPassword
        });
        const token = jwt.sign({email:result.email, id: result._id}, SECRET_KEY);
        response.status(201).json({user:result, token:token});
    } catch(error){
        console.log(error);
        response.status(500).json({message:"ymar negenzuil buruu baina"});
    }
}


exports.login = async(request, response, next) => {
    try{
        const {email, password} = request.body;
        const existingUser = await UserModel.findOne({password:password , email:email});
        if(!existingUser){
            return res.status(404).json({message:"email esvel nuuts ud buruu baina"});
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(!matchPassword){
            return res.status(404).json({message:"email esvel nuuts ug buruu baina"});
        }
        const token = jwt.sign({email:result.email, id:result._id}, SECRET_KEY);
        response.status(201).json({user:existingUser, token: token});
    } catch(error){
        console.log(error);
        response.status(500).json({message:"ymar negen zuil buruu baina"});
    }
}





exports.getUsers = async (requestuest,response,next) => {
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

// exports.getUser = async (request,response,next) => {
//     const { id } = request.params;
//     try{
//         const user = await UserModel.findById(id);  
//         response.status(200).json({
//             message:true , 
//             data:user
//         })
//     }catch(error){
//         return response.status(400).json({message:error , data:null})
//     }
// }


    



// exports.updateUser = async (request,response,next) => {
//     const { id } = request.params;
//     try{
//         const user = await UserModel.findByIdAndUpdate(id, {...request.body});
//         response.status(200).json({
//         message:`user with ${request.params.id} id is update`,
//         data:user
//         })
//     }catch(error){
//         response.status(400).json({message:error , data:null})
//     }
// }


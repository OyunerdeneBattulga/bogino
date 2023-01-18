const { request , response } = require("express");
const LinkModel = require('../Model/linkModel');
const crypto = require("crypto")

exports.createLink = async (req, res, next) => {
    const random = crypto.randomBytes(5).toString("hex");
    const link = await LinkModel.create({
      link: req.body.link,
      id: random,
      short: "http://localhost:3000/" + random,
    });
    res.status(200).json({
      success: true,
      data: link,
    });
  }; 


exports.getLink = async (request,response,next) => {
    const { id } = request.params;
    try{
        const link = await LinkModel.findOne({id: id});
        response.status(200).json({
            message:true , 
            data:link
        })
    }catch(error){
        console.log(error)
        return response.status(400).json({message:error , data:null})
    }
}



exports.getLinks = async (request,response,next) => {
    try{
        const links = await LinkModel.find();
        response.status(200).json({
            message:true,
            data:links,
        })
    }catch(error){
        return response.status(400).json({message:error , data:null})
    }
}



exports.deleteLink = async (request, response) => {
    const { id } = request.params;
    try{        
        const link = await LinkModel.findByIdAndDelete(id)
        response.status(200).json({
            message:`user with ${request.params.id} id is delete`,
            data:link
            })
    }catch(error){
        response.status(400).json({message:error , data:null})
    }
}


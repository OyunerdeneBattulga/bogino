const { request , response } = require("express");
const LinkModel = require('../Model/linkModel');
const isUrl = require("is-valid-http-url");
// const crypto = require("crypto")


exports.createLink = async (request, response , next) => {
    const link = await LinkModel.findOne({link: request.body.link});
    if(isUrl(request.body.link) === true){
        if(link){
            return response.status(201).json({data: link})
        }
        const createLink = await LinkModel.create({...request.body})
        const updateLink = await LinkModel.findByIdAndUpdate(createLink._id, {short: 'http://localhost:3000/' + createLink._id})
        response   
            .status(201)
            .json({message: `created`, data: {...updateLink._doc, short: 'http://localhost:3000/' + createLink._id}})
    }else{
        console.log('not url');
    }
}


exports.getLink = async (request,response,next) => {
    const { id } = request.params;
    try{
        const link = await LinkModel.findById(id);
        response.status(200).json({
            message:true , 
            data:link
        })
    }catch(error){
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


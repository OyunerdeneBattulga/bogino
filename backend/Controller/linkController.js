const { request , response } = require("express");
const LinkModel = require('../Model/linkModel');


const links = [
    { id:1 , link:"nxcjfdgzy/fukdhxv/bfdyilaeg"},
    { id:2 , link:"nxcjfdgzy/fukdhxv/bfdyilaeg"},
    { id:3 , link:"nxcjfdgzy/fukdhxv/bfdyilaeg"}
];



//                  post
exports.createLink = async (request, response , next) => {
    if (!request.body?.firstName ||
        !request.body?.lastName ||
        !request.body?.email
        ) {
        response
        .status(400)
        .json({message:`firstname , lastname and email are require`});
    } 
    const createlink = await LinkModel.create(request.body)
    response
    .status(201)
    .json({message: `new link create`, data:createlink})
}

//                  get||link
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


    //  " /links"         link get ||all links||
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


//                  update
exports.updateLink = async (request,response,next) => {
    const { id } = request.params;
    try{
        const link = await LinkModel.findByIdAndUpdate(id, {...request.body});
        response.status(200).json({
        message:`link with ${request.params.id} id is update`,
        data:link
        })
    }catch(error){
        response.status(400).json({message:error , data:null})
    }
}


//                  delete
exports.deleteLink = async (request, response) => {
    const { id } = request.params;
    try{        
        const link = await LinkModel.findByIdAndDelete(id)
        response.status(200).json({
            message:`link with ${request.params.id} id is delete`,
            data:link
            })
    }catch(error){
        response.status(400).json({message:error , data:null})
    }
}
const { request , response } = require("express");
const UserModel = require('../Model/userModel');


exports.createUser = async (request, response , next) => {
    if (!request.body?.email) {
        response
        .status(400)
        .json({message:`firstname , lastname and email are require`});
    } 
    const createUser = await UserModel.create(request.body)
    response
    .status(201)
    .json({message: `new user create`, data:createUser})
}


exports.getUser = async (request,response,next) => {
    const { id } = request.params;
    try{
        const user = await UserModel.findById(id);
        response.status(200).json({
            message:true , 
            data:user
        })
    }catch(error){
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



exports.updateUser = async (request,response,next) => {
    const { id } = request.params;
    try{
        const user = await UserModel.findByIdAndUpdate(id, {...request.body});
        response.status(200).json({
        message:`user with ${request.params.id} id is update`,
        data:user
        })
    }catch(error){
        response.status(400).json({message:error , data:null})
    }
}


// 100 = information
                        // 200 = success               
// 300 = redirection
                        // 400 = client error          
// 500 = server error





//      " /users"         user get ||all users||
// exports.getUsers = (request,response,next) => {
//     response.status(200);
//     response.send({users: users})
// }



//        user post 
// exports.createPost = (req, res, next) => {
//     console.log(req.body);
//     posts.push({ id: posts.length + 1, ...req.body });
//     res.status(400).json({ message: "New post is created." });
//   };


//      " /users"         user get ||id||
// exports.getUser = (request,response,next) => {
//     const { id } = request.params;
//     if(id > users.length) {
//         response
//         .status(400)
//         .json({message: ` userid ${request.params.id} does not exit`});
//     } else {
//         response.status(200).json(users[parseInt(id)-1]);     // parseInt <= id salgaj tus bureer
//     }
// }



//           user put , patch
// exports.updateUser = (request,response,next) => {
//     const { id } = request.params;
//     if(id > users.length) {
//         response
//         .status(400)
//         .json({message: ` userid ${request.params.id} does not exit`});
//     } else {
//         response
//         .status(200)
//         .json({message: ` use with ${request.params.id} id was updated`});
//     }
// }


//          user delete
// exports.deleteUser = (request, response) => {
//     const { id } = request.params;
//     if(users.findIndex((el)=>el.id==id) == -1) {
//         response
//         .status(400)
//         .json({message: `userid ${request.params.id} does  not exist`});
//     } else {
//         users.splice(users.findIndex((el) => el.id == id), 1)
//         response
//         .status(200)
//         .json({message: ` user with ${request.params.id} id is deleted`});
//     }
// }
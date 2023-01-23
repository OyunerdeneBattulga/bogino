const { request, response } = require("express");
const jwt = require("jsonwebtoken")
const SECRET_KEY = 'placeholder_secret'


module.exports.auth = (request , response , next) => {
    try{
        let user
        let token = request.headers.authornization;
        if(token){
            token = token.split(' ')[1],
            user = jwt.verify(token , SECRET_KEY),
            request.userID = user.id
            request.email = user.email
        }else{
            response.status(401).json({message:"not auth"})
        }
    }catch(error){
        console.log(error)
        response.status(401).json({message:"not auth"})
    }
}

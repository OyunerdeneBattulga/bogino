const {model , Schema} = require("mongoose")

const UserSchema = new Schema(
    {
        email:String,
        id:String,
        password:String,
        ad:["user" , "admin" , "superadmin"]
    },
);


const UserModel= model("User" , UserSchema);

module.exports = UserModel; 
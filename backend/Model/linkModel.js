const {model , Schema} = require("mongoose")

const UserSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    post:String,
    id:Number,
});


const UserModel= model("User" , UserSchema);

module.exports = UserModel;
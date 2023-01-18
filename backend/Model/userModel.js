const {model , Schema} = require("mongoose")

const UserSchema = new Schema({
    email:String,
    id:String,
    password:String,
});


const LinkModel= model("User" , UserSchema);

module.exports = LinkModel; 
const {model , Schema} = require("mongoose")

const LinkSchema = new Schema({
    link:String,
    short:String,
    id:String,
    userID:String,
});


const LinkModel= model("Link" , LinkSchema);   //links

module.exports = LinkModel; 
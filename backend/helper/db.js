const mongoose = require('mongoose')
const uri = "mongodb+srv://oyu:bogino@cluster0.jogvgyk.mongodb.net/?retryWrites=true&w=majority"


const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log("database is successfully connected")
    }catch(error){
        console.log(error)
    }
}



module.exports = connect;
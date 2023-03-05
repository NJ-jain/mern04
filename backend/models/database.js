const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

exports.dataconnection = async ()=>
{
    try {
        await mongoose.connect("mongodb+srv://r8:namanjain@cluster0.dhxx6yr.mongodb.net/?retryWrites=true&w=majority");
        console.log("database connected!")
    } catch (error) {
        console.log(error.message)
    }
}
const mongoose = require("mongoose")

const blogModel = new mongoose.Schema({
    data : {
        type : "String",
        required : [true , "data is required"],
        // minLength : [4 ,"name feild atleast  4 chacter"]
    },
    author : {
        type : mongoose.Schema.Types.ObjectId , ref : 'user'
    }
    ,comment : []
    
}, {timestamps : true})


const blog = mongoose.model("blog" , blogModel)
// validator is used to check a string as per our conditions 

module.exports = blog;



// jsonwebtoken expresass-session
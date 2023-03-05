const mongoose = require("mongoose")
const validator = require("validator");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const usermodel = new mongoose.Schema({
    name : {
        type : "String",
        // required : [true , "name field must not empty"],
        minLength : [4 ,"name feild atleast  4 chacter"]
    },
    email : {
        type : "String",
        required  :[true , 'email is required'] ,
        validate : [validator.isEmail , "Email is invalid"]
    }, 
    password : {
        type : "String",
        select : false ,
        minLength : [6 , "password alleast of 6 character"]
        ,required : [true ,"password is required"],
        match : /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
    },
    avatar : {
        type : Object,
        default : {
            public_id : ""  , url  : ""
        }
    },
    bio : {
        type : "String",
        minLength : [69 , " bio must be of 69 character"]

    },
    about : {
        type : "String",
        minLength : [143 , " bio must be of 143 character"]

    },
    passwordResetToken : 0 ,
    lists  : [{  type : mongoose.Schema.Types.ObjectId , ref : 'blog'}],
    stories : [{  type : mongoose.Schema.Types.ObjectId , ref : 'blog'}],

}, {timestamps : true})

usermodel.pre("save" , async function(){
    if(this.password)
    {
        this.password = await bcrypt.hash(this.password , 10)
    }
})
usermodel.methods.comparepassword = function(userpassword){
    return bcrypt.compareSync(userpassword , this.password)
}

usermodel.methods.gettoken = function(){
    console.log("inside get token")
    return jwt.sign({id : this._id} , "SECRETKEYJWT"  , {expiresIn : "1h"})
}

const user = mongoose.model("user" , usermodel)
// validator is used to check a string as per our conditions 

module.exports = user;



// jsonwebtoken expresass-session
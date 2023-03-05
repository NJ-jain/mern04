const User = require("../models/userModel")
const {sendToken} = require("../utils/auth")
const nodemailer = require("nodemailer")
// const { json } = require("express")
const formidable = require('formidable');
// const user = require("../models/userModel");
const Blog = require("../models/blogModel");
// const user = require("../models/userModel");
const cloudinary = require('cloudinary');

// Configuration 
cloudinary.config({
  cloud_name: "dqwnwg14q",
  api_key: "859573616467143",
  api_secret: "AE5m9wJdpX_0zSd-k4FjsNbtw-Y",
  secure : true , //for https
});





exports.homepage  = (req , res , next) => {
    res.json({message :  "this is homepage................" , user : req.user} )
}

exports.signup  = async (req , res , next) => {
    // res.json(req.body);
    try {
        let user =await User.findOne({email : req.body.email}).select("+password").exec()
        if(user)
        {
            return res.status(501).json({message : "user exists"})
        }

        const newUser = new User(req.body);
        user = await newUser.save()
        // res.json(user)
        sendToken(user , req, res ,200);

    } catch (error) {
        res.status(501).json({message : error.message})
    }
}



exports.signin  = async (req , res , next) => {
    // res.json(req.body);
    try {
        const{email , password} =req.body;
        let user =await User.findOne({email : email}).select("+password").exec()
        if(!user)
        {
            return res.status(404).json({message : "user not found"})
        }
const matchpassword = user.comparepassword(password);

if(!matchpassword)
{
    return res.status(500).json({message : "wrong credients"})
}

sendToken(user , req, res ,200);
        // sessions
        // res.json(user)
    } catch (error) {
        res.status(501).json({message : error.message})
    }
}

exports.currentuser = (req, res ) =>
{
    res.status(200).json({user : req.user})
}

exports.signout  = async (req , res , next) => {
    res.clearCookie("token");
    res.status(200).json({message : "log out sexsexfully"})
}


exports.sendmail =async (req , res , next)=>{

    try {
    const {email} =await req .body;
    const user = await User.findOne({email}).exec(); 
    if(!user)
    {
        return res.status(404).json({message : "user not found ."});
    }
    const pageurl = 
    req.protocol + "://" + req.get("host") + "/forget-password/" + user._id;
    // res.status(200).json({message : pageurl})

    const transport = nodemailer.createTransport({
        service : "gmail",
        host : "smtp.gmail.com",
        port : 465,
        auth : {
            user  :"nn.jain5272@gmail.com",
            pass : "oamwxkpmhhbfgwze"
        }
    })
    const mailOptions = {
        from : "Naman Pvt. Ltd. <nn.jain5272@gmail.com>",
        to : req.body.email,
        subject : "password Reset Link" ,
        text : "Do not share this link to anyone",
        html : `<a href = ${pageurl}>Password Reset Link </a>`,
    }

    transport.sendMail(mailOptions , async (err , info)=>
    {
        if(err) return res.send(err);
        // console.log(info)
        await User.findByIdAndUpdate(
            user._id,
            {$set : {passwordResetToken : 1}},
            {new : true}
        );
        // user.passwordResetToken = 1;
        // user.save();
        // return res.send(
        //     "<h1 style= 'text-align : center ; color : tomato ; margin-top : 10%'><span style = 'font-size : 60px ;' >✔️ </span> <br / >Email sent ! Check your indox , <br />check spam in case not found in indox. </h1>" 
        // );
        res.status(200).json({message : "the link is send to your gamil account please check your email or spam from more details"})
    });


    } catch (error) {
            res.status(500).json({message : error});
    }
}


// req.protocol gives -- http or https as per link
// req.get("host") gives the domain name 




exports.forgetPassword = async (req , res , next) => {
    try {
        const user = await User.findOne({id : req.params.id}).select("+password").exec();
        console.log(user)
        if(user.passwordResetToken === 1 )
        {
            console.log("inside forget password")
            user.passwordResetToken = 0 ;
            user.password = req.body.password ;
            await user.save();
            res.status(200).json({message  :`password changed`})
        }else {
            res.status(500).json({message : "link expired ! try again"})
        }
        
    } catch (error) {
        res.status(500).json({message  :error})
    }
    
}


exports.upload = async (req, res) => {
    try {
        const form = formidable();
        form.parse(req, async (err, fields, files) => {
            if (err) return res.status(500).json({ message: err });
            const user = await User.findById(req.user._id).exec();
            if (files) {
                const { public_id, secure_url } =
                    await cloudinary.v2.uploader.upload(files.image.filepath, {
                        folder: "mern04",
                        width: 1920,
                        crop: "scale",
                    });
                user.avatar = { public_id, url: secure_url };
                await user.save();
                res.status(200).json({ message: "Image Uploaded" });
            } else {
                res.status(500).json({ message: "No file uploaded" });
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.createstories = async (req, res) => {
    try {
        const blog = new Blog({ ...req.body, author: req.user._id });
        // await req.user.stories.push(blog._id);
        console.log("blog created")
        await req.user.stories.push(blog._id);
        console.log("id pushed into users")
        await blog.save();
        console.log("blog saved")
        console.log(req.user)
        await req.user.save();
        console.log("user saved")
        res.status(201).json({ message: "blog posted" });
    } catch (error) {
        console.log("Blog creation error")
        res.status(500).json({ message: error });
    }
};

exports.blogs = async (req , res) =>
{
    try {
        const blogs  = await Blog.find().populate("author").exec();

    res.status(201).json({message : "all blogs" , blogs})
    } catch (error) {
        res.status(500).json({message : error})
    }
}


exports.showBlogs = async (req , res ) =>
{
    try { 
    const {stories} = await User.findById(req.user._id).populate("stories").exec();
    res.status(201).json({message : "user blogs " , stories})
    } catch (error) {
        res.status(500).json({message : error})
    }
}

exports.BlogList = async (res , req) =>
{
    try {
        const {blogid} = req.params;
    if(!req.user.lists.includes(blogid))
    {
        req.user.lists.push(blogid);
        await req.user.save()
        res.status(200).json({message : "blog saved to list"})
    }
    else{
        const blogIndex = req.user.lists.findIndex(blog => blog._id === blogid);
        req.user.lists.splice(blogIndex , 1)
        await req.user.save()
        res.status(200).json({message : "blog unsaved to list"})
    }
    } catch (error) {
        res.status(500).json({message : error})
    }
}
exports.uploadBlog = async (req, res) => {
    try {
        const form = formidable();
        form.parse(req, async (err, fields, files) => {
            if (err) return res.status(500).json({ message: err });
            if (files) {
                console.log(files);
                const { public_id, secure_url } =
                    await cloudinary.v2.uploader.upload(files.blog.filepath, {
                        folder: "mern04",
                        width: 1920,
                        crop: "scale",
                    });

                res.status(200).json({
                    success: 1,
                    file: {
                        url: secure_url,
                    },
                });
            } else {
                res.status(500).json({ message: "No file uploaded" });
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

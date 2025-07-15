import User from "../model/user.model.js";
import bycrypt from 'bcryptjs';

export const Singup = async(req,res)=>{
    try {
        const{fullname ,email,password}= req.body
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"user already exit"})
        }
        const hashPassword = await bycrypt.hash(password,10)
        const createdUser = new User ({
            fullname : fullname,
            email : email,
            password : hashPassword
        })
        await createdUser.save()
        res.status(201).json({message:"user created successfully",user:{
            _id : createdUser._id,
            fullname : createdUser.fullname,
            password : createdUser.password
        }})
    } catch (error) {
        console.log("error:",error);
        res.status(500).json({message:"Internal server error"})
    }
}
export const login = async(req,res)=>{
    try {
        const {email , password} =req.body;
        const user = await User.findOne({email})
        const isMatch = await bycrypt.compare(password ,user.password)
        if(!user || !isMatch){
           return res.status(400).json({message:"Invalid Credentials"});
        }else{
            res.status(200).json({message:"Successfully Loggedin",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("error",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}
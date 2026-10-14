import User from "../models/users.js";
import bcrypt from "bcryptjs";


export const signupUser = async(req,res)=>{
    try{
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        let userExist  = await User.findOne({
            email : email
        });

        if(userExist){
            console.log('User Already Exists')
        }
        else{
            console.log('User does NOT Exist')
        }


        //hash Password
        const hashedpassword = await bcrypt.hash(password , 10);

        await User.create({
            email: email,
            name : name,
            password: hashedpassword

        });

        res.status(200).json(
            {
                message: "User Created Successfully",
            }
        ) 
    }

    catch(error){
        console.log(JSON.stringify(error));
        res.status(500).json({
            message: "Something went wrong, Please Contact Support",error
        })
    }
}
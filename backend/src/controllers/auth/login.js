import ApiError from "../../middleware/Error/ApiError.js";
import asyncHandler from "../../middleware/Error/asyncHandler.js";
import userModel from "../../model/userModel.js";
import AccessToken from "../../utils/generateToken.js";
const login = asyncHandler(
    async(req , res , next)=>{
     
        const {identifier,password} = req.body

        const isuser = await userModel.findOne({$or:[
            {email:identifier},{username:identifier}
        ]}).select("password")
if(!isuser) return next(new ApiError(404,"Invalid credential"))

 const check_password = isuser.comparePassword(password)

if(!check_password)  return next(new ApiError(404,"Invalid credential"))


    const token = AccessToken(isuser._id)
    
    
    
    res.cookie("AccessToken",token,{
        httpOnly:true,
        secure:true,
        sameSite:"none",
        maxAge:7*24*60*60*1000
    })
    

    res.status(200).json({

data:isuser,
        message:`${identifier} login successfully`,
        success:true
    })









    }
)


export default login
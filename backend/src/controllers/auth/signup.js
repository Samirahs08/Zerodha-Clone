import userModel from "../../model/userModel.js";
import asyncHandler from "../../middleware/Error/asyncHandler.js";
import ApiError from "../../middleware/Error/ApiError.js";
import AccessToken from "../../utils/generateToken.js";
const signup = asyncHandler(
async(req,res,next)=>{
const {username,email,password} = req.body;

const isUser = await userModel.findOne({$or:[
    {email},{username}
]})
if(isUser) return next(new ApiError(401,"user already exist"));


const data = await userModel.create({
    username,email,password
})



if(!data) return next (new ApiError(401,"tyr Again"));

const token = AccessToken(data._id)



res.cookie("AccessToken",token,{
    httpOnly:true,
    secure:true,
    sameSite:"none",
    maxAge:7*24*60*60*1000
})

res.status(201).json({
    data,
    message:`congratulation ${username} ! signup successfull. `,
    success:true,

})











}

)

export default signup
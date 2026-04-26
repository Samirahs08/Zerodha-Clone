import ApiError from "../Error/ApiError";
import jwt from "jsonwebtoken"

const userAUth_middleware = (req,res,next)=>{

    const token = req.cookies.AccessToken;
    if(!token) return next(new ApiError(404,"unauthorized Access !token not found"));

    const decode = jwt.verify(token,process.env.JWT_SECRET)

req.user = decode;

next()





}

export default userAUth_middleware
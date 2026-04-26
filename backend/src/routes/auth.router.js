import express from "express"
import signup_validator from "../validators/signup.validator.js"
import validate from "../middleware/validate/validate.middleware.js"
import signup from "../controllers/auth/signup.js"
import login_validator from "../validators/login.validator.js"
import login from "../controllers/auth/login.js"

const Auth_Router = express.Router()



Auth_Router.post("/signup",signup_validator,validate,signup)

Auth_Router.post("/login",login_validator,validate,login)

export default Auth_Router
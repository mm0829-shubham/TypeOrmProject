const userRouter = require("express").Router();
const user = require("../testController/controller");

userRouter.post("/register",user.register);

module.exports = userRouter;
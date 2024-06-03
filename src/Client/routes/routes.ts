import express from "express";
const Router = express.Router()
// import { Router } from 'express';
// const userRouter = Router();
import {viewUser}  from "../controller/client";
// import {viewUser,createUser,updateUserWithId,deleteUser,filterUser}  from "../controller/client";

Router.get("/", viewUser);
// Router.post("/creatUser", createUser);
// Router.put("/updateUserWithId/:id", updateUserWithId);
// Router.delete("/deleteUser/:id", deleteUser);
// Router.get("/filterUser/:address", filterUser);

export default Router;



import mongoose from "mongoose"
import User from "../models/users.js"

export function getUsers(req,res){
    res.json({
        msg:"this is get request!"
    })
}

export function postUsers(req,res){
    const user = req.body;
    const newUser = new User(user);
    newUser.save().then(()=>{
        msg:"user created successfully"
    }).catch(
        ()=>{
            msg:"error creating user"
        }
    )
}

export function putUsers(req,res){
    res.json({
        msg:"this is put request!"
    })
}

export function deleteUsers(req,res){
    res.json({
        msg:"this is delete request!"
    })
}
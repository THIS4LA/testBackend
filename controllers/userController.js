import User from "../models/users.js";
import jwt from "jsonwebtoken";

export function getUsers(req,res){
    User.find().then(
        (usersList)=>{
            res.json({
                list:usersList
            })
        }
    )
}

export function postUsers(req,res){
    const user = req.body;
    const newUser = new User(user);
    newUser.save().then(()=>{
        res.json({
            msg:"user created successfully"
        })
    }).catch(
        ()=>{
            res.json({
                msg:"user creation failed"
            })
        }
    )
}

export function putUsers(req,res){
    res.json({
        msg:"this is put request!"
    })
}

export function deleteUsers(req, res) {
    const resemail = req.body.email;
    User.deleteOne({ email: resemail })
        .then(() => {
            res.json({
                msg: "user deleted successfully"
            });
        })
        .catch(() => {
            res.json({
                msg: "user deletion failed"
            });
        });
}

export function loginuser(req,res){
    const credentials = req.body;
    User.findOne({email:credentials.email,password:credentials.password}).then(
        (user)=>{
            if(user==null){
                res.status(404).json({
                    msg:"invalid credentials"
                })
            }else{
                const payload={
                    id:user._id,
                    email:user.email,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    type:user.type,
                }
                const token = jwt.sign(payload,"secret",{expiresIn:"1h"});
                res.json({
                    msg:"there is an user!",
                    user:user,
                    token:token
                })
            }
        }
    ).catch(()=>{
        res.status(500).json({
            msg:"server errors"
        })
    })
}

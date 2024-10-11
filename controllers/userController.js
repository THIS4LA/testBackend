import User from "../models/users.js"

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

export function deleteUsers(req,res){
    res.json({
        msg:"this is delete request!"
    })
}
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    img:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    }

})

const User = mongoose.model("users",userSchema);
export default User;
import mongoose, { SchemaType } from "mongoose";

const roomSchema = mongoose.Schema({
    roomId:{
        type: String,
        required: true,
        unique: true
    },
    category:{
        type:String,
        required: true
    },
    maxGuests:{
        type: Number,
        required: true,
        default:3
    },
    available:{
        type: Boolean,
        required: true,
        default:true
    },
    photos:[
        {
            type: String
        }
    ],
    price:{
        type: mongoose.Types.Decimal128,
        required: true
    },
    specialDescription:{
        type:String,
        default:""
    },
    notes :{
        type: String,
        default:""
    }
})

const Room=mongoose.model("rooms",roomSchema);
export default Room;
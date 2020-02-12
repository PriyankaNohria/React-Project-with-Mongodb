const mongoose=require('mongoose');
const Schema=mongoose.Schema
const UserSchema=new Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    cart:[{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Top1',
    }],
    history:{
        type:Array,
        default:[]
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const UsersModel=mongoose.model("User",UserSchema, "users");






module.exports=UsersModel;
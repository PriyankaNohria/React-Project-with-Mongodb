const mongoose=require('mongoose'); //pointing to a collection in database
const usersSchema=new mongoose.Schema({
    s:String,
    name:String,   
    price:Number,
    type:String,
    isEnabled:Boolean
})

const UsersModel=mongoose.model("Top1",usersSchema,"top1");   //parameters=name of model and schema and collection

// UsersModel.findUsers=function(req,callBack){
//     let id=req.query.id;
//     let t=req.query.type;
//     //let query={type:"top"};
//     let query={};
//     if(id){
//     query={_id : id}
//     }
//     UsersModel.find(query,callBack);
// }

UsersModel.addUsers=function(req,callback){
    let user=req.body;
    UsersModel.create(user,callback);
}

module.exports=UsersModel;
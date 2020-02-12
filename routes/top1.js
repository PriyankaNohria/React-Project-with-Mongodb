var express=require('express');
const router=express.Router();
const UsersModel=require('../models/top1');

// router.post('/top1',(req,res)=>{
//     UsersModel.findUsers(req, (error,response)=>{
//         if(error) console.log("error is : ",error);
//         if(response) {
//             // console.log("Success response is : ",response); 
//             res.send(response);
//         }  
// });  
// });

router.post('/t1',(req,res)=>{
    console.log("here")
    UsersModel.find({
        type:req.body.type
    })
    .then(resp=>{
        console.log(resp)
        res.send(resp);
    })
    .catch(err=>{
        console.log("err");
    })
})

router.post('/add',(req, res)=>{
    UsersModel.addUsers(req,(error,response)=>{
        if(error) console.log("error is : ",error);
        if(response) {
            // console.log("Success response is : ",response); 
            res.send(response);}
});
});


module.exports = router;
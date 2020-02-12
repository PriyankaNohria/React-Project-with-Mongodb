const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/top',{      //listening address:port no. 
     useNewUrlParser:true,
     useUnifiedTopology:true
});

var db=mongoose.connection;

db.on('error',function(){                   //to test there is on and once
    console.log("Error connecting to db")
})

db.once('open',function(){
    console.log("connected to db")
})
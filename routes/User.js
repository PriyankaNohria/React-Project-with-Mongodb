const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {userSignupValidator} = require('../validate');
const User = require('../models/User')
const top = require("../models/top1")
users.use(cors())

process.env.SECRET_KEY = 'secret'


users.get('/', (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('error : ' + err));
});

users.post('/signup', userSignupValidator, (req, res) => {
    const today = new Date();
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err || user) {
            res.status(400).json({ error: "User Already Exists! Use another Email Id." })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                    .then(user => {
                        res.json({ status: user.email + ' : registered' })
                    })
                    .catch(err => {
                        res.send('error : ' + err)
                    })
            })
        }
    })
});

users.post('/login', (req, res) => {
   
const password=req.body.password;
const email=req.body.email;
    User.findOne({email})
    
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
                else {
                    return res.send("wrong password")
                }
            }
            else {
                res.send("user does not exist")
            }
        })
        .catch(err => {
            res.send('error : ' + err)
        })
})

users.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if (user) {
                res.json(user)
            }
            else {
                res.send("user does not exist")
            }
        })
        .catch(err => {
            res.send('error : ' + err)
        })
    })

users.post("/verifyUser", async (req, res) => {
    let user = jwt.verify(req.body.token, process.env.SECRET_KEY);
    console.log(user);
    if(user)
        res.status(200).json({user});
    else
        res.status(400).json({err: "Invalid Token"});
});

users.get('/getcart', async (req,res)=>{
    const cart = await User.findById(req.query.userId, {cart: 1}).populate({
        'path': 'cart',
        'select': {
            s: 1,
            name: 1,
            price: 1,
            type: 1
        }
    }).exec();
    if(cart)
    res.status(200).json({cart});
    else
    res.status(400).json({err: "error"});
})

users.post('/addtocart',async(req,res)=>{
    console.log(req.body)
    User.findByIdAndUpdate (req.body.uid , {$push:{'cart': req.body.pid}})
    .then(()=> {
        res.status(200).json({success:true, id:req.body.uid});
    }).catch(err => res.status(400).json({err:"error", id:req.body.uid}));
})

module.exports = users;

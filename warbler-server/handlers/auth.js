const db = require('../models/index');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signin = async function(req, res, next) {
    try{
        let user = await db.User.findOne({
            email: req.body.email
        });
        let { id, username, profileImageUrl } = user;
        let isMatch = await user.comparePassword(req.body.password);
        if(isMatch){
            let token = jwt.sign({
                id,
                username,
                profileImageUrl
            }, 
                process.env.SECRET_KEY
            );
            return res.status(200).json({
                id,
                username,
                profileImageUrl,
                token
            })
        }else{
            return next({
                status: 400,
                message: "Invalid Email/Password"
            });
        }
    }catch(err){
        return next({
            status: 400,
            message: "Invalid Email/Password"
        });
    }
};

exports.signup = async function(req, res, next) {
    try{
        //create a user
        let user = await db.User.create(req.body);
        let { id, username, profileImageUrl } = user;
        let token = jwt.sign({
            id,
            username,
            profileImageUrl
        }, 
            process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        });
        // then create a token (signing a token)
            //process.env.SECRET_KEY
    }catch(err){
        //If validation fails!
        if(err.code === 11000){
            err.message = "Sorry that username/e-mail is already taken.";
        }
        return next({
            status: 400,
            message: err.message
        })
    }
};
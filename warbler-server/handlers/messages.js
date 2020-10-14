const db = require('../models/index');

exports.createMessage = async function(req, res, next){
    try{
        let message = db.Message.create({
            text: req.body.text,
            user: req.params.id
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.messages.push(message.id);
        await foundUser.save();
        let foundMeassage = await db.Message.findById(message._id).populate('user',{
            username: true,
            profileImageUrl: true
        });
        return res.status(200).json(foundMeassage);
    } catch(err){
        return next(err);
    }
}

exports.getMessage = async function(req, res, next){
    try{

    } catch(err){
        
    }
}

exports.deleteMessage = async function(req, res, next){
    try{

    } catch(err){
        
    }
}
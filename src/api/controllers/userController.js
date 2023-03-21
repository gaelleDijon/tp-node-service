const userModel = require('../models/userModel');

exports.register = (req, res) => {
    userModel.save((err, user) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(201);
            res.json({message: `user created : ${user.lastname}`})
        }
    })
}

exports.deleteUser = (req, res) => {
    userModel.delete(req.params.id, (err, user))
}
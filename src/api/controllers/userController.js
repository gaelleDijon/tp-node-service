const userModel = require('../models/userModel');

exports.createUser = (req, res) => {
    userModel.create((err, user) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(201);
            res.json(user);
        }
    });
}
exports.getUser = (req, res) => {
    userModel.findById(req.params.id, (err, user) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(201);
            res.json(user);
        }
    });
}

exports.getUsersByStatus = (req, res) => {
    userModel.findByStatus((err, users) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(201);
            res.json(users);
        }
    });
}

exports.getAllUsers = (req, res) => {
    userModel.all((err, users) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(201);
            res.json(users);
        }
    });
}

exports.deleteUser = (req, res) => {
    userModel.delete(req.params.id, (err, del) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(201);
            res.json({message: `user anonymized: ${userModel.id}`, del});
        }
    });
}
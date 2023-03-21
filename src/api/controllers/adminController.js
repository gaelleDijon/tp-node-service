const Admin = require('../models/AdminModel');
//const jsonwebtoken = require('');//todo

exports.register = (req, res) => {
    const admin = new Admin(req.body);
    admin.save((err, admin) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message : err});
        }else{
            res.status(201);
            res.json({message: `Admin created` });
        }
    })
}

exports.login = (req, res) => {
    Admin.findOne({id : req.body.id}, (err, user) => {
        if(err || admin==null){
            res.status(401);
            console.log(err);
            res.json({message:err});
        }else{
            //todo
        }
    })
}
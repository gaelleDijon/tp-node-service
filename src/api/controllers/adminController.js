const Admin = require('../models/AdminModel');
//const jsonwebtoken = require('');//todo

exports.register = (req, res) => {
    Admin.create(req.body.pincode, (err, admin) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message : err});
        }else{
            res.status(201);
            res.json({message: `Admin created` }, admin);
        }
    })
}

exports.login = (req, res) => {
    Admin.getAdmin(req.body.pincode, (err, adm) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message:err});
        }else{
            res.status(201);
            res.json(adm);
        }
    })
}
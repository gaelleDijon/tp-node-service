const Admin = require('../models/AdminModel');
const jsonwebtoken = require('jsonwebtoken');

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
        if(err || adm == null){
            res.status(401);
            console.log(err);
            res.json({message:err});
        }else{
            if(adm.pincode === req.body.pincode){
                let admDate = {
                    id: adm.id
                };
                jsonwebtoken.sign(admDate, process.env.JWT_TOKEN, {expiresIn : "30days"}, (err, token) => {
                    if(err){
                        res.status(401);
                        console.log(err);
                        res.json({message: err});
                    }else{
                        res.status(200);
                        res.json({message: "login success", token: token});
                    }
                })
            }else{
                res.status(401);
                res.json({message:"login failed"});
            }
        }
    })
}
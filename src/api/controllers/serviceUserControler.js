const suModel = require('../models/serviceUserModel');

exports.createServiceUser = (req, res) => {
    suModel.create(req.body.id_service, req.body.id_user, (err, serv) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(200);
            res.json(serv);
        }
    })
    
}

exports.getServiceUser = (req, res) => {
    suModel.getServiceUser(req.param.id, (err, serv) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(200);
            res.json(serv);
        }
    })
}

exports.allServiceUsers = (req, res) => {
    suModel.all((err, serv) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(200);
            res.json(serv);
        }
    })
}

exports.updateServiceUser = (req, res) => {
    suModel.update(req.body.id_service, req.body.id_user, (err, serv) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(200);
            res.json(serv);
        }
    })
}

exports.deleteServiceUser = (req, res) => {
    suModel.delete(req.body.id_service, req.body.id_user, (err, serv) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(200);
            res.json(serv);
        }
    })
}
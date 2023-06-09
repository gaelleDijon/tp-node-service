const serviceModel = require('../models/serviceModel');

exports.createService = (req, res) => {
    serviceModel.create(req.body.shiftType, 1, (err, serv) =>{
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

exports.getService = (req, res) => {
    serviceModel.getService(req.param.id, (err, serv) =>{
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

exports.allServices = (req, res) => {
    serviceModel.all(req.body.shiftType, 1, (err, serv) =>{
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

exports.updateService = (req, res) => {
    serviceModel.update(req.param.id, req.body.shiftClosed, (err, serv) =>{
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

exports.deleteService = (req, res) => {
    serviceModel.delete(req.param.id, (err, resp) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(200);
            res.json(resp);
        }
    })
}